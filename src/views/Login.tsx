import { Button, Checkbox, Col, Form, Input, message, Row } from "antd";
import Title from "antd/lib/typography/Title";
import { Link, useHistory } from "react-router-dom";
import Logo from "../../src/assets/logo/ecoshower.png";
import { LOGIN } from "../types/auth.types";
import { useUserAuth } from "../context/UserAuthContext";
import { MESSAGE_TIMER } from "../utils/constant";

export default function Login() {
  const history = useHistory();
  const { logIn, googleSignIn } = useUserAuth();

  const onFinish = async (form: LOGIN) => {
    try {
      await logIn(form.email, form.password);
      history.push("dashboard/devices");
    } catch (err) {
      message.error(
        "Su E-mail y/o contraseña no coinciden con nuestros registros",
        MESSAGE_TIMER
      );
      console.log(err);
    }
  };

  const handleGoogleSignIn = async (form: LOGIN) => {
    try {
      await googleSignIn();
      history.push("/dashboard");
    } catch (err) {
      message.error(
        "Se ha producido un error al intentar Iniciar Sesión",
        MESSAGE_TIMER
      );
      console.log(err);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="login-less">
      <Row className="login__row">
        <Col xs={0} md={0} lg={8} className="login__left-image-login" />
        <Col xs={24} md={24} lg={14}>
          <Row
            style={{
              height: "100%",
            }}
          >
            <Col xs={24} style={{ margin: "auto" }}>
              <Row>
                <Col xs={24} style={{ textAlign: "center", marginBottom: 50 }}>
                  <img className="global__logo" src={Logo} alt="logo" />
                </Col>
                <Col xs={24}>
                  <Form
                    className="login__form"
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
                      <Col xs={24} md={12}>
                        <Form.Item
                          style={{ marginBottom: 14, textAlign: "right" }}
                        >
                          <Link to="/recovery">Olvidé mi contraseña</Link>
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
                          style={{ paddingTop: 4, textAlign: "right" }}
                        >
                          <Link to="/register">Registrarme</Link>
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
    </div>
  );
}
