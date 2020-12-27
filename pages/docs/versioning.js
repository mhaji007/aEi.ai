import React from "react";
import DocsLayout from "../../components/layouts/docs";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

function versioning() {
  return (
    <>
      {/* <!--Versioning section--> */}
      <div id="versioning" className="card">
        <div
          className="card-header card-header-primary"
          style={{ background: "linear-gradient(60deg, #391141, #8e24aa)" }}
        >
          <h2 id="h2_ver_1" className="my-0 font-weight-normal text-white">
            Versioning
          </h2>
        </div>
        <div className="card-body">
          <p id="p_ver_2" className="mt-2 ml-4 mr-4 text-justify">
            API queries require a version parameter (as a path parameter). When
            we change the API in a backward-incompatible way, a new API version
            is released. So, before changing the version to the latest, make
            sure your application is ready for the latest changes in API
            responses. Details of changes in every version are provided in
            release notes.
          </p>
          <p id="p_ver_3" className="mt-2 ml-4 mr-4 text-justify">
            API version is different from our application (i.e., aEi.ai service)
            version. When we improve our models or add features to our services,
            we increment the application version, which does not affect the way
            clients call our services. We only increment the API version if
            request or response format of calling aEi.ai services is changed.
          </p>
        </div>
      </div>
    </>
  );
}

versioning.Layout = DocsLayout;

export default versioning;
