import { Button, Col, Form, Input, Row } from "antd";
import Title from "antd/lib/typography/Title";
import { Link } from "react-router-dom";
import Logo from "../../src/assets/logo/ecoshower.png";

export default function Recovery() {
  return (
    <>
      <Row>
        <Col xs={12}>
          <Row
            style={{
              height: "100%",
              width: "100%",
              position: "fixed",
            }}
            className="dynamic-bg"
          >
            <Col xs={24} style={{ margin: "auto" }}>
              <div style={{ textAlign: "center", marginBottom: 50 }}>
                <img
                  style={{ margin: "auto", width: "20em", textAlign: "center" }}
                  src={Logo}
                  alt="logo"
                />
              </div>
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
                  Restablecer Contraseña
                </Title>
                <Form.Item name="email" style={{ marginBottom: 0 }}>
                  <Input placeholder="Email" />
                </Form.Item>
                <Title
                  style={{ textAlign: "center", fontSize: 15, paddingTop: 5 }}
                >
                  ó{" "}
                </Title>
                <Form.Item name="contrasena" style={{ marginBottom: 30 }}>
                  <Input.Password placeholder="Contraseña" />
                </Form.Item>
                <Form.Item>
                  <Row>
                    <Col xs={12}>
                      <Button
                        style={{ backgroundColor: "#9BC235", border: "none" }}
                        type="primary"
                        htmlType="submit"
                        block
                      >
                        Recuperar contraseña
                      </Button>
                    </Col>
                    <Col xs={12} style={{ textAlign: "center", paddingTop: 4 }}>
                      <Link to="/">Ya tengo cuenta</Link>
                    </Col>
                  </Row>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
