import React from "react";
import DocsLayout from "../../components/layouts/docs";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import JSONPretty from "react-json-prettify";

function EndpointQueries() {
  return (
    <>
      {/* <!--Get Number of Queries to a Given Endpoint--> */}
      <div id="api_rest_get_queries_to_endpoint" className="card">
        <div
          className="card-header card-header-secondary"
          style={{ background: "linear-gradient(60deg, #391141, #8e24aa)" }}
        >
          <h3 id="h3_ep_q_1" className="my-0 text-white">
            Get Number of Queries to a Given Endpoint
          </h3>
        </div>
        <div className="card-body">
          <p id="p_ep_q_1" className="mt-2 ml-4 mr-4 text-justify">
            You can get number of queries to a specific API endpoint starting
            from a given start date-time (inclusive) and ending to a given end
            date-time (exclusive) by making a{" "}
            <strong>
              <u>GET</u>
            </strong>{" "}
            request to the metrics/queries/endpoints API.
          </p>
          <p id="p_ep_q_2" className="mt-2 ml-4 mr-4 text-justify">
            Start and end date-times are in ISO-8601 format of
            yyyy-MM-dd[Thh:mm[:ss]], in which time is optional. If time is
            provided, seconds are optional as well. For example, 2019-01-23,
            2019-01-23T13:34, and 2019-01-23T13:34:12 are all valid date-times.
          </p>
          <ul>
            <li>
              If neither of start or end date-times are provided, total number
              of times this client had queried the target endpoint in current
              month is returned.
            </li>
            <li>
              If only start date-time is given, number of queries to the target
              endpoint starting from given date-time (inclusive) and ending to
              present date-time is returned.
            </li>
            <li>
              If only end date-time is provided, number of queries to the target
              endpoint before that date-time (exclusive) is returned.
            </li>
            <li>
              Finally, if both start and end date-time are provided, number of
              queries to the target endpoint starting from start date-time
              (inclusive) and ending to end date-time (exclusive) is returned.
            </li>
          </ul>
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
                    <Td id="td_ep_q_1">FREE</Td>
                    <Td id="td_ep_q_2">GET</Td>
                    <Td id="td_ep_q_3" colspan="2">
                      <strong>
                        https://aei.ai/api/v1/metrics/queries/endpoint
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
                    <Td id="td_ep_q_4">Authorization</Td>
                    <Td id="td_ep_q_5">Header</Td>
                    <Td id="td_ep_q_6">Yes</Td>
                    <Td id="td_ep_q_7">
                      Value should be '
                      <strong>Bearer &lt;your access_token&gt;</strong>'
                    </Td>
                  </Tr>
                  <Tr>
                    <Td id="td_ep_q_8">start</Td>
                    <Td id="td_ep_q_9" className="text-nowrap">
                      Request Param
                    </Td>
                    <Td id="td_ep_q_10">No</Td>
                    <Td id="td_ep_q_11">
                      Search start date-time in yyyy-MM-dd[Thh:mm[:ss]] format
                      in GMT time-zone
                    </Td>
                  </Tr>
                  <Tr>
                    <Td id="td_ep_q_12">end</Td>
                    <Td id="td_ep_q_13" className="text-nowrap">
                      Request Param
                    </Td>
                    <Td id="td_ep_q_14">No</Td>
                    <Td id="td_ep_q_15">
                      Search end date-time in yyyy-MM-dd[Thh:mm[:ss]] format in
                      GMT time-zone
                    </Td>
                  </Tr>
                  <Tr>
                    <Td id="td_ep_q_16">endpoint</Td>
                    <Td id="td_ep_q_17" className="text-nowrap">
                      Request Param
                    </Td>
                    <Td id="td_ep_q_18">Yes</Td>
                    <Td id="td_ep_q_19">
                      One of the following endpoint names:{" "}
                      <a href="#api_rest_create_new_user">
                        <strong>post_users</strong>
                      </a>
                      ,{" "}
                      <a href="#api_rest_get_all_users">
                        <strong>get_users</strong>
                      </a>
                      ,{" "}
                      <a href="#api_rest_get_emotion">
                        <strong>get_user_emotion</strong>
                      </a>
                      ,{" "}
                      <a href="#api_rest_get_mood">
                        <strong>get_user_mood</strong>
                      </a>
                      ,{" "}
                      <a href="#api_rest_get_personality">
                        <strong>get_user_personality</strong>
                      </a>
                      ,{" "}
                      <a href="#api_rest_get_satisfaction">
                        <strong>get_user_satisfaction</strong>
                      </a>
                      ,{" "}
                      <a href="#api_rest_get_social_perception">
                        <strong>get_user_social_perception</strong>
                      </a>
                      ,{" "}
                      <a href="#api_rest_get_empathy">
                        <strong>get_user_empathy</strong>
                      </a>
                      ,{" "}
                      <a href="#api_rest_create_new_interaction">
                        <strong>post_interactions</strong>
                      </a>
                      ,{" "}
                      <a href="#api_rest_add_users_to_interaction">
                        <strong>put_interactions_user</strong>
                      </a>
                      ,{" "}
                      <a href="#api_rest_remove_users_from_interaction">
                        <strong>delete_interactions_user</strong>
                      </a>
                      ,{" "}
                      <a href="#api_rest_get_interaction">
                        <strong>get_interactions</strong>
                      </a>
                      ,{" "}
                      <a href="#api_rest_send_text_message_to_interaction">
                        <strong>post_inputs_text</strong>
                      </a>
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
                    <Td id="td_ep_q_20">status</Td>
                    <Td id="td_ep_q_21">
                      <a href="#error_handling">Status</a>
                    </Td>
                    <Td id="td_ep_q_22" colspan="2">
                      Response <a href="#error_handling">status</a> object
                    </Td>
                  </Tr>
                  <Tr>
                    <Td id="td_ep_q_23">queries</Td>
                    <Td id="td_ep_q_24">Long</Td>
                    <Td id="td_ep_q_25" colspan="2">
                      Number of queries to the API service (endpoints) with
                      given name, from start date-time to end date-time
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </div>
          </div>
          {/* <!--Sample code to get number of queries to specific endpoint--> */}
          <p id="p_ep_q_3" className="mt-2 ml-4 mr-4 text-justify">
            An example usage of this API is as follows, which gets number of API
            calls to the <strong>get_users</strong> endpoint, between 2019-10-01
            and 2019-11-01:
          </p>
          <p id="p_ep_q_4" className="mt-2 ml-4 mr-4 text-justify">
            <code className="prettyprint">
              curl -X GET
              'https://aei.ai/api/v1/metrics/queries/endpoint?start=2019-10-01&end=2019-11-01&endpoint=get_users'
              -H 'Authorization: Bearer &lt;your access_token&gt;'
            </code>
          </p>
          <p id="p_ep_q_5" className="mt-2 ml-4 mr-4 text-justify">
            Expected response from aEi.ai would be the same as the response
            received when we got number of PAID queries in previous section.
          </p>
        </div>
      </div>
    </>
  );
}
EndpointQueries.Layout = DocsLayout;
export default EndpointQueries;
