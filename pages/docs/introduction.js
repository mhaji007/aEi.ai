import React from "react";
import DocsLayout from "../../components/layouts/docs";

const architecture = () => {
  return (
    <div id="introduction" class="card">
                    <div class="card-header card-header-primary"style={{background:"linear-gradient(60deg, #391141, #8e24aa)"}}>
                        <h2 id="h2_intro_1" class="my-0 font-weight-normal text-white">Introduction</h2>
                    </div>
                    <div class="card-body">
                        <div class="column mt-2 ml-4 mr-4 text-justify">
                            <p id="p_intro_1">The <strong>aEi.ai</strong> provides <strong>Artificial Emotional Intelligence (AEI)</strong> as service by modelling affective features of people and virtual agents while interacting with each other, and making the models available through web services. The services allow developers to expand their Artificial Intelligence (AI) systems, such as virtual assistants, with <strong>emotional intelligence</strong>.</p>
                            <p id="p_intro_2">The service uses state-of-the-art deep learning algorithms to infer individual's affective features, including <strong><u>emotion</u></strong>, <strong><u>mood</u></strong>, <strong><u>personality</u></strong>, and <strong><u>satisfaction</u></strong> from difference input sources (e.g., text, speech, image, and video).</p>
                            <div class="alert alert-danger mt-4 mb-4" role="alert" style={{backgroundColor: "rgba(217, 83, 79, 0.2)"}}>
                                <div class="alert-heading ml-3 mr-3 text-danger">
                                    <h3 id="h3_intro_1" class="font-weight-normal"><i class="fa fa-lightbulb-o text-danger mr-4"></i>Note</h3>
                                </div>
                                <p id="p_intro_3" class="ml-3 mr-3 text-dark">Version 1 supports text only.</p>
                            </div>
                            <p id="p_intro_4">While modeling the affective features, we also model individuals' <strong><u>empathy</u></strong>, <strong><u>rapport</u></strong>, <strong><u>impression</u></strong>, and <strong><u>social perception</u></strong> towards each other, to be able to suggest appropriate reactions and behaviors (e.g., nonverbal behaviors, body gestures, facial expressions) for each individual during an interaction. Emotion and mood are represented based on <strong>Pleasure-Arousal-Dominance (PAD)</strong> theory of affect.</p>
                            <div class="alert alert-info mt-4 mb-4" role="alert" style={{backgroundColor: "rgba(91, 192, 222, 0.2)"}}>
                                <div class="alert-heading ml-3 mr-3 text-info">
                                    <h3 id="h3_intro_2" class="font-weight-normal"><i class="fa fa-info text-info mr-4"></i>Info</h3>
                                </div>
                                <p id="p_intro_5" class="ml-3 mr-3 text-dark">
                                    In PAD space, <strong><u>pleasure</u></strong> determines degree of individual's positivity/negativity (in NLP, this dimension is called sentiment); <strong><u>arousal</u></strong> determines degree of individual's energy; and <strong><u>dominance</u></strong> determines degree of individual's control over the situation.
                                </p>
                            </div>
                            <p id="p_intro_6">Personality is represented based on <strong>Big Five</strong> (i.e., openness, conscientiousness, extroversion, agreeableness, and neuroticism) theory of personality traits. Satisfaction is represented as a polarity score. All other features are represented in terms of one or few of aforementioned features.</p>
                            <div class="alert alert-success mt-4 mb-4" role="alert" style={{backgroundColor: "rgba(92, 184, 92, 0.2)"}}>
                                <div class="alert-heading ml-3 mr-3 text-success">
                                    <h3 id="h3_intro_3" class="font-weight-normal"><i class="fa fa-info text-success mr-4"></i>Info</h3>
                                </div>
                                <p id="p_intro_7" class="ml-3 mr-3 text-dark">
                                    In Big Five space, <strong><u>openness</u></strong> (also called intellect or intellect/imagination) determines the degree to which an individual is imaginative, insightful and has wide interests; <strong><u>conscientiousness</u></strong> determines degree to which an individual is organized, thorough, and planful; <strong><u>extroversion</u></strong> determines degree to which an individual is talkative, energetic, and assertive; <strong><u>agreeableness</u></strong> is the degree to which an individual is sympathetic, kind, and affectionate; and finally, <strong><u>neuroticism</u></strong> (also called emotional stability) is the degree to which an individual is tense, moody, and anxious.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
  );
};

architecture.Layout = DocsLayout;

export default architecture;
