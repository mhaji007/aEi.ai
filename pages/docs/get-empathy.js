import React from "react";
import DocsLayout from "../../components/layouts/docs";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import JSONPretty from "react-json-prettify";
function GetEmpathy() {
  return (
    <>
      {/* <!--Get User's Empathy Towards Other Users--> */}
      <div id="api_rest_get_empathy" className="card">
        <div
          className="card-header card-header-secondary"
          style={{ background: "linear-gradient(60deg, #391141, #8e24aa)" }}
        >
          <h3 id="h3_get_empathy_1" className="my-0 text-white">
            Get User's Empathy Towards Other Users
          </h3>
        </div>
        <div className="card-body">
          <p id="p_get_empathy_1" className="mt-2 ml-4 mr-4 text-justify">
            At any point during or after an interaction, users' empathy model
            can be queried from the aEi.ai service. If you need incremental
            updates of a user's empathy model during an interaction, it should
            be queried after every new input by target user.
          </p>
          <p id="p_get_empathy_2" className="mt-2 ml-4 mr-4 text-justify">
            Query a user's empathy model by making a{" "}
            <strong>
              <u>GET</u>
            </strong>{" "}
            request to the <strong>get_user_empathy</strong> API with your
            observer user ID as path variable, and target user IDs as request
            parameters.
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
                    <Td id="td_get_empathy_1">PAID</Td>
                    <Td id="td_get_empathy_2">GET</Td>
                    <Td id="td_get_empathy_3" colspan="2">
                      <strong>
                        https://aei.ai/api/v1/users/{"{"}user_id{"}"}/empathy
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
                    <Td id="td_get_empathy_4">Authorization</Td>
                    <Td id="td_get_empathy_5">Header</Td>
                    <Td id="td_get_empathy_6">Yes</Td>
                    <Td id="td_get_empathy_7">
                      Value should be '
                      <strong>Bearer &lt;your access_token&gt;</strong>'
                    </Td>
                  </Tr>
                  <Tr>
                    <Td id="td_get_empathy_8">user_id</Td>
                    <Td id="td_get_empathy_9" className="text-nowrap">
                      Path Variable
                    </Td>
                    <Td id="td_get_empathy_10">Yes</Td>
                    <Td id="td_get_empathy_11">
                      Unique user ID of the observer user
                    </Td>
                  </Tr>
                  <Tr>
                    <Td id="td_get_empathy_12">target_user_id</Td>
                    <Td id="td_get_empathy_13" className="text-nowrap">
                      Request Param
                    </Td>
                    <Td id="td_get_empathy_14">No</Td>
                    <Td id="td_get_empathy_15">
                      Zero or more target user IDs. Every target user ID is
                      passed as a separate parameter, e.g.,{" "}
                      <strong>target_user_id</strong>=<strong>1A3</strong>&
                      <strong>target_user_id</strong>=<strong>4B6</strong>
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
                    <Td id="td_get_empathy_16">status</Td>
                    <Td id="td_get_empathy_17">
                      <a href="#error_handling">Status</a>
                    </Td>
                    <Td id="td_get_empathy_18" colspan="2">
                      Response <a href="#error_handling">status</a> object
                    </Td>
                  </Tr>
                  <Tr>
                    <Td id="td_get_empathy_19">userId</Td>
                    <Td id="td_get_empathy_20">String</Td>
                    <Td id="td_get_empathy_21" colspan="2">
                      Unique user ID of the observer user
                    </Td>
                  </Tr>
                  <Tr>
                    <Td id="td_get_empathy_22">empathies</Td>
                    <Td id="td_get_empathy_23">
                      List&lt;
                      <a href="#data_structures_social_perception">Empathy</a>
                      &gt;
                    </Td>
                    <Td id="td_get_empathy_24" colspan="2">
                      Empathy models of observer user towards target users
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </div>
          </div>

          <div
            className="alert alert-success mt-4 mb-4"
            role="alert"
            style={{backgroundColor: "rgba(92, 184, 92, 0.2)"}}
          >
            <div className="alert-heading ml-3 mr-3 text-success">
              <h3 id="h3_get_empathy_2" className="font-weight-normal">
                <i className="fa fa-info text-success mr-4"></i>Info
              </h3>
            </div>
            <p id="p_get_empathy_3" className="ml-3 mr-3 text-dark">
              <strong>
                Each of the <u>Empathy</u>
              </strong>{" "}
              models is the observer user's empathy towards a target user. If no
              target_user_id is provided in parameters (or empty list is
              provided), observer user's empathy towards all other users who
              have interacted with observer user are returned.
            </p>
          </div>

          {/* <!--Sample code to query a user's empathy model--> */}
          <p id="p_get_empathy_4" className="mt-2 ml-4 mr-4 text-justify">
            An example empathy query looks like the following:
            <code className="prettyprint">
              curl -X GET 'https://aei.ai/api/v1/users/&lt;observer
              user_id&gt;/empathy?target_user_id=&lt;target_user_id&gt;' -H
              'Authorization: Bearer &lt;your access_token&gt;'
            </code>
          </p>
          <p id="p_get_empathy_5" className="mt-2 ml-4 mr-4 text-justify">
            Expected response from aEi.ai would look like this:
            <JSONPretty
              json={{
                status: {
                  code: 200,
                  error: null,
                  help: null,
                },
                userId: "6c979353-2ceb-4877-8620-5d190d6cddf8",
                empathies: [
                  {
                    targetUserId: "f3e2ee0c-620e-4260-b6fa-8b46139b7971",
                    affect: {
                      emotion: {
                        pad: {
                          pleasure: 0.31495,
                          arousal: 0.51922,
                          dominance: -0.01554,
                        },
                        emotionName: "CURIOUS",
                      },
                      mood: {
                        pad: {
                          pleasure: 0.10178,
                          arousal: 0.12116,
                          dominance: 0.07043,
                        },
                        moodName: "EXUBERANT",
                      },
                      personality: {
                        pad: {
                          pleasure: 0.08547,
                          arousal: 0.08796,
                          dominance: 0.08145,
                        },
                        bigFive: {
                          openness: 0.0085,
                          conscientiousness: 0.0085,
                          extroversion: 0.0085,
                          agreeableness: 0.0085,
                          neuroticism: 0.0085,
                        },
                      },
                      satisfaction: {
                        score: 0.11945708713599999,
                      },
                    },
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
GetEmpathy.Layout = DocsLayout;
export default GetEmpathy;
