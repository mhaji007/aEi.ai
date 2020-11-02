import React from "react";
import DocsLayout from "../../components/layouts/docs";

const architecture = () => {
  return (
    <div id="architecture" class="card">
    <div className="card-header card-header-primary" style={{background:"linear-gradient(60deg, #391141, #8e24aa)"}} >
        <h2 id="h2_arch_1" class="my-0 font-weight-normal text-white" >Architecture</h2>
    </div>
    <div class="card-body">
        <p id="p_arch_1" class="mt-2 ml-4 mr-4 text-justify">
            A central data structure in aEi.ai is called <strong>Interaction</strong>, which represents an interaction between one to multiple individuals. Individuals involved in an interaction -- referred to as <strong>Users</strong> -- may be real humans or virtual agents. As the messages (e.g., text, speech, image, video) are passed between users in an interaction, the aEi.ai service watches the interaction and keeps updating the affective models of each involved individual. At any point, models can be retrieved by querying the services.
        </p>
        <div class="column ml-4 mr-4 text-justify">
            <h3 id="h3_arch_1" style={{color: "#8B5EB4"}}>How does aEi.ai watch an interaction?</h3>
            <p id="p_arch_2">Assuming there is an "AI system" which is interested in knowing more about individuals involved in an interaction, the AI system sends messages of each individual to the aEi.ai service as they are input by individuals to update the models. The following diagram shows an abstract architecture of the aEi.ai.</p>
            <div class="row justify-content-center">
                <img class="mt-5 col-12 col-sm-12 col-md-11 col-lg-11 col-xl-11" src="../../architecture.png" style={{width: "100%", height: "100%"}}/>
            </div>
        </div>
    </div>
</div>
  );
};

architecture.Layout = DocsLayout;

export default architecture;
