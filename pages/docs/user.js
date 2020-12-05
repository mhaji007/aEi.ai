import React from "react";
import DocsLayout from "../../components/layouts/docs";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
function user() {
  return (
    <div>
      <div id="data_structures_user" className="card">
        <div className="card-header card-header-secondary " style={{background:"linear-gradient(60deg, #391141, #8e24aa)"}}>
          <h3 id="h3_user_1" className="my-0 text-white">
            User
          </h3>
        </div>
        <div className="card-body">
          <p id="p_user_1" className="mt-2 ml-4 mr-4 text-justify">
            User is a human or virtual agent who can engage in interactions.
            Each user has (1) a unique ID, (2) an Affect model, (3) a Social
            Perception of other users, and (4) a set of optional attributes
            represented as string key-value pairs.
          </p>
          {/* <!--User data structure--> */}
          <div className="d-flex justify-content-center">
            <Table className="table table-responsive table-striped w-auto rounded-top rounded-bottom border">
              <Thead className="thead-dark">
                <Tr>
                <Th>
                  <strong>Property</strong>
                </Th>
                <Th>
                  <strong>Type</strong>
                </Th>
                <Th>
                  <strong>Default</strong>
                </Th>
                <Th>
                  <strong>Description</strong>
                </Th>

                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td id="td_user_1">userId</Td>
                  <Td id="td_user_2">String</Td>
                  <Td id="td_user_3"></Td>
                  <Td id="td_user_4">Unique user ID</Td>
                </Tr>
                <Tr>
                  <Td id="td_user_5">affect</Td>
                  <Td id="td_user_6">
                    <a href="#data_structures_affect">Affect</a>
                  </Td>
                  <Td id="td_user_7" className="text-nowrap">
                    Default <a href="#data_structures_affect">Affect</a>
                  </Td>
                  <Td id="td_user_8">User's affect model</Td>
                </Tr>
                <Tr>
                  <Td id="td_user_9">socialPerception</Td>
                  <Td id="td_user_10">
                    <a href="#data_structures_social_perception">
                      SocialPerception
                    </a>
                  </Td>
                  <Td id="td_user_11" className="text-nowrap">
                    Default{" "}
                    <a href="#data_structures_social_perception">
                      SocialPerception
                    </a>
                  </Td>
                  <Td id="td_user_12">
                    User's social perception of other users
                  </Td>
                </Tr>
                <Tr>
                  <Td id="td_user_13">empathies</Td>
                  <Td id="td_user_14">
                    List&lt;<a href="#data_structures_empathy">Empathy</a>&gt;
                  </Td>
                  <Td id="td_user_15" className="text-nowrap">
                    Empty list
                  </Td>
                  <Td id="td_user_16">User's empathy towards other users</Td>
                </Tr>
              </Tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
user.Layout = DocsLayout;
export default user;
