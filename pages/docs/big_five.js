import React from 'react'
import DocsLayout from "../../components/layouts/docs";

 const big_five = () => {
  return (
    <div id="data_structures_big_five" class="card">
                            <div class="card-header card-header-secondary"  style={{background:"linear-gradient(60deg, #391141, #8e24aa)"}}>
                                <h3 id="h3_b5_1" class="my-0 text-white">Big Five</h3>
                            </div>
                            <div class="card-body">
                                <p id="p_b5_1" class="mt-2 ml-4 mr-4 text-justify">
                                    Big Five theory is the mostly used model for human personality traits. In this model, personality is described as a five dimensional concept: openness, conscientiousness, extroversion, agreeableness, and neuroticism.
                                </p>
                                <div class="d-flex justify-content-center">
                                    <table class="table table-responsive table-striped w-auto rounded-top rounded-bottom border">
                                        <thead class="thead-dark">
                                            <th><strong>Property</strong></th>
                                            <th><strong>Type</strong></th>
                                            <th><strong>Default</strong></th>
                                            <th class="text-nowrap"><strong>Value Range</strong></th>
                                            <th><strong>Description</strong></th>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td id="td_b5_1">openness</td>
                                            <td id="td_b5_2">float</td>
                                            <td id="td_b5_3">0.01</td>
                                            <td id="td_b5_4">[0, 1]</td>
                                            <td id="td_b5_5">Degree to which a person is open to experiencing new things in the world</td>
                                        </tr>
                                        <tr>
                                            <td id="td_b5_6">conscientiousness</td>
                                            <td id="td_b5_7">float</td>
                                            <td id="td_b5_8">0.01</td>
                                            <td id="td_b5_9">[0, 1]</td>
                                            <td id="td_b5_10">A person's degree of tendency to be organized and act thoughtfully</td>
                                        </tr>
                                        <tr>
                                            <td id="td_b5_11">extroversion</td>
                                            <td id="td_b5_12">float</td>
                                            <td id="td_b5_13">0.01</td>
                                            <td id="td_b5_14">[0, 1]</td>
                                            <td id="td_b5_15">Degree to which a person is energetic and social, and has tendency to seek stimulation in the company of others</td>
                                        </tr>
                                        <tr>
                                            <td id="td_b5_16">agreeableness</td>
                                            <td id="td_b5_17">float</td>
                                            <td id="td_b5_18">0.01</td>
                                            <td id="td_b5_19">[0, 1]</td>
                                            <td id="td_b5_20">Degree of a person's tendency to be compassionate and cooperative rather than suspicious and detached towards others</td>
                                        </tr>
                                        <tr>
                                            <td id="td_b5_21">neuroticism</td>
                                            <td id="td_b5_22">float</td>
                                            <td id="td_b5_23">0.01</td>
                                            <td id="td_b5_24">[0, 1]</td>
                                            <td id="td_b5_25">Degree to which a person's tendency to easily experience unpleasant emotions such as anxiety, anger, or depression</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

  )
}

big_five.Layout = DocsLayout;

export default big_five;
