
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MainBanner from "./img/banner-img.png";
import MainLogo from "./img/main-logo.png";
import RightTopArrow from "./img/Vector.png";
import MainBlog from "./img/blog-img.jpg";
import Services from "./img/our-services.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const App = () => {
  const [activeAccordion, setActiveAccordion] = useState("flutter");

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <div className="App">
      <section className="main-page-box-container">
        <div className="row">
          <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4">
            <motion.div
              className="main-header"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div>
                <div className="main-logo">
                  <a href="#.">
                    <img src={MainLogo} alt="main-logo" />
                  </a>
                </div>
                <div className="contact-btn">
                  <button className="gradient-border-btn">Contact Us</button>
                </div>
                <div className="navbar-list">
                  <ul>
                    <li>
                      <a href="#.">App Development</a>
                    </li>
                    <li>
                      <a href="#.">Challenges</a>
                    </li>
                    <li>
                      <a href="#.">Hire Developer</a>
                    </li>
                    <li>
                      <a href="#.">Community</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="blog-main-sec">
                <div className="blog-img">
                  <img src={MainBlog} alt="blog" />
                </div>
                <div className="blog-content">
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Enim tempor posuere
                    rutrum.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="col-xl-10 col-lg-10 col-md-9 col-sm-8">
            <motion.div
              className="rightside-body-main-box-container"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <motion.div
                className="top-bar-header"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <p>Securing Your Flutter App: Best Practices and Techniques</p>
              </motion.div>

              <div className="main-banner-box">
                <div className="row">
                  <div className="col-lg-4">
                    <motion.div
                      className="main-content"
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 1 }}
                    >
                      <h2>Unlock the Potential of Flutter</h2>
                      <p>
                        Your Premier Partner for Cross-Platform App Excellence!
                      </p>
                      <a href="#." className="main-btn">
                        Upgrade Your Tech
                      </a>
                    </motion.div>
                  </div>
                  <div className="col-lg-8">
                    <motion.div
                      className="main-banner-img"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1 }}
                    >
                      <img src={MainBanner} alt="banner" />
                    </motion.div>
                  </div>
                </div>
              </div>

              <motion.div
                className="history-section-box"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <div className="row">
                  <div className="col-lg-3">
                    <div className="main-content">
                      <h2>
                        Flutter's <br />
                        Dawn
                      </h2>
                      <p>History of flutter</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="main-content">
                      <p>
                        Uncover the fascinating story of Flutter in 'Flutter's
                        Dawn: History of Flutter.' From humble origins to global
                        acclaim, delve into its captivating narrative. Explore
                        milestones, triumphs, and challenges. Whether tech
                        enthusiast or curious mind, join us on this captivating
                        journey! <a href="#.">Click to begin!</a>
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="history-section-btn">
                      <a href="#." className="main-btn">
                        Begin <img src={RightTopArrow} alt="right top arrow" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="services"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <div className="services-heading">
                  <h3>Our Dynamic Services Suite!</h3>
                  <h5>Embrace Innovation: Let's Create Together!</h5>
                  <p>
                    Step into innovation! Explore our range of services and
                    let's create something extraordinary together. Your vision,
                    our expertise. Let's begin!
                  </p>
                </div>

                <div className="main-accordopn-box">
                  {/* <div className="accordion-left-box">
                    <div className="accordion" id="serviceAccordion">
                      {accordionItems.map((item) => (
                        <div className="accordion-item" key={item.id}>
                          <h2 className="accordion-header">
                            <button
                              className={`accordion-button ${activeAccordion === item.id ? '' : 'collapsed'}`}
                              type="button"
                              onClick={() => toggleAccordion(item.id)}
                              aria-expanded={activeAccordion === item.id}
                            >
                              {item.title}
                            </button>
                          </h2>
                          <div
                            id={item.id}
                            className={`accordion-collapse collapse ${activeAccordion === item.id ? 'show' : ''}`}
                            data-bs-parent="#serviceAccordion"
                          >
                            <div className="accordion-body">
                              {item.content}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div> */}
                  <div className="accordion-left-box">
                    <div className="accordion" id="serviceAccordion">
                      {accordionItems.map((item) => (
                        <div className="accordion-item" key={item.id}>
                          <h2 className="accordion-header">
                            <button
                              className={`accordion-button custom-btn ${
                                activeAccordion === item.id ? "active" : ""
                              }`}
                              type="button"
                              onClick={() => toggleAccordion(item.id)}
                            >
                              {item.title}
                            </button>
                          </h2>

                          <AnimatePresence initial={false}>
                            {activeAccordion === item.id && (
                              <motion.div
                                key="content"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{
                                  duration: 0.4,
                                  ease: "easeInOut",
                                }}
                                className="accordion-body-wrapper"
                              >
                                <div className="accordion-body">
                                  {item.content}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="accordion-right-box">
                    <img src={Services} alt="our services" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="footer-contact-us"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <div className="row">
                  <div className="col-lg-6">
                    <div className="footer-menu-links">
                      <ul>
                        <li>
                          <a href="#.">Events</a>
                        </li>
                        <li>
                          <a href="#.">Gen AI</a>
                        </li>
                        <li>
                          <a href="#.">Careers</a>
                        </li>
                        <li>
                          <a href="#.">Case study</a>
                        </li>
                        <li>
                          <a href="#.">SME Talks</a>
                        </li>
                      </ul>
                      <h4>
                        For any collaborative <br />
                        projects or enquiries feel free <br />
                        to connect with us.
                      </h4>
                      <h4>vayuz.com</h4>
                    </div>
                  </div>
                  <div className="col-lg-3"></div>
                  <div className="col-lg-3">
                    <div className="contact-form">
                      <h1>
                        Connect <br />
                        With Us
                      </h1>
                      <div className="footer-contact-form">
                        <div className="form-field">
                          <input placeholder="Full Name" type="text" />
                        </div>
                        <div className="form-field">
                          <input placeholder="Email" type="text" />
                        </div>
                        <div className="form-field">
                          <input placeholder="Phone Number" type="text" />
                        </div>
                        <div className="form-field-btn">
                          <button>Submit</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="footer-links"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <ul>
                  <li>
                    <a href="#.">About</a>
                  </li>
                  <li>
                    <a href="#.">Insights</a>
                  </li>
                  <li>
                    <a href="#.">Community</a>
                  </li>
                  <li>
                    <a href="#.">Privacy & Policies</a>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

const accordionItems = [
  {
    id: "flutter",
    title: "Flutter App Development",
    content: (
      <>
        Unlock endless possibilities with Flutter App Development. Build
        beautiful, high-performance applications for any platform – faster and
        easier than ever before. Ready to revolutionize your app experience?{" "}
        <a href="#">Let’s get started today!</a>
      </>
    ),
  },
  {
    id: "uiux",
    title: "UI/UX Design",
    content:
      "Transform your vision into intuitive and engaging user experiences.",
  },
  {
    id: "customization",
    title: "Customization & Integration",
    content: "Seamlessly integrate your Flutter applications.",
  },
  {
    id: "testing",
    title: "Testing & Quality Assurance",
    content: "Ensure your applications are bug-free.",
  },
  {
    id: "maintenance",
    title: "Maintenance & Support",
    content: "Keep your applications running smoothly.",
  },
  {
    id: "consulting",
    title: "Consulting & Training",
    content: "Leverage our expertise to make informed decisions.",
  },
  {
    id: "migration",
    title: "Migration & Upgrades",
    content: "Seamlessly transition your existing applications to Flutter.",
  },
];

export default App;
