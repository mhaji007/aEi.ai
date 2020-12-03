import React from 'react'
import DocsLayout from "../../components/layouts/docs";


function register() {
  return (
    <div>
      <div id="api_rest_registration" className="card">
                            <div className="card-header card-header-secondary">
                                <h3 id="h3_reg_1" className="my-0 text-white">Register New Account</h3>
                            </div>
                            <div className="card-body">
                                <p id="p_reg_1" className="column mt-2 ml-4 mr-4 text-justify">
                                    In order to use aEi.ai services, you need to create a FREE account with an email, username, and password on our <a href="./register.html">Register Page</a>. No credit card information is required to query the aEi.ai services <strong>10,000 times per month</strong>. If you need more queries, login to your account in aEi.ai website with the same username/password used to create the account, go to your profile, and subscribe to a paid plan that fits your needs the best.
                                </p>
                                <div className="alert alert-success mt-4 mb-4" role="alert" style={{backgroundColor: "rgba(92, 184, 92, 0.2)"}}>
                                    <div className="alert-heading ml-3 mr-3 text-success">
                                        <h3 id="h3_reg_2" className="font-weight-normal"><i className="fa fa-info text-success mr-4"></i>Info</h3>
                                    </div>
                                    <p id="p_reg_2" className="ml-3 mr-3 text-dark">
                                        When you decide to subscribe to one of paid plans, please consider the following definitions for different business types. <strong><u>Small business</u></strong> is an organization with fewer than 100 employees or less than $50 million annual revenue. <strong><u>Mid-size business</u></strong> is an organization with 100 to 999 employees or more than $50 million but less than $1 billion annual revenue. <strong><u>Enterprise</u></strong> is an organization with 1000 or more employees or at least $1 billion annual revenue.
                                    </p>
                                </div>
                                <p id="p_reg_3" className="mt-2 ml-4 mr-4 text-justify">In addition to the <a href="./register.html">website UI</a>, you can also use the API to register a new account in aEi.ai by making a <strong><u>POST</u></strong> request to the register API, with header parameters named <strong><u>username</u></strong>, <strong><u>password</u></strong>, <strong><u>email</u></strong>, and <strong><u>agreed</u></strong>, which means <strong>you have read and agreed to the aEi.ai <a href="./terms.html">Terms of Service</a> and <a href="./privacy-policy.html">Privacy Policy</a></strong>.</p>
                                <div className="card-body">
                                    <div className="d-flex justify-content-center">
                                        <table className="table table-responsive table-striped w-auto rounded-top rounded-bottom border">
                                            <thead className="thead-dark">
                                                <th colspan="4" className="text-center"><strong>Request</strong></th>
                                            </thead>
                                            <thead className="thead-light">
                                                <th className="text-nowrap"><strong>API Type</strong></th>
                                                <th className="text-nowrap"><strong>HTTP Method</strong></th>
                                                <th colspan="2"><strong>URL</strong></th>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td id="td_reg_1">FREE</td>
                                                    <td id="td_reg_2">POST</td>
                                                    <td id="td_reg_3" colspan="2"><strong>https://aei.ai/register</strong></td>
                                                </tr>
                                                <tr>
                                                    <thead className="thead-dark">
                                                        <th colspan="4" className="text-center"><strong>Parameters</strong></th>
                                                    </thead>
                                                    <thead className="thead-light">
                                                        <th><strong>Parameter</strong></th>
                                                        <th><strong>Type</strong></th>
                                                        <th><strong>Required</strong></th>
                                                        <th><strong>Description</strong></th>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td id="td_reg_4">username</td>
                                                        <td id="td_reg_5">Header</td>
                                                        <td id="td_reg_6">Yes</td>
                                                        <td id="td_reg_7">Account username</td>
                                                    </tr>
                                                    <tr>
                                                        <td id="td_reg_8">password</td>
                                                        <td id="td_reg_9">Header</td>
                                                        <td id="td_reg_10">Yes</td>
                                                        <td id="td_reg_11">Account password</td>
                                                    </tr>
                                                    <tr>
                                                        <td id="td_reg_12">email</td>
                                                        <td id="td_reg_13">Header</td>
                                                        <td id="td_reg_14">Yes</td>
                                                        <td id="td_reg_15">Account email</td>
                                                    </tr>
                                                    <tr>
                                                        <td id="td_reg_16">agreed</td>
                                                        <td id="td_reg_17">Header</td>
                                                        <td id="td_reg_18">Yes</td>
                                                        <td id="td_reg_19">true if you have read and agreed to the aEi.ai <a href="./terms.html">Terms of Service</a> and <a href="./privacy-policy.html">Privacy Policy</a>, false otherwise.</td>
                                                    </tr>
                                                    </tbody>
                                                </tr>
                                                <tr>
                                                    <thead className="thead-dark">
                                                        <th colspan="4" className="text-center"><strong>Response</strong></th>
                                                    </thead>
                                                    <thead className="thead-light">
                                                        <th><strong>Property</strong></th>
                                                        <th><strong>Type</strong></th>
                                                        <th colspan="2"><strong>Description</strong></th>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td id="td_reg_20">status</td>
                                                        <td id="td_reg_21"><a href="#error_handling">Status</a></td>
                                                        <td id="td_reg_22" colspan="2">Response <a href="#error_handling">status</a> object</td>
                                                    </tr>
                                                    </tbody>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <p id="p_reg_4" className="mt-2 ml-4 mr-4 text-justify">Sample query would look like the following: <pre className="prettyprint">curl -X POST 'https://aei.ai/register' -H 'username: &lt;your username&gt;' -H 'password: &lt;your password&gt;' -H 'email: &lt;your email&gt;' -H 'agreed: true'</pre></p>
                                <p id="p_reg_5" className="mt-2 ml-4 mr-4 text-justify">Expected output looks like this:<pre className="prettyprint">
{"{"}
    "status": {"{"}
        "code": 200,
        "error": null,
        "help": null
        {"}"}
{"}"}</pre>
                                </p>
                                <div className="alert alert-success mt-4 mb-4" role="alert" style={{backgroundColor: "rgba(92, 184, 92, 0.2)"}}>
                                    <div className="alert-heading ml-3 mr-3 text-success">
                                        <h3 id="h3_reg_3" className="font-weight-normal"><i className="fa fa-info text-success mr-4"></i>Info</h3>
                                    </div>
                                    {/* <p id="p_reg_6" className="ml-3 mr-3 text-dark">A valid password has <strong><u>at least 8 characters</u></strong>, including <strong><u>lowercase</u></strong>, <strong><u>uppercase</u></strong>, <strong><u>digit</u></strong>, and <strong><u>symbol</u></strong>. Symbols can include ~`!@#$%^&*()_-+=|\}]{[';:/?.>,<</p> */}
                                </div>
                            </div>
                        </div>
    </div>
  )
}
register.Layout = DocsLayout;
export default register

