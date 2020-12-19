import React from "react";
import DocsLayout from "../../components/layouts/docs";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import JSONPretty from "react-json-prettify";

function GetSatisfaction() {
  return (
    <>
      {/* <!--Get User's Satisfaction Model--> */}
      <div id="api_rest_get_satisfaction" className="card">
        <div
          className="card-header card-header-secondary"
          style={{ background: "linear-gradient(60deg, #391141, #8e24aa)" }}
        >
          <h3 id="h3_get_sat_1" className="my-0 text-white">
            Get User's Satisfaction Model
          </h3>
        </div>
        <div className="card-body">
          <p id="p_get_sat_1" className="mt-2 ml-4 mr-4 text-justify">
            At any point during or after an interaction, users' satisfaction
            model can be queried from the aEi.ai service. If you need
            incremental updates of a user's satisfaction model during an
            interaction, it should be queried after every new input to the
            interaction.
          </p>
          <p id="p_get_sat_2" className="mt-2 ml-4 mr-4 text-justify">
            Query a user's satisfaction model by making a{" "}
            <strong>
              <u>GET</u>
            </strong>{" "}
            request to the <strong>get_user_satisfaction</strong> API with your
            target user ID as path variable.
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
                    <Td id="td_get_sat_1">PAID</Td>
                    <Td id="td_get_sat_2">GET</Td>
                    <Td id="td_get_sat_3" colspan="2">
                      <strong>
                        https://aei.ai/api/v1/users/{"{"}user_id{"}"}
                        /satisfaction
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
                    <Td id="td_get_sat_4">Authorization</Td>
                    <Td id="td_get_sat_5">Header</Td>
                    <Td id="td_get_sat_6">Yes</Td>
                    <Td id="td_get_sat_7">
                      Value should be '
                      <strong>Bearer &lt;your access_token&gt;</strong>'
                    </Td>
                  </Tr>
                  <Tr>
                    <Td id="td_get_sat_8">user_id</Td>
                    <Td id="td_get_sat_9" className="text-nowrap">
                      Path Variable
                    </Td>
                    <Td id="td_get_sat_10">Yes</Td>
                    <Td id="td_get_sat_11">
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
                    <Td id="td_get_sat_12">status</Td>
                    <Td id="td_get_sat_13">
                      <a href="#error_handling">Status</a>
                    </Td>
                    <Td id="td_get_sat_14" colspan="2" className="text-nowrap">
                      Response <a href="#error_handling">status</a> object
                    </Td>
                  </Tr>
                  <Tr>
                    <Td id="td_get_sat_15">userId</Td>
                    <Td id="td_get_sat_16">String</Td>
                    <Td id="td_get_sat_17" colspan="2">
                      Unique user ID of the target user
                    </Td>
                  </Tr>
                  <Tr>
                    <Td id="td_get_sat_18">satisfaction</Td>
                    <Td id="td_get_sat_19">
                      <a href="#data_structures_satisfaction">Satisfaction</a>
                    </Td>
                    <Td id="td_get_sat_20" colspan="2">
                      <a href="#data_structures_satisfaction">
                        Satisfaction model
                      </a>{" "}
                      of the target user
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </div>
          </div>
          {/* <!--Sample code to query a user's satisfaction model--> */}
          <p id="p_get_sat_3" className="mt-2 ml-4 mr-4 text-justify">
            Knowing the access token, you can query user's satisfaction model as
            follows:
          </p>
          <p id="p_get_sat_4" className="mt-2 ml-4 mr-4 text-justify">
            <code className="prettyprint">
              curl -X GET 'https://aei.ai/api/v1/users/&lt;target
              user_id&gt;/satisfaction' -H 'Authorization: Bearer &lt;your
              access_token&gt;'
            </code>
          </p>
          <p id="p_get_sat_5" className="mt-2 ml-4 mr-4 text-justify">
            Expected response from aEi.ai would look like this:
            <JSONPretty
              json={{
                status: {
                  code: 200,
                  error: null,
                  help: null,
                },
                userId: "fcc60b6e-264d-4df9-83d2-346a3799c688",
                satisfaction: {
                  score: 0.0,
                },
              }}
            />
          </p>
        </div>
      </div>
    </>
  );
}
GetSatisfaction.Layout = DocsLayout;
export default GetSatisfaction;
