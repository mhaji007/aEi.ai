import React from "react";
import DocsLayout from "../../components/layouts/docs";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

function interaction() {
  return (
    <div id="data_structures_interaction" className="card">
      <div className="card-header card-header-secondary">
        <h3 id="h3_interact_1" className="my-0 text-white">
          Interaction
        </h3>
      </div>
      <div className="card-body">
        <p id="p_interact_1" className="mt-2 ml-4 mr-4 text-justify">
          Interaction simulates a conversation/meeting between zero to many
          users. When no users are involved in an interaction, it simulates an
          empty meeting room, otherwise, it simulates a room with users who can
          join and leave the meeting at anytime. As long as a user is sitting in
          a meeting room (involved in an interaction), her model (including
          affect and social perception models) gets affected by what is
          discussed in that meeting.
        </p>
        {/* <!--Interaction data structure--> */}
        <div className="d-flex justify-content-center">
          <Table className="table table-responsive table-striped w-auto rounded-top rounded-bottom border">
            <Thead className="thead-dark">
              <Tr>
                <Th>
                  <strong>Property</strong>
                </Th>
                <Th>
                  <strong>Type</strong>
                </Th>
                <Th>
                  <strong>Default</strong>
                </Th>
                <Th>
                  <strong>Description</strong>
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td id="td_interact_1">interactionId</Td>
                <Td id="td_interact_2">String</Td>
                <Td id="td_interact_3"></Td>
                <Td id="td_interact_4">Unique interaction ID</Td>
              </Tr>
              <Tr>
                <Td id="td_interact_5">users</Td>
                <Td id="td_interact_6">
                  List&lt;<a href="#data_structures_user">User</a>&gt;
                </Td>
                <Td id="td_interact_7" className="text-nowrap">
                  Empty list
                </Td>
                <Td id="td_interact_8">Users involved in the interaction</Td>
              </Tr>
            </Tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

interaction.Layout = DocsLayout;

export default interaction;
