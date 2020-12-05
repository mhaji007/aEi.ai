import React from 'react'
import DocsLayout from "../../components/layouts/docs";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

export const mood = () => {
  return (
    <div id="data_structures_mood" className="card" >
    <div className="card-header card-header-secondary" style={{background:"linear-gradient(60deg, #391141, #8e24aa)"}}>
        <h3 id="h3_mood_1" className="my-0 text-white">Mood</h3>
    </div>
    <div className="card-body">
        <p id="p_mood_1" className="mt-2 ml-4 mr-4 text-justify">
            Similar to emotion, mood is represented in PAD space, based on which, we classify moods into different mood categories (with different mood names). A mood model involves both its PAD representation and its name (category).
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
                        <Td id="td_mood_1">pad</Td>
                        <Td id="td_mood_2">Pad</Td>
                        <Td id="td_mood_3" className="text-nowrap">Default Pad</Td>
                        <Td id="td_mood_4"><a href="#data_structures_pad">PAD</a> object representing pleasure, arousal, dominance scores of mood</Td>
                    </Tr>
                    <Tr>
                        <Td id="td_mood_5">moodName</Td>
                        <Td id="td_mood_6">String</Td>
                        <Td id="td_mood_7">EXUBERANT</Td>
                        <Td id="td_mood_8">Name (category) of mood based on its PAD scores</Td>
                    </Tr>
                </Tbody>
            </Table>
        </div>
    </div>
</div>
  )
}

mood.Layout = DocsLayout;

export default mood;
