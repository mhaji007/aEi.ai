import React from 'react'
import DocsLayout from "../../components/layouts/docs";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

function rapport() {
  return (
    <div>
       <div id="data_structures_rapport" className="card">
                            <div className="card-header card-header-secondary "  style={{ background: "linear-gradient(60deg, #391141, #8e24aa)" }}>
                                <h3 id="h3_rapport_1" className="my-0 text-white">Rapport</h3>
                            </div>
                            <div className="card-body">
                                <p id="p_rapport_1" className="mt-2 ml-4 mr-4 text-justify">
                                    Rapport is defined as a set of nonverbal behaviors (e.g., facial expressions, hand gestures, body movements) that a user expresses while speaking to other people (users), in order to (a) build rapport, (b) increase closeness between them, and (c) increase effectiveness of her speech. To reach these goals, the rapport model considers personality of the hearer users for selecting the nonverbal behaviors and frequency of them.
                                </p>
                                {/* <!--Social perception data structure--> */}
                                <div className="d-flex justify-content-center">
                                    <table className="table table-responsive table-striped w-auto rounded-top rounded-bottom border">
                                        <thead className="thead-dark">
                                        <th><strong>Property</strong></th>
                                        <th><strong>Type</strong></th>
                                        <th><strong>Default</strong></th>
                                        <th><strong>Description</strong></th>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td id="td_rapport_5">nonverbalBehaviors</td>
                                            <td id="td_rapport_6">List&lt;<a href="#data_structures_nvb">NonverbalBehavior</a>&gt;</td>
                                            <td id="td_rapport_7" className="text-nowrap">Empty list</td>
                                            <td id="td_rapport_8">Speaker user's rapport towards hearer users</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
    </div>
  )
}
rapport.Layout = DocsLayout;
export default rapport
