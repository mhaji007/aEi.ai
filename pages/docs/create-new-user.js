import React from "react";
import DocsLayout from "../../components/layouts/docs";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import JSONPretty from "react-json-prettify";

function createNewUser() {
  return (
    <>
      {/* <!--Create New User--> */}
      <div id="api_rest_create_new_user" className="card">
        <div
          className="card-header card-header-secondary"
          style={{ background: "linear-gradient(60deg, #391141, #8e24aa)" }}
        >
          <h3 id="h3_new_user_1" className="my-0 text-white">
            Create New User
          </h3>
        </div>
        <div className="card-body">
          <p id="p_new_user_1" className="mt-2 ml-4 mr-4 text-justify">
            For every individual involved in an interaction, a new user with a
            unique ID should be created. This unique user ID is used in all
            interactions where that specific user is involved in order to
            incrementally improve the user's affect models.
          </p>
          <p id="p_new_user_2" className="mt-2 ml-4 mr-4 text-justify">
            You can create new users by making{" "}
            <strong>
              <u>POST</u>
            </strong>{" "}
            requests to the <strong>post_users</strong> API. NOTE: replace the
            access_token with the one you received in authentication step.
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
                    <Td id="td_new_user_1">PAID</Td>
                    <Td id="td_new_user_2">POST</Td>
                    <Td id="td_new_user_3" colspan="2">
                      <strong>https://aei.ai/api/v1/users</strong>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </div>
          </div>

          {/* End of first table */}
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
                    <Td id="td_new_user_4">Authorization</Td>
                    <Td id="td_new_user_5">Header</Td>
                    <Td id="td_new_user_6">Yes</Td>
                    <Td id="td_new_user_7">
                      Value should be '
                      <strong>Bearer &lt;your access_token&gt;</strong>'
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </div>
          </div>
          {/* End of second table */}
          <div className="card-body">
            <div className="d-flex justify-content-center">
              <Table className="table table-responsive table-striped w-auto rounded-top rounded-bottom border">
                <Thead className="thead-dark">
                  <Tr>
                    <Th colspan="4" className="text-center">
                      <strong>Body</strong>
                    </Th>
                  </Tr>
                </Thead>
                <Thead className="thead-light">
                  <Tr>
                    <Th>
                      <strong>Required</strong>
                    </Th>
                    <Th colspan="3">
                      <strong>Description</strong>
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td id="td_new_user_10">No</Td>
                    <Td id="td_new_user_11" colspan="3">
                      Optional String key-value pairs as user attributes, e.g.,{" "}
                      {"{"}'first_name': 'John'{"}"}
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </div>
          </div>

          {/* End of third table */}
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
                    <Td id="td_new_user_12">status</Td>
                    <Td id="td_new_user_13">
                      <a href="#error_handling">Status</a>
                    </Td>
                    <Td id="td_new_user_14" colspan="2">
                      Response <a href="#error_handling">status</a> object
                    </Td>
                  </Tr>
                  <Tr>
                    <Td id="td_new_user_15">user</Td>
                    <Td id="td_new_user_16">
                      <a href="#data_structures_user">User</a>
                    </Td>
                    <Td id="td_new_user_17" colspan="2">
                      A new <a href="#data_structures_user">User</a> object
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </div>
          </div>

          <div
            className="alert alert-info mt-4 mb-4"
            role="alert"
            style={{ backgroundColor: "rgba(91, 192, 222, 0.2)" }}
          >
            <div className="alert-heading ml-3 mr-3 text-info">
              <h3 id="h3_new_user_2" className="font-weight-normal">
                <i className="fa fa-info text-info mr-4"></i>Info
              </h3>
            </div>
            <p id="p_new_user_3" className="ml-3 mr-3 text-dark">
              When a{" "}
              <strong>
                <u>new user</u>
              </strong>{" "}
              is created, her affective features are initiated with default
              values provided in{" "}
              <a href="#data_structures_user" className="text-secondary">
                Data Structures
              </a>{" "}
              section.
            </p>
          </div>

          {/* <!--Sample code to create new users--> */}
          <p id="p_new_user_4" className="mt-2 ml-4 mr-4 text-justify">
            Knowing the access token, you can get create a new user as follows:
          </p>
          <p id="p_new_user_5">
            <code className="prettyprint">
              curl -X POST 'https://aei.ai/api/v1/users' -H 'Authorization:
              Bearer &lt;your access_token&gt;>'
            </code>
          </p>
          <p id="p_new_user_6" className="mt-2 ml-4 mr-4 text-justify">
            Expected response from aEi.ai service after each call looks like the
            following with a different userId. As shown below, all affective
            qualities of a new user are set to their default values:
            <JSONPretty
              json={{
                status: {
                  code: 200,
                  error: null,
                  help: null,
                },
                user: {
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
              }}
            />
          </p>
        </div>
      </div>
    </>
  );
}
createNewUser.Layout = DocsLayout;
export default createNewUser;
