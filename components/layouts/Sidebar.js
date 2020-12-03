import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import Link from "next/link";
// import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";
// import "react-pro-sidebar/dist/css/styles.css";
import classnames from "classnames";

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

function Sidebar({ items }) {
  return (
    <>
      {/* =================================================== */}

      <Layout>
        <Content>
          <Layout className="site-layout-background" style={{ height: "100%" }}>
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
                defaultOpenKeys={[]}
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
                  <Link href="./architecture">
                    <a> Architecture</a>
                  </Link>
                </Menu.Item>
                <SubMenu
                  key="sub1"
                  icon={<i class="fa fa-sitemap"></i>}
                  title=" Data Structures"
                >
                  <Menu.Item key="3">
                  <Link href="./PAD">
                    <a>PAD</a>
                  </Link>
                  </Menu.Item>
                  <Menu.Item key="4">
                    <a>Big Five</a>
                  </Menu.Item>
                  <Menu.Item key="5">
                    <a>Emotion</a>
                  </Menu.Item>
                  <Menu.Item key="6">
                    <a>Mood</a>
                  </Menu.Item>
                  <Menu.Item key="7">
                    <a>Personality</a>
                  </Menu.Item>
                  <Menu.Item key="8">
                    <a>Satisfaction</a>
                  </Menu.Item>
                  <Menu.Item key="9">
                    <a>Nonverbal Behavior</a>
                  </Menu.Item>
                  <Menu.Item key="10">
                    <a>Affect</a>
                  </Menu.Item>
                  <Menu.Item key="11">
                    <a>Empathy</a>
                  </Menu.Item>
                  <Menu.Item key="12">
                    <a>Rapport</a>
                  </Menu.Item>
                  <Menu.Item key="13">
                    <a>Impression</a>
                  </Menu.Item>
                  <Menu.Item key="14">
                    <a>Social Perception</a>
                  </Menu.Item>
                  <Menu.Item key="15">
                    <a>User</a>
                  </Menu.Item>
                  <Menu.Item key="16">
                    <a>Interaction</a>
                  </Menu.Item>
                </SubMenu>
                <Menu.Item key="17">
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
                    <i
                      class="material-icons"
                      style={{ verticalAlign: "middle" }}
                    >
                      http
                    </i>
                  }
                  title=" API"
                >
                  <Menu.Item key="18">
                    <a> Register New Account</a>
                  </Menu.Item>
                  <Menu.Item key="19">
                    <a> Authenticate Client</a>
                  </Menu.Item>
                  <br />
                  <Menu.Item key="20">
                    <a> Create New User</a>
                  </Menu.Item>
                  <Menu.Item key="21">
                    <a> Get Users</a>
                  </Menu.Item>
                  <Menu.Item key="22">
                    <a> Get Emotion</a>
                  </Menu.Item>
                  <Menu.Item key="23">
                    <a> Get Mood</a>
                  </Menu.Item>
                  <Menu.Item key="24">
                    <a> Get Personality</a>
                  </Menu.Item>
                  <Menu.Item key="25">
                    <a> Get Satisfaction</a>
                  </Menu.Item>
                  <Menu.Item key="26">
                    <a> Get Empathy</a>
                  </Menu.Item>
                  <Menu.Item key="27">
                    <a> Get Social Perception</a>
                  </Menu.Item>
                  <br />
                  <Menu.Item key="28">
                    <a> Create New Interaction</a>
                  </Menu.Item>
                  <Menu.Item key="29">
                    <a> Get Interactions</a>
                  </Menu.Item>
                  <Menu.Item key="30">
                    <a> Add User to Interaction</a>
                  </Menu.Item>
                  <Menu.Item key="31">
                    <a> Remove User from Interaction</a>
                  </Menu.Item>
                  <br />
                  <Menu.Item key="32">
                    <a> Send Text</a>
                  </Menu.Item>
                  <Menu.Item key="33">
                    <a> Send Image</a>
                  </Menu.Item>
                  <Menu.Item key="34">
                    <a> Analyze Multiple Inputs</a>
                  </Menu.Item>
                  <br />
                  <Menu.Item key="35">
                    <a> Paid Queries</a>
                  </Menu.Item>
                  <Menu.Item key="36">
                    <a> Endpoint Queries</a>
                  </Menu.Item>
                  <Menu.Item key="37">
                    <a> Free Queries</a>
                  </Menu.Item>
                  <Menu.Item key="38">
                    <a> Remaining Free Queries</a>
                  </Menu.Item>
                  <Menu.Item key="39">
                    <a> Update Account</a>
                  </Menu.Item>
                </SubMenu>
                <Menu.Item key="40">
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
                  <Menu.Item key="41">
                    <a> Java</a>
                  </Menu.Item>
                  <Menu.Item key="42">
                    <a> Python</a>
                  </Menu.Item>
                  <Menu.Item key="43">
                    <a> CURL</a>
                  </Menu.Item>
                </SubMenu>
                <Menu.Item key="44">
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
            {/* <Content style={{ padding: "0 24px", minHeight: 280 }}>
            Content
          </Content> */}
          </Layout>
        </Content>
        {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
      </Layout>

      {/* ===================================================== */}
      {/* <section class="app">
        <aside class="sidebar">
          <header>
            <img src="../../logo.png" id="logo" alt="aEi.ai" />
          </header>
          <nav class="sidebar-nav">
            <ul>
              <li>
                <Link href="./introduction">
                  <a>
                    <i class="material-icons">description</i>{" "}
                    <span>Introduction</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="./architecture">
                  <a>
                    <i class="material-icons">layers</i>{" "}
                    <span class="">Architecture</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="./">
                  <a>
                    <i class="fa fa-sitemap"></i>
                    <span class="">Data Structures</span>
                  </a>
                </Link>
                <ul class="nav-flyout">
                  <li>
                    <Link href="./PAD">
                      <a>
                        PAD
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="./big_five">
                      <a>
                        <i class="ion-ios-lightbulb-outline"></i>Big Five
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="./emotion">
                      <a>
                        <i class="ion-ios-location-outline"></i>Emotion
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="./mood">
                      <a>
                        <i class="ion-ios-locked-outline"></i>Mood
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="./personality">
                      <a>
                        <i class="ion-ios-navigate-outline"></i>Personality
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="./satisfaction">
                      <a>
                        <i class="ion-ios-navigate-outline"></i>Satisfaction
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="./nvb">
                      <a>
                        <i class="ion-ios-navigate-outline"></i>Nonverbal
                        Behavior
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="./affect">
                      <a>
                        <i class="ion-ios-navigate-outline"></i>Affect
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="./empathy">
                      <a>
                        <i class="ion-ios-navigate-outline"></i>Empathy
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="./rapport">
                      <a>
                        <i class="ion-ios-navigate-outline"></i>Rapport
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="./impression">
                      <a>
                        <i class="ion-ios-navigate-outline"></i>Impression
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="./social-perception">
                      <a>
                        <i class="ion-ios-navigate-outline"></i>Social
                        Perception
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="./user">
                      <a>
                        <i class="ion-ios-navigate-outline"></i>User
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="./interaction">
                      <a>
                        <i class="ion-ios-navigate-outline"></i>Interaction
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link href="#">
                  <a>
                    <i class="material-icons">report_problem</i>{" "}
                    <span class="">Error Handling</span>
                  </a>
                </Link>
              </li>

              <li>
                <Link href="api">
                  <a>
                    <i class="material-icons">http</i> <span class="">API</span>
                  </a>
                </Link>
                <ul class="nav-flyout">
                  <li>
                    <Link href="./register">
                      <a>
                        <i class="ion-ios-flame-outline"></i>Register New
                        Account
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <a>
                        <i class="ion-ios-flame-outline"></i>Authenticate client
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <a>
                        <i class="ion-ios-flame-outline"></i>Create New User
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <a>
                        <i class="ion-ios-flame-outline"></i>Get Users
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <a>
                        <i class="ion-ios-flame-outline"></i>Get Mood
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <a>
                        <i class="ion-ios-flame-outline"></i>Get Personality
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <a>
                        <i class="ion-ios-flame-outline"></i>Get Satisfaction
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <a>
                        <i class="ion-ios-flame-outline"></i>Get Empathy
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <a>
                        <i class="ion-ios-flame-outline"></i>Get Emotion
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <a>
                        <i class="ion-ios-flame-outline"></i>Get Social
                        Perception
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <a>
                        <i class="ion-ios-flame-outline"></i>Get New Interaction
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <a>
                        <i class="ion-ios-flame-outline"></i>Get Interactions
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <a>
                        <i class="ion-ios-flame-outline"></i>Get Add User To
                        Interaction
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <a>
                        <i class="ion-ios-flame-outline"></i>Get Remove User
                        From Interaction
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <a>
                        <i class="ion-ios-flame-outline"></i>
                        Send Text
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <a>
                        <i class="ion-ios-flame-outline"></i>
                        Send Image
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <a>
                        <i class="ion-ios-flame-outline"></i>
                        Analyze Multiple Inputs
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <a>
                        <i class="ion-ios-flame-outline"></i>
                        Paid Queries
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <a>
                        <i class="ion-ios-flame-outline"></i>
                        Endpoint Queries
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <a>
                        <i class="ion-ios-flame-outline"></i>
                        Free Queries
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <a>
                        <i class="ion-ios-flame-outline"></i>
                        Remaining Free Queries
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <a>
                        <i class="ion-ios-flame-outline"></i>
                        Update Account Status
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link href="./versioning">
                  <a>
                    <i class="material-icons">call_split</i>{" "}
                    <span class="">Versioning</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="./sample-code">
                  <a href="#">
                    <i class="fa fa-code"></i> <span class="">Sample Code</span>
                  </a>
                </Link>
                <ul class="nav-flyout">
                  <li>
                    <Link href="">
                      <a>
                        <i class="ion-ios-flame-outline"></i>Java
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <a>
                        <i class="ion-ios-flame-outline"></i>Python
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <a>
                        <i class="ion-ios-flame-outline"></i>Curl
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="./help">
                  <a href="#">
                    <i class="material-icons">live_help</i>{" "}
                    <span class="">Help</span>
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </aside>
      </section> */}
    </>
  );
}
export default Sidebar;
