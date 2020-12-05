import React from "react";
import DocsLayout from "../../components/layouts/docs";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

function satisfaction() {
  return (
    <div id="data_structures_satisfaction" >
      <div
        className="card-header card-header-secondary"
        style={{ background: "linear-gradient(60deg, #391141, #8e24aa)" }}
      >
        <h3 id="h3_sat_1" className="my-0 text-white">
          Satisfaction
        </h3>
      </div>
      <div className="card-body">
        <p id="p_sat_1" className="mt-2 ml-4 mr-4 text-justify">
          Satisfaction is represented as a polarity by a float number between -1
          (not satisfied at all) and +1 (completely satisfied).
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
                <Td id="td_sat_1">score</Td>
                <Td id="td_sat_2">float</Td>
                <Td id="td_sat_3">0.0</Td>
                <Td id="td_sat_4">[-1, +1]</Td>
                <Td id="td_sat_5">Polarity of satisfaction</Td>
              </Tr>
            </Tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

satisfaction.Layout = DocsLayout;

export default satisfaction;
