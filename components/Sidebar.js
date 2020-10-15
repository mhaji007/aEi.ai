import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { ProSidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import Link from "next/link";
import styles from "./Sidebar.module.css";
import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";



function Sidebar({ items }) {
  return (

    <div style={{height:"100vh"}}>

    <ProSidebar>
      <SidebarHeader>
      {/* logo */}
      </SidebarHeader>
      <SidebarContent>
        <ProSidebar >
          <Menu>
            <MenuItem>aei</MenuItem>
            <Link href="/">
            <a><MenuItem>Architecture </MenuItem></a>
            </Link>
            <SubMenu title="Data Structures">
              <MenuItem>PAD</MenuItem>
              <MenuItem>Big Five</MenuItem>
              <MenuItem>Emotion</MenuItem>
              <MenuItem>Mood</MenuItem>
              <MenuItem>Personality</MenuItem>
              <MenuItem>Satisfaction</MenuItem>
              <MenuItem>Nonverbal Behavior</MenuItem>
              <MenuItem>Affect</MenuItem>
              <MenuItem>Empathy</MenuItem>
              <MenuItem>Empathy</MenuItem>
              <MenuItem>Rapport</MenuItem>
              <MenuItem>Impression</MenuItem>
              <MenuItem>Social Perception</MenuItem>
              <MenuItem>User</MenuItem>
              <MenuItem>Interaction</MenuItem>
            </SubMenu>
            <MenuItem>Error Handling</MenuItem>
            <SubMenu title="API">
              <MenuItem>Register New Accoount</MenuItem>
              <MenuItem>Authenticate Client</MenuItem>
              <hr />
              <MenuItem>Get New User</MenuItem>
              <MenuItem>Get Users</MenuItem>
              <MenuItem>Get Emotion</MenuItem>
              <MenuItem>Get Mood</MenuItem>
              <MenuItem>Get Personality</MenuItem>
              <MenuItem>Get Satisfaction</MenuItem>
              <MenuItem>Get Empathy</MenuItem>
              <MenuItem>Get Social Perception</MenuItem>
              <hr />
              <MenuItem>Create New Interaction</MenuItem>
              <MenuItem>Get Interactions</MenuItem>
              <MenuItem>Add User To Interaction</MenuItem>
              <MenuItem>Remove User From Interaction</MenuItem>
              <hr />
              <MenuItem>Send Text</MenuItem>
              <MenuItem>Analyze in Bulk</MenuItem>
              <hr />
              <MenuItem>Paid Queries</MenuItem>
              <MenuItem>Endpoint Queries</MenuItem>
              <MenuItem>Free Queries</MenuItem>
              <MenuItem>Remaining Free Queries</MenuItem>
              <hr />
              <MenuItem>Update Status</MenuItem>
            </SubMenu>
            <MenuItem>Versioning</MenuItem>
            <SubMenu title="Sample Code">
            <MenuItem>Java</MenuItem>
            <MenuItem>Python</MenuItem>
            <MenuItem>Curl</MenuItem>
            </SubMenu>
            <MenuItem>Help</MenuItem>
          </Menu>
        </ProSidebar>

      </SidebarContent>
      <SidebarFooter>

      </SidebarFooter>
    </ProSidebar>


    </div>


  );
}
export default Sidebar;
