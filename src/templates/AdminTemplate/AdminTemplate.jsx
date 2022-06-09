import {
  UserOutlined,
  ProfileOutlined,
  AlignLeftOutlined,
  PlusCircleOutlined,
  CodeSandboxOutlined,
} from "@ant-design/icons";
import { Route } from "react-router";
import { Fragment, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../../App";
import { Layout, Menu } from "antd";
import _ from "lodash";
import "./AdminTemplate.scss";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export const AdminTemplate = (props) => {
  const { Component, ...restProps } = props; // path, exact, Component

  const dispatch = useDispatch();

  useEffect(() => {

  }, []);

  // Chuyển hướng về đầu trang khi trở lại trang trước đó
  useEffect(() => {
    window.scrollTo(0, 0);
  });


  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        //props.location, props.history, props.match
        return (
          <div id="adminTemplate" className="position-relative">

            <Fragment>
              <Layout style={{ minHeight: "100vh" }}>
                <Sider>
                  <div className="logo-homepage">
                    <NavLink to="/" title="Back to HomePage">
                      <h1 style={{opacity:"0"}}>
                        friverr
                        <i className="fa fa-circle text-success"></i>
                      </h1>
                    </NavLink>
                  </div>

                  <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">

                    <SubMenu
                      key="1"
                      icon={<UserOutlined />}
                      title="ADMIN"
                      className="font-weight-bold"
                    >
                      <Menu.Item key="3" icon={<AlignLeftOutlined />}>
                        <NavLink
                          to="/"
                          style={{ fontWeight: "normal" }}
                        >
                          List account
                        </NavLink>
                      </Menu.Item>
                      <Menu.Item key="4" icon={<AlignLeftOutlined />}>
                        <NavLink
                          to="/admin/listposts"
                          style={{ fontWeight: "normal" }}
                        >
                          List posts
                        </NavLink>
                      </Menu.Item>
                    </SubMenu>

                  </Menu>
                </Sider>

                <Layout className="site-layout">
                  <Header       >
 
                  </Header>
                  <Content style={{ margin: 0 }}>
                    <div
                      className=""
                      style={{
                        paddingTop: 50,
                        paddingLeft: 50,
                        paddingRight: 50,
                      }}
                    >
                      <Component {...propsRoute} />
                    </div>
                  </Content>
                  <Footer
                    style={{ textAlign: "center" }}
                    className=""
                  >
                    {" "}
                    <div className="text-right mr-5">
                      {" "}
                      ©2022 All rights reserved
                    </div>
                  </Footer>
                </Layout>
              </Layout>
            </Fragment>
            <a className="back-to-top" href="#" title="Back to top">
              <i className="fa fa-angle-up"></i>
            </a>
          </div>
        );
      }}
    />
  );
};
