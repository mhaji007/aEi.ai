import React from "react";
import DocsLayout from "../../components/layouts/docs";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

function empathy() {
  return (
    <div>
      <div id="data_structures_empathy" className="card ">
        <div
          className="card-header card-header-secondary"
          style={{ background: "linear-gradient(60deg, #391141, #8e24aa)" }}
        >
          <h3 id="h3_empathy_1" className="my-0 text-white">
            Empathy
          </h3>
        </div>
        <div className="card-body">
          <p id="p_empathy_1" className="mt-2 ml-4 mr-4 text-justify">
            Empathy is one's adaption of affective states to her understanding
            of someone else's affective states. A person empathizes with others
            in different levels: emotion, mood, personality, and satisfaction.
            In other words, a person adapts her emotion, mood, personality, and
            satisfaction to other people in order to empathize with them. So, we
            model empathy with an Affect model. Empathy towards users is not
            interaction-dependent, but cumulative over all interactions where
            both users are engaged.
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
                  <Td id="td_empathy_1">empathyId</Td>
                  <Td id="td_empathy_2">String</Td>
                  <Td id="td_empathy_3"></Td>
                  <Td id="td_empathy_4">
                    Unique ID of user's empathy towards the target user
                  </Td>
                </Tr>
                <Tr>
                  <Td id="td_empathy_9">targetUserId</Td>
                  <Td id="td_empathy_10">String</Td>
                  <Td id="td_empathy_11"></Td>
                  <Td id="td_empathy_12">Unique user ID of the target user</Td>
                </Tr>
                <Tr>
                  <Td id="td_empathy_13">affect</Td>
                  <Td id="td_empathy_14">
                    <a href="#data_structures_affect">Affect</a>
                  </Td>
                  <Td id="td_empathy_15" className="text-nowrap">
                    Default <a href="#data_structures_affect">Affect</a>
                  </Td>
                  <Td id="td_empathy_16">
                    User's adapted affective state to the target user
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

empathy.Layout = DocsLayout;
export default empathy;
