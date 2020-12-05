import React from 'react'
import DocsLayout from "../../components/layouts/docs";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

function social_perception() {
  return (
    <div>

<div id="data_structures_social_perception" className="card">
                            <div className="card-header card-header-secondary" style={{background:"linear-gradient(60deg, #391141, #8e24aa)"}}>
                                <h3 id="h3_sp_1" className="my-0 text-white">Social Perception</h3>
                            </div>
                            <div className="card-body">
                                <p id="p_sp_1" className="mt-2 ml-4 mr-4 text-justify">
                                    Social perception of a user is her set of impressions about other people (users). An individual learns about others' feelings and emotions by combining the information she gathers from verbal and non-verbal (e.g., facial expressions, speech, hand gestures, body movements) communications with them over time.
                                </p>
                                {/* <!--Social perception data structure--> */}
                                <div className="d-flex justify-content-center">
                                    <Table className="table table-responsive table-striped w-auto rounded-top rounded-bottom border">
                                        <Thead className="thead-dark">
                                          <Tr>

                                            <Th><strong>Property</strong></Th>
                                            <Th><strong>Type</strong></Th>
                                            <Th><strong>Default</strong></Th>
                                            <Th><strong>Description</strong></Th>

                                          </Tr>
                                        </Thead>
                                        <Tbody>
                                            <Tr>
                                                <Td id="td_sp_1">socialPerceptionId</Td>
                                                <Td id="td_sp_2">String</Td>
                                                <Td id="td_sp_3"></Td>
                                                <Td id="td_sp_4">Unique ID of social perception of observer user towards others</Td>
                                            </Tr>
                                            <Tr>
                                                <Td id="td_sp_5">impressions</Td>
                                                <Td id="td_sp_6">List&lt;<a href="#data_structures_impression">Impression</a>&gt;</Td>
                                                <Td id="td_sp_7" className="text-nowrap">Empty list</Td>
                                                <Td id="td_sp_8">Observer user's impression of every other individual</Td>
                                            </Tr>
                                        </Tbody>
                                    </Table>
                                </div>
                            </div>
                        </div>

    </div>
  )
}

social_perception.Layout = DocsLayout;

export default social_perception

