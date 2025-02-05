import { Col, Menu, Row } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import { Link } from "react-router-dom";
import Logo from "../../src/assets/logo/ecoshower.png";

type Props = {
  children: JSX.Element;
};

export default function DashboardLayout(props: Props) {
  return (
    <>
      <div className="dashboard-less">
        <Row
          style={{
            width: "100%",
            height: "100%",
            margin: "auto",
          }}
        >
          <Col xs={0} md={0} lg={15} style={{ margin: "5px auto" }}>
            <Row>
              <Col xs={10} style={{ textAlign: "center" }}>
                <img
                  style={{ paddingTop: 15 }}
                  src={Logo}
                  alt="logo"
                  className="global__logo"
                />
              </Col>
              <Col xs={14} style={{ margin: "5px auto" }}>
                <Menu onClick={() => {}} mode="horizontal">
                  <Menu.Item key="perfil">
                    <Link to="/dashboard/mi-perfil">Perfil</Link>
                  </Menu.Item>
                  <SubMenu key="Dashboard" title="Dashboard">
                    <Menu.ItemGroup>
                      <Menu.Item key="Dashboard:1">
                        <Link to="/dashboard/cantidad-duchas">
                          Cantidad de Duchas
                        </Link>
                      </Menu.Item>
                      <Menu.Item key="Dashboard:2">
                        <Link to="/dashboard/temperatura">
                          Gráfico de Temperatura
                        </Link>
                      </Menu.Item>
                      <Menu.Item key="Dashboard:3">
                        <Link to="/dashboard/cantidad-dispositivos">
                          Cantidad de Dispositivos Registrados
                        </Link>
                      </Menu.Item>
                      <Menu.Item key="Dashboard:4">
                        <Link to="/dashboard/agua-ahorrada">
                          Grafico de Agua Ahorrada
                        </Link>
                      </Menu.Item>
                      <Menu.Item key="Dashboard:5">
                        <Link to="/dashboard/agua-utilizada">
                          Grafico de Agua Utilizada
                        </Link>
                      </Menu.Item>
                    </Menu.ItemGroup>
                  </SubMenu>
                  <SubMenu key="Dispositivos" title="Dispositivos"></SubMenu>
                  <Menu.Item key="logout">Logout</Menu.Item>
                </Menu>
              </Col>
              <Col xs={24}>{props.children}</Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
}
