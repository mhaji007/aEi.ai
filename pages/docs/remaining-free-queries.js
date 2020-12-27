import React from "react";
import DocsLayout from "../../components/layouts/docs";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import JSONPretty from "react-json-prettify";

function RemainingFreeQueries() {
  return (
    <>
      {/* <!--Get Number of Remaining Free Queries--> */}
      <div id="api_rest_get_remaining_free_queries" className="card">
        <div
          className="card-header card-header-secondary"
          style={{ background: "linear-gradient(60deg, #391141, #8e24aa)" }}
        >
          <h3 id="h3_remain_free_q_1" className="my-0 text-white">
            Get Number of Remaining Free Queries
          </h3>
        </div>
        <div className="card-body">
          <p id="p_remain_free_q_1" className="mt-2 ml-4 mr-4 text-justify">
            You can get number of remaining free queries of current month by
            making a{" "}
            <strong>
              <u>GET</u>
            </strong>{" "}
            query to the metrics/queries/remaining API.
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
                    <Td id="td_remain_free_q_1">FREE</Td>
                    <Td id="td_remain_free_q_2">GET</Td>
                    <Td id="td_remain_free_q_3" colspan="2">
                      <strong>
                        https://aei.ai/api/v1/metrics/queries/remaining
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
                    <Td id="td_remain_free_q_4">Authorization</Td>
                    <Td id="td_remain_free_q_5">Header</Td>
                    <Td id="td_remain_free_q_6">Yes</Td>
                    <Td id="td_remain_free_q_7">
                      Value should be '
                      <strong>Bearer &lt;your access_token&gt;</strong>'
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
                    <Td id="td_remain_free_q_8">status</Td>
                    <Td id="td_remain_free_q_9">
                      <a href="#error_handling">Status</a>
                    </Td>
                    <Td id="td_remain_free_q_10" colspan="2">
                      Response <a href="#error_handling">status</a> object
                    </Td>
                  </Tr>
                  <Tr>
                    <Td id="td_remain_free_q_11">queries</Td>
                    <Td id="td_remain_free_q_12">Long</Td>
                    <Td id="td_remain_free_q_13" colspan="2">
                      Number of remaining queries out of current month's FREE
                      1000 queries
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </div>
          </div>
          {/* <!--Sample code to get number of used free queries in current month--> */}
          <p id="p_remain_free_q_2" className="mt-2 ml-4 mr-4 text-justify">
            An example usage of this API is as follows:
          </p>
          <p id="p_remain_free_q_3" className="mt-2 ml-4 mr-4 text-justify">
            <code className="prettyprint">
              curl -X GET 'https://aei.ai/api/v1/metrics/queries/remaining' -H
              'Authorization: Bearer &lt;your access_token&gt;'
            </code>
          </p>
          <p id="p_remain_free_q_4" className="mt-2 ml-4 mr-4 text-justify">
            Expected response from aEi.ai would be the same as the response
            received when we got number of PAID queries in previous sections.
          </p>
        </div>
      </div>
    </>
  );
}

RemainingFreeQueries.Layout = DocsLayout;
export default RemainingFreeQueries;
