import React from "react";
import DocsLayout from "../../components/layouts/docs";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import JSONPretty from "react-json-prettify";

function getEmotion() {
  return (
    <>
      {/* <!--Get User's Emotion Model--> */}
      <div id="api_rest_get_emotion" className="card">
        <div
          className="card-header card-header-secondary"
          style={{ background: "linear-gradient(60deg, #391141, #8e24aa)" }}
        >
          <h3 id="h3_get_emo_1" className="my-0 text-white">
            Get User's Emotion Model
          </h3>
        </div>

        <div className="card-body">
          <p id="p_get_emo_1" className="mt-2 ml-4 mr-4 text-justify">
            At any point during or after an interaction, users' emotion model
            can be queried from the aEi.ai service. If you need incremental
            updates of a user's emotion model during an interaction, it should
            be queried after every new input to the interaction.
          </p>
          <p id="p_get_emo_2" className="mt-2 ml-4 mr-4 text-justify">
            You can query a user's emotion model by making a{" "}
            <strong>
              <u>GET</u>
            </strong>{" "}
            request to the <strong>get_user_emotion</strong> API with your
            target user ID as path variable.
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
                    <Td id="td_get_emo_1">PAID</Td>
                    <Td id="td_get_emo_2">GET</Td>
                    <Td id="td_get_emo_3" colspan="2">
                      <strong>
                        https://aei.ai/api/v1/users/{"{"}user_id{"}"}/emotion
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
                    <Td id="td_get_emo_4">Authorization</Td>
                    <Td id="td_get_emo_5">Header</Td>
                    <Td id="td_get_emo_6">Yes</Td>
                    <Td id="td_get_emo_7">
                      Value should be '
                      <strong>Bearer &lt;your access_token&gt;</strong>'
                    </Td>
                  </Tr>
                  <Tr>
                    <Td id="td_get_emo_8">user_id</Td>
                    <Td id="td_get_emo_9">Path Variable</Td>
                    <Td id="td_get_emo_10">Yes</Td>
                    <Td id="td_get_emo_11">
                      Unique user ID of the target user
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
                    <Td id="td_get_emo_12">status</Td>
                    <Td id="td_get_emo_13">
                      <a href="#error_handling">Status</a>
                    </Td>
                    <Td id="td_get_emo_14" colspan="2">
                      Response <a href="#error_handling">status</a> object
                    </Td>
                  </Tr>
                  <Tr>
                    <Td id="td_get_emo_15">userId</Td>
                    <Td id="td_get_emo_16">String</Td>
                    <Td id="td_get_emo_17" colspan="2">
                      Unique user ID of the target user
                    </Td>
                  </Tr>
                  <Tr>
                    <Td id="td_get_emo_18">emotion</Td>
                    <Td id="td_get_emo_19">
                      <a href="#data_structures_emotion">Emotion</a>
                    </Td>
                    <Td id="td_get_emo_20" colspan="2">
                      <a href="#data_structures_emotion">Emotion model</a> of
                      the target user
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </div>
          </div>
          {/* <!--Sample code to query a user's emotion model--> */}
          <p id="p_get_emo_3" className="mt-2 ml-4 mr-4 text-justify">
            An example of emotion model query looks like the following:
          </p>
          <p id="p_get_emo_4">
            <code className="prettyprint">
              curl -X GET 'https://aei.ai/api/v1/users/&lt;target
              user_id&gt;/emotion' -H 'Authorization: Bearer &lt;your
              access_token&gt;'
            </code>
          </p>
          <p id="p_get_emo_5" className="mt-2 ml-4 mr-4 text-justify">
            Expected response from aEi.ai would look like this:
            <JSONPretty
              json={{
                status: {
                  code: 200,
                  error: null,
                  help: null,
                },
                userId: "fcc60b6e-264d-4df9-83d2-346a3799c688",
                emotion: {
                  pad: {
                    pleasure: 0.01,
                    arousal: 0.01,
                    dominance: 0.01,
                  },
                  emotionName: "NEUTRAL",
                },
              }}
            />
          </p>
        </div>
      </div>
    </>
  );
}
getEmotion.Layout = DocsLayout;
export default getEmotion;
