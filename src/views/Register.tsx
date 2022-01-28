import {
  Button,
  Cascader,
  Checkbox,
  Col,
  Divider,
  Form,
  Input,
  InputNumber,
  message,
  Modal,
  Row,
  Select,
} from "antd";
import Title from "antd/lib/typography/Title";
import { Link } from "react-router-dom";
import Logo from "../../src/assets/logo/ecoshower.png";
import { SIGN_UP_DATA } from "../types/auth.types";
import { MESSAGE_TIMER } from "../utils/constant";
import { formatRun, hasNumber, rut } from "../utils/validator";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import chileComunes from "../utils/chileComunes.json";
import { signup } from "../services/publicServices";

export default function Register() {
  const { Option } = Select;
  const [form] = Form.useForm();

  const onFinish = async (form: SIGN_UP_DATA) => {
    console.log("Success:", form);
    try {
      const data = {
        rut: form.rut,
        email: form.email,
        password: form.password,
        displayName: form.name,
        address: form.address,
        country: form.countryStateCity[0],
        state: form.countryStateCity[1],
        city: form.countryStateCity[2],
      };
      const register = await signup(data);
      console.log(register);
      message.success(
        "Su cuenta ha sido creada, por favor verifíquela haciendo clic en el enlace de activación que ha sido enviado a su correo electrónico",
        MESSAGE_TIMER
      );
    } catch (err) {
      message.error(
        "Ha ocurrido un error, por favor inténtelo de nuevo más tarde",
        MESSAGE_TIMER
      );
      console.log(err);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  const confirm = () => {
    Modal.info({
      title: "Términos y Condiciones",
      icon: <ExclamationCircleOutlined />,
      centered: true,
      maskClosable: true,
      width: 1000,
      keyboard: true,
      focusTriggerAfterClose: true,
      bodyStyle: { overflowY: "auto" },
      content: <p style={{ paddingRight: 20 }}>Terminos y condiciones</p>,
    });
  };
  return (
    <div className="register-less">
      <Row className="register__row">
        <Col xs={0} md={0} lg={8} className="register__left-image-register" />
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
                    className="register__form"
                    layout="vertical"
                    name="register"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    size="middle"
                    initialValues={{ remember: true }}
                    scrollToFirstError
                    form={form}
                  >
                    <Title
                      style={{ textAlign: "center", fontSize: 17, padding: 13 }}
                    >
                      Registro
                    </Title>
                    <Form.Item
                      name="name"
                      style={{ marginBottom: 14 }}
                      rules={[
                        {
                          required: true,
                          message: "Porfavor ingrese su Nombre Completo",
                        },
                        {
                          min: 3,
                          message: "El Nombre no es válido",
                        },
                        ({ getFieldValue }) => ({
                          validator(_, value) {
                            if (value && hasNumber(value)) {
                              return Promise.reject(
                                new Error(
                                  "El nombre no puede contener números."
                                )
                              );
                            } else {
                              return Promise.resolve();
                            }
                          },
                        }),
                      ]}
                    >
                      <Input placeholder="Nombre Completo *" />
                    </Form.Item>
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
                      <Input placeholder="Email *" />
                    </Form.Item>
                    <Form.Item
                      name="rut"
                      rules={[
                        {
                          validator(_, value) {
                            if (rut(value)) {
                              return Promise.resolve();
                            }
                            return Promise.reject(
                              new Error("El RUT ingresado No es Válido")
                            );
                          },
                        },
                      ]}
                    >
                      <Input
                        placeholder={"Rut *"}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          form.setFieldsValue({
                            rut: formatRun(e.target.value),
                          });
                        }}
                      />
                    </Form.Item>
                    <Form.Item
                      name="countryStateCity"
                      rules={[
                        {
                          required: true,
                          message: "Debe ingresar un País/Región/Comuna.",
                        },
                      ]}
                    >
                      <Cascader
                        options={chileComunes}
                        placeholder="País/Región/Comuna..."
                      />
                    </Form.Item>
                    <Form.Item name="address" style={{ marginBottom: 14 }}>
                      <Input placeholder="Dirección" />
                    </Form.Item>
                    <Form.Item
                      name="phone"
                      style={{ marginBottom: 14 }}
                      rules={[
                        {
                          required: true,
                          message: "Porfavor ingrese su teléfono.",
                        },
                        {
                          min: 8,
                          max: 8,
                          message: "El largo de su teléfono no es válido.",
                        },
                        ({ getFieldValue }) => ({
                          validator(_, value) {
                            if (value && isNaN(value)) {
                              return Promise.reject(
                                new Error(
                                  "El número ingresado no es un válido."
                                )
                              );
                            } else {
                              console.log(value);
                              return Promise.resolve();
                            }
                          },
                        }),
                      ]}
                    >
                      <Input
                        addonBefore={
                          <Select defaultValue="+56 9">
                            <Option value="+56 9">+56 9</Option>
                          </Select>
                        }
                        placeholder="Teléfono *"
                      />
                    </Form.Item>
                    <Form.Item
                      name="password"
                      style={{ marginBottom: 14 }}
                      rules={[
                        {
                          required: true,
                          message: "Porfavor ingrese su contraseña.",
                        },
                        {
                          min: 6,
                          message:
                            "La contraseña debe tener almenos 6 carácteres.",
                        },
                        {
                          max: 10,
                          message:
                            "La contraseña debe tener menos de 10 carácteres.",
                        },
                        ({ getFieldValue }) => ({
                          validator(_, value) {
                            if (value && !hasNumber(value)) {
                              return Promise.reject(
                                new Error(
                                  "La contraseña debe tener al menos un número."
                                )
                              );
                            } else {
                              console.log(value);
                              return Promise.resolve();
                            }
                          },
                        }),
                      ]}
                    >
                      <Input.Password placeholder="Contraseña *" />
                    </Form.Item>
                    <Form.Item
                      name="confirmPassword"
                      style={{ marginBottom: 14 }}
                      rules={[
                        {
                          required: true,
                          message: "Porfavor confirme su contraseña.",
                        },
                        ({ getFieldValue }) => ({
                          validator(_, value) {
                            if (!value || getFieldValue("password") === value) {
                              return Promise.resolve();
                            }
                            return Promise.reject(
                              new Error(
                                "Las contraseñas ingresadas no son iguales."
                              )
                            );
                          },
                        }),
                      ]}
                    >
                      <Input.Password placeholder="Confirmar Contraseña *" />
                    </Form.Item>
                    <Form.Item
                      name="acceptTC"
                      valuePropName="checked"
                      style={{ marginBottom: 14 }}
                      rules={[
                        {
                          validator: (_, value) =>
                            value
                              ? Promise.resolve()
                              : Promise.reject(
                                  new Error(
                                    "Para completar su registro, es necesario leer y aceptar los Términos & Condiciones"
                                  )
                                ),
                        },
                      ]}
                    >
                      <Checkbox>
                        He leído y acepto los{" "}
                        <Button
                          type="link"
                          style={{ padding: 0 }}
                          onClick={() => confirm()}
                        >
                          Términos y Condiciones
                        </Button>
                      </Checkbox>
                    </Form.Item>
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
                            Registrarme
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
                          <Link to="/">Ya tengo una cuenta</Link>
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
