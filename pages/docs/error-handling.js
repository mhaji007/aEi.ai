import React from "react";
import DocsLayout from "../../components/layouts/docs";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

function errorHandling() {
  return (
    <div id="error_handling" className="card">
      <div
        className="card-header card-header-primary"
        style={{ background: "linear-gradient(60deg, #391141, #8e24aa)" }}
      >
        <h2 id="h2_error_1" className="my-0 font-weight-normal text-white">
          Error Handling
        </h2>
      </div>
      <div className="card-body">
        <div className="column">
          <p id="p_error_1" className="mt-2 ml-4 mr-4 text-justify">
            The aEi.ai services return a status object, which uses standard HTTP
            response codes to indicate response status. Success is always
            indicated with a 200 response, failures with 4xx responses, and
            internal server errors with 5xx responses. Following is the{" "}
            <strong>Status</strong> data structure returned by the aEi.ai
            services:
          </p>
          <div className="d-flex justify-content-center">
            <Table className="table table-responsive table-striped w-auto rounded-top rounded-bottom border">
              <Thead className="thead-dark">
                <Tr>
                  <Th>
                    <strong>Property</strong>
                  </Th>
                  <Th>
                    <strong>Type</strong>
                  </Th>
                  <Th>
                    <strong>Default</strong>
                  </Th>
                  <Th>
                    <strong>Description</strong>
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td id="td_error_1">code</Td>
                  <Td id="td_error_2">Integer</Td>
                  <Td id="td_error_3"></Td>
                  <Td id="td_error_4">HTTP status code</Td>
                </Tr>
                <Tr>
                  <Td id="td_error_5">error</Td>
                  <Td id="td_error_6">String</Td>
                  <Td id="td_error_7">null</Td>
                  <Td id="td_error_8">Description of the error</Td>
                </Tr>
                <Tr>
                  <Td id="td_error_9">help</Td>
                  <Td id="td_error_10">String</Td>
                  <Td id="td_error_11">null</Td>
                  <Td id="td_error_12">Error resolution suggestions</Td>
                </Tr>
              </Tbody>
            </Table>
          </div>

          <p id="p_error_2" className="mt-2 ml-4 mr-4 text-justify">
            Following are possible HTTP response codes:
          </p>

          <div className="d-flex justify-content-center">
            <Table className="table table-responsive table-striped w-auto rounded-top rounded-bottom border">
              <Thead className="thead-dark">
                <Tr>
                  <Th className="text-nowrap">
                    <strong>Status code</strong>
                  </Th>
                  <Th>
                    <strong>Description</strong>
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr className="column">
                  <Td id="td_error_13">200</Td>
                  <Td id="td_error_14">OK. Request succeeded</Td>
                </Tr>
                <Tr className="column">
                  <Td id="td_error_15">400</Td>
                  <Td id="td_error_16">
                    Bad request. Request is not properly formatted; requested
                    language is not supported; API version is not provided; or
                    invalid version is provided, etc.
                  </Td>
                </Tr>
                <Tr className="column">
                  <Td id="td_error_17">401</Td>
                  <Td id="td_error_18">
                    Unauthorized. Access is denied due to invalid service
                    credentials or wrong/expired access token.
                  </Td>
                </Tr>
                <Tr className="column">
                  <Td id="td_error_19">429</Td>
                  <Td id="td_error_20">
                    Too Many Requests. Either number of queries exceeded the
                    account limit; or too many requests are being processed at
                    the time, and you should try the request again later.
                  </Td>
                </Tr>
                <Tr className="column">
                  <Td id="td_error_21">500</Td>
                  <Td id="td_error_22">
                    Internal Server Error. The service encountered an internal
                    error.
                  </Td>
                </Tr>
                <Tr className="column">
                  <Td id="td_error_23">504</Td>
                  <Td id="td_error_24">
                    Gateway Timeout. The request timed out; or input size is too
                    large to process in reasonable time. If input size is too
                    large, consider reducing its size, or sending it in smaller
                    chunks.
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

errorHandling.Layout = DocsLayout;
export default errorHandling;
