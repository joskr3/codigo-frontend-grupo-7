import React from "react";
import "antd/dist/antd.css";
import { useHistory } from "react-router-dom";
import "./NavBar.css";
import { Menu } from "antd";
import { Typography, Layout } from "antd";

const { Title } = Typography;
const { Header } = Layout;

const NavBar = () => {
  const history = useHistory();
  return (
    <>
      <Layout>
        <Header className="Header">
          <Title
            style={{ color: "white", cursor: "pointer" }}
            onClick={() => history.push("/")}
          >
            codiGo
          </Title>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1" onClick={() => history.push("/")}>
              Home
            </Menu.Item>
            <Menu.Item key="2" onClick={() => history.push("/contact")}>
              Contacto
            </Menu.Item>
            <Menu.Item key="3" onClick={() => history.push("/detail")}>
              Detalles
            </Menu.Item>
            <Menu.Item key="3" onClick={() => history.push("/create")}>
              Nuevo Blog
            </Menu.Item>
          </Menu>
        </Header>
      </Layout>
    </>
  );
};

export default NavBar;
