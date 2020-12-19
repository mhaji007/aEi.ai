import React from "react";
import DocsLayout from "../../components/layouts/docs";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import JSONPretty from "react-json-prettify";

function CreateNewInteraction() {
  return (
    <>
      {/* <!--Create New Interaction--> */}
      <div id="api_rest_create_new_interaction" className="card">
        <div
          className="card-header card-header-secondary"
          style={{ background: "linear-gradient(60deg, #391141, #8e24aa)" }}
        >
          <h3 id="h3_new_inter_1" className="my-0 text-white">
            Create New Interaction
          </h3>
        </div>
        <div className="card-body">
          <p id="p_new_inter_1" className="mt-2 ml-4 mr-4 text-justify">
            For every interaction (i.e., conversation) between one to multiple
            users, a new interaction with a unique ID is created. This unique
            interaction ID will be used later for sending user messages to the
            interaction. An interaction may be initialized with zero to multiple
            users by passing user IDs when creating a new interaction.
          </p>
          <p id="p_new_inter_2" className="mt-2 ml-4 mr-4 text-justify">
            You can create a new interaction by making a{" "}
            <strong>
              <u>POST</u>
            </strong>{" "}
            request to the <strong>post_interactions</strong> API with involved
            user IDs as optional request parameters.
          </p>
          <div className="card-body">
            <div className="d-flex justify-content-center">
              <Table className="table table-responsive table-striped w-auto rounded-top rounded-bottom border">
                <Thead className="thead-dark">
                  <Tr>
                    <th colspan="4" className="text-center">
                      <strong>Request</strong>
                    </th>
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
                    <Td id="td_new_inter_1">PAID</Td>
                    <Td id="td_new_inter_2">POST</Td>
                    <Td id="td_new_inter_3" colspan="2">
                      <strong>https://aei.ai/api/v1/interactions</strong>
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
                    <Td id="td_new_inter_4">Authorization</Td>
                    <Td id="td_new_inter_5">Header</Td>
                    <Td id="td_new_inter_6">Yes</Td>
                    <Td id="td_new_inter_7">
                      Value should be '
                      <strong>Bearer &lt;your access_token&gt;</strong>'
                    </Td>
                  </Tr>
                  <Tr>
                    <Td id="td_new_inter_8">user_id</Td>
                    <Td id="td_new_inter_9" className="text-nowrap">
                      Request Param
                    </Td>
                    <Td id="td_new_inter_10">No</Td>
                    <Td id="td_new_inter_11">
                      Zero or more unique user IDs of users involved in the new
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
                    <Td id="td_new_inter_12">status</Td>
                    <Td id="td_new_inter_13">
                      <a href="#error_handling">Status</a>
                    </Td>
                    <Td id="td_new_inter_14" colspan="2">
                      Response <a href="#error_handling">status</a> object
                    </Td>
                  </Tr>
                  <Tr>
                    <Td id="td_new_inter_15">interaction</Td>
                    <Td id="td_new_inter_16">
                      <a href="#data_structures_interaction">Interaction</a>
                    </Td>
                    <Td id="td_new_inter_17" colspan="2">
                      Newly created interaction
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </div>
          </div>
          {/* <!--Sample code to create a new interaction--> */}
          <p id="p_new_inter_3" className="mt-2 ml-4 mr-4 text-justify">
            An example query to create an interaction between two users looks
            loke the following:
          </p>
          <p id="p_new_inter_4" className="mt-2 ml-4 mr-4 text-justify">
            <code className="prettyprint">
              curl -X POST 'https://aei.ai/api/v1/interactions?user_id=&lt;1st
              userId&gt;&user_id=&lt;2nd userId&gt;' -H 'Authorization: Bearer
              &lt;your access_token&gt;'
            </code>
          </p>
          <p id="p_new_inter_5" className="mt-2 ml-4 mr-4 text-justify">
            Expected response from aEi.ai service looks like the following:
            <JSONPretty
              json={{
                status: {
                  code: 200,
                  error: null,
                  help: null,
                },
                interaction: {
                  interactionId: "16326fa9-374d-4bb0-bb8d-6accea3427c0",
                  users: [
                    {
                      userId: "f3e2ee0c-620e-4260-b6fa-8b46139b7971",
                      affect: {
                        emotion: {
                          pad: {
                            pleasure: 0.01,
                            arousal: 0.01,
                            dominance: 0.01,
                          },
                          emotionName: "NEUTRAL",
                        },
                        mood: {
                          pad: {
                            pleasure: 0.1,
                            arousal: 0.1,
                            dominance: 0.1,
                          },
                          moodName: "EXUBERANT",
                        },
                        personality: {
                          pad: {
                            pleasure: 0.1,
                            arousal: 0.1,
                            dominance: 0.1,
                          },
                          bigFive: {
                            openness: 0.01,
                            conscientiousness: 0.01,
                            extroversion: 0.01,
                            agreeableness: 0.01,
                            neuroticism: 0.01,
                          },
                        },
                        satisfaction: {
                          score: 0.0,
                        },
                      },
                      socialPerception: {
                        impressions: [],
                      },
                      empathies: [],
                    },
                    {
                      userId: "6c979353-2ceb-4877-8620-5d190d6cddf8",
                      affect: {
                        emotion: {
                          pad: {
                            pleasure: 0.01,
                            arousal: 0.01,
                            dominance: 0.01,
                          },
                          emotionName: "NEUTRAL",
                        },
                        mood: {
                          pad: {
                            pleasure: 0.1,
                            arousal: 0.1,
                            dominance: 0.1,
                          },
                          moodName: "EXUBERANT",
                        },
                        personality: {
                          pad: {
                            pleasure: 0.1,
                            arousal: 0.1,
                            dominance: 0.1,
                          },
                          bigFive: {
                            openness: 0.01,
                            conscientiousness: 0.01,
                            extroversion: 0.01,
                            agreeableness: 0.01,
                            neuroticism: 0.01,
                          },
                        },
                        satisfaction: {
                          score: 0.0,
                        },
                      },
                      socialPerception: {
                        impressions: [],
                      },
                      empathies: [],
                    },
                  ],
                },
              }}
            />
          </p>
        </div>
      </div>
    </>
  );
}
CreateNewInteraction.Layout = DocsLayout;
export default CreateNewInteraction;
