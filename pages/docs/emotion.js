import React from 'react'
import DocsLayout from "../../components/layouts/docs";

 const emotion = () => {
  return (
    <div id="data_structures_emotion" class="card">
    <div class="card-header card-header-secondary"  style={{background:"linear-gradient(60deg, #391141, #8e24aa)"}}>
        <h3 id="h3_emotion_1" class="my-0 text-white">Emotion</h3>
    </div>
    <div class="card-body">
        <p id="p_emotion_1" class="mt-2 ml-4 mr-4 text-justify">
            Emotion is represented in Pleasure-Arousal-Dominance (PAD) space. Also, based on the PAD scores of an emotion, we classify emotions into 173 different emotion categories (with different emotion names). An emotion model involves both its PAD representation and its name (category).
        </p>

        <div class="d-flex justify-content-center">
            <table class="table table-responsive table-striped w-auto rounded-top rounded-bottom border">
                <thead class="thead-dark">
                    <th><strong>Property</strong></th>
                    <th><strong>Type</strong></th>
                    <th><strong>Default</strong></th>
                    <th><strong>Description</strong></th>
                </thead>
                <tbody>
                    <tr>
                        <td id="td_emotion_1">pad</td>
                        <td id="td_emotion_2">Pad</td>
                        <td id="td_emotion_3" class="text-nowrap">Default Pad</td>
                        <td id="td_emotion_4"><a href="#data_structures_pad">PAD</a> object representing pleasure, arousal, and dominance scores of emotion</td>
                    </tr>
                    <tr>
                        <td id="td_emotion_5">emotionName</td>
                        <td id="td_emotion_6">String</td>
                        <td id="td_emotion_7">NEUTRAL</td>
                        <td id="td_emotion_8">Name (category) of the emotion based on its PAD scores</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
  )
}

emotion.Layout = DocsLayout;

export default emotion;
