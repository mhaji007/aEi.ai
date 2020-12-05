import React from "react";
import DocsLayout from "../../components/layouts/docs";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

function impression() {
  return (
    <div>
      <div id="data_structures_impression" className="card">
        <div className="card-header card-header-secondary" style={{ background: "linear-gradient(60deg, #391141, #8e24aa)" }}>
          <h3 id="h3_impres_1" className="my-0 text-white">
            Impression
          </h3>
        </div>
        <div className="card-body">
          <p id="p_impres_1" className="mt-2 ml-4 mr-4 text-justify">
            An observer user builds different levels of impressions from other
            users in her brain: emotion, mood, personality, and satisfaction.
            So, we model impression with an Affect model. Note that impression
            is not the same as empathy. Impression is one's understanding of
            someone else's affective states, while empathy is one's adaption of
            affective states to her understanding of someone else's affective
            states. Impression towards users is not interaction-dependent, but
            cumulative over all interactions where both users are engaged. In
            other words, it represents how observer user has evaluated the
            target user over all their interactions.
          </p>
          {/* <!--Impression data structure--> */}
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
                  <Td id="td_impres_1">impressionId</Td>
                  <Td id="td_impres_2">String</Td>
                  <Td id="td_impres_3"></Td>
                  <Td id="td_impres_4">
                    Unique ID of observer user's impression of the target user
                  </Td>
                </Tr>
                <Tr>
                  <Td id="td_impres_9">targetUserId</Td>
                  <Td id="td_impres_10">String</Td>
                  <Td id="td_impres_11"></Td>
                  <Td id="td_impres_12">Unique user ID of the target user</Td>
                </Tr>
                <Tr>
                  <Td id="td_impres_13">affect</Td>
                  <Td id="td_impres_14">
                    <a href="#data_structures_affect">Affect</a>
                  </Td>
                  <Td id="td_impres_15" className="text-nowrap">
                    Default <a href="#data_structures_affect">Affect</a>
                  </Td>
                  <Td id="td_impres_16">
                    Observer user's impression of the target user's affective
                    state
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
impression.Layout = DocsLayout;
export default impression;
