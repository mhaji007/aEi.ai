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
        <img src="../../logo.png" id="logo" alt="aEi.ai"/>
      </header>
          <nav class="sidebar-nav">
            <ul>
              <li>
                <Link href="./introduction">
                <a >
                <i class="material-icons">description</i> <span>Introduction</span>
                </a>
                </Link>

              </li>
              <li>
                <a href="#">
                <i class="material-icons">layers</i>{" "}
                  <span class="">Architecture</span>
                </a>
              </li>
              <li>
                <a href="#">
                <i class="fa fa-sitemap"></i>
                  <span class="">Data Structures</span>
                </a>
                <ul class="nav-flyout">
                  <li>
                    <a href="#">
                      <i class="ion-ios-flame-outline"></i>PAD
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="ion-ios-lightbulb-outline"></i>Big Five
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="ion-ios-location-outline"></i>Emotion
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="ion-ios-locked-outline"></i>Mood
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="ion-ios-navigate-outline"></i>Personality
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="ion-ios-navigate-outline"></i>Satisfaction
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="ion-ios-navigate-outline"></i>Nonverbal Behavior
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="ion-ios-navigate-outline"></i>Affect
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="ion-ios-navigate-outline"></i>Empathy
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="ion-ios-navigate-outline"></i>Rapport
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="ion-ios-navigate-outline"></i>Impression
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="ion-ios-navigate-outline"></i>Social Perception
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="ion-ios-navigate-outline"></i>User
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="ion-ios-navigate-outline"></i>Interaction
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#">
                <i class="material-icons">report_problem</i>{" "}
                  <span class="">Error Handling</span>
                </a>
                <ul class="nav-flyout">
                  <li>
                    <a href="#">
                      <i class="ion-ios-flame-outline"></i>Burn
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="ion-ios-lightbulb-outline"></i>Bulbs
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="ion-ios-location-outline"></i>Where You
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="ion-ios-locked-outline"></i>On Lock
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="ion-ios-navigate-outline"></i>Ghostface
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#">
                <i class="material-icons">http</i>{" "}
                  <span class="">API</span>
                </a>
                <ul class="nav-flyout">
                  <li>
                    <a href="#">
                      <i class="ion-ios-flame-outline"></i>Burn
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="ion-ios-lightbulb-outline"></i>Bulbs
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="ion-ios-location-outline"></i>Where You
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="ion-ios-locked-outline"></i>On Lock
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="ion-ios-navigate-outline"></i>Ghostface
                    </a>
                  </li>
                </ul>
              </li>

              <li>

                <a href="#">
                <i class="material-icons">call_split</i>{" "}
                  <span class="">Versioning</span>
                </a>

              </li>
              <li>
                <a href="#">
                <i class="fa fa-code"></i>{" "}
                  <span class="">Sample Code</span>
                </a>
                <ul class="nav-flyout">
                  <li>
                    <a href="#">
                      <i class="ion-ios-filing-outline"></i>File Cab
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="ion-ios-information-outline"></i>Infos
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="ion-ios-paperplane-outline"></i>Planes
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="ion-android-star-outline"></i>Shop
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                <i class="material-icons">live_help</i>{" "}
                  <span class="">Help</span>
                </a>
                <ul class="nav-flyout">
                  <li>
                    <a href="#">
                      <i class="ion-ios-flame-outline"></i>Burn
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="ion-ios-lightbulb-outline"></i>Bulbs
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="ion-ios-location-outline"></i>Where You
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="ion-ios-locked-outline"></i>On Lock
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="ion-ios-navigate-outline"></i>Ghostface
                    </a>
                  </li>
                </ul>
              </li>

            </ul>
          </nav>
        </aside>
      </section>
    </>
  );
}
export default Sidebar;
