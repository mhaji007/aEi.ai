
import React from 'react'
import DocsLayout from "../../components/layouts/docs";
function satisfaction() {
  return (
    <div id="data_structures_satisfaction" className="card">
    <div className="card-header card-header-secondary" style={{background:"linear-gradient(60deg, #391141, #8e24aa)"}}>
        <h3 id="h3_sat_1" className="my-0 text-white">Satisfaction</h3>
    </div>
    <div className="card-body">
        <p id="p_sat_1" className="mt-2 ml-4 mr-4 text-justify">
            Satisfaction is represented as a polarity by a float number between -1 (not satisfied at all) and +1 (completely satisfied).
        </p>
      
        <div className="d-flex justify-content-center">
            <table className="table table-responsive table-striped w-auto rounded-top rounded-bottom border">
                <thead className="thead-dark">
                    <th><strong>Property</strong></th>
                    <th><strong>Type</strong></th>
                    <th><strong>Default</strong></th>
                    <th className="text-nowrap"><strong>Value Range</strong></th>
                    <th><strong>Description</strong></th>
                </thead>
                <tbody>
                    <tr>
                        <td id="td_sat_1">score</td>
                        <td id="td_sat_2">float</td>
                        <td id="td_sat_3">0.0</td>
                        <td id="td_sat_4">[-1, +1]</td>
                        <td id="td_sat_5">Polarity of satisfaction</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
  )
}

satisfaction.Layout = DocsLayout;

export default satisfaction
