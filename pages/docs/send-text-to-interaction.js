import React from "react";
import DocsLayout from "../../components/layouts/docs";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import JSONPretty from "react-json-prettify";

function SendTextToInteraction() {
  return (
    <>
      {/* <!--Send Text Message to Interaction--> */}
      <div id="api_rest_send_text_message_to_interaction" className="card">
        <div
          className="card-header card-header-secondary"
          style={{ background: "linear-gradient(60deg, #391141, #8e24aa)" }}
        >
          <h3 id="h3_txt_1" className="my-0 text-white">
            Send Text Message to Interaction
          </h3>
        </div>
        <div className="card-body">
          <p id="p_txt_1" className="mt-2 ml-4 mr-4 text-justify">
            Every user can send different types of messages, including text,
            speech, image (e.g., facial image), and video (e.g., stream of
            facial images) to an interaction, using the unique user ID and the
            unique interaction ID. When a message from user, say{" "}
            <strong>
              <i>John</i>
            </strong>
            , is sent to an interaction where users{" "}
            <strong>
              <i>Bob</i>
            </strong>{" "}
            and{" "}
            <strong>
              <i>Mary</i>
            </strong>{" "}
            are also involved:
            <ol>
              <li>
                <strong>
                  <i>John</i>
                </strong>
                's affect model is updated based on his input message;
              </li>
              <li>
                Impression models of{" "}
                <strong>
                  <i>Bob</i>
                </strong>{" "}
                and{" "}
                <strong>
                  <i>Mary</i>
                </strong>{" "}
                from{" "}
                <strong>
                  <i>John</i>
                </strong>{" "}
                are updated (which also updates their social perception models);
              </li>
              <li>
                Empathy models of{" "}
                <strong>
                  <i>Bob</i>
                </strong>{" "}
                and{" "}
                <strong>
                  <i>Mary</i>
                </strong>{" "}
                are updated to empathize with{" "}
                <strong>
                  <i>John</i>
                </strong>
                ;
              </li>
              <li>
                Affect models of{" "}
                <strong>
                  <i>Bob</i>
                </strong>{" "}
                and{" "}
                <strong>
                  <i>Mary</i>
                </strong>{" "}
                are updated to simulates their affective state changes due to{" "}
                <strong>
                  <i>John</i>
                </strong>
                's message;
              </li>
              <li>
                Rapport is modeled for{" "}
                <strong>
                  <i>John</i>
                </strong>
                , in order to suggest appropriate behaviors (e.g., nonverbal)
                while speaking out this message.
              </li>
            </ol>
          </p>
          <div
            className="alert alert-info mt-4 mb-4"
            role="alert"
            style={{ backgroundColor: "rgba(91, 192, 222, 0.2)" }}
          >
            <div className="alert-heading ml-3 mr-3 text-info">
              <h3 id="h3_txt_2" className="font-weight-normal">
                <i className="fa fa-info text-info mr-4"></i>Info
              </h3>
            </div>
            <p id="p_txt_2" className="ml-3 mr-3 text-dark">
              If message is sent to the aEi.ai service before sending to your
              chat system, the service suggests appropriate behaviors (e.g.,
              nonverbal) at the right time of the message, in order to deliver
              an{" "}
              <strong>
                <u>empathic</u>
              </strong>{" "}
              (i.e., emotionally appropriate),{" "}
              <strong>
                <u>rapport-enabled</u>
              </strong>{" "}
              (i.e., with appropriate nonverbal behaviors), and more effective
              message to the other individuals (considering their emotion, mood,
              and personality).
            </p>
          </div>
          <div
            className="alert alert-danger mt-4 mb-4"
            role="alert"
            style={{backgroundColor: "rgba(217, 83, 79, 0.2)"}}
          >
            <div className="alert-heading ml-3 mr-3 text-danger">
              <h3 id="h3_txt_3" className="font-weight-normal">
                <i className="fa fa-lightbulb-o text-danger mr-4"></i>Note
              </h3>
            </div>
            <p id="p_txt_3" className="ml-3 mr-3 text-dark">
              Suggesting non-verbal behaviors will be available in Version 2.
            </p>
          </div>

          <p id="p_txt_4" className="mt-2 ml-4 mr-4 text-justify">
            You can add a text input from one of users involved in an
            interaction by making a{" "}
            <strong>
              <u>POST</u>
            </strong>{" "}
            request to the <strong>post_inputs_text</strong> API, with the text
            input as request body and interaction and user IDs as request
            parameters.
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
                    <Td id="td_txt_1">PAID</Td>
                    <Td id="td_txt_2">POST</Td>
                    <Td id="td_txt_3" colspan="2">
                      <strong>https://aei.ai/api/v1/inputs/text</strong>
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
                      <strong>Parameters</strong>
                    </th>
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
                    <Td id="td_txt_4">Authorization</Td>
                    <Td id="td_txt_5">Header</Td>
                    <Td id="td_txt_6">Yes</Td>
                    <Td id="td_txt_7">
                      Value should be '
                      <strong>Bearer &lt;your access_token&gt;</strong>'
                    </Td>
                  </Tr>
                  <Tr>
                    <Td id="td_txt_8">interaction_id</Td>
                    <Td id="td_txt_9" className="text-nowrap">
                      Request Param
                    </Td>
                    <Td id="td_txt_10">Yes</Td>
                    <Td id="td_txt_11">
                      Unique interaction ID of the target interaction
                    </Td>
                  </Tr>
                  <Tr>
                    <Td id="td_txt_12">user_id</Td>
                    <Td id="td_txt_13" className="text-nowrap">
                      Request Param
                    </Td>
                    <Td id="td_txt_14">Yes</Td>
                    <Td id="td_txt_15">Unique user ID of the speaker user</Td>
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
                    <Td id="td_txt_18">Yes</Td>
                    <Td id="td_txt_19" colspan="3">
                      Text message to send to the interaction
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
                    <Td id="td_txt_20">status</Td>
                    <Td id="td_txt_21">
                      <a href="#error_handling">Status</a>
                    </Td>
                    <Td id="td_txt_22" colspan="2">
                      Response <a href="#error_handling">status</a> object
                    </Td>
                  </Tr>
                  <Tr>
                    <Td id="td_txt_23">rapport</Td>
                    <Td id="td_txt_24">
                      <a href="#data_structures_rapport">Rapport</a>
                    </Td>
                    <Td id="td_txt_25" colspan="2">
                      Nonverbal behaviors to build rapport with other users
                      while uttering input text
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </div>
          </div>
          {/* <!--Sample code to have a user say something--> */}
          <p id="p_txt_5" className="mt-2 ml-4 mr-4 text-justify">
            An example usage of this API is as follows:
          </p>
          <p id="p_txt_6" className="mt-2 ml-4 mr-4 text-justify">
            <code className="prettyprint">
              curl -X POST
              'https://aei.ai/api/v1/inputs/text?interaction_id=&lt;your
              interactionId&gt;&user_id=&lt;speaker userId&gt;' -d 'I am
              surprised by aEi.ai' -H 'Authorization: Bearer &lt;your
              access_token&gt;'
            </code>
          </p>
          <p id="p_txt_7" className="mt-2 ml-4 mr-4 text-justify">
            Expected response from aEi.ai service looks like the following:
            <JSONPretty
              json={{
                status: {
                  code: 200,
                  error: null,
                  help: null,
                },
                rapport: {
                  nonverbalBehaviors: [
                    {
                      name: "FACE_SURPRISED",
                      intensity: 0.41124678848763024,
                      start: 0,
                      end: 24,
                    },
                    {
                      name: "HAND_POINT_SELF",
                      start: 0,
                      end: 4,
                    },
                    {
                      name: "AU55",
                      intensity: 0.3,
                      start: 0,
                      end: 4,
                    },
                  ],
                },
              }}
            />
          </p>
        </div>
      </div>
    </>
  );
}
SendTextToInteraction.Layout = DocsLayout;
export default SendTextToInteraction;
