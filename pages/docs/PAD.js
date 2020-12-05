import React from "react";
import DocsLayout from "../../components/layouts/docs";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

function PAD() {
  return (
    <div>

    <div id="data_structures_pad" className="card">
      <div
        className="card-header card-header-secondary"
        style={{ background: "linear-gradient(60deg, #391141, #8e24aa)" }}
      >
        <h3 id="h3_pad_1" className="my-0 text-white">
          Pleasure-Arousal-Dominance (PAD)
        </h3>
      </div>
      <div className="card-body">
        <p id="p_pad_1" className="mt-2 ml-4 mr-4 text-justify">
          Pleasure-Arousal-Dominance (PAD) theory is the most popular emotion
          theory which defines emotions as a three dimensional concept:
          pleasure, arousal, and dominance.
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
                <Th className="text-nowrap">
                  <strong>Value Range</strong>
                </Th>
                <Th>
                  <strong>Description</strong>
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td id="td_pad_1">pleasure</Td>
                <Td id="td_pad_2">float</Td>
                <Td id="td_pad_3">0.01</Td>
                <Td id="td_pad_4">[-1, 1]</Td>
                <Td id="td_pad_5">
                  Degree of individual's positivity vs. negativity (called
                  sentiment in domains such as Natural Language Processing -
                  NLP)
                </Td>
              </Tr>
              <Tr>
                <Td id="td_pad_6">arousal</Td>
                <Td id="td_pad_7">float</Td>
                <Td id="td_pad_8">0.01</Td>
                <Td id="td_pad_9">[-1, 1]</Td>
                <Td id="td_pad_10">Degree of individual's energy</Td>
              </Tr>
              <Tr>
                <Td id="td_pad_11">dominance</Td>
                <Td id="td_pad_12">float</Td>
                <Td id="td_pad_13">0.01</Td>
                <Td id="td_pad_14">[-1, 1]</Td>
                <Td id="td_pad_15">
                  Degree of individual's control over the situation
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </div>
      </div>
    </div>
    </div>
  );
};

PAD.Layout = DocsLayout;

export default PAD;
