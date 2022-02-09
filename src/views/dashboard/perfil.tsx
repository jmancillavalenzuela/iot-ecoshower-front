import { Button, Card, Col, Form, Input, message, Row } from "antd";
import { useEffect, useState } from "react";
import { auth } from "../../firebase/config";
import { getLoguedUserInfo, updateUser } from "../../services/privateServices";
import {
  UPDATE_USER_DATA,
  USER_DATA,
  USER_FIREBASE_DATA,
} from "../../types/auth.types";
import { MESSAGE_TIMER } from "../../utils/constant";

export default function PerfilComponent() {
  const [formPerfil] = Form.useForm();
  const [data, setData] = useState({} as any);
  const [loading, setLoading] = useState(true);
  const [editUser, setEditUser] = useState(false);

  useEffect(() => {
    try {
      getUserInfo();
      console.log(data);
    } catch (error) {
      console.log(error);
      setLoading(false);
      message.error(
        "Hubo un problema en obtener su información",
        MESSAGE_TIMER
      );
    }
  }, []);

  async function getUserInfo() {
    try {
      setLoading(true);
      const userDataBack = await getLoguedUserInfo();
      const userDataFirebase = auth.currentUser;
      if (userDataFirebase != null && userDataBack.status === 200) {
        const dataInfo = userDataBack.data;
        const userData: any = {
          name: userDataFirebase.displayName,
          email: userDataFirebase.email,
          rut: dataInfo.rut,
          address: dataInfo.address,
        };
        console.log("DATA FINAL> ", userData);
        setData(userData);
      } else {
        message.error(
          "Hubo un problema en obtener su información",
          MESSAGE_TIMER
        );
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      message.error(
        "Hubo un problema en obtener su información",
        MESSAGE_TIMER
      );
    }
  }

  const handleSubmitInfo = async (values: { countryStateCity: string[] }) => {
    setLoading(true);
    console.log(values);
    const joinAddress = values.countryStateCity.join(", ");
    const data = {
      address: joinAddress,
      city: values.countryStateCity[2],
      country: values.countryStateCity[0],
      state: values.countryStateCity[1],
    } as UPDATE_USER_DATA;
    console.log(data);
    try {
      const userUpdate = await updateUser(data);
      if (userUpdate.status === 200) {
        message.success("Actualización exitosa");
      } else {
        message.error("Hubo un problema en actualizar su información");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      message.error("Hubo un problema en actualizar su información");
    }
  };
  return (
    <>
      <Card
        title={"Información Personal Usuario"}
        style={{ width: "100%", marginTop: 50 }}
        /* extra={
          <Button type="primary" htmlType="submit" block>
            {editUser ? "Guardar" : "Editar"}
          </Button>
        } */
        loading={loading}
      >
        <Form
          form={formPerfil}
          name="form-perfil"
          onFinish={() => {}}
          layout="vertical"
          initialValues={{
            displayName: data.name,
            correo: data.email,
            rut: data.rut,
            direccion: data.address,
            telefono: data.phone,
          }}
        >
          <Row>
            <Col xs={12} style={{ padding: 10 }}>
              <Form.Item
                label={"Correo"}
                name="correo"
                rules={[
                  { required: true, message: "Por favor ingrese un correo" },
                ]}
              >
                <Input
                  disabled={!editUser}
                  style={{ width: "100%" }}
                  placeholder="Ingrese el correo"
                />
              </Form.Item>
            </Col>
            <Col xs={12} style={{ padding: 10 }}>
              <Form.Item
                label={"RUT"}
                name="rut"
                rules={[
                  { required: true, message: "Por favor ingrese un rut" },
                ]}
              >
                <Input
                  disabled={true}
                  style={{ width: "100%" }}
                  placeholder="Ingrese el rut"
                />
              </Form.Item>
            </Col>
            <Col xs={12} style={{ padding: 10 }}>
              <Form.Item
                label={"Direccion"}
                name="direccion"
                rules={[
                  { required: true, message: "Por favor ingrese un direccion" },
                ]}
              >
                <Input
                  disabled={!editUser}
                  style={{ width: "100%" }}
                  placeholder="Ingrese una direccion"
                />
              </Form.Item>
            </Col>
            <Col xs={12} style={{ padding: 10 }}>
              <Form.Item
                label={"Telefono"}
                name="telefono"
                rules={[
                  { required: true, message: "Por favor ingrese un telefono" },
                ]}
              >
                <Input
                  disabled={!editUser}
                  style={{ width: "100%" }}
                  placeholder="Ingrese una telefono"
                />
              </Form.Item>
            </Col>
            <Col xs={12} style={{ padding: 10 }}>
              <Form.Item
                label="Nombre"
                name="displayName"
                rules={[
                  { required: true, message: "Por favor ingrese un nombre" },
                ]}
              >
                <Input
                  disabled={!editUser}
                  style={{ width: "100%" }}
                  placeholder="Ingrese un nombre"
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>
    </>
  );
}
