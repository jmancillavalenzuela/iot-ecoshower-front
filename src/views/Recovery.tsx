import { Button, Col, Divider, Form, Input, Row } from "antd";
import Title from "antd/lib/typography/Title";
import { Link } from "react-router-dom";
import Logo from "../../src/assets/logo/ecoshower.png";

export default function Recovery() {
  const onFinish = (values: any) => {
    console.log('Success:', values);
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
              <img className="logo" src={Logo} alt="logo" />
            </div>
            <Form
              className="form-contanier"
              layout="vertical"
              name="basic"
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
                    <Divider/>
                  </Col>
                  <Col xs={24} md={12} style={{ textAlign: "center", paddingTop: 4 }}>
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
