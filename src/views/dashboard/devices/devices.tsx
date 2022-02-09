import React, { useEffect } from "react";
import {
  Row,
  Col,
  Button,
  message,
  Card,
  Space,
  Spin,
  Tag,
  Tooltip,
  Modal,
} from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  EyeOutlined,
  IdcardOutlined,
  SettingOutlined,
  WifiOutlined,
} from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import {
  getAllUsers,
  getDeviceByIdAndUser,
  getLoguedUserInfo,
  getUserDevices,
} from "../../../services/privateServices";
import { USER_DATA, USER_ROLE } from "../../../types/auth.types";
import RegisterDeviceCard from "./register";
import hydroSaverRender from "../../../assets/images/hydrosaver.render.jpg";
import { MESSAGE_TIMER } from "../../../utils/constant";
const { Meta } = Card;

const DevicesList = (): JSX.Element => {
  const history = useHistory();
  const [data, setData] = React.useState({} as any);
  const [allUserData, setAllUserData] = React.useState({} as USER_DATA[]);
  const [meInfo, setMeInfo] = React.useState({} as USER_DATA);

  const [confirmLoading, setConfirmLoading] = React.useState(true);
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  useEffect(() => {
    try {
      getMeInfo();
    } catch (error) {
      console.log(error);
      message.error(
        "Hubo un problema en obtener su información",
        MESSAGE_TIMER
      );
    }
  }, []);

  async function getMeInfo() {
    setConfirmLoading(true);
    try {
      const meInfo = await getLoguedUserInfo();
      console.log("devices> ", meInfo);
      if (meInfo.status === 200) {
        if (meInfo.data.role.id === USER_ROLE.ADMIN) {
          console.log("ADMIN");
          const allDeviceData = await getDeviceByIdAndUser();
          console.log(allDeviceData);
          allDeviceData.status === 200
            ? setData(allDeviceData.data.items)
            : message.error("Hubo un problema en obtener su información");
          console.log(data);
          setConfirmLoading(false);
        } else {
          console.log("CLIENT");
          const deviceData = await getUserDevices();
          deviceData.status === 200
            ? setData(deviceData.data)
            : message.error("Hubo un problema en obtener su información");
          console.log(deviceData);
          setConfirmLoading(false);
        }
      } else {
        message.error("Hubo un problema en obtener su información");
        setConfirmLoading(false);
      }
    } catch (error) {
      message.error("Hubo un problema en obtener su información");
      setConfirmLoading(false);
    }
  }

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Row>
        <Col>
          <Button
            style={{ marginBottom: "20px" }}
            icon={<SettingOutlined />}
            onClick={showModal}
            //onClick={() => history.push('/dashboard/MyDevices/RegisterDevice')}
          >
            Registrar Dispositivo
          </Button>
        </Col>
      </Row>

      <Card
        bordered={true}
        type="inner"
        title="Dispositivos:"
        loading={confirmLoading}
      >
        <Row gutter={[16, 24]}>
          {data.length > 0 &&
            data.map((device: any, index: number) => (
              <Col lg={8} md={12} xs={24} key={index}>
                <Card
                  style={{ width: 300 }}
                  cover={<img alt="HydroSaver-Render" src={hydroSaverRender} />}
                  actions={[
                    /* <SettingOutlined key="setting" />,
                  <EditOutlined key="edit" />, */
                    <Tooltip key="tooltipData" title="Ver Data">
                      <EyeOutlined
                        key="ver"
                        onClick={() =>
                          history.push(
                            `/dashboard/MyDevices/me/${device.uniqueId}`
                          )
                        }
                      />
                    </Tooltip>,
                  ]}
                >
                  <Meta
                    title={
                      <Tooltip title="Ubicación" placement="top">
                        <Tag color="#2db7f5">{device.displayName}</Tag>
                      </Tooltip>
                    }
                    description={
                      <div>
                        <Tooltip title="Dispositivo" placement="right">
                          <Tag icon={<WifiOutlined />} color="#87d068">
                            {device.name}
                          </Tag>
                        </Tooltip>
                        <Tooltip title="ID" placement="top">
                          <Tag color="blue">{device.uniqueId}</Tag>
                        </Tooltip>
                      </div>
                    }
                  />
                </Card>
              </Col>
            ))}
        </Row>
      </Card>
      <Modal
        title="Registro de Dispositivo"
        visible={isModalVisible}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Cancelar
          </Button>,
          <Button
            loading={confirmLoading}
            form="registerDevice"
            key="submit"
            type="primary"
            htmlType="submit"
          >
            Registrar
          </Button>,
        ]}
      >
        <RegisterDeviceCard />
      </Modal>
    </>
  );
};

export default DevicesList;
