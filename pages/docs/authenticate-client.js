import React from "react";
import DocsLayout from "../../components/layouts/docs";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import JSONPretty from "react-json-prettify";

function authenticateClient() {
  return (
    <div id="api_rest_authenticate_client" className="card">
      <div
        className="card-header card-header-secondary"
        style={{ background: "linear-gradient(60deg, #391141, #8e24aa)" }}
      >
        <h3 id="h3_auth_1" className="my-0 text-white">
          Authenticate Client
        </h3>
      </div>
      <div className="card-body">
        <p id="p_auth_1" className=" column mt-2 ml-4 mr-4 text-justify">
          The authentication API generates an access token, which authenticates
          your other API calls. Access token expires after 30 minutes. When
          token expires, you need to make a new authentication API call to
          acquire a new access token. The same account username and password
          used to register are used to generate the access token.
        </p>
        <p id="p_auth_2" className="mt-2 ml-4 mr-4 text-justify">
          You can authenticate the client you registered in step 2 by making a{" "}
          <strong>
            <u>POST</u>
          </strong>{" "}
          request to the authentication API, with{" "}
          <strong>
            <u>Authentication</u>
          </strong>{" "}
          header set to Base64 encoding of your username:password, and{" "}
          <strong>
            <u>grant_type</u>
          </strong>{" "}
          set to{" "}
          <strong>
            <u>client_credentials</u>
          </strong>
          .
        </p>

        <p id="p_auth_3" className="mt-2 ml-4 mr-4 text-justify">
          In order to encode &lt;your username&gt;:&lt;your password&gt; to
          Base64 format, you can use the Base64 encoding capability provided in
          different programming languages, for example, <strong>base64</strong>{" "}
          in cURL, <strong>base64_encode()</strong> in <i>PHP</i>,{" "}
          <strong>base64.b64encode()</strong> in <em>Python</em>,{" "}
          <strong>encode_base64()</strong> in <em>Perl</em>,{" "}
          <strong>System.Convert.ToBase64STring()</strong> in{" "}
          <em>Visual Basic</em>,{" "}
          <strong>System.Convert.ToBase64STring()</strong> in <em>C#</em>,{" "}
          <strong>Base64.getEncoder().encodeToSTring()</strong> in <em>Java</em>
          , or <strong>Base64.encode64()</strong> in <em>Ruby</em>. If your
          username is "<strong>test</strong>" and your password is "
          <strong>Pass123!</strong>", the Base64 encoding for "
          <strong>test:Pass123!</strong>" is "
          <strong>dGVzdDpQYXNzMTIzIQ==</strong>".
        </p>
        <div className="card-body">
          <div className="d-flex justify-content-center">
            <Table className="table table-responsive table-sTriped w-auto rounded-top rounded-bottom border">
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
                  <Td id="td_auth_1">FREE</Td>
                  <Td id="td_auth_2">POST</Td>
                  <Td id="td_auth_3" colspan="2">
                    <strong>https://aei.ai/oauth/token</strong>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </div>
        </div>

        <div className="card-body">
          <div className="d-flex justify-content-center">
            <Table className="table table-responsive table-sTriped w-auto rounded-top rounded-bottom border">
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
                  <Td id="td_auth_4">grant_type</Td>
                  <Td id="td_auth_5">Request Param</Td>
                  <Td id="td_auth_6">Yes</Td>
                  <Td id="td_auth_7">
                    Value should always be set to '
                    <strong>client_credentials</strong>'
                  </Td>
                </Tr>
                <Tr>
                  <Td id="td_auth_8">Authorization</Td>
                  <Td id="td_auth_9">Header</Td>
                  <Td id="td_auth_10">Yes</Td>
                  <Td id="td_auth_11">
                    Value should be set to '
                    <strong>
                      Basic &lt;your username&gt;:&lt;your password&gt;
                    </strong>
                    ', where{" "}
                    <strong>&lt;your username&gt;:&lt;your password&gt;</strong>{" "}
                    should be Base64 encoded
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </div>
        </div>
        <div className="card-body">
          <div className="d-flex justify-content-center">
            <Table className="table table-responsive table-sTriped w-auto rounded-top rounded-bottom border">
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
                  <Td id="td_auth_12">access_token</Td>
                  <Td id="td_auth_13">String</Td>
                  <Td id="td_auth_14" colspan="2">
                    Access token to be included in all API calls to authenticate
                    them
                  </Td>
                </Tr>
                <Tr>
                  <Td id="td_auth_15">token_type</Td>
                  <Td id="td_auth_16">String</Td>
                  <Td id="td_auth_17" colspan="2">
                    Authentication token type
                  </Td>
                </Tr>
                <Tr>
                  <Td id="td_auth_18">expires_in</Td>
                  <Td id="td_auth_19">int</Td>
                  <Td id="td_auth_20" colspan="2">
                    Access token expiration in seconds
                  </Td>
                </Tr>
                <Tr>
                  <Td id="td_auth_21">scope</Td>
                  <Td id="td_auth_22">String</Td>
                  <Td id="td_auth_23" colspan="2">
                    Space-separated list of client access types to database
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </div>
        </div>

        <p id="p_auth_4" className="mt-2 ml-4 mr-4 text-justify">
          Knowing the Base64 encoding of your username:password, you can get an
          access token as follows:
        </p>
        <p id="p_auth_5">
          <code className="prettyprint">
            credentials=$(echo -n &lt;YOUR USERNAME&gt;:&lt;YOUR PASSWORD&gt; |
            base64) curl -X POST
            'https://aei.ai/oauth/token?grant_type=client_credentials' -H
            "Authorization: Basic $credentials"
          </code>
        </p>
        <p id="p_auth_6" className="mt-2 ml-4 mr-4 text-justify">
          Expected output looks like this:
          {/* <pre className="prettyprint">

{
    "access_token": "5cfb2d54-0375-4572-a6d7-93717ad3505d",
    "token_type": "bearer",
    "expires_in": 31533117,
    "scope": "Trust read write"
}</pre> */}
          <JSONPretty
            json={{
              access_token: "5cfb2d54-0375-4572-a6d7-93717ad3505d",
              token_type: "bearer",
              expires_in: 31533117,
              scope: "Trust read write",
            }}
          />
        </p>
        <div
          className="alert alert-danger mt-4 mb-4"
          role="alert"
          style={{ backgroundColor: "rgba(217, 83, 79, 0.2)" }}
        >
          <div className="alert-heading ml-3 mr-3 text-danger">
            <h3 id="h3_auth_2" className="font-weight-normal">
              <i className="fa fa-lightbulb-o text-danger mr-4"></i>Note
            </h3>
          </div>
          <p id="p_auth_6" className="ml-3 mr-3 text-dark">
            Above access token is an example. Your access token will be a
            different one. In all the following steps, the access token obtained
            above should be provided for authentication. You can provide that as
            a request parameter with key{" "}
            <strong>
              <u>access_token</u>
            </strong>
            , or{" "}
            <strong>
              <u>Authorization</u>
            </strong>{" "}
            header set to{" "}
            <strong>
              <u>Bearer &lt;your access_token&gt;</u>
            </strong>
            . Second approach is preferred because the{" "}
            <strong>
              <u>access_token</u>
            </strong>{" "}
            is not shown in URI.
          </p>
        </div>
      </div>
    </div>
  );
}
authenticateClient.Layout = DocsLayout;
export default authenticateClient;
