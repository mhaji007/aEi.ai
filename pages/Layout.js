import React from "react";
// import { Layout, Menu } from 'antd';
// import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, Breadcrumb } from "antd";
import {
  DatabaseOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
// import Link from "next/link";
// import { Link } from "react-router-dom";

function TestLayout() {
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
        </Menu> */}
      </Header>
      <Content>
        <Layout className="site-layout-background">
          <Sider
            className="site-layout-background"
            width={255}
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%" }}
            >
              <Menu.Item key="1">
                <i
                  className="material-icons"
                  style={{ verticalAlign: "middle" }}
                >
                  description
                </i>{" "}
                Introduction
              </Menu.Item>
              <Menu.Item key="2">
                <i
                  className="material-icons"
                  style={{ verticalAlign: "middle" }}
                >
                  layers
                </i>{" "}
                Architecture
              </Menu.Item>
              <SubMenu
                key="sub1"
                icon={<i class="fa fa-sitemap"></i>}
                title=" Data Structures"
              >
                <Menu.Item key="2">
                  <a>PAD</a>
                </Menu.Item>
                <Menu.Item key="3">
                  <a>Big Five</a>
                </Menu.Item>
                <Menu.Item key="4">
                  <a>Emotion</a>
                </Menu.Item>
                <Menu.Item key="4">
                  <a>Mood</a>
                </Menu.Item>
                <Menu.Item key="4">
                  <a>Personality</a>
                </Menu.Item>
                <Menu.Item key="4">
                  <a>Satisfaction</a>
                </Menu.Item>
                <Menu.Item key="4">
                  <a>Nonverbal Behavior</a>
                </Menu.Item>
                <Menu.Item key="4">
                  <a>Affect</a>
                </Menu.Item>
                <Menu.Item key="4">
                  <a>Empathy</a>
                </Menu.Item>
                <Menu.Item key="4">
                  <a>Rapport</a>
                </Menu.Item>
                <Menu.Item key="4">
                  <a>Impression</a>
                </Menu.Item>
                <Menu.Item key="4">
                  <a>Social Perception</a>
                </Menu.Item>
                <Menu.Item key="4">
                  <a>User</a>
                </Menu.Item>
                <Menu.Item key="4">
                  <a>Interaction</a>
                </Menu.Item>
              </SubMenu>
              <Menu.Item key="3">
                <i
                  className="material-icons"
                  style={{ verticalAlign: "middle" }}
                >
                  report_problem
                </i>{" "}
                Error Handling
              </Menu.Item>
              <SubMenu
                key="sub2"
                icon={
                  <i class="material-icons" style={{ verticalAlign: "middle" }}>
                    http
                  </i>
                }
                title=" API"
              >
                <Menu.Item key="4">
                  <a> Register New Account</a>
                </Menu.Item>
                <Menu.Item key="4">
                  <a> Authenticate Client</a>
                </Menu.Item>
                <br />
                <Menu.Item key="4">
                  <a> Create New User</a>
                </Menu.Item>
                <Menu.Item key="4">
                  <a> Get Users</a>
                </Menu.Item>
                <Menu.Item key="4">
                  <a> Get Emotion</a>
                </Menu.Item>
                <Menu.Item key="4">
                  <a> Get Mood</a>
                </Menu.Item>
                <Menu.Item key="4">
                  <a> Get Personality</a>
                </Menu.Item>
                <Menu.Item key="4">
                  <a> Get Satisfaction</a>
                </Menu.Item>
                <Menu.Item key="4">
                  <a> Get Empathy</a>
                </Menu.Item>
                <Menu.Item key="4">
                  <a> Get Social Perception</a>
                </Menu.Item>
                <br />
                <Menu.Item key="4">
                  <a> Create New Interaction</a>
                </Menu.Item>
                <Menu.Item key="4">
                  <a> Get Interactions</a>
                </Menu.Item>
                <Menu.Item key="4">
                  <a> Add User to Interaction</a>
                </Menu.Item>
                <Menu.Item key="4">
                  <a> Remove User from Interaction</a>
                </Menu.Item>
                <br />
                <Menu.Item key="4">
                  <a> Send Text</a>
                </Menu.Item>
                <Menu.Item key="4">
                  <a> Send Image</a>
                </Menu.Item>
                <Menu.Item key="4">
                  <a> Analyze Multiple Inputs</a>
                </Menu.Item>
                <br />
                <Menu.Item key="4">
                  <a> Paid Queries</a>
                </Menu.Item>
                <Menu.Item key="4">
                  <a> Endpoint Queries</a>
                </Menu.Item>
                <Menu.Item key="4">
                  <a> Free Queries</a>
                </Menu.Item>
                <Menu.Item key="4">
                  <a> Remaining Free Queries</a>
                </Menu.Item>
                <Menu.Item key="4">
                  <a> Update Account</a>
                </Menu.Item>
              </SubMenu>
              <Menu.Item key="4">
                <i
                  className="material-icons"
                  style={{ verticalAlign: "middle" }}
                >
                  call_split
                </i>{" "}
                Versioning
              </Menu.Item>
              <SubMenu
                key="sub3"
                icon={<i class="fa fa-code"></i>}
                title=" Sample Code"
              >
                <Menu.Item key="4">
                  <a> Java</a>
                </Menu.Item>
                <Menu.Item key="4">
                  <a> Python</a>
                </Menu.Item>
                <Menu.Item key="4">
                  <a> CURL</a>
                </Menu.Item>
              </SubMenu>
              <Menu.Item key="4">
                <i
                  className="material-icons"
                  style={{ verticalAlign: "middle" }}
                >
                  live_help
                </i>{" "}
                Help
              </Menu.Item>
            </Menu>
          </Sider>
          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            Content
          </Content>
        </Layout>
      </Content>
      {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
    </Layout>
  );
}

export default TestLayout;
