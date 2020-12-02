import React from "react";
import DocsLayout from "../../components/layouts/docs";

function nvb() {
  return (
    <div id="data_structures_nvb" className="card">
      <div className="card-header card-header-secondary">
        <h3 id="h3_nvb_1" className="my-0 text-white">
          Nonverbal Behavior
        </h3>
      </div>
      <div className="card-body">
        <p id="p_nvb_1" className="mt-2 ml-4 mr-4 text-justify">
          Nonverbal behaviors include emotional facial expressions, eye gaze,
          hand gestures, head gestures, body gestures, and prosody. A
          comprehensive list of supported nonverbal behaviors are provided in
          this section.
        </p>
        {/* <!--Nonverbal behavior data structure--> */}
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
              <th className="text-nowrap">
                <strong>Value Range</strong>
              </th>
              <th>
                <strong>Description</strong>
              </th>
            </thead>
            <tbody>
              <tr>
                <td id="td_nvb_1">name</td>
                <td id="td_nvb_2">String</td>
                <td id="td_nvb_3"></td>
                <td id="td_nvb_4"></td>
                <td id="td_nvb_5">Nonverbal behavior name</td>
              </tr>
              <tr>
                <td id="td_nvb_6">intensity</td>
                <td id="td_nvb_7">Float</td>
                <td id="td_nvb_8">null</td>
                <td id="td_nvb_9">[0, +1.0]</td>
                <td id="td_nvb_10">Intensity of the expression</td>
              </tr>
              <tr>
                <td id="td_nvb_11">duration</td>
                <td id="td_nvb_12">Float</td>
                <td id="td_nvb_13">null</td>
                <td id="td_nvb_14">(0, +inf)</td>
                <td id="td_nvb_15">Duration of the expression in seconds</td>
              </tr>
              <tr>
                <td id="td_nvb_16">start</td>
                <td id="td_nvb_17">Integer</td>
                <td id="td_nvb_18">null</td>
                <td id="td_nvb_19">[0, +inf)</td>
                <td id="td_nvb_20">
                  Character index (inclusive) of the text where nonverbal
                  behavior expression starts
                </td>
              </tr>
              <tr>
                <td id="td_nvb_21">end</td>
                <td id="td_nvb_22">Integer</td>
                <td id="td_nvb_23">null</td>
                <td id="td_nvb_24">[1, +inf)</td>
                <td id="td_nvb_25">
                  Character index (exclusive) of the text where nonverbal
                  behavior expression ends
                </td>
              </tr>
              <tr>
                <td id="td_nvb_26">side</td>
                <td id="td_nvb_27">String</td>
                <td id="td_nvb_28">null</td>
                <td id="td_nvb_29">LEFT, RIGHT, BOTH</td>
                <td id="td_nvb_30">
                  Face, head, hand, or body side that nonverbal behavior is
                  expressed
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p id="p_nvb_2" className="mt-2 ml-4 mr-4 text-justify">
          Supported nonverbal behaviors by the rapport model include, but not
          limited to, the following behaviors. We will keep this listed updated
          as more behaviors are added to the rapport model. Facial, eye, and
          head movements are all based on Facial Action Coding System (FACS).
        </p>

        <div className="card-body">
          <div className="d-flex justify-content-center">
            <table className="table table-responsive table-striped w-auto rounded-top rounded-bottom border">
              {/* <!--Emotional Facial Expressions--> */}
              <thead className="thead-dark">
                <th colspan="2" className="text-center">
                  <strong>Emotional Facial Expressions</strong>
                </th>
              </thead>
              <thead className="thead-light">
                <th className="text-nowrap">
                  <strong>Name</strong>
                </th>
                <th className="text-nowrap">
                  <strong>Description</strong>
                </th>
              </thead>
              <tbody>
                <tr>
                  <td id="td_txt_31">FACE_HAPPY</td>
                  <td id="td_txt_32">Happy facial expression (AU6 + AU12)</td>
                </tr>
                <tr>
                  <td id="td_txt_33">FACE_SAD</td>
                  <td id="td_txt_34">
                    Sad facial expression (AU1 + AU4 + AU15)
                  </td>
                </tr>
                <tr>
                  <td id="td_txt_35">FACE_ANGRY</td>
                  <td id="td_txt_36">
                    Angry facial expression (AU4 + AU5 + AU7 + AU23)
                  </td>
                </tr>
                <tr>
                  <td id="td_txt_37">FACE_SURPRISED</td>
                  <td id="td_txt_38">
                    Surprised facial expression (AU1 + AU2 + AU5 + AU26)
                  </td>
                </tr>
                <tr>
                  <td id="td_txt_39">FACE_FEARED</td>
                  <td id="td_txt_40">
                    Feared facial expression (AU1 + AU2 + AU4 + AU5 + AU7 + AU20
                    + AU26)
                  </td>
                </tr>
                <tr>
                  <td id="td_txt_41">FACE_DISGUSTED</td>
                  <td id="td_txt_42">
                    Disgusted facial expression (AU9 + AU15 + AU16)
                  </td>
                </tr>
                <tr>
                  <td id="td_txt_43">FACE_CONTEMPT</td>
                  <td id="td_txt_44">
                    Contempt facial expression (AU12R + AU14R)
                  </td>
                </tr>
                <tr>
                  <td id="td_txt_45">FACE_PROUD</td>
                  <td id="td_txt_46">
                    Proud facial expression (AU12 + AU53 + AU58 + AU64)
                  </td>
                </tr>
                <tr>
                  <td id="td_txt_47">FACE_CONFUSED</td>
                  <td id="td_txt_48">
                    Confused facial expression (AU4 + AU7 + AU15 + AU17)
                  </td>
                </tr>
                <tr>
                  <td id="td_txt_49">FACE_EMBARRASSED</td>
                  <td id="td_txt_50">
                    Embarrassed facial expression (AU12 + AU52 + AU62 + AU64)
                  </td>
                </tr>
                {/* <!--Eye Gaze--> */}
                <tr>
                  <thead className="thead-dark">
                    <th colspan="2" className="text-center">
                      <strong>Eye Gazes</strong>
                    </th>
                  </thead>
                  <thead className="thead-light">
                    <th className="text-nowrap">
                      <strong>Name</strong>
                    </th>
                    <th className="text-nowrap">
                      <strong>Description</strong>
                    </th>
                  </thead>
                  <tbody>
                    <tr>
                      <td id="td_txt_51">GAZE_AWAY_FROM_HEARER</td>
                      <td id="td_txt_52">AU61 or AU62</td>
                    </tr>
                    <tr>
                      <td id="td_txt_53">GAZE_TOWARDS_HEARER</td>
                      <td id="td_txt_54">AU0</td>
                    </tr>
                  </tbody>
                </tr>
                {/* <!--Hand Gestures--> */}
                <tr>
                  <thead className="thead-dark">
                    <th colspan="2" className="text-center">
                      <strong>Hand Gesture</strong>
                    </th>
                  </thead>
                  <thead className="thead-light">
                    <th className="text-nowrap">
                      <strong>Name</strong>
                    </th>
                    <th className="text-nowrap">
                      <strong>Description</strong>
                    </th>
                  </thead>
                  <tbody>
                    <tr>
                      <td id="td_txt_55">HAND_FLICK</td>
                      <td id="td_txt_56">
                        A quick and short movement, usually from the wrist or
                        hand
                      </td>
                    </tr>
                    <tr>
                      <td id="td_txt_57">HAND_POINT_SELF</td>
                      <td id="td_txt_58">
                        Hand and/or fingers pointing to self
                      </td>
                    </tr>
                    <tr>
                      <td id="td_txt_59">HAND_POINT_OTHER</td>
                      <td id="td_txt_60">
                        Hand and/or fingers pointing to hearer
                      </td>
                    </tr>
                    <tr>
                      <td id="td_txt_61">HAND_QUESTION</td>
                      <td id="td_txt_62">
                        Hand gesture when a question is being asked
                      </td>
                    </tr>
                    <tr>
                      <td id="td_txt_63">HAND_COMPARISON</td>
                      <td id="td_txt_64">
                        Hand gesture when comparing two things
                      </td>
                    </tr>
                    <tr>
                      <td id="td_txt_65">HAND_CONTRAST</td>
                      <td id="td_txt_66">
                        Hand gesture when saying contrasting phrases
                      </td>
                    </tr>
                    <tr>
                      <td id="td_txt_67">HAND_NEGATION</td>
                      <td id="td_txt_68">
                        Hand gesture when a negation is in the sentence
                      </td>
                    </tr>
                  </tbody>
                </tr>
                {/* <!--Head Gestures--> */}
                <tr>
                  <thead className="thead-dark">
                    <th colspan="2" className="text-center">
                      <strong>Head Gesture</strong>
                    </th>
                  </thead>
                  <thead className="thead-light">
                    <th className="text-nowrap">
                      <strong>Name</strong>
                    </th>
                    <th className="text-nowrap">
                      <strong>Description</strong>
                    </th>
                  </thead>
                  <tbody>
                    <tr>
                      <td id="td_txt_69">HEAD_NOD</td>
                      <td id="td_txt_70">AUM59</td>
                    </tr>
                    <tr>
                      <td id="td_txt_71">HEAD_SHAKE</td>
                      <td id="td_txt_72">AUM60</td>
                    </tr>
                    <tr>
                      <td id="td_txt_73">HEAD_SWEEP</td>
                      <td id="td_txt_74">Sweeping head from side to side</td>
                    </tr>
                    <tr>
                      <td id="td_txt_75">AU51</td>
                      <td id="td_txt_76">Head turn to the left</td>
                    </tr>
                    <tr>
                      <td id="td_txt_77">AU52</td>
                      <td id="td_txt_78">Head turn to the right</td>
                    </tr>
                    <tr>
                      <td id="td_txt_79">AU55</td>
                      <td id="td_txt_80">Head tilt to the left</td>
                    </tr>
                    <tr>
                      <td id="td_txt_81">AU56</td>
                      <td id="td_txt_82">Head tilt to the right</td>
                    </tr>
                  </tbody>
                </tr>
                {/* <!--Body Gestures--> */}
                <tr>
                  <thead className="thead-dark">
                    <th colspan="2" className="text-center">
                      <strong>Body Gesture</strong>
                    </th>
                  </thead>
                  <thead className="thead-light">
                    <th className="text-nowrap">
                      <strong>Name</strong>
                    </th>
                    <th className="text-nowrap">
                      <strong>Description</strong>
                    </th>
                  </thead>
                  <tbody>
                    <tr>
                      <td id="td_txt_83">BODY_LEAN_LEFT</td>
                      <td id="td_txt_84">Body lean to the left</td>
                    </tr>
                    <tr>
                      <td id="td_txt_85">BODY_LEAN_RIGHT</td>
                      <td id="td_txt_86">Body lean to the right</td>
                    </tr>
                    <tr>
                      <td id="td_txt_87">BODY_LEAN_FORWARD</td>
                      <td id="td_txt_88">Body lean forward</td>
                    </tr>
                    <tr>
                      <td id="td_txt_89">BODY_LEAN_BACKWARD</td>
                      <td id="td_txt_90">Body lean backward</td>
                    </tr>
                  </tbody>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

nvb.Layout = DocsLayout;

export default nvb;
