import { Button, Card, Col, Form, Input, Row } from "antd";

export default function PerfilComponent() {
  const [formPerfil] = Form.useForm();

  return (
    <>
      <Card
        title={"Información Personal Usuario"}
        style={{ width: "100%", marginTop: 50 }}
        extra={
          <Button type="primary" htmlType="submit" block>
            Guardar
          </Button>
        }
      >
        <Form
          form={formPerfil}
          name="form-perfil"
          onFinish={() => {}}
          onFinishFailed={() => {}}
          layout="vertical"
        >
          <Row>
            <Col xs={12} style={{ padding: 10 }}>
              <Form.Item
                label={"Correo"}
                name={"correo"}
                rules={[
                  { required: true, message: "Por favor ingrese un correo" },
                ]}
              >
                <Input
                  style={{ width: "100%" }}
                  placeholder="Ingrese el correo"
                />
              </Form.Item>
            </Col>
            <Col xs={12} style={{ padding: 10 }}>
              <Form.Item
                label={"Usuario"}
                name={"usuario"}
                rules={[
                  { required: true, message: "Por favor ingrese un usuario" },
                ]}
              >
                <Input
                  style={{ width: "100%" }}
                  placeholder="Ingrese el usuario"
                />
              </Form.Item>
            </Col>
            <Col xs={12} style={{ padding: 10 }}>
              <Form.Item
                label={"Direccion"}
                name={"direccion"}
                rules={[
                  { required: true, message: "Por favor ingrese un direccion" },
                ]}
              >
                <Input
                  style={{ width: "100%" }}
                  placeholder="Ingrese una direccion"
                />
              </Form.Item>
            </Col>
            <Col xs={12} style={{ padding: 10 }}>
              <Form.Item
                label={"Telefono"}
                name={"telefono"}
                rules={[
                  { required: true, message: "Por favor ingrese un telefono" },
                ]}
              >
                <Input
                  style={{ width: "100%" }}
                  placeholder="Ingrese una telefono"
                />
              </Form.Item>
            </Col>
            <Col xs={12} style={{ padding: 10 }}>
              <Form.Item
                label={"Nombre"}
                name={"nombre"}
                rules={[
                  { required: true, message: "Por favor ingrese un nombre" },
                ]}
              >
                <Input
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
