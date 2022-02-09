import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Button,
  message,
  Card,
  ConfigProvider,
  DatePicker,
  Table,
  Form,
} from "antd";
import moment from "moment";
import "moment/locale/es";
import locale from "antd/lib/locale/es_ES";
import { useHistory, useParams } from "react-router-dom";
import { ReloadOutlined } from "@ant-design/icons";
import { getTelemetryByUserDevice } from "../../../services/privateServices";
import { TELEMETRY_DEVICE_DATA } from "../../../types/auth.types";

const { Meta } = Card;
export enum DeviceState {
  Recirculacion,
  Baño,
  Apagado,
}
const DeviceInfo = (): JSX.Element => {
  const { RangePicker } = DatePicker;

  const history = useHistory();
  const [data, setData] = useState({} as any);
  const [confirmLoading, setConfirmLoading] = React.useState(true);

  const [dateRange, setDateRange] = useState([
    moment().startOf("month"),
    moment().add(1, "days"),
  ]);
  const dateFormat = "DD/MM/YYYY";
  const dateBackendFormat = "YYYY-MM-DD";
  const param = useParams() as any;

  useEffect(() => {
    try {
      getTelemetryInfo();
    } catch (error) {
      console.log(error);
      message.error("Hubo un problema en actualizar su información");
    }
  }, [dateRange]);
  //FluxOutPump, TempOutShower

  async function getTelemetryInfo() {
    setConfirmLoading(true);
    const startDate = dateRange[0].format(dateBackendFormat);
    const endDate = dateRange[1].format(dateBackendFormat);
    // PROMEDIO
    let telemetryData = await getTelemetryByUserDevice(
      startDate,
      endDate,
      param.id
    );
    if (telemetryData.status == 401) {
      telemetryData = await getTelemetryByUserDevice(
        startDate,
        endDate,
        param.id
      );
      setData([]);
    }

    telemetryData.status === 200
      ? telemetryData.data
        ? setData(telemetryData.data)
        : setData([])
      : message.error("Hubo un problema en obtener su información");
    setConfirmLoading(false);
  }

  const columns = [
    {
      title: "Temperatura de Salida",
      dataIndex: "temperaturaSalida",
      align: "center" as const,
      key: "temperaturaSalida",
    } /* 
    {
      title: 'Litros Utilizados',
      dataIndex: 'flujoSalida',
      align: 'center' as const,
      key: 'flujoSalida'
    }, */,
    {
      title: "Litros Ahorrados",
      dataIndex: "flujoAhorro",
      align: "center" as const,
      key: "flujoAhorro",
    },
    {
      title: "Estado",
      dataIndex: "estado",
      align: "center" as const,
      key: "estado",
    },
    {
      title: "Hora/Fecha",
      dataIndex: "horaFecha",
      align: "center" as const,
      key: "horaFecha",
    },
  ];

  const dataSource =
    data.length > 1 &&
    data.map((telemetry: TELEMETRY_DEVICE_DATA, index: number) => {
      return {
        flujoAhorro: telemetry.fluxHotPump,
        flujoSalida: telemetry.fluxOutPump,
        temperaturaSalida: Math.round(telemetry.tempOutShower * 100) / 100,
        estado: DeviceState[telemetry.stateShower],
        horaFecha: moment(telemetry.createdAt).format("HH:mm:ss DD/MM/YYYY"),
        key: index,
      };
    });

  return (
    <Card bordered={true} type="inner" title="Datos:">
      <Row gutter={20}>
        <Col span={16}>
          <Form
            id="deviceInfo"
            name="deviceInfo"
            /*           initialValues={{
            prefix: '56',
            countryStateCity: ['chile', 'IIRegion', 'antofagasta'],
            acceptTC: true
          }} */
          >
            <Form.Item label={"Rango de Fecha:"} name="dataRange">
              <ConfigProvider locale={locale}>
                <RangePicker
                  allowClear={false}
                  value={[dateRange[0], dateRange[1]]}
                  format={dateFormat}
                  className="w-100"
                  onChange={(rangeData: any) => {
                    setDateRange(rangeData);
                  }}
                />
              </ConfigProvider>
            </Form.Item>
          </Form>
        </Col>
        <Col span={8}>
          <Button
            icon={<ReloadOutlined />}
            type={"primary"}
            loading={confirmLoading}
            onClick={getTelemetryInfo}
          >
            Refrescar
          </Button>
        </Col>
        {/* <Col span={8}>
        <Statistic
          title="Ahorro"
          value={data !== undefined ? data.flux_hot_pump : ''}
          prefix={<LoadingOutlined />}
          precision={2}
          suffix=" Litros"
        />
      </Col>
      <Col span={8}>
        <Statistic
          title="Uso"
          value={data !== undefined ? data.flux_out_pump : ''}
          prefix={<LoadingOutlined />}
          precision={2}
          suffix=" Litros"
        />
      </Col> */}
        <Col span={24}>
          <Table
            bordered
            dataSource={dataSource}
            columns={columns}
            loading={confirmLoading}
          />
        </Col>
      </Row>
    </Card>
  );
};
export default DeviceInfo;
