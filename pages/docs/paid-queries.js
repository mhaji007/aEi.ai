import React from "react";
import DocsLayout from "../../components/layouts/docs";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import JSONPretty from "react-json-prettify";

function PaidQueries() {
  return (
    <>
      {/* <!--Get Number of Queries to Paid Services--> */}
      <div id="api_rest_get_queries" className="card">
        <div
          className="card-header card-header-secondary"
          style={{ background: "linear-gradient(60deg, #391141, #8e24aa)" }}
        >
          <h3 id="h3_paid_q_1" className="my-0 text-white">
            Get Number of Queries to Paid Services
          </h3>
        </div>
        <div className="card-body">
          <p id="p_paid_q_1" className="mt-2 ml-4 mr-4 text-justify">
            You can get number of queries to paid API services (endpoints) from
            given start date-time (in GMT time-zone) to given end date-time (in
            GMT time-zone) by making a{" "}
            <strong>
              <u>GET</u>
            </strong>{" "}
            request to the metrics/queries API.
          </p>
          <p id="p_paid_q_2" className="mt-2 ml-4 mr-4 text-justify">
            Start and end date-times are in ISO-8601 format of
            yyyy-MM-dd[Thh:mm[:ss]], in which time is optional. If time is
            provided, seconds are optional as well. For example, 2019-01-23,
            2019-01-23T13:34, and 2019-01-23T13:34:12 are all valid date-times.
          </p>
          <ul>
            <li>
              If neither of start or end date-times are provided, total number
              of times this client had queried the paid endpoints in current
              month is returned.
            </li>
            <li>
              If only start date-time is given, number of all paid queries
              starting from given date-time (inclusive) and ending to present
              date-time is returned.
            </li>
            <li>
              If only end date-time is provided, number of all paid queries
              before that date-time (exclusive) is returned.
            </li>
            <li>
              Finally, if both start and end date-time are provided, number of
              all paid queries starting from start date-time (inclusive) and
              ending to end date-time (exclusive) is returned.
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
                    <Td id="td_paid_q_1">FREE</Td>
                    <Td id="td_paid_q_2">GET</Td>
                    <Td id="td_paid_q_3" colspan="2">
                      <strong>https://aei.ai/api/v1/metrics/queries</strong>
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
                    <Td id="td_paid_q_4">Authorization</Td>
                    <Td id="td_paid_q_5">Header</Td>
                    <Td id="td_paid_q_6">Yes</Td>
                    <Td id="td_paid_q_7">
                      Value should be '
                      <strong>Bearer &lt;your access_token&gt;</strong>'
                    </Td>
                  </Tr>
                  <Tr>
                    <Td id="td_paid_q_8">start</Td>
                    <Td id="td_paid_q_9" className="text-nowrap">
                      Request Param
                    </Td>
                    <Td id="td_paid_q_10">No</Td>
                    <Td id="td_paid_q_11">
                      Search start date-time in yyyy-MM-dd[Thh:mm[:ss]] format
                      in GMT time-zone
                    </Td>
                  </Tr>
                  <Tr>
                    <Td id="td_paid_q_12">end</Td>
                    <Td id="td_paid_q_13" className="text-nowrap">
                      Request Param
                    </Td>
                    <Td id="td_paid_q_14">No</Td>
                    <Td id="td_paid_q_15">
                      Search end date-time in yyyy-MM-dd[Thh:mm[:ss]] format in
                      GMT time-zone
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
                    <th colspan="4" className="text-center">
                      <strong>Response</strong>
                    </th>
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
                    <Td id="td_paid_q_16">status</Td>
                    <Td id="td_paid_q_17">
                      <a href="#error_handling">Status</a>
                    </Td>
                    <Td id="td_paid_q_18" colspan="2">
                      Response <a href="#error_handling">status</a> object
                    </Td>
                  </Tr>
                  <Tr>
                    <Td id="td_paid_q_19">queries</Td>
                    <Td id="td_paid_q_20">Long</Td>
                    <Td id="td_paid_q_21" colspan="2">
                      Number of queries to paid API services (endpoints) from
                      start date-time to end date-time
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </div>
          </div>
          {/* <!--Sample code to get number of paid queries--> */}
          <p id="p_paid_q_3" className="mt-2 ml-4 mr-4 text-justify">
            An example usage of this API is as follows:
          </p>
          <p id="p_paid_q_4" className="mt-2 ml-4 mr-4 text-justify">
            <code className="prettyprint">
              curl -X GET
              'https://aei.ai/api/v1/metrics/queries?start=2019-10-01&end=2019-11-01'
              -H 'Authorization: Bearer &lt;your access_token&gt;'
            </code>
          </p>
          <p id="p_paid_q_5" className="mt-2 ml-4 mr-4 text-justify">
            Expected response from aEi.ai service looks like the following:
            <JSONPretty
              json={{
                status: {
                  code: 200,
                  error: null,
                  help: null,
                },
                queries: 27,
              }}
            />
          </p>
        </div>
      </div>
    </>
  );
}
PaidQueries.Layout = DocsLayout;
export default PaidQueries;
