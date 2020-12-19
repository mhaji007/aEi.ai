import React from "react";
import DocsLayout from "../../components/layouts/docs";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import JSONPretty from "react-json-prettify";

function AnyalyzeMultipleInputs() {
  return (
    <>
      {/* <!--Analyze List of Interactions--> */}
      <div id="api_rest_analyze_list_of_interaction" className="card">
        <div
          className="card-header card-header-secondary"
          style={{ background: "linear-gradient(60deg, #391141, #8e24aa)" }}
        >
          <h3 id="h3_inter_list_1" className="my-0 text-white">
            Analyze a List of Interactions
          </h3>
        </div>
        <div className="card-body">
          <p id="p_inter_list_1" className="mt-2 ml-4 mr-4 text-justify">
            You can analyze a list of interactions in a single API call by
            loading them as a JSON object. Using this API you can analyze
            offline interactions in bulk. The input JSON object should follow
            this schema:
            {/* <pre className="prettyprint">
[
  {
    "interactionId": "&lt;INTERACTION ID&gt;",
    "interactionTurns": [
      {
        "userId": "&lt;USER ID&gt;",
        "text": "&lt;USER UTTERANCE&gt;",
        "image": null,
        "voice": null
      },
      ...
    ]
  },
  ...
]</pre> */}
          </p>
          <div
            className="alert alert-danger mt-4 mb-4"
            role="alert"
            style={{ backgroundColor: "rgba(217, 83, 79, 0.2)" }}
          >
            <div className="alert-heading ml-3 mr-3 text-danger">
              <h3 id="h3_inter_list_3" className="font-weight-normal">
                <i className="fa fa-lightbulb-o text-danger mr-4"></i>Note
              </h3>
            </div>
            <p id="p_inter_list_3" className="ml-3 mr-3 text-dark">
              Version 1 supports text only. Image and voice inputs should be
              ignored or kept as null in version 1.
            </p>
          </div>
          <div
            className="alert alert-success mt-4 mb-4"
            role="alert"
            style={{ backgroundColor: "rgba(92, 184, 92, 0.2)" }}
          >
            <div className="alert-heading ml-3 mr-3 text-success">
              <h3 id="h3_inter_list_2" className="font-weight-normal">
                <i className="fa fa-info text-success mr-4"></i>Info
              </h3>
            </div>
            <p id="p_inter_list_4" className="ml-3 mr-3 text-dark">
              Every user message in the JSON object is counted as one API call
              for billing purposes. For example, if two interactions with 3 user
              utterances in each are passed to this API, it is counted as 6 API
              calls.
            </p>
          </div>

          <p id="p_inter_list_5" className="mt-2 ml-4 mr-4 text-justify">
            To analyze a list of interactions, make a{" "}
            <strong>
              <u>POST</u>
            </strong>{" "}
            request to the <strong>post_inputs_interaction_list</strong> API,
            with the interaction list passed in request body.
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
                    <Td id="td_inter_list_1">PAID</Td>
                    <Td id="td_inter_list_2">POST</Td>
                    <Td id="td_inter_list_3" colspan="2">
                      <strong>
                        https://aei.ai/api/v1/inputs/interaction-list
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
                    <Td id="td_inter_list_4">Authorization</Td>
                    <Td id="td_inter_list_5">Header</Td>
                    <Td id="td_inter_list_6">Yes</Td>
                    <Td id="td_inter_list_7">
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
                    <Td id="td_inter_list_10">Yes</Td>
                    <Td id="td_inter_list_11" colspan="3">
                      List of interactions as a JSON object with above schema
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
                    <Td id="td_inter_list_12">status</Td>
                    <Td id="td_inter_list_13">
                      <a href="#error_handling">Status</a>
                    </Td>
                    <Td id="td_inter_list_14" colspan="2">
                      Response <a href="#error_handling">status</a> object
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </div>
          </div>
          {/* <!--Sample code to have a user say something-->
                                <p id="p_inter_list_6" className="mt-2 ml-4 mr-4 text-justify">An example usage of this API is as follows:</p>
                                <p id="p_inter_list_7" className="mt-2 ml-4 mr-4 text-justify"><pre className="prettyprint">curl -X POST 'https://aei.ai/api/v1/inputs/interaction-list' -H 'Authorization: Bearer &lt;your access_token&gt;' -d '[
  {
    "interactionId": "16326fa9-374d-4bb0-bb8d-6accea3427c0",
    "interactionTurns": [
      {
        "userId": "109ddf80-e1a1-490c-ba74-ac21eb8b7fe9",
        "text": "I am happy"
      },
      {
        "userId": "33dabbdc-b430-4864-92ff-971c10f96fc3",
        "text": "But I am sad"
      }
    ]
  },
  {
    "interactionId": "16326fa9-374d-4bb0-bb8d-6accea3427c0",
    "interactionTurns": [
      {
        "userId": "6782d2c8-0e46-4c33-8e1d-a9484d8da0eb",
        "text": "I am angry"
      },
      {
        "userId": "6c979353-2ceb-4877-8620-5d190d6cddf8",
        "text": "I am scared"
      }
    ]
  }
]'</pre></p> */}
          <p id="p_inter_list_8" className="mt-2 ml-4 mr-4 text-justify">
            Expected response from aEi.ai service looks like the following:
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
AnyalyzeMultipleInputs.Layout = DocsLayout;
export default AnyalyzeMultipleInputs;
