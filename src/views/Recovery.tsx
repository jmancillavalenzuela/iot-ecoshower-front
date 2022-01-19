import { Button, Col, Divider, Form, Input, message, Row } from "antd";
import Title from "antd/lib/typography/Title";
import { Link, useHistory } from "react-router-dom";
import Logo from "../../src/assets/logo/ecoshower.png";
import { useUserAuth } from "../context/UserAuthContext";
import { RECOVERY } from "../types/auth.types";
import { MESSAGE_TIMER } from "../utils/constant";

export default function Recovery() {
  const history = useHistory();
  const { sendPassword } = useUserAuth();

  const onFinish = async (form: RECOVERY) => {
    try {
      await sendPassword(form.email);
      message.success(
        <code>
          Se ha enviado un correo a su email: <b>{form.email}</b> con
          intrucciones para restablecer su contraseña
        </code>,
        MESSAGE_TIMER
      );
      history.push("/");
    } catch (err) {
      console.log(err)
      message.error(
        <code>
          El email: <b>{form.email}</b> no se encuentra en nuestros registros
        </code>,
        MESSAGE_TIMER
      );
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="recovery-less">
      <Row>
        <Col xs={12}>
          <Row className="recovery__row">
            <Col xs={24} style={{ margin: "auto" }}>
              <div style={{ textAlign: "center", marginBottom: 50 }}>
                <img className="logo" src={Logo} alt="logo" />
              </div>
              <Form
                className="recovery__form"
                layout="vertical"
                name="recovery"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                size="middle"
                scrollToFirstError
              >
                <Title
                  style={{ textAlign: "center", fontSize: 17, padding: 13 }}
                >
                  Restablecer Contraseña
                </Title>
                <Form.Item
                  name="email"
                  style={{ marginBottom: 14 }}
                  rules={[
                    {
                      type: "email",
                      message: "El texto ingresado no es un E-mail válido!",
                    },
                    {
                      required: true,
                      message: "Porfavor ingrese su E-mail!",
                    },
                  ]}
                >
                  <Input placeholder="Email *" />
                </Form.Item>
                <Form.Item>
                  <Row>
                    <Col xs={24} md={12}>
                      <Button
                        style={{ backgroundColor: "#9BC235", border: "none" }}
                        type="primary"
                        htmlType="submit"
                        block
                      >
                        Recuperar contraseña
                      </Button>
                    </Col>
                    <Col>
                      <Divider />
                    </Col>
                    <Col
                      xs={24}
                      md={12}
                      style={{ textAlign: "center", paddingTop: 4 }}
                    >
                      <Link to="/">Ya tengo cuenta</Link>
                    </Col>
                  </Row>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
