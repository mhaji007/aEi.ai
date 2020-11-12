import DocsLayout from "../../components/layouts/docs";

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
            <table className="table table-responsive table-striped w-auto rounded-top rounded-bottom border">
                <thead className="thead-dark">
                    <th><strong>Property</strong></th>
                    <th><strong>Type</strong></th>
                    <th><strong>Default</strong></th>
                    <th><strong>Description</strong></th>
                </thead>
                <tbody>
                    <tr>
                        <td id="td_pers_1">bigFive</td>
                        <td id="td_pers_2"><a href="#data_structures_big_five">BigFive</a></td>
                        <td id="td_pers_3" className="text-nowrap">default <a href="#data_structures_big_five">BigFive</a></td>
                        <td id="td_pers_4">User's Big Five personality traits</td>
                    </tr>
                    <tr>
                        <td id="td_pers_5">pad</td>
                        <td id="td_pers_6"><a href="#data_structures_pad">Pad</a></td>
                        <td id="td_pers_7" className="text-nowrap">Default <a href="#data_structures_pad">Pad</a></td>
                        <td id="td_pers_8">PAD representation of personality</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
  )
}

personality.Layout = DocsLayout;

export default personality

