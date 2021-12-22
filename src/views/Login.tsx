import { Button, Checkbox, Col, Form, Input, Row } from "antd";
import Title from "antd/lib/typography/Title";
import { Link } from "react-router-dom";
import Logo from "../../src/assets/logo/ecoshower.png";

export default function Login() {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Row
      style={{
        width: "100%",
        height: "100%",
        position: "fixed",
      }}
    >
      <Col xs={0} md={0} lg={8} className="left-image-login" />
      <Col xs={24} md={24} lg={14}>
        <Row
          style={{
            height: "100%",
          }}
        >
          <Col xs={24} style={{ margin: "auto" }}>
            <Row>
              <Col xs={24} style={{ textAlign: "center", marginBottom: 50 }}>
                <img className="logo" src={Logo} alt="logo" />
              </Col>
              <Col xs={24}>
                <Form
                  className="form-contanier"
                  layout="vertical"
                  name="login"
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                  size="middle"
                  initialValues={{ remember: true }}
                  scrollToFirstError
                >
                  <Title
                    style={{ textAlign: "center", fontSize: 17, padding: 13 }}
                  >
                    Iniciar sesión
                  </Title>
                  <Form.Item
                    name="email"
                    style={{ marginBottom: 14 }}
                    rules={[
                      {
                        type: "email",
                        message: "El E-mail ingresado no es válido.",
                      },
                      {
                        required: true,
                        message: "Porfavor ingrese su E-mail.",
                      },
                    ]}
                  >
                    <Input placeholder="Email" />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    style={{ marginBottom: 14 }}
                    rules={[
                      {
                        required: true,
                        message: "Porfavor ingrese su contraseña.",
                      },
                    ]}
                  >
                    <Input.Password placeholder="Contraseña" />
                  </Form.Item>
                  <Row>
                    <Col xs={12}>
                      <Form.Item name="remember" valuePropName="checked">
                        <Checkbox>Recordarme</Checkbox>
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12} className="txt-btn-right">
                      <Form.Item style={{ marginBottom: 14 }}>
                        <Link to="/recuperar">Olvidé mi contraseña</Link>
                      </Form.Item>
                    </Col>
                  </Row>
                  <Form.Item>
                    <Row>
                      <Col xs={24} md={12}>
                        <Button
                          style={{
                            backgroundColor: "#9BC235",
                            border: "none",
                          }}
                          type="primary"
                          htmlType="submit"
                          block
                        >
                          Iniciar sesión
                        </Button>
                      </Col>
                      <Col
                        xs={24}
                        md={0}
                        style={{ textAlign: "center", marginTop: 15 }}
                      >
                        ó
                      </Col>
                      <Col
                        xs={24}
                        md={12}
                        className="txt-btn-right"
                        style={{ paddingTop: 4 }}
                      >
                        <Link to="/registro">Registrarme</Link>
                      </Col>
                    </Row>
                  </Form.Item>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
