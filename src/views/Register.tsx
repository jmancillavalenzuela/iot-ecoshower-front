import { Button, Checkbox, Col, Form, Input, Row, Select } from "antd";
import Title from "antd/lib/typography/Title";
import { Link } from "react-router-dom";
import Logo from "../../src/assets/logo/ecoshower.png";
import { hasNumber } from "../utils/validator";

export default function Register() {
  const { Option } = Select;

  const onFinish = (values: any) => {
    console.log('Success:', values);

  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Row
      style={{
        width: "100%",
        height: "100%",
        position: "fixed",
      }}
    >
      <Col xs={0} md={0} lg={8} className="left-image-register" />
      <Col xs={24} md={24} lg={14}>
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
                    Registro
                  </Title>
                  <Form.Item name="fullName" style={{ marginBottom: 14 }} rules={[
                    {
                      required: true,
                      message: 'Porfavor ingrese su Nombre Completo',
                    },
                    {
                      min: 3,
                      message: 'El Nombre no es válido',
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (value && hasNumber(value)) {
                          return Promise.reject(new Error("El nombre no puede contener números."))
                        } else {
                          console.log(value)
                          return Promise.resolve();
                        }
                      }
                    }),
                  ]}>
                    <Input placeholder="Nombre Completo *" />
                  </Form.Item>
                  <Form.Item name="email" style={{ marginBottom: 14 }} rules={[
                    {
                      type: 'email',
                      message: 'El E-mail ingresado no es válido.',
                    },
                    {
                      required: true,
                      message: 'Porfavor ingrese su E-mail.',
                    }
                  ]}>
                    <Input placeholder="Email *" />
                  </Form.Item>
                  <Form.Item name="address" style={{ marginBottom: 14 }}>
                    <Input placeholder="Dirección/Ciudad/Región" />
                  </Form.Item>
                  <Form.Item name="phone" style={{ marginBottom: 14 }} rules={[
                    {
                      required: true,
                      type: "number",
                      message: 'Porfavor ingrese su teléfono.',
                    },
                    {
                      min: 8,
                      max: 8,
                      message: 'El largo de su teléfono no es válido.',
                    },
                  ]}>
                    <Input
                      addonBefore={
                        <Select defaultValue="+56 9">
                          <Option value="+56 9">+56 9</Option>
                        </Select>
                      }
                      placeholder="Teléfono *"
                    />
                  </Form.Item>
                  <Form.Item name="password" style={{ marginBottom: 14 }} rules={[
                    {
                      required: true,
                      message: 'Porfavor ingrese su contraseña.',
                    },
                    {
                      min: 6,
                      message: 'La contraseña debe tener almenos 6 carácteres.',
                    },
                    {
                      max: 10,
                      message: 'La contraseña debe tener menos de 10 carácteres.',
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (value && !hasNumber(value)) {
                          return Promise.reject(new Error("La contraseña debe tener al menos un número."))
                        } else {
                          console.log(value)
                          return Promise.resolve();
                        }
                      }
                    }),
                  ]}>
                    <Input.Password placeholder="Contraseña *" />
                  </Form.Item>
                  <Form.Item name="confirmPassword" style={{ marginBottom: 14 }} rules={[
                    {
                      required: true,
                      message: 'Porfavor confirme su contraseña.',
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(new Error('Las contraseñas ingresadas no son iguales.'));
                      },
                    }),
                  ]}
                  >
                    <Input.Password placeholder="Confirmar Contraseña *" />
                  </Form.Item>
                  <Form.Item name="remember" valuePropName="checked" style={{ marginBottom: 14 }} rules={[
                    {
                      validator: (_, value) =>
                        value
                          ? Promise.resolve()
                          : Promise.reject(
                            new Error(
                              'Para completar su registro, es necesario aceptar los Términos y Condiciones'
                            )
                          )
                    }
                  ]}>
                    <Checkbox>
                      Términos y Condiciones
                    </Checkbox>
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
                          Registrarme
                        </Button>
                      </Col>
                      <Col xs={12} style={{ textAlign: "center", paddingTop: 4 }}>
                        <Link
                          to="/"
                        >
                          Ya tengo una cuenta
                        </Link>
                      </Col>
                    </Row>
                  </Form.Item>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col >
    </Row >
  );
}
