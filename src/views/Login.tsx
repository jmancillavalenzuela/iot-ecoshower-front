import { Button, Col, Form, Input, Row } from "antd";
import Title from "antd/lib/typography/Title";
import { Link } from "react-router-dom";
import Logo from "../../src/assets/logo/ecoshower.png";

export default function Login() {
  return (
    <>
      <Row
        style={{
          width: "100%",
          height: "100%",
          position: "fixed",
        }}
      >
        <Col xs={0} md={0} lg={12} className="left-image-register" />
        <Col xs={24} md={24} lg={12}>
          <Row
            style={{
              height: "100%",
            }}
          >
            <Col xs={24} style={{ margin: "auto" }}>
              <Row>
                <Col xs={24} style={{ textAlign: "center", marginBottom: 50 }}>
                  <img
                    style={{
                      margin: "auto",
                      width: "20em",
                      textAlign: "center",
                    }}
                    src={Logo}
                    alt="logo"
                  />
                </Col>
                <Col xs={24}>
                  <Form
                    style={{
                      width: "35em",
                      margin: "auto",
                      paddingLeft: 55,
                      paddingRight: 55,
                      paddingTop: 30,
                      paddingBottom: 30,
                      borderRadius: 20,
                      background: "rgba(22, 152, 183, 0.14)",
                    }}
                    className="white-bg"
                    layout="vertical"
                    name="basic"
                    onFinish={() => {}}
                    onFinishFailed={() => {}}
                    autoComplete="off"
                    size="middle"
                  >
                    <Title
                      style={{ textAlign: "center", fontSize: 17, padding: 13 }}
                    >
                      Iniciar sesión
                    </Title>
                    <Form.Item name="email" style={{ marginBottom: 14 }}>
                      <Input placeholder="Email" />
                    </Form.Item>
                    <Form.Item name="contrasena" style={{ marginBottom: 14 }}>
                      <Input.Password placeholder="Contraseña" />
                    </Form.Item>
                    <Form.Item style={{ marginBottom: 14, textAlign: "left" }}>
                      <Link to="/recuperar">Olvidé mi contraseña</Link>
                    </Form.Item>
                    <Form.Item>
                      <Row>
                        <Col xs={12}>
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
                        <Col xs={12} style={{ textAlign: "center", paddingTop: 4 }}>
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
    </>
  );
}
