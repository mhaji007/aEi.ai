import React from "react";
import DocsLayout from "../../components/layouts/docs";

const PAD = () => {
  return (
    <div id="data_structures_pad" class="card">
    <div class="card-header card-header-secondary"style={{background:"linear-gradient(60deg, #391141, #8e24aa)"}} >
        <h3 id="h3_pad_1" class="my-0 text-white" >Pleasure-Arousal-Dominance (PAD)</h3>
    </div>
    <div class="card-body">
        <p id="p_pad_1" class="mt-2 ml-4 mr-4 text-justify">
            Pleasure-Arousal-Dominance (PAD) theory is the most popular emotion theory which defines emotions as a three dimensional concept: pleasure, arousal, and dominance.
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
                        <td id="td_pad_1">pleasure</td>
                        <td id="td_pad_2">float</td>
                        <td id="td_pad_3">0.01</td>
                        <td id="td_pad_4">[-1, 1]</td>
                        <td id="td_pad_5">Degree of individual's positivity vs. negativity (called sentiment in domains such as Natural Language Processing - NLP)</td>
                    </tr>
                    <tr>
                        <td id="td_pad_6">arousal</td>
                        <td id="td_pad_7">float</td>
                        <td id="td_pad_8">0.01</td>
                        <td id="td_pad_9">[-1, 1]</td>
                        <td id="td_pad_10">Degree of individual's energy</td>
                    </tr>
                    <tr>
                        <td id="td_pad_11">dominance</td>
                        <td id="td_pad_12">float</td>
                        <td id="td_pad_13">0.01</td>
                        <td id="td_pad_14">[-1, 1]</td>
                        <td id="td_pad_15">Degree of individual's control over the situation</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
  )
};

PAD.Layout = DocsLayout;

export default PAD;
