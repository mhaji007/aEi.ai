import React from "react";
import DocsLayout from "../../components/layouts/docs";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import JSONPretty from "react-json-prettify";

function RemoveUserFromInteraction() {
  return (
    <>
      {/* <!--Remove Users from Interaction--> */}
      <div id="api_rest_remove_users_from_interaction" className="card">
        <div
          className="card-header card-header-secondary"
          style={{ background: "linear-gradient(60deg, #391141, #8e24aa)" }}
        >
          <h3 id="h3_rem_user_1" className="my-0 text-white">
            Remove User from Interaction
          </h3>
        </div>
        <div className="card-body">
          <p id="p_rem_user_1" className="mt-2 ml-4 mr-4 text-justify">
            Users can leave an interaction at any time during a conversation. A
            user's unique user ID can be used to remove her from an interaction.
            User's affect model is updated according to an interaction as far as
            user is present in an interaction. When user leaves an interaction,
            her affect model does not get affected from that interaction
            anymore, unless she joins the same interaction again. If a user
            joins another interaction, her affect model is incrementally
            updated.
          </p>
          <p id="p_rem_user_2" className="mt-2 ml-4 mr-4 text-justify">
            You can remove a user from an interaction by making a{" "}
            <strong>
              <u>DELETE</u>
            </strong>{" "}
            request to the <strong>delete_interactions_user</strong> API with
            your interaction ID and target user ID as path variables.
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
                    <Td id="td_rem_user_1">PAID</Td>
                    <Td id="td_rem_user_2">DELETE</Td>
                    <Td id="td_rem_user_3" colspan="2">
                      <strong>
                        https://aei.ai/api/v1/interactions/{"{"}interaction_id
                        {"}"}
                        /users/{"{"}user_id{"}"}
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
                    <Td id="td_rem_user_4">Authorization</Td>
                    <Td id="td_rem_user_5">Header</Td>
                    <Td id="td_rem_user_6">Yes</Td>
                    <Td id="td_rem_user_7">
                      Value should be '
                      <strong>Bearer &lt;your access_token&gt;</strong>'
                    </Td>
                  </Tr>
                  <Tr>
                    <Td id="td_rem_user_8">interaction_id</Td>
                    <Td id="td_rem_user_9" className="text-nowrap">
                      Path Variable
                    </Td>
                    <Td id="td_rem_user_10">Yes</Td>
                    <Td id="td_rem_user_11">
                      Unique interaction ID of the target interaction.
                    </Td>
                  </Tr>
                  <Tr>
                    <Td id="td_rem_user_12">user_id</Td>
                    <Td id="td_rem_user_13" className="text-nowrap">
                      Path Variable
                    </Td>
                    <Td id="td_rem_user_14">Yes</Td>
                    <Td id="td_rem_user_15">
                      Unique user IDs of user to be removed from the interaction
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
                    <Td id="td_rem_user_16">status</Td>
                    <Td id="td_rem_user_17">
                      <a href="#error_handling">Status</a>
                    </Td>
                    <Td id="td_rem_user_18" colspan="2">
                      Response <a href="#error_handling">status</a> object
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </div>
          </div>
          {/* <!--Sample code to remove a user from an interaction--> */}
          <p id="p_rem_user_3" className="mt-2 ml-4 mr-4 text-justify">
            Following is an example of removing a user from an interaction.
          </p>
          <p id="p_rem_user_4" className="mt-2 ml-4 mr-4 text-justify">
            <code className="prettyprint">
              curl -X DELETE 'https://aei.ai/api/v1/interactions/&lt;target
              interactionId&gt;/users/&lt;target userId&gt;' -H 'Authorization:
              Bearer &lt;your access_token&gt;'
            </code>
          </p>
          <p id="p_rem_user_5" className="mt-2 ml-4 mr-4 text-justify">
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
          <div
            className="alert alert-danger mt-4 mb-4"
            role="alert"
            style={{ backgroundColor: "rgba(217, 83, 79, 0.2)" }}
          >
            <div className="alert-heading ml-3 mr-3 text-danger">
              <h3 id="h3_rem_user_2" className="font-weight-normal">
                <i className="fa fa-lightbulb-o text-danger text-center mr-4"></i>
                Note
              </h3>
            </div>
            <p id="p_rem_user_6" className="ml-3 mr-3 text-dark">
              When a user is removed from an interaction, the user model itself
              is not deleted. This functionality simulates leaving a
              meeting/interaction. When a user is removed from an interaction,
              the interaction contents from then on do not affect her affect
              model. At any point, you can add the same user to the interaction
              again, which simulates returning back to a meeting/interaction.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

RemoveUserFromInteraction.Layout = DocsLayout;
export default RemoveUserFromInteraction;
