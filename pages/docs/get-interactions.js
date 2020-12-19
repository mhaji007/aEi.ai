import React from "react";
import DocsLayout from "../../components/layouts/docs";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import JSONPretty from "react-json-prettify";

function GetInteractions() {
  return (
    <>
      {/* <!--Get Interaction(s)--> */}
      <div id="api_rest_get_interaction" className="card">
        <div
          className="card-header card-header-secondary"
          style={{ background: "linear-gradient(60deg, #391141, #8e24aa)" }}
        >
          <h3 id="h3_get_inter_1" className="my-0 text-white">
            Get Interaction(s)
          </h3>
        </div>
        <div className="card-body">
          <p id="p_get_inter_1" className="mt-2 ml-4 mr-4 text-justify">
            You can query all interactions created with your account or a
            specific interaction by making a{" "}
            <strong>
              <u>GET</u>
            </strong>{" "}
            request to the <strong>get_interactions</strong> API with your
            target interaction ID (received when created the interaction) passed
            as a path variable.
          </p>
          <p id="p_get_inter_2" className="mt-2 ml-4 mr-4 text-justify">
            Getting an interaction which involves many users can take longer
            time due to the large data size. So, if you are interested in a
            specific user's affect model, consider querying that individual's
            affect model through users API instead.
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
                    <Td id="td_get_inter_1">PAID</Td>
                    <Td id="td_get_inter_2">GET</Td>
                    <Td id="td_get_inter_3" colspan="2">
                      <strong>
                        https://aei.ai/api/v1/interactions/{"{"}interaction_id
                        {"}"}
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
                    <Td id="td_get_inter_4">Authorization</Td>
                    <Td id="td_get_inter_5">Header</Td>
                    <Td id="td_get_inter_6">Yes</Td>
                    <Td id="td_get_inter_7">
                      Value should be '
                      <strong>Bearer &lt;your access_token&gt;</strong>'
                    </Td>
                  </Tr>
                  <Tr>
                    <Td id="td_get_inter_8">interaction_id</Td>
                    <Td id="td_get_inter_9" className="text-nowrap">
                      Path Variable
                    </Td>
                    <Td id="td_get_inter_10">No</Td>
                    <Td id="td_get_inter_11">
                      Unique interaction ID of the target interaction. If not
                      provided, list of all interactions created with your
                      account will be returned
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
                    <Td id="td_get_inter_12">status</Td>
                    <Td id="td_get_inter_13">
                      <a href="#error_handling">Status</a>
                    </Td>
                    <Td id="td_get_inter_14" colspan="2">
                      Response <a href="#error_handling">status</a> object
                    </Td>
                  </Tr>
                  <Tr>
                    <Td id="td_get_inter_15">
                      interaction{" "}
                      <strong>
                        <u>OR</u>
                      </strong>{" "}
                      interactions
                    </Td>
                    <Td id="td_get_inter_16">
                      <a href="#data_structures_interaction">Interaction</a>{" "}
                      <strong>
                        <u>OR</u>
                      </strong>{" "}
                      List&lt;
                      <a href="#data_structures_interaction">Interaction</a>
                      &gt;
                    </Td>
                    <Td id="td_get_inter_17" colspan="2">
                      If interaction_id is provided in URL, the corresponding{" "}
                      <a href="#data_structures_interaction">Interaction</a>{" "}
                      object is returned with 'interaction' key. If no
                      interaction_id is provided, list of all interactions in
                      your account will be returned with 'interactions' key. We
                      do not suggest calling this API without interaction_id too
                      often as it might be very resource and time intensive.
                      Instead, we suggest to get specific target users involved
                      in a specific interaction as explained in{" "}
                      <a href="#api_rest_get_all_users">Get User(s)</a> section
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </div>
          </div>
          {/* <!--Sample code to query the interaction--> */}
          <p id="p_get_inter_3" className="mt-2 ml-4 mr-4 text-justify">
            A sample get interaction query looks like the following:
          </p>
          <p id="p_get_inter_4" className="mt-2 ml-4 mr-4 text-justify">
            <code className="prettyprint">
              curl -X GET 'https://aei.ai/api/v1/interactions/&lt;target
              interactionId&gt;' -H 'Authorization: Bearer &lt;your
              access_token&gt;'
            </code>
          </p>
          <p id="p_get_inter_5" className="mt-2 ml-4 mr-4 text-justify">
            Expected response from aEi.ai would be the same as the response
            received when a new interaction was created (shown in{" "}
            <a href="#api_rest_create_new_interaction">
              Create New Interaction
            </a>{" "}
            section).
          </p>
          <p id="p_get_inter_6" className="mt-2 ml-4 mr-4 text-justify">
            Also, you can get all interactions in your account as follows:
          </p>
          <p id="p_get_inter_7">
            <code className="prettyprint">
              curl -X GET 'https://aei.ai/api/v1/interactions' -H
              'Authorization: Bearer &lt;your access_token&gt;'
            </code>
          </p>
          <p id="p_get_inter_8" className="mt-2 ml-4 mr-4 text-justify">
            Assuming you have one newly created interactions with two users in
            you account, expected response from aEi.ai would look the following:
            <JSONPretty
              json={{
                status: {
                  code: 200,
                  error: null,
                  help: null,
                },
                interactions: [
                  {
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
                ],
              }}
            />
          </p>
        </div>
      </div>
    </>
  );
}
GetInteractions.Layout = DocsLayout;
export default GetInteractions;
