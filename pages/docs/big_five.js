import React from 'react'
import DocsLayout from "../../components/layouts/docs";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

 const big_five = () => {
  return (
    <div id="data_structures_big_five" className="card">
                            <div className="card-header card-header-secondary"  style={{background:"linear-gradient(60deg, #391141, #8e24aa)"}}>
                                <h3 id="h3_b5_1" className="my-0 text-white">Big Five</h3>
                            </div>
                            <div className="card-body">
                                <p id="p_b5_1" className="mt-2 ml-4 mr-4 text-justify">
                                    Big Five theory is the mostly used model for human personality traits. In this model, personality is described as a five dimensional concept: openness, conscientiousness, extroversion, agreeableness, and neuroticism.
                                </p>
                                <div className="d-flex justify-content-center">
                                    <Table className="table table-responsive table-striped w-auto rounded-top rounded-bottom border">
                                        <Thead className="thead-dark">
                                            <Tr>

                                            <Th><strong>Property</strong></Th>
                                            <Th><strong>Type</strong></Th>
                                            <Th><strong>Default</strong></Th>
                                            <Th className="text-nowrap"><strong>Value Range</strong></Th>
                                            <Th><strong>Description</strong></Th>

                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                        <Tr>
                                            <Td id="td_b5_1">openness</Td>
                                            <Td id="td_b5_2">float</Td>
                                            <Td id="td_b5_3">0.01</Td>
                                            <Td id="td_b5_4">[0, 1]</Td>
                                            <Td id="td_b5_5">Degree to which a person is open to experiencing new things in the world</Td>
                                        </Tr>
                                        <Tr>
                                            <Td id="td_b5_6">conscientiousness</Td>
                                            <Td id="td_b5_7">float</Td>
                                            <Td id="td_b5_8">0.01</Td>
                                            <Td id="td_b5_9">[0, 1]</Td>
                                            <Td id="td_b5_10">A person's degree of tendency to be organized and act thoughtfully</Td>
                                        </Tr>
                                        <Tr>
                                            <Td id="td_b5_11">extroversion</Td>
                                            <Td id="td_b5_12">float</Td>
                                            <Td id="td_b5_13">0.01</Td>
                                            <Td id="td_b5_14">[0, 1]</Td>
                                            <Td id="td_b5_15">Degree to which a person is energetic and social, and has tendency to seek stimulation in the company of others</Td>
                                        </Tr>
                                        <Tr>
                                            <Td id="td_b5_16">agreeableness</Td>
                                            <Td id="td_b5_17">float</Td>
                                            <Td id="td_b5_18">0.01</Td>
                                            <Td id="td_b5_19">[0, 1]</Td>
                                            <Td id="td_b5_20">Degree of a person's tendency to be compassionate and cooperative rather than suspicious and detached towards others</Td>
                                        </Tr>
                                        <Tr>
                                            <Td id="td_b5_21">neuroticism</Td>
                                            <Td id="td_b5_22">float</Td>
                                            <Td id="td_b5_23">0.01</Td>
                                            <Td id="td_b5_24">[0, 1]</Td>
                                            <Td id="td_b5_25">Degree to which a person's tendency to easily experience unpleasant emotions such as anxiety, anger, or depression</Td>
                                        </Tr>
                                        </Tbody>
                                    </Table>
                                </div>
                            </div>
                        </div>

  )
}

big_five.Layout = DocsLayout;

export default big_five;
