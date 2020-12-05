import React from "react";
import DocsLayout from "../../components/layouts/docs";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

function affect() {
  return (
    <div>
      <div id="data_structures_affect" className="card">
        <div
          className="card-header card-header-secondary"
          style={{ background: "linear-gradient(60deg, #391141, #8e24aa)" }}
        >
          <h3 id="h3_affect_1" className="my-0 text-white">
            Affect
          </h3>
        </div>
        <div className="card-body">
          <p id="p_affect_1" className="mt-2 ml-4 mr-4 text-justify">
            Affect is the main aEi.ai data structure represented as ensemble of
            emotion, mood, personality, and satisfaction with definitions
            provided in previous sections.
          </p>
          {/* <!--Affect data structure--> */}
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
                  <Td id="td_affect_1">emotion</Td>
                  <Td id="td_affect_2">
                    <a href="#data_structures_emotion">Emotion</a>
                  </Td>
                  <Td id="td_affect_3" className="text-nowrap">
                    default <a href="#data_structures_emotion">Emotion</a>
                  </Td>
                  <Td id="td_affect_4">User's emotion model</Td>
                </Tr>
                <Tr>
                  <Td id="td_affect_5">mood</Td>
                  <Td id="td_affect_6">
                    <a href="#data_structures_mood">Mood</a>
                  </Td>
                  <Td id="td_affect_7" className="text-nowrap">
                    Default <a href="#data_structures_mood">Mood</a>
                  </Td>
                  <Td id="td_affect_8">User's mood model</Td>
                </Tr>
                <Tr>
                  <Td id="td_affect_9">personality</Td>
                  <Td id="td_affect_10">
                    <a href="#data_structures_personality">Personality</a>
                  </Td>
                  <Td id="td_affect_11" className="text-nowrap">
                    Default{" "}
                    <a href="#data_structures_personality">Personality</a>
                  </Td>
                  <Td id="td_affect_12">User's personality model</Td>
                </Tr>
                <Tr>
                  <td id="td_affect_13">satisfaction</td>
                  <td id="td_affect_14">
                    <a href="#data_structures_satisfaction">Satisfaction</a>
                  </td>
                  <td id="td_affect_15" className="text-nowrap">
                    Default{" "}
                    <a href="#data_structures_satisfaction">Satisfaction</a>
                  </td>
                  <td id="td_affect_16">User's satisfaction model</td>
                </Tr>
              </Tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
affect.Layout = DocsLayout;

export default affect;
