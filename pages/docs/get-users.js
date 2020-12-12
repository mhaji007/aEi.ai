import React from "react";
import DocsLayout from "../../components/layouts/docs";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import JSONPretty from "react-json-prettify";

function getUsers() {
  return (
    <>
      {/* <!--Get User(s)--> */}
      <div id="api_rest_get_all_users" className="card">
        <div
          className="card-header card-header-secondary"
          style={{ background: "linear-gradient(60deg, #391141, #8e24aa)" }}
        >
          <h3 id="h3_get_user_1" className="my-0 text-white">
            Get User(s)
          </h3>
        </div>
        <div className="card-body">
          <p id="p_get_user_1" className="mt-2 ml-4 mr-4 text-justify">
            At any point during or after an interaction, you can query all
            users' affect models or a specific user's affect model from the
            aEi.ai service. This can be done by making a{" "}
            <strong>
              <u>GET</u>
            </strong>{" "}
            request to the <strong>get_users</strong> API with your target user
            ID as path variable.
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
                    <Td id="td_get_user_1">PAID</Td>
                    <Td id="td_get_user_2">GET</Td>
                    <Td id="td_get_user_3" colspan="2">
                      <strong>https://aei.ai/api/v1/users/{"{"}user_id{"}"}</strong>
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
                    <Td id="td_get_user_4">Authorization</Td>
                    <Td id="td_get_user_5">Header</Td>
                    <Td id="td_get_user_6">Yes</Td>
                    <Td id="td_get_user_7">
                      Value should be '
                      <strong>Bearer &lt;your access_token&gt;</strong>'
                    </Td>
                  </Tr>
                  <Tr>
                    <Td id="td_get_user_8">user_id</Td>
                    <Td id="td_get_user_9" className="text-nowrap">
                      Path Variable
                    </Td>
                    <Td id="td_get_user_10">No</Td>
                    <Td id="td_get_user_11">
                      Unique user ID of the target user. If not provided, list
                      of all users involved in all your interactions will be
                      returned
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
                    <Td id="td_get_user_12">status</Td>
                    <Td id="td_get_user_13">
                      <a href="#error_handling">Status</a>
                    </Td>
                    <Td id="td_get_user_14" colspan="2">
                      Response <a href="#error_handling">Status</a> object
                    </Td>
                  </Tr>
                  <Tr>
                    <Td id="td_get_user_15">
                      user{" "}
                      <strong>
                        <u>OR</u>
                      </strong>{" "}
                      users
                    </Td>
                    <Td id="td_get_user_16">
                      <a href="#data_structures_user">User</a>{" "}
                      <strong>
                        <u>OR</u>
                      </strong>{" "}
                      List&lt;<a href="#data_structures_user">User</a>&gt;
                    </Td>
                    <Td id="td_get_user_17" colspan="2">
                      If user_id is provided in URL, the corresponding{" "}
                      <a href="#data_structures_user">User</a> object is return
                      with 'user' key. If no user_id is provided, list of all
                      users in your account will be returned with 'users' key.
                      We do not suggest calling this API without user_id too
                      often as it might be very resource and time intensive.
                      Instead, we suggest to get specific users involved in a
                      specific interaction as explained in{" "}
                      <a href="#api_rest_get_all_users">Get User(s)</a> section
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </div>
          </div>

          {/* <!--Sample code to query a user's full affect model--> */}
          <p id="p_get_user_2" className="mt-2 ml-4 mr-4 text-justify">
            Knowing the access token, you can get a user as follows:
          </p>
          <p id="p_get_user_3">
            <code className="prettyprint">
              curl -X GET 'https://aei.ai/api/v1/users/&lt;your target
              userId&gt;' -H 'Authorization: Bearer &lt;your access_token&gt;'
            </code>
          </p>
          <p id="p_get_user_4" className="mt-2 ml-4 mr-4 text-justify">
            Expected response from aEi.ai would look the same as when we created
            a new user in{" "}
            <a href="#api_rest_create_new_user">Create New User</a> section.
          </p>
          <p id="p_get_user_5" className="mt-2 ml-4 mr-4 text-justify">
            Also, you can get all users in your account as follows:
          </p>
          <p id="p_get_user_6">
            <code className="prettyprint">
              curl -X GET 'https://aei.ai/api/v1/users' -H 'Authorization:
              Bearer &lt;your access_token&gt;'
            </code>
          </p>
          <p id="p_get_user_7" className="mt-2 ml-4 mr-4 text-justify">
            Assuming you have two newly created users in you account, expected
            response from aEi.ai would look the following:
            <JSONPretty
              json={{
                status: {
                  code: 200,
                  error: null,
                  help: null,
                },
                users: [
                  {
                    userId: "6782d2c8-0e46-4c33-8e1d-a9484d8da0eb",
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
                    userId: "fcc60b6e-264d-4df9-83d2-346a3799c688",
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
              }}
            />
          </p>
        </div>
      </div>
    </>
  );
}
getUsers.Layout = DocsLayout;
export default getUsers;
