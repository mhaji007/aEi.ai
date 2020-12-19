import React from "react";
import DocsLayout from "../../components/layouts/docs";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import JSONPretty from "react-json-prettify";

function GetMood() {
  return (
    <>
      {/* <!--Get User's Mood Model--> */}
      <div id="api_rest_get_mood" className="card">
        <div
          className="card-header card-header-secondary"
          style={{ background: "linear-gradient(60deg, #391141, #8e24aa)" }}
        >
          <h3 id="h3_get_mood_1" className="my-0 text-white">
            Get User's Mood Model
          </h3>
        </div>


        <div className="card-body">
          <p id="p_get_mood_1" className="mt-2 ml-4 mr-4 text-justify">
            At any point during or after an interaction, users' mood model can
            be queried from the aEi.ai service. If you need incremental updates
            of a user's mood model during an interaction, it should be queried
            after every new input to the interaction.
          </p>
          <p id="p_get_mood_2" className="mt-2 ml-4 mr-4 text-justify">
            You can query a user's mood model by making a{" "}
            <strong>
              <u>GET</u>
            </strong>{" "}
            request to the <strong>get_user_mood</strong> API with your target
            user ID as path variable.
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
                    <Td id="td_get_mood_1">PAID</Td>
                    <Td id="td_get_mood_2">GET</Td>
                    <Td id="td_get_mood_3" colspan="2">
                      <strong>
                        https://aei.ai/api/v1/users/{"{"}user_id{"}"}/mood
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
                    <Td id="td_get_mood_4">Authorization</Td>
                    <Td id="td_get_mood_5">Header</Td>
                    <Td id="td_get_mood_6">Yes</Td>
                    <Td id="td_get_mood_7">
                      Value should be '
                      <strong>Bearer &lt;your access_token&gt;</strong>'
                    </Td>
                  </Tr>
                  <Tr>
                    <Td id="td_get_mood_8">user_id</Td>
                    <Td id="td_get_mood_9" className="text-nowrap">
                      Path Variable
                    </Td>
                    <Td id="td_get_mood_10">Yes</Td>
                    <Td id="td_get_mood_11">
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
                    <Td id="td_get_mood_12">status</Td>
                    <Td id="td_get_mood_13">
                      <a href="#error_handling">Status</a>
                    </Td>
                    <Td id="td_get_mood_14" colspan="2">
                      Response <a href="#error_handling">status</a> object
                    </Td>
                  </Tr>
                  <Tr>
                    <Td id="td_get_mood_15">userId</Td>
                    <Td id="td_get_mood_16">String</Td>
                    <Td id="td_get_mood_17" colspan="2">
                      Unique user ID of the target user
                    </Td>
                  </Tr>
                  <Tr>
                    <Td id="td_get_mood_18">mood</Td>
                    <Td id="td_get_mood_19">
                      <a href="#data_structures_mood">Mood</a>
                    </Td>
                    <Td id="td_get_mood_20" colspan="2">
                      <a href="#data_structures_mood">Mood model</a> of the
                      target user
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </div>
          </div>
          {/* <!--Sample code to query a user's mood model--> */}
          <p id="p_get_mood_3" className="mt-2 ml-4 mr-4 text-justify">
            An example of mood model query looks like the following:
          </p>
          <p id="p_get_mood_4">
            <code className="prettyprint">
              curl -X GET 'https://aei.ai/api/v1/users/&lt;target
              user_id&gt;/mood' -H 'Authorization: Bearer &lt;your
              access_token&gt;'
            </code>
          </p>
          <p id="p_get_mood_5" className="mt-2 ml-4 mr-4 text-justify">
            Expected response from aEi.ai would look like this:
            <JSONPretty
              json={{
                status: {
                  code: 200,
                  error: null,
                  help: null,
                },
                userId: "fcc60b6e-264d-4df9-83d2-346a3799c688",
                mood: {
                  pad: {
                    pleasure: 0.1,
                    arousal: 0.1,
                    dominance: 0.1,
                  },
                  moodName: "EXUBERANT",
                },
              }}
            />
          </p>
        </div>
      </div>
    </>
  );
}
GetMood.Layout = DocsLayout;
export default GetMood;
