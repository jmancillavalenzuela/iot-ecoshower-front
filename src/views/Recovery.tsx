import { sendPasswordResetEmail } from "@firebase/auth";
import { Button, Col, Form, Input, message, Row } from "antd";
import Title from "antd/lib/typography/Title";
import { Link } from "react-router-dom";
import Logo from "../../src/assets/logo/ecoshower.png";
import firebase from "../config/firebase";
import { RECOVERY } from "../types/auth.types";

export default function Recovery() {
  const onFinish = (form: RECOVERY) => {
    const auth = firebase.auth();

    console.log(auth);
    sendPasswordResetEmail(auth, form.email)
      .then(() => {
        console.log("password sent")
        message.success(<code>Se ha enviado un correo a su email: <b>{form.email}</b> con intrucciones para restablecer su contraseña</code>, 10);
      })
      .catch((error) => {
        message.error(<code> El email: <b>{form.email}</b> no se encuentra en nuestros registros</code>, 10);
      });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
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
              <Form.Item name="email" style={{ marginBottom: 14 }} rules={[
                {
                  type: 'email',
                  message: 'El texto ingresado no es un E-mail válido!',
                },
                {
                  required: true,
                  message: 'Porfavor ingrese su E-mail!',
                },
              ]}>
                <Input placeholder="Email *" />
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

  );
}
