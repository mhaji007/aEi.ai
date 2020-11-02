import React from 'react'
import DocsLayout from "../../components/layouts/docs";

export const mood = () => {
  return (
    <div id="data_structures_mood" class="card" >
    <div class="card-header card-header-secondary" style={{background:"linear-gradient(60deg, #391141, #8e24aa)"}}>
        <h3 id="h3_mood_1" class="my-0 text-white">Mood</h3>
    </div>
    <div class="card-body">
        <p id="p_mood_1" class="mt-2 ml-4 mr-4 text-justify">
            Similar to emotion, mood is represented in PAD space, based on which, we classify moods into different mood categories (with different mood names). A mood model involves both its PAD representation and its name (category).
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
                        <td id="td_mood_1">pad</td>
                        <td id="td_mood_2">Pad</td>
                        <td id="td_mood_3" class="text-nowrap">Default Pad</td>
                        <td id="td_mood_4"><a href="#data_structures_pad">PAD</a> object representing pleasure, arousal, dominance scores of mood</td>
                    </tr>
                    <tr>
                        <td id="td_mood_5">moodName</td>
                        <td id="td_mood_6">String</td>
                        <td id="td_mood_7">EXUBERANT</td>
                        <td id="td_mood_8">Name (category) of mood based on its PAD scores</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
  )
}

mood.Layout = DocsLayout;

export default mood;
