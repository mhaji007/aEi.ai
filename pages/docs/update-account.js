import React from "react";
import DocsLayout from "../../components/layouts/docs";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import JSONPretty from "react-json-prettify";

function UpdateAccount() {
  return (
    <>
      {/* <!--Update Account Status--> */}
      <div id="api_rest_update_account_status" className="card">
        <div
          className="card-header card-header-secondary"
          style={{ background: "linear-gradient(60deg, #391141, #8e24aa)" }}
        >
          <h3 id="h3_status_1" className="my-0 text-white">
            Update Account Status
          </h3>
        </div>
        <div className="card-body">
          <p id="p_status_1" className="mt-2 ml-4 mr-4 text-justify">
            You can update/switch your account status to to one of{" "}
            <strong>active</strong>, <strong>inactive</strong>, or{" "}
            <strong>deleted</strong> by making a{" "}
            <strong>
              <u>PUT</u>
            </strong>{" "}
            request to the clients/status API with the new status as a request
            parameter.
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
                    <Td id="td_status_1">FREE</Td>
                    <Td id="td_status_2">PUT</Td>
                    <Td id="td_status_3" colspan="2">
                      <strong>https://aei.ai/api/v1/clients/status</strong>
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
                    <Td id="td_status_4">Authorization</Td>
                    <Td id="td_status_5">Header</Td>
                    <Td id="td_status_6">Yes</Td>
                    <Td id="td_status_7">
                      Value should be '
                      <strong>Bearer &lt;your access_token&gt;</strong>'
                    </Td>
                  </Tr>
                  <Tr>
                    <Td id="td_status_8">status</Td>
                    <Td id="td_status_9" className="text-nowrap">
                      Request Param
                    </Td>
                    <Td id="td_status_10">Yes</Td>
                    <Td id="td_status_11">
                      One of the following account statuses:{" "}
                      <strong>active</strong>, <strong>inactive</strong>, or{" "}
                      <strong>deleted</strong>
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
                    <Td id="td_status_12">status</Td>
                    <Td id="td_status_13">
                      <a href="#error_handling">Status</a>
                    </Td>
                    <Td id="td_status_14" colspan="2">
                      Response <a href="#error_handling">status</a> object
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </div>
          </div>
          {/* <!--Sample code to get number of queries to specific endpoint--> */}
          <p id="p_status_2" className="mt-2 ml-4 mr-4 text-justify">
            An example usage of this API to change the account status to
            "inactive" mode is as follows:
          </p>
          <p id="p_status_3" className="mt-2 ml-4 mr-4 text-justify">
            <code className="prettyprint">
              curl -X PUT 'https://aei.ai/api/v1/clients/status?stauts=inactive'
              -H 'Authorization: Bearer &lt;your access_token&gt;'
            </code>
          </p>
          <p id="p_status_4" className="mt-2 ml-4 mr-4 text-justify">
            Expected response looks like the following:
            <JSONPretty
              json={{
                status: {
                  code: 200,
                  error: null,
                  help: null,
                },
              }}
            />
          </p>
        </div>
      </div>
    </>
  );
}

UpdateAccount.Layout = DocsLayout;

export default UpdateAccount;
