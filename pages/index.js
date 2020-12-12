import Link from "next/link";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

function Homepage() {
  return (
    <div className="page ">
      <section
        className="jumbotron align-items-center m-0"
        style={{
          backgroundImage: "url(header_small_v2.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "100vh",
          width: "100%",
          display: "table",
          // padding: "160px",
        }}
      >
        <div
          className="container text-white"
          style={{
            display: "table-cell",
            verticalAlign: "middle",
            textAlign: "center",
          }}
        >
          <h1 className="text-responsive  text-white">
            artificial Emotional intelligence
          </h1>
          <h5 className="text-responsive mt-3  text-white">as a service</h5>
          <div
            id="seahorse_spinner"
            className="spinner-grow spinner-grow-sm text-warning"
            style={{ marginTop: "150px" }}
          ></div>
          <div
            id="main_title"
            className=" mx-auto d-flex flex-column align-items-center"
          >
            <Link href="./docs.html">
              <a
                id="main_start_btn"
                className="btn btn-md text-white"
                style={{ marginTop: "200px", backgroundColor: "#9c27b0" }}
              >
                Get Started
              </a>
            </Link>
          </div>
          {/* artificial Emotional intelligence
          <p>
            <a href="" className="btn btn-primary btn-md">
              Get Started
            </a>
          </p> */}
        </div>
      </section>

      {/* <!--Page Header--> */}
      {/* <header
        className="masthead  text-center text-white"
        style={{
          backgroundImage: "url(header_small_v2.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          padding:"160px"
        }}
      >
        <div className="container-fluid w-100 h-100 mw-100 mh-100 ">
          <div className="col w-100 h-100 mw-100 mh-100 d-flex flex-column justify-content-around align-items-center align-self-center">
            <div
              id="main_title"
              className="col mx-auto d-flex flex-column align-items-center"
            >
              <h1 className="text-responsive  text-white">
                artificial Emotional intelligence
              </h1>
              <h5 className="text-responsive mt-3  text-white">as a service</h5>
            </div>
            <div
              id="seahorse_spinner"
              className="spinner-grow spinner-grow-sm text-warning"
            ></div>
            <Link href="./docs.html">
              <a id="main_start_btn" className="btn btn-primary btn-md">
                Get Started
              </a>
            </Link>
          </div>
        </div>
      </header> */}

      {/* <!--About Section--> */}
      <div
        id="about"
        className="pt-5 pb-5 text-white"
        style={{ backgroundColor: "#3c3183" }}
      >
        <div className="container">
          <div className="row mb-5">
            <div className="col-sm-10 col-md-10 col-lg-10 mx-auto text-center">
              <h2 className="text-white">What's in your clients' minds?</h2>
              <hr
                className="my-4 col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2"
                style={{ borderColor: "#FAE8EB" }}
              />
            </div>
            <div className="col-11 col-sm-10 col-md-10 col-lg-8 mx-auto my-auto text-center d-flex flex-column align-items-center">
              <p
                className="my-4"
                style={{ borderColor: "#FAE8EB", fontSize: "medium" }}
              >
                aEi.ai provides artificial Emotional intelligence (aEi) as
                service by modelling affective features, including emotion,
                mood, personality, satisfaction, impression, social perception,
                empathy, and rapport of peers in a conversation (people and
                virtual agents), and making the models available through RESTful
                services
              </p>
              <p
                className="my-2"
                style={{ borderColor: "#FAE8EB", fontSize: "medium" }}
              >
                We use state-of-the-art deep learning algorithms to infer
                individuals' affective features from different input sources
                (e.g., text, voice, image, and video)
              </p>
              <div className="row mt-3 col-md-8 justify-content-between">
                <button
                  className="btn btn-sm text-white float-left"
                  onclick="location.href='./docs.html'"
                  style={{ backgroundColor: "#9c27b0" }}
                >
                  Get Started
                </button>
                <button
                  className="btn btn-sm btn-light float-right"
                  onclick="location.href='./register.html'"
                >
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!--Services Section--> */}
      <div
        className="pt-5 pb-5"
        id="services"
        style={{ backgroundColor: "#343a40" }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-10 col-md-10 col-lg-10 mx-auto text-center">
              <h2 className="text-white">EI as a Service</h2>
              <hr
                className="my-4 col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2"
                style={{ borderColor: "#FAE8EB" }}
              />
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div id="services_row_col_1" className="d-flex align-items-center">
            <div className="col-8 col-sm-4 mx-auto text-center">
              <div className="service-box mt-5 mx-auto">
                <i
                  className="fas fa-4x fa-gem text-secondary mb-3"
                  style={{ color: "#a91e89 !important" }}
                ></i>
                <h4 className="mb-3 text-white">Cutting Edge</h4>
                <p className="text-muted mb-0">Deep Learning algorithms</p>
              </div>
            </div>
            <div className="col-8 col-sm-4 text-center">
              <div className="service-box mt-5 mx-auto">
                <i
                  className="fas fa-4x fa-smile text-secondary mb-3"
                  style={{ color: "#a91e89 !important" }}
                ></i>
                <h4 className="mb-3 text-white">Models EQ</h4>
                <p className="text-muted mb-0">
                  Emotion, mood, personality, empathy
                </p>
              </div>
            </div>
            <div className="col-8 col-sm-4 text-center">
              <div className="service-box mt-5 mx-auto">
                <i
                  className="fas fa-4x fa-puzzle-piece text-secondary mb-3"
                  style={{ color: "#a91e89 !important" }}
                ></i>
                <h4 className="mb-3 text-white">Augments AI</h4>
                <p className="text-muted mb-0">With Emotional Intelligence</p>
              </div>
            </div>
          </div>
          <div id="services_row_col_2" className="d-flex align-items-center">
            <div className="col-7 col-sm-5 col-md-4 col-lg-4 col-xl-4 text-center">
              <div className="service-box mt-5 mx-auto">
                <i
                  className="fas fa-4x fa-code text-secondary mb-3"
                  style={{ color: "#a91e89 !important" }}
                ></i>
                <h4 className="mb-3 text-white">Easy Access</h4>
                <p className="text-muted mb-0">RESTful services</p>
              </div>
            </div>
            <div className="col-7 col-sm-5 col-md-4 col-lg-4 col-xl-4 text-center">
              <div className="service-box mt-5 mx-auto">
                <i
                  className="fas fa-4x fa-terminal text-secondary mb-3"
                  style={{ color: "#a91e89 !important" }}
                ></i>
                <h4 className="mb-3 text-white">Developer Friendly</h4>
                <p className="text-muted mb-0">10,000 FREE queries per month</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!--Architecture Section--> */}
      <div className="pt-5 pb-5" id="architecture">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center">
              <h2 className="text-dark">Architecture</h2>
              <hr
                className="my-4 col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2"
                style={{ borderColor: "#282A29" }}
              />
            </div>
          </div>
          <div className="container-fluid my-4">
            <div className="row justify-content-md-center">
              <div className="col-12 col-sm-12 col-md-12 col-lg-11 col-xl-11">
                <img
                  src="../architecture.png"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!--Prices Section--> */}
      <div
        className="pt-5 pb-5"
        id="prices"
        style={{ backgroundColor: "#3c3183 !important" }}
      >
        <div className="container-fluid col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10">
          <div className="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 mx-auto text-center">
            <h2 className="text-white">Prices</h2>
            <hr
              className="my-4 col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2"
              style={{ borderColor: "#FAE8EB" }}
            />
          </div>

          <div className="pricing-table">
            <div className="pricing-card">
              <h3 className="pricing-card-header">FREE</h3>
              <div className="price">
                <sup >$</sup>0<span>/Month</span>
              </div>
              <div
                class="card-body text-dark flex-column"
                style={{
                  flex: "1",
                  justifyContent: "center",
                  fontSize: "small",
                }}
              >
                <ul className="list-unstyled mt-3 mb-4">
                  <li>10,000 queries per month</li>
                  <li>No credit card needed</li>
                  <li>Email support</li>
                </ul>
              </div>
              <a href="#" className="order-btn">
                Order Now
              </a>
            </div>

            <div className="pricing-card">
              <h3 className="pricing-card-header">Pay as You Go</h3>
              <div className="price">
                <sup>$</sup>0.001<span>/query</span>
              </div>
              <div
                class="card-body text-dark flex-column"
                style={{
                  flex: "1",
                  justifyContent: "center",
                  fontSize: "small",
                }}
              >
                <ul className="card-text list-unstyled mt-3 mb-4">
                  <li>Unlimited</li>
                  <li>Priority email support</li>
                  <li>Help center access</li>
                </ul>
              </div>
              <a href="#" className="order-btn">
                Order Now
              </a>
            </div>

            <div className="pricing-card">
              <h3 className="pricing-card-header">Monthly</h3>
              <div className="price">
                <sup>$</sup>10<span>/Month</span>
              </div>
              <div
                class="card-body text-dark flex-column"
                style={{
                  flex: "1",
                  justifyContent: "center",
                  fontSize: "small",
                }}
              >
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Unlimited</li>
                  <li>Priority email support</li>
                  <li>Help center access</li>
                </ul>
              </div>
              <a href="#" className="order-btn">
                Order Now
              </a>
            </div>
          </div>

          {/* <!--Price details table--> */}
          <Table className="table table-sm" style={{ fontSize: "small" }}>
            <Thead>
              <Tr className="text-light">
                <Th className="border-top-0 border-bottom-0" scope="col"></Th>
                <Th
                  className="border-bottom-0"
                  scope="col"
                  style={{ borderColor: "#FAE8EB", fontSize: "small" }}
                >
                  Personal
                </Th>
                <Th
                  className="border-bottom-0"
                  scope="col"
                  style={{ borderColor: "#FAE8EB", fontSize: "small" }}
                >
                  Small-size Business{" "}
                  <sup>
                    <button
                      type="button"
                      className="badge badge-pill badge-info"
                      data-toggle="popover"
                      data-trigger="hover"
                      title="Small-size Business"
                      data-content="An organization with fewer than 100 employees or less than $50 million annual revenue"
                      style={{ fontSize: "x-small" }}
                    >
                      ?
                    </button>
                  </sup>
                </Th>
                <Th
                  className="border-bottom-0"
                  scope="col"
                  style={{ borderColor: "#FAE8EB", fontSize: "small" }}
                >
                  Mid-size Business{" "}
                  <sup>
                    <button
                      type="button"
                      className="badge badge-pill badge-info"
                      data-toggle="popover"
                      data-trigger="hover"
                      title="Mid-size Business"
                      data-content="An organization with 100 to 999 employees or more than $50 million but less than $1 billion annual revenue"
                      style={{ fontSize: "x-small" }}
                    >
                      ?
                    </button>
                  </sup>
                </Th>
                <Th
                  className="border-bottom-0"
                  scope="col"
                  style={{ borderColor: "#FAE8EB", fontSize: "small" }}
                >
                  Enterprise{" "}
                  <sup>
                    <button
                      type="button"
                      className="badge badge-pill badge-info"
                      data-toggle="popover"
                      data-trigger="hover"
                      title="Enterprise"
                      data-content="An organization with 1000 or more employees or at least $1 billion annual revenue"
                      style={{ fontSize: "x-small" }}
                    >
                      ?
                    </button>
                  </sup>
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr className="text-muted">
                <Th
                  className="text-light border-top"
                  style={{ borderColor: "#FAE8EB" }}
                >
                  <sup>*</sup> Pay as You Go
                </Th>
                <Td style={{ borderColor: "#FAE8EB" }}>$0.001 / query</Td>
                <Td style={{ borderColor: "#FAE8EB" }}>$0.002 / query</Td>
                <Td style={{ borderColor: "#FAE8EB" }}>$0.004 / query</Td>
                <Td style={{ borderColor: "#FAE8EB" }}>$0.008 / query</Td>
              </Tr>
              <Tr className="text-muted">
                <Th
                  className="text-light border-bottom"
                  style={{ borderColor: "#FAE8EB" }}
                >
                  <sup>**</sup> Monthly
                </Th>
                <Td
                  className="border-bottom"
                  style={{ borderColor: "#FAE8EB" }}
                >
                  $10 / month
                </Td>
                <Td
                  className="border-bottom"
                  style={{ borderColor: "#FAE8EB" }}
                >
                  $20 / month
                </Td>
                <Td
                  className="border-bottom"
                  style={{ borderColor: "#FAE8EB" }}
                >
                  $40 / month
                </Td>
                <Td
                  className="border-bottom"
                  style={{ borderColor: "#FAE8EB" }}
                >
                  $80 / month
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </div>
      </div>

      {/* <!--Contacts Section--> */}
      <div id="contact" className="bg-dark text-white pt-5 pb-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-8 col-md-8 col-lg-8 mx-auto text-center text-white">
              <h2>Let's Get in Touch</h2>
              <hr
                className="my-4 col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2"
                style={{ borderColor: "#FAE8EB" }}
              />
            </div>
          </div>
          <div className="row my-4">
            <div className="col-sm-8 col-md-8 col-lg-8 mx-auto text-center text-white">
              <p className="mb-3" style={{ fontSize: "medium" }}>
                Ready to start your next project with us?
              </p>
              <p className="mb-5" style={{ fontSize: "medium" }}>
                Check out our <a href="./docs.html">documentation</a> and
                contact us for support
              </p>
            </div>
          </div>
          {/* <!--Contacts--> */}
          <div className="row">
            {/* <!--Phone--> */}
            <div className="col-sm-4 col-md-4 col-lg-4 ml-auto text-center">
              <i className="fas fa-phone fa-3x mb-3 sr-contact-1 text-secondary"></i>
              <p className="text-white" style={{ fontSize: "large" }}>
                +1 (234) 22-AEIAI
                <p className="text-white my-0" style={{ fontSize: "small" }}>
                  OR +1 (234) 222-3424
                </p>
              </p>
            </div>
            {/* <!--Email--> */}
            <div className="col-sm-4 col-md-4 col-lg-4 mr-auto text-center">
              <i className="fas fa-envelope fa-3x mb-3 sr-contact-2 text-secondary"></i>
              <p>
                <Link href="mailto:info@aei.ai">
                  <a className="text-white" style={{ fontSize: "large" }}>
                    info@aei.ai
                  </a>
                </Link>
              </p>
            </div>
          </div>
          {/* <!--Social Media--> */}
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-6 mx-auto text-center mt-3">
              {/* <!--Facebook--> */}
              <Link href="https://www.facebook.com/AEIAI-2369753323243842/">
                <a
                  className="col-sm-2 col-md-2 col-lg-2 text-center"
                  rel="tooltip"
                  target="_blank"
                  data-original-title="Like us on Facebook"
                >
                  <i className="fa fa-facebook-square fa-2x mb-3 text-secondary"></i>
                </a>
              </Link>
              {/* <!--Instagram--> */}
              <Link href="https://www.instagram.com/aei.ai.llc/">
                <a
                  className="col-sm-2 col-md-2 col-lg-2 text-center"
                  rel="tooltip"
                  target="_blank"
                  data-original-title="Follow us on Instagram"
                >
                  <i className="fa fa-instagram fa-2x mb-3 text-secondary"></i>
                </a>
              </Link>
              {/* <!--Twitter--> */}
              <Link href="https://twitter.com/aei_ai">
                <a
                  className="col-sm-2 col-md-2 col-lg-2 text-center"
                  rel="tooltip"
                  target="_blank"
                  data-original-title="Follow us on Twitter"
                >
                  <i className="fa fa-twitter fa-2x mb-3 text-secondary"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* <!--Footer--> */}
      <footer className="footer footer-default bg-dark text-white">
        {/* <!--This invisible phrase always stays here, not matter what--> */}
        <p
          className="text-dark col-2 float-left"
          style={{ fontSize: "3pt", fontFamily: "Amiri, serif" }}
        >
          To Hamani Ke Rage Khabe Mara Midani
        </p>

        <div className="container-fluid" style={{ fontSize: "small" }}>
          <div className="copyright float-right">
            &copy;
            <script>document.write(new Date().getFullYear())</script>
            aEi.ai All rights reserved.
            <Link href="./terms.html">
              <a target="_blank">Terms</a>
            </Link>
            {"&"}
            <Link href="./privacy-policy.html">
              <a target="_blank">Privacy Policy</a>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;
