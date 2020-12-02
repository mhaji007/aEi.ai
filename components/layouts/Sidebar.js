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
import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import classnames from "classnames";

function Sidebar({ items }) {
  return (
    <>
      <section class="app">
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
                    <Link href="./imporession">
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
      </section>
    </>
  );
}
export default Sidebar;
