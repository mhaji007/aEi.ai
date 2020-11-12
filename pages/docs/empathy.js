import React from "react";
import DocsLayout from "../../components/layouts/docs";

function empathy() {
  return (
    <div>
      <div id="data_structures_empathy" className="card ">
        <div
          className="card-header card-header-secondary"
          style={{ background: "linear-gradient(60deg, #391141, #8e24aa)" }}
        >
          <h3 id="h3_empathy_1" className="my-0 text-white">
            Empathy
          </h3>
        </div>
        <div className="card-body">
          <p id="p_empathy_1" className="mt-2 ml-4 mr-4 text-justify">
            Empathy is one's adaption of affective states to her understanding
            of someone else's affective states. A person empathizes with others
            in different levels: emotion, mood, personality, and satisfaction.
            In other words, a person adapts her emotion, mood, personality, and
            satisfaction to other people in order to empathize with them. So, we
            model empathy with an Affect model. Empathy towards users is not
            interaction-dependent, but cumulative over all interactions where
            both users are engaged.
          </p>
          <div className="d-flex justify-content-center">
            <table className="table table-responsive table-striped w-auto rounded-top rounded-bottom border">
              <thead className="thead-dark">
                <th>
                  <strong>Property</strong>
                </th>
                <th>
                  <strong>Type</strong>
                </th>
                <th>
                  <strong>Default</strong>
                </th>
                <th>
                  <strong>Description</strong>
                </th>
              </thead>
              <tbody>
                <tr>
                  <td id="td_empathy_1">empathyId</td>
                  <td id="td_empathy_2">String</td>
                  <td id="td_empathy_3"></td>
                  <td id="td_empathy_4">
                    Unique ID of user's empathy towards the target user
                  </td>
                </tr>
                <tr>
                  <td id="td_empathy_9">targetUserId</td>
                  <td id="td_empathy_10">String</td>
                  <td id="td_empathy_11"></td>
                  <td id="td_empathy_12">Unique user ID of the target user</td>
                </tr>
                <tr>
                  <td id="td_empathy_13">affect</td>
                  <td id="td_empathy_14">
                    <a href="#data_structures_affect">Affect</a>
                  </td>
                  <td id="td_empathy_15" className="text-nowrap">
                    Default <a href="#data_structures_affect">Affect</a>
                  </td>
                  <td id="td_empathy_16">
                    User's adapted affective state to the target user
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

empathy.Layout = DocsLayout;
export default empathy;
