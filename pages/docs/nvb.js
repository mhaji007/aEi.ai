import React from "react";
import DocsLayout from "../../components/layouts/docs";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

function nvb() {
  return (
    <div id="data_structures_nvb" className="card">
      <div
        className="card-header card-header-secondary "
        style={{ background: "linear-gradient(60deg, #391141, #8e24aa)" }}
      >
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
              <Th className="text-nowrap">
                <strong>Value Range</strong>
              </Th>
              <Th>
                <strong>Description</strong>
              </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td id="td_nvb_1">name</Td>
                <Td id="td_nvb_2">String</Td>
                <Td id="td_nvb_3"></Td>
                <Td id="td_nvb_4"></Td>
                <Td id="td_nvb_5">Nonverbal behavior name</Td>
              </Tr>
              <Tr>
                <Td id="td_nvb_6">intensity</Td>
                <Td id="td_nvb_7">Float</Td>
                <Td id="td_nvb_8">null</Td>
                <Td id="td_nvb_9">[0, +1.0]</Td>
                <Td id="td_nvb_10">Intensity of the expression</Td>
              </Tr>
              <Tr>
                <Td id="td_nvb_11">duration</Td>
                <Td id="td_nvb_12">Float</Td>
                <Td id="td_nvb_13">null</Td>
                <Td id="td_nvb_14">(0, +inf)</Td>
                <Td id="td_nvb_15">Duration of the expression in seconds</Td>
              </Tr>
              <Tr>
                <Td id="td_nvb_16">start</Td>
                <Td id="td_nvb_17">Integer</Td>
                <Td id="td_nvb_18">null</Td>
                <Td id="td_nvb_19">[0, +inf)</Td>
                <Td id="td_nvb_20">
                  Character index (inclusive) of the text where nonverbal
                  behavior expression starts
                </Td>
              </Tr>
              <Tr>
                <Td id="td_nvb_21">end</Td>
                <Td id="td_nvb_22">Integer</Td>
                <Td id="td_nvb_23">null</Td>
                <Td id="td_nvb_24">[1, +inf)</Td>
                <Td id="td_nvb_25">
                  Character index (exclusive) of the text where nonverbal
                  behavior expression ends
                </Td>
              </Tr>
              <Tr>
                <Td id="td_nvb_26">side</Td>
                <Td id="td_nvb_27">String</Td>
                <Td id="td_nvb_28">null</Td>
                <Td id="td_nvb_29">LEFT, RIGHT, BOTH</Td>
                <Td id="td_nvb_30">
                  Face, head, hand, or body side that nonverbal behavior is
                  expressed
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </div>

        <p id="p_nvb_2" className="mt-2 ml-4 mr-4 text-justify">
          Supported nonverbal behaviors by the rapport model include, but not
          limited to, the following behaviors. We will keep this listed updated
          as more behaviors are added to the rapport model. Facial, eye, and
          head movements are all based on Facial Action Coding System (FACS).
        </p>

        <div className="card-body">
          <div className="d-flex justify-content-center">
            <Table className="table table-responsive table-striped w-auto rounded-top rounded-bottom border">
              {/* <!--Emotional Facial Expressions--> */}
              <Thead className="thead-dark">
                <Tr>

                <Th colspan="2" className="text-center">
                  <strong>Emotional Facial Expressions</strong>
                </Th>
                </Tr>
              </Thead>
              <Thead className="thead-light">
                <Tr>
                <Th className="text-nowrap">
                  <strong>Name</strong>
                </Th>
                <Th className="text-nowrap">
                  <strong>Description</strong>
                </Th>

                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td id="td_txt_31">FACE_HAPPY</Td>
                  <Td id="td_txt_32">Happy facial expression (AU6 + AU12)</Td>
                </Tr>
                <Tr>
                  <Td id="td_txt_33">FACE_SAD</Td>
                  <Td id="td_txt_34">
                    Sad facial expression (AU1 + AU4 + AU15)
                  </Td>
                </Tr>
                <Tr>
                  <Td id="td_txt_35">FACE_ANGRY</Td>
                  <Td id="td_txt_36">
                    Angry facial expression (AU4 + AU5 + AU7 + AU23)
                  </Td>
                </Tr>
                <Tr>
                  <Td id="td_txt_37">FACE_SURPRISED</Td>
                  <Td id="td_txt_38">
                    Surprised facial expression (AU1 + AU2 + AU5 + AU26)
                  </Td>
                </Tr>
                <Tr>
                  <Td id="td_txt_39">FACE_FEARED</Td>
                  <Td id="td_txt_40">
                    Feared facial expression (AU1 + AU2 + AU4 + AU5 + AU7 + AU20
                    + AU26)
                  </Td>
                </Tr>
                <Tr>
                  <Td id="td_txt_41">FACE_DISGUSTED</Td>
                  <Td id="td_txt_42">
                    Disgusted facial expression (AU9 + AU15 + AU16)
                  </Td>
                </Tr>
                <Tr>
                  <Td id="td_txt_43">FACE_CONTEMPT</Td>
                  <Td id="td_txt_44">
                    Contempt facial expression (AU12R + AU14R)
                  </Td>
                </Tr>
                <Tr>
                  <Td id="td_txt_45">FACE_PROUD</Td>
                  <Td id="td_txt_46">
                    Proud facial expression (AU12 + AU53 + AU58 + AU64)
                  </Td>
                </Tr>
                <Tr>
                  <Td id="td_txt_47">FACE_CONFUSED</Td>
                  <Td id="td_txt_48">
                    Confused facial expression (AU4 + AU7 + AU15 + AU17)
                  </Td>
                </Tr>
                <Tr>
                  <Td id="td_txt_49">FACE_EMBARRASSED</Td>
                  <Td id="td_txt_50">
                    Embarrassed facial expression (AU12 + AU52 + AU62 + AU64)
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </div>
        </div>
        {/* <!--Eye Gaze--> */}

        {/* <!--Affect data structure--> */}
        <div className="d-flex justify-content-center">
          <Table className="table table-responsive table-striped w-auto rounded-top rounded-bottom border">
            <Thead className="thead-dark">
              <Tr>

              <Th colspan="2" className="text-center">
                <strong>Eye Gazes</strong>
              </Th>
              </Tr>
            </Thead>
            <Thead className="thead-light">
              <Tr>

              <Th className="text-nowrap">
                <strong>Name</strong>
              </Th>
              <Th className="text-nowrap">
                <strong>Description</strong>
              </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td id="td_txt_51">GAZE_AWAY_FROM_HEARER</Td>
                <Td id="td_txt_52">AU61 or AU62</Td>
              </Tr>
              <Tr>
                <Td id="td_txt_53">GAZE_TOWARDS_HEARER</Td>
                <Td id="td_txt_54">AU0</Td>
              </Tr>
            </Tbody>
          </Table>
        </div>

        {/* <!--Hand Gestures--> */}

        <div className="d-flex justify-content-center">
          <Table className="table table-responsive table-striped w-auto rounded-top rounded-bottom border">
            <Thead className="thead-dark">
              <Tr>
              <Th colspan="2" className="text-center">
                <strong>Hand Gesture</strong>
              </Th>

              </Tr>
            </Thead>
            <Thead className="thead-light">
              <Tr>
              <Th className="text-nowrap">
                <strong>Name</strong>
              </Th>
              <Th className="text-nowrap">
                <strong>Description</strong>
              </Th>

              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td id="td_txt_55">HAND_FLICK</Td>
                <Td id="td_txt_56">
                  A quick and short movement, usually from the wrist or hand
                </Td>
              </Tr>
              <Tr>
                <Td id="td_txt_57">HAND_POINT_SELF</Td>
                <Td id="td_txt_58">Hand and/or fingers pointing to self</Td>
              </Tr>
              <Tr>
                <Td id="td_txt_59">HAND_POINT_OTHER</Td>
                <Td id="td_txt_60">Hand and/or fingers pointing to hearer</Td>
              </Tr>
              <Tr>
                <Td id="td_txt_61">HAND_QUESTION</Td>
                <Td id="td_txt_62">
                  Hand gesture when a question is being asked
                </Td>
              </Tr>
              <Tr>
                <Td id="td_txt_63">HAND_COMPARISON</Td>
                <Td id="td_txt_64">Hand gesture when comparing two things</Td>
              </Tr>
              <Tr>
                <Td id="td_txt_65">HAND_CONTRAST</Td>
                <Td id="td_txt_66">
                  Hand gesture when saying contrasting phrases
                </Td>
              </Tr>
              <Tr>
                <Td id="td_txt_67">HAND_NEGATION</Td>
                <Td id="td_txt_68">
                  Hand gesture when a negation is in the sentence
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </div>

        {/* <!--Head Gestures--> */}

        <div className="d-flex justify-content-center">
          <Table className="table table-responsive table-striped w-auto rounded-top rounded-bottom border">
            <Thead className="thead-dark">
              <Tr>

              <Th colspan="2" className="text-center">
                <strong>Head Gesture</strong>
              </Th>
              </Tr>
            </Thead>
            <Thead className="thead-light">
              <Tr>
              <Th className="text-nowrap">
                <strong>Name</strong>
              </Th>
              <Th className="text-nowrap">
                <strong>Description</strong>
              </Th>

              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td id="td_txt_69">HEAD_NOD</Td>
                <Td id="td_txt_70">AUM59</Td>
              </Tr>
              <Tr>
                <Td id="td_txt_71">HEAD_SHAKE</Td>
                <Td id="td_txt_72">AUM60</Td>
              </Tr>
              <Tr>
                <Td id="td_txt_73">HEAD_SWEEP</Td>
                <Td id="td_txt_74">Sweeping head from side to side</Td>
              </Tr>
              <Tr>
                <Td id="td_txt_75">AU51</Td>
                <Td id="td_txt_76">Head turn to the left</Td>
              </Tr>
              <Tr>
                <Td id="td_txt_77">AU52</Td>
                <Td id="td_txt_78">Head turn to the right</Td>
              </Tr>
              <Tr>
                <Td id="td_txt_79">AU55</Td>
                <Td id="td_txt_80">Head tilt to the left</Td>
              </Tr>
              <Tr>
                <Td id="td_txt_81">AU56</Td>
                <Td id="td_txt_82">Head tilt to the right</Td>
              </Tr>
            </Tbody>
          </Table>
        </div>

        {/* <!--Body Gestures--> */}

        <div className="d-flex justify-content-center">
          <Table className="table table-responsive table-striped w-auto rounded-top rounded-bottom border">
            <Thead className="thead-dark">
              <Tr>
              <Th colspan="2" className="text-center">
                <strong>Body Gesture</strong>
              </Th>

              </Tr>
            </Thead>
            <Thead className="thead-light">
              <Tr>
              <Th className="text-nowrap">
                <strong>Name</strong>
              </Th>
              <Th className="text-nowrap">
                <strong>Description</strong>
              </Th>

              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td id="td_txt_83">BODY_LEAN_LEFT</Td>
                <Td id="td_txt_84">Body lean to the left</Td>
              </Tr>
              <Tr>
                <Td id="td_txt_85">BODY_LEAN_RIGHT</Td>
                <Td id="td_txt_86">Body lean to the right</Td>
              </Tr>
              <Tr>
                <Td id="td_txt_87">BODY_LEAN_FORWARD</Td>
                <Td id="td_txt_88">Body lean forward</Td>
              </Tr>
              <Tr>
                <Td id="td_txt_89">BODY_LEAN_BACKWARD</Td>
                <Td id="td_txt_90">Body lean backward</Td>
              </Tr>
            </Tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

nvb.Layout = DocsLayout;

export default nvb;
