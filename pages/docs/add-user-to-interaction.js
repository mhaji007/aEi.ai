import React from "react";
import DocsLayout from "../../components/layouts/docs";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import JSONPretty from "react-json-prettify";

function AddUserToInteraction() {
  return (
    <>
      {/* <!--Add Users to Interaction--> */}
      <div id="api_rest_add_users_to_interaction" className="card">
        <div
          className="card-header card-header-secondary"
          style={{ background: "linear-gradient(60deg, #391141, #8e24aa)" }}
        >
          <h3 id="h3_add_user_1" className="my-0 text-white">
            Add a User to Interaction
          </h3>
        </div>
        <div className="card-body">
          <p id="p_add_user_1" className="mt-2 ml-4 mr-4 text-justify">
            A new or existing user can be added to an interaction at any time
            during an interaction using their unique IDs.
          </p>
          <p id="p_add_user_2" className="mt-2 ml-4 mr-4 text-justify">
            You can add a user to an interaction by making a{" "}
            <strong>
              <u>PUT</u>
            </strong>{" "}
            request to the <strong>put_interactions_user</strong> API with
            corresponding interaction ID and user ID as path variables.
          </p>
          <div className="card-body">
            <div className="d-flex justify-content-center">
              <Table className="table table-responsive table-striped w-auto rounded-top rounded-bottom border">
                <Thead className="thead-dark">
                  <Tr>
                    <Th colspan="4" className="text-center">
                      <strong>Request</strong>
                    </Th>
                  </Tr>
                </Thead>
                <Thead className="thead-light">
                  <Tr>
                    <Th className="text-nowrap">
                      <strong>API Type</strong>
                    </Th>
                    <Th className="text-nowrap">
                      <strong>HTTP Method</strong>
                    </Th>
                    <Th colspan="2">
                      <strong>URL</strong>
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td id="td_add_user_1">PAID</Td>
                    <Td id="td_add_user_2">PUT</Td>
                    <Td id="td_add_user_3" colspan="2">
                      <strong>
                        https://aei.ai/api/v1/interactions/{"{"}interaction_id
                        {"}"}
                        /users
                      </strong>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </div>
          </div>

          <div className="card-body">
            <div className="d-flex justify-content-center">
              <Table className="table table-responsive table-striped w-auto rounded-top rounded-bottom border">
                <Thead className="thead-dark">
                  <Tr>
                    <Th colspan="4" className="text-center">
                      <strong>Parameters</strong>
                    </Th>
                  </Tr>
                </Thead>
                <Thead className="thead-light">
                  <Tr>
                    <Th>
                      <strong>Parameter</strong>
                    </Th>
                    <Th>
                      <strong>Type</strong>
                    </Th>
                    <Th>
                      <strong>Required</strong>
                    </Th>
                    <Th>
                      <strong>Description</strong>
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td id="td_add_user_4">Authorization</Td>
                    <Td id="td_add_user_5">Header</Td>
                    <Td id="td_add_user_6">Yes</Td>
                    <Td id="td_add_user_7">
                      Value should be '
                      <strong>Bearer &lt;your access_token&gt;</strong>'
                    </Td>
                  </Tr>
                  <Tr>
                    <Td id="td_add_user_8">interaction_id</Td>
                    <Td id="td_add_user_9" className="text-nowrap">
                      Path Variable
                    </Td>
                    <Td id="td_add_user_10">Yes</Td>
                    <Td id="td_add_user_11">
                      Unique interaction ID of the target interaction
                    </Td>
                  </Tr>
                  <Tr>
                    <Td id="td_add_user_12">user_id</Td>
                    <Td id="td_add_user_13" className="text-nowrap">
                      Request Param
                    </Td>
                    <Td id="td_add_user_14">Yes</Td>
                    <Td id="td_add_user_15">
                      One or more unique user IDs of users involved in the new
                      interaction. Every user ID is passed as a separate
                      parameter, for example, <strong>user_id</strong>=
                      <strong>1A3</strong>&<strong>user_id</strong>=
                      <strong>4B6</strong>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </div>
          </div>

          <div className="card-body">
            <div className="d-flex justify-content-center">
              <Table className="table table-responsive table-striped w-auto rounded-top rounded-bottom border">
                <Thead className="thead-dark">
                  <Tr>
                    <Th colspan="4" className="text-center">
                      <strong>Response</strong>
                    </Th>
                  </Tr>
                </Thead>
                <Thead className="thead-light">
                  <Tr>
                    <Th>
                      <strong>Property</strong>
                    </Th>
                    <Th>
                      <strong>Type</strong>
                    </Th>
                    <Th colspan="2">
                      <strong>Description</strong>
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td id="td_add_user_16">status</Td>
                    <Td id="td_add_user_17">
                      <a href="#error_handling">Status</a>
                    </Td>
                    <Td id="td_add_user_18" colspan="2">
                      Response <a href="#error_handling">status</a> object
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </div>
          </div>
          {/* <!--Sample code to add a new user to an interaction--> */}
          <p id="p_add_user_3" className="mt-2 ml-4 mr-4 text-justify">
            A sample PUT query to add a user to an interaction is as follows:
          </p>
          <p id="p_add_user_4" className="mt-2 ml-4 mr-4 text-justify">
            <code className="prettyprint">
              curl -X PUT 'https://aei.ai/api/v1/interactions/&lt;target
              interactionId&gt;/users/?user_id=&lt;1st
              userId&gt;&user_id=&lt;2nd userId&gt;' -H 'Authorization: Bearer
              &lt;your access_token&gt;'
            </code>
          </p>
          <p id="p_add_user_5" className="mt-2 ml-4 mr-4 text-justify">
            Expected response from aEi.ai would look like this:
            <JSONPretty
              json={{
                status: {
                  code: 200,
                  error: null,
                  help: null,
                },
              }}
            />
          </p>
        </div>
      </div>
    </>
  );
}
AddUserToInteraction.Layout = DocsLayout;
export default AddUserToInteraction;
