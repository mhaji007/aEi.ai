import React from "react";
import DocsLayout from "../../components/layouts/docs";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import JSONPretty from "react-json-prettify";

function GetSocialPerception() {
  return (
    <>
      {/* <!--Get User's Social Perception Towards Other Users--> */}
      <div id="api_rest_get_social_perception" className="card">
        <div
          className="card-header card-header-secondary"
          style={{ background: "linear-gradient(60deg, #391141, #8e24aa)" }}
        >
          <h3 id="h3_get_sp_1" className="my-0 text-white">
            Get User's Social Perception Towards Other Users
          </h3>
        </div>
        <div className="card-body">
          <p id="p_get_sp_1" className="mt-2 ml-4 mr-4 text-justify">
            At any point during or after an interaction, users' social
            perception model can be queried from the aEi.ai service. If you need
            incremental updates of a user's social perception model during an
            interaction, it should be queried after every new input by target
            user.
          </p>
          <p id="p_get_sp_2" className="mt-2 ml-4 mr-4 text-justify">
            Query a user's social perception model by making a{" "}
            <strong>
              <u>GET</u>
            </strong>{" "}
            request to the <strong>get_user_social_perception</strong> API with
            your observer user ID as path variable, and target user IDs as
            request parameters.
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
                    <Td id="td_get_sp_1">PAID</Td>
                    <Td id="td_get_sp_2">GET</Td>
                    <Td id="td_get_sp_3" colspan="2">
                      <strong>
                        https://aei.ai/api/v1/users/{"{"}user_id{"}"}
                        /social-perception
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
                    <Td id="td_get_sp_4">Authorization</Td>
                    <Td id="td_get_sp_5">Header</Td>
                    <Td id="td_get_sp_6">Yes</Td>
                    <Td id="td_get_sp_7">
                      Value should be '
                      <strong>Bearer &lt;your access_token&gt;</strong>'
                    </Td>
                  </Tr>
                  <Tr>
                    <Td id="td_get_sp_8">user_id</Td>
                    <Td id="td_get_sp_9" className="text-nowrap">
                      Path Variable
                    </Td>
                    <Td id="td_get_sp_10">Yes</Td>
                    <Td id="td_get_sp_11">
                      Unique user ID of the observer user
                    </Td>
                  </Tr>
                  <Tr>
                    <Td id="td_get_sp_12">target_user_id</Td>
                    <Td id="td_get_sp_13" className="text-nowrap">
                      Request Param
                    </Td>
                    <Td id="td_get_sp_14">No</Td>
                    <Td id="td_get_sp_15">
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
                    <Td id="td_get_sp_16">status</Td>
                    <Td id="td_get_sp_17">
                      <a href="#error_handling">Status</a>
                    </Td>
                    <Td id="td_get_sp_18" colspan="2">
                      Response <a href="#error_handling">status</a> object
                    </Td>
                  </Tr>
                  <Tr>
                    <Td id="td_get_sp_19">userId</Td>
                    <Td id="td_get_sp_20">String</Td>
                    <Td id="td_get_sp_21" colspan="2">
                      Unique user ID of the target user
                    </Td>
                  </Tr>
                  <Tr>
                    <Td id="td_get_sp_22">socialPerception</Td>
                    <Td id="td_get_sp_23">
                      <a href="#data_structures_social_perception">
                        SocialPerception
                      </a>
                    </Td>
                    <Td id="td_get_sp_24" colspan="2">
                      Social perception model of observer user towards target
                      users
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </div>
          </div>

          <div
            className="alert alert-success mt-4 mb-4"
            role="alert"
            style={{ backgroundColor: "rgba(92, 184, 92, 0.2)" }}
          >
            <div className="alert-heading ml-3 mr-3 text-success">
              <h3 id="h3_get_sp_2" className="font-weight-normal">
                <i className="fa fa-info text-success mr-4"></i>Info
              </h3>
            </div>
            <p id="p_get_sp_3" className="ml-3 mr-3 text-dark">
              <strong>
                <u>Impression</u>
              </strong>{" "}
              models within{" "}
              <strong>
                <u>Social Perception</u>
              </strong>{" "}
              model are the observer user's impressions towards target users. If
              no target_user_id is provided in parameters (or empty list is
              provided), observer user's impressions towards all other users who
              have interacted with observer user are returned.
            </p>
          </div>

          {/* <!--Sample code to query a user's social perception model--> */}
          <p id="p_get_sp_4" className="mt-2 ml-4 mr-4 text-justify">
            An example social perception query looks like the following:
            <code className="prettyprint">
              curl -X GET 'https://aei.ai/api/v1/users/&lt;observer
              user_id&gt;/social-perception?target_user_id=&lt;target_user_id&gt;'
              -H 'Authorization: Bearer &lt;your access_token&gt;'
            </code>
          </p>
          <p id="p_get_sp_5" className="mt-2 ml-4 mr-4 text-justify">
            Expected response from aEi.ai would look like this:
            <JSONPretty
              json={{
                status: {
                  code: 200,
                  error: null,
                  help: null,
                },
                userId: "6c979353-2ceb-4877-8620-5d190d6cddf8",
                socialPerception: {
                  impressions: [
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
                },
              }}
            />
          </p>
        </div>
      </div>
    </>
  );
}
GetSocialPerception.Layout = DocsLayout;
export default GetSocialPerception;
