import DocsLayout from "../../components/layouts/docs";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

import React from 'react'

function personality() {
  return (
    <div id="data_structures_personality" className="card">
    <div className="card-header card-header-secondary " style={{background:"linear-gradient(60deg, #391141, #8e24aa)"}}>
        <h3 id="h3_pers_1" className="my-0 text-white">Personality</h3>
    </div>
    <div className="card-body">
        <p id="p_pers_1" className="mt-2 ml-4 mr-4 text-justify">
            Personality is represented in both Big Five and PAD spaces. Because an individual may have different levels of personality traits, we do not classify personality into a single category as we do for emotion and mood. Instead, a percentage is assigned to each personality trait, showing the strength of that trait in corresponding user.
        </p>
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
                        <Td id="td_pers_1">bigFive</Td>
                        <Td id="td_pers_2"><a href="#data_structures_big_five">BigFive</a></Td>
                        <Td id="td_pers_3" className="text-nowrap">default <a href="#data_structures_big_five">BigFive</a></Td>
                        <Td id="td_pers_4">User's Big Five personality traits</Td>
                    </Tr>
                    <Tr>
                        <Td id="td_pers_5">pad</Td>
                        <Td id="td_pers_6"><a href="#data_structures_pad">Pad</a></Td>
                        <Td id="td_pers_7" className="text-nowrap">Default <a href="#data_structures_pad">Pad</a></Td>
                        <Td id="td_pers_8">PAD representation of personality</Td>
                    </Tr>
                </Tbody>
            </Table>
        </div>
    </div>
</div>
  )
}

personality.Layout = DocsLayout;

export default personality

