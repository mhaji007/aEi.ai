import React from "react";
import DocsLayout from "../../components/layouts/docs";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

const emotion = () => {
  return (
    <div id="data_structures_emotion" className="card">
      <div
        className="card-header card-header-secondary"
        style={{ background: "linear-gradient(60deg, #391141, #8e24aa)" }}
      >
        <h3 id="h3_emotion_1" className="my-0 text-white">
          Emotion
        </h3>
      </div>
      <div className="card-body">
        <p id="p_emotion_1" className="mt-2 ml-4 mr-4 text-justify">
          Emotion is represented in Pleasure-Arousal-Dominance (PAD) space.
          Also, based on the PAD scores of an emotion, we classify emotions into
          173 different emotion categories (with different emotion names). An
          emotion model involves both its PAD representation and its name
          (category).
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
                <Td id="td_emotion_1">pad</Td>
                <Td id="td_emotion_2">Pad</Td>
                <Td id="td_emotion_3" className="text-nowrap">
                  Default Pad
                </Td>
                <Td id="td_emotion_4">
                  <a href="#data_structures_pad">PAD</a> object representing
                  pleasure, arousal, and dominance scores of emotion
                </Td>
              </Tr>
              <Tr>
                <Td id="td_emotion_5">emotionName</Td>
                <Td id="td_emotion_6">String</Td>
                <Td id="td_emotion_7">NEUTRAL</Td>
                <Td id="td_emotion_8">
                  Name (category) of the emotion based on its PAD scores
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

emotion.Layout = DocsLayout;

export default emotion;
