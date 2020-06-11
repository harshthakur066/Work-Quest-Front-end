import React, { Component } from "react";

import "../../assets/css/app.css";
import "../../assets/css/sushil.css";

import ItemsCarousel from "react-items-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faInstagram,
  faTelegram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import Particles from "react-particles-js";
import axios from "axios";
import Fade from "react-reveal/Fade";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginform: { eMail: "", passWord: "" },
      signupform: {
        firstName: "",
        lastName: "",
        userName: "",
        eMail: "",
        passWord: "",
        confirmPass: "",
      },
      faq_active: "ico",
      timer: { days: "", hours: "", minute: "", seconds: "" },
      login: false,
      signup: false,
      forgot: false,
      navActive: false,
    };
    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handleSignupChange = this.handleSignupChange.bind(this);
    this.handlelogin = this.handlelogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.timerCalculation = this.timerCalculation.bind(this);
    this.openNav = this.openNav.bind(this);
    this.intervalHandler;
    this.sale = React.createRef();
    this.about = React.createRef();
    this.mvp = React.createRef();
    this.faq = React.createRef();
    this.road = React.createRef();
    this.contact = React.createRef();
    this.team = React.createRef();
  }
  componentWillMount() {
    this.setState({
      children: [],
      activeItemIndex: 0,
    });

    this.setState({
      children: Array.from(new Array(8)).map((_, i) => (
        <img className="slider1-images" key={i} src="src/assets/images/1.png" />
      )),
    });
  }

  componentDidMount() {
    this.intervalHandler = setInterval(this.timerCalculation, 1000);
  }

  //************************//

  render() {
    const { activeItemIndex, children } = this.state;
    const isActive = this.state.navActive;
    return (
      <div id="wholepage" className=" pageWrapper">
        <div
          id="particles"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
          }}
        >
          <Particles
            params={{
              particles: {
                number: {
                  value: 60,
                },
                size: {
                  value: 6,
                  random: true,
                },
                color: {
                  value: "#186287",
                },
                line_linked: {
                  enable: true,
                  distance: 150,
                  color: "#294079",
                  opacity: 1,
                  width: 0.6413648243462091,
                },
                opacity: {
                  value: 1,
                  random: false,
                  anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false,
                  },
                },
              },

              interactivity: {
                events: {
                  onhover: {
                    enable: true,
                    mode: "repulse",
                  },
                },
              },
            }}
            canvasclassName="example"
          />
        </div>
        <a href="#">
          <img src="src/assets/images/logo.png" className="brand"></img>
        </a>
        {/* <div className="navbar">
          <nav>
            <div className="nav_items">
              <div>
                <a href="#">
                  <img src="src/assets/images/logo.png" className="brand"></img>
                </a>
              </div>
            </div>
            <div className="nav_items">
              <div
                className={`collapse_btn ${isActive ? "nav_close_btn" : ""}`}
                onClick={this.openNav}
              >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </div>
            </div>
            <div className="nav_items_wrapper " id="myNavbar">
              <div className="wqNav nav_items">
                <div className="nav_link_container">
                  <div className="">
                    <img src="src/assets/images/wqname.png"></img>
                  </div>
                  <ul className="nav_link_items">
                    <li>
                      <a
                        className="nav-links"
                        onClick={this.scrollTofun.bind(this, "about")}
                      >
                        WHAT IS WORK COIN?
                      </a>
                    </li>
                    <li>
                      <a
                        className="nav-links"
                        onClick={this.scrollTofun.bind(this, "sale")}
                      >
                        TOKEN SALE
                      </a>
                    </li>
                    <li>
                      <a
                        className="nav-links"
                        onClick={this.scrollTofun.bind(this, "road")}
                      >
                        ROAD MAP
                      </a>
                    </li>
                    <li>
                      <a
                        className="nav-links"
                        onClick={this.scrollTofun.bind(this, "mvp")}
                      >
                        MVP
                      </a>
                    </li>
                    <li>
                      <a
                        className="nav-links"
                        onClick={this.scrollTofun.bind(this, "team")}
                      >
                        TEAM
                      </a>
                    </li>
                    <li>
                      <a
                        className="nav-links"
                        onClick={this.scrollTofun.bind(this, "contact")}
                      >
                        CONTACT
                      </a>
                    </li>
                    <li>
                      <a
                        className="nav-links"
                        onClick={this.scrollTofun.bind(this, "faq")}
                      >
                        FAQ
                      </a>
                    </li>
                  </ul>
                  <div className="nav_link_items">
                    <a
                      id="login"
                      className="account nav-links"
                      onClick={this.handleForm.bind(this, "login")}
                    >
                      LOGIN
                    </a>
                  </div>
                  <div className="mobile_nav_footer">
                    <img src="src/assets/images/croped_logo.png"></img>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>*/}
        <div
          id="login-form"
          style={{ display: this.state.login ? "block" : "none" }}
          className="form_bg_container"
        >
          <div className="form_parent">
            <span
              id="x"
              className="close"
              onClick={this.closeForm.bind(this, "login")}
              title="Close Modal"
            >
              &times;
            </span>
            <div className="login_form_item">
              <div className="login_form_wq_logo">
                <img src="src/assets/images/wq.png"></img>
              </div>
              <div className="login_form_ico_item">
                <img
                  className="login_form_croped_logo"
                  src="src/assets/images/croped_logo.png"
                ></img>
                <p className="join_ico_pre">LOGIN AND JOIN ICO PRESALE</p>
              </div>
            </div>
            <form className="login_form_content">
              <div className="login_form_container">
                <div>
                  <p className="whiteprint">
                    L
                    <span>
                      <img src="src/assets/images/photo.png"></img>
                    </span>
                    gin
                  </p>
                  <div className="input_item">
                    <label className="input_label" htmlFor="login_email">
                      USER NAME
                      <div className="login_input">
                        <img
                          className="log_img"
                          src="src/assets/images/user-input.png"
                        />
                        <input
                          id="login_email"
                          name="email"
                          type="text"
                          placeholder="Enter Email"
                          value={this.state.loginform.eMail}
                          name="eMail"
                          onChange={this.handleLoginChange}
                          required
                        ></input>
                      </div>
                    </label>
                  </div>
                  <div className="input_item">
                    <label className="input_label" htmlFor="login_psw">
                      ENTER PASSWORD
                    </label>
                    <div className="login_input">
                      <img
                        className="log_img log_psw_logo"
                        src="src/assets/images/password icon.png"
                      />
                      <input
                        type="password"
                        id="login_psw"
                        value={this.state.loginform.passWord}
                        placeholder="Enter Password"
                        onChange={this.handleLoginChange}
                        name="passWord"
                        required
                      />
                    </div>
                  </div>
                  <div className="login_form_btns">
                    <button onClick={this.handlelogin} className="loginbtn">
                      LOGIN
                    </button>
                    <div className="forgot_or_create">
                      <p
                        id="forgot-pass-text"
                        onClick={this.handleForm.bind(this, "forgot")}
                      >
                        FORGOT PASSWORD?
                      </p>
                      <p className="mediumletter3">
                        DON'T HAVE AN ACCOUNT YET?
                      </p>
                    </div>
                    <button
                      id="signup2"
                      className="signupbtn"
                      onClick={this.handleForm.bind(this, "signup")}
                    >
                      CREATE ACCOUNT
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div
          id="forgot-pass"
          style={{ display: this.state.forgot ? "block" : "none" }}
          className="forgot_pass_container"
        >
          <div className="form_forgot_pass">
            <span
              id="xx"
              className="close"
              onClick={this.closeForm.bind(this, "forgot")}
              title="Close Modal"
            >
              &times;
            </span>
            <div className="forgot_item">
              <p className="forgot-heading">FORGOT YOUR PASSWORD?</p>
              <p className="smallletters">
                Don't worry, just enter your registered email and we'll send you
                a link to your registered email.
              </p>
              <div className="forgot_input">
                <input
                  type="text"
                  placeholder="Enter Email"
                  name="email"
                  required
                />
              </div>
              <button id="forgot-pass-email">SEND</button>
            </div>
          </div>
        </div>
        <div id="forgot-pass-notif" className="forgot_pass_container">
          <div className="forgot-notif-item">
            <span id="xx" className="close" title="Close Modal">
              &times;
            </span>
            <p className="forgot-heading">CHECK YOUR EMAIL </p>
            <p className="pass-email-conf">
              We've sent an email to your mail. Click the link in the email to
              reset the password.
            </p>
            <p className="pass-email-conf">
              If you don't see the mail, check other plpaces it might be in spam
              or other folders.
            </p>
          </div>
        </div>
        <div
          id="signup-form"
          style={{ display: this.state.signup ? "block" : "none" }}
          className="form_bg_container"
        >
          <div className="form_parent">
            <span
              id="x"
              onClick={this.closeForm.bind(this, "signup")}
              className="close"
              title="Close Modal"
            >
              &times;
            </span>
            <div className="signup_form_item">
              <div className="signup_form_wq_logo">
                <img src="src/assets/images/wq.png" />
              </div>
              <div className="signup_form_ico_item">
                <img
                  src="src/assets/images/WORK QUEST_sign.svg"
                  className="signup_form_croped_logo"
                />
                <p className="wq_signup_text">
                  ENTER BASIC INFORMATIOIN TO GET STARTED
                </p>
              </div>
            </div>
            <form className="form-content">
              <div className="input_item">
                <label htmlFor="firstName" className="input_label">
                  FIRST NAME
                </label>
                <div className="login_input">
                  <img
                    src="src/assets/images/user-input.png"
                    className="log_img"
                    id="input-icons"
                  />
                  <input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    onChange={this.handleSignupChange}
                    required
                  />
                </div>
              </div>
              <div className="input_item">
                <label className="input_label" htmlFor="lastName">
                  LAST NAME
                </label>
                <div className="login_input">
                  <img
                    className="log_img"
                    src="src/assets/images/user-input.png"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    onChange={this.handleSignupChange}
                    required
                  />
                </div>
              </div>
              <div className="input_item">
                <label className="input_label" htmlFor="UserName">
                  USER NAME
                </label>
                <div className="login_input">
                  <img
                    className="log_img"
                    src="src/assets/images/check-square.png"
                  />
                  <input
                    type="text"
                    placeholder="User Name"
                    name="userName"
                    onChange={this.handleSignupChange}
                    required
                  />
                </div>
              </div>
              <div className="input_item">
                <label className="input_label" htmlFor="eMail">
                  EMAIL ID
                </label>
                <div className="login_input">
                  <img className="log_img" src="src/assets/images/mail.png" />
                  <input
                    type="text"
                    placeholder="E-Mail"
                    name="eMail"
                    onChange={this.handleSignupChange}
                    required
                  />
                </div>
              </div>
              <div className="input_item">
                <label htmlFor="passWord" className="input_label">
                  ENTER PASSWORD
                </label>
                <div className="login_input">
                  <img
                    src="src/assets/images/password icon.png"
                    className="log_img"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    name="passWord"
                    onChange={this.handleSignupChange}
                    required
                  />
                </div>
              </div>
              <div className="input_item">
                <label htmlFor="confirmPass" className="input_label">
                  CONFIRM PASSWORD
                </label>
                <div className="login_input">
                  <img
                    src="src/assets/images/password icon.png"
                    className="log_img"
                  />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPass"
                    onChange={this.handleSignupChange}
                    required
                  />
                </div>
              </div>
              <div className="register_container">
                <button className="registerbtn" onClick={this.handleSignup}>
                  REGISTRATION
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="section sectionFirst" id="firstSection">
          <div className="firstBox">
            <div className="first_items first_text">
              <p
                style={{
                  marginBottom: "5em",
                  fontSize: "34px",
                  fontWeight: "bold",
                }}
              >
                WORK QUEST <br /> ICO STARTUP <br /> A GLOBAL JOB <br />
                MARKETPLACE
                <br /> FOR ANY TYPE <br /> OF WORK.
              </p>
              <p style={{ marginBottom: "4em" }}>
                WORK QUEST ICO STARTUP A <br /> GLOBAL JOB MARKETPLACE <br />
                FOR ANY TYPE OF WORK.
              </p>
              <div className="first_text_item"></div>
              <a
                id="join"
                className="join_btn btn_signup"
                onClick={this.handleForm.bind(this, "signup")}
              >
                SIGN UP TO JOIN
              </a>
            </div>
            <div>
              <img width="100%" src="src/assets/images/a.png"></img>
            </div>
          </div>
          <div className="partner">
            <h3>OUR PARTNERS</h3>
          </div>
          <ul className="partners-list">
            <li className="partners-item">
              <a href="https://eucc.eu/">
                <img src="src/assets/images/EUCC.png"></img>
              </a>
            </li>
            <li className="partners-item">
              <a href="https://globiance.com/">
                <img src="src/assets/images/globiance.png"></img>
              </a>
            </li>
            <li className="partners-item">
              <a href="http://attis-group.com/?page_id=252&lang=en">
                <img src="src/assets/images/ag.png"></img>
              </a>
            </li>
            <li className="partners-item">
              <a href="https://kcolbchain.com/">
                <img src="src/assets/images/KCOLBCHAIN.png"></img>
              </a>
            </li>
          </ul>
        </div>
        <Fade bottom>
          <div>
            <div className="section section2" id="about" ref={this.about}>
              <p className="heading1">
                ABOUT <br /> PROJECT
              </p>
              <div className="about_section">
                <div className="about_section_items about_text_container">
                  <p className="heading2">
                    <span className="hpart1">WORK COIN</span>
                    <br />
                    <span className="hpart2">WHY DO WE USE IT?</span>
                  </p>
                  <p className="smallletters7">
                    WORK COIN IS A CRYPTOCURRENCY USED <br /> ON THE WORK QUEST
                    ECO-SYSTEM
                  </p>
                  <p className="smallletters7">
                    WORK COIN, IS A CRYPTOCURRENCY USED <br /> TO CALCULATE
                    REMUNERATION BETWEEN <br /> AN EMPLOYEE AND EMPLOYER IN THE{" "}
                    <br /> WORK QUEST NETWORK. THE COIN IS ALSO <br /> USED TO
                    FACI.LLITATE PAYMENT <br />
                    TRANSACTION OF ANY TYPE WITHIN OUR <br /> WORK QUEST
                    ECO-SYSTEM.
                  </p>
                  <p className="smallletters7">
                    WORK QUEST AS A GLOBAL PROJECT THAT <br /> WOULD WORK AS A
                    TOOL SEARCH AND <br /> COMMUNICATION OF WORKERS AND <br />
                    EMPLOYEES. IT IS AN ONLINE WORK <br /> MARKETPLACE
                    CONNECTING ALL TYPES OF <br /> EMPLOYEES WITH WORKERS AROUND{" "}
                    <br /> EVERY CORNER OF THE WORLD <br /> THROUGH A BLOCKCHAIN
                    POWERED SMART <br /> CONTRACT.
                  </p>
                </div>
                <div className="about_section_items about_image_container">
                  <a
                    className=""
                    href="https://www.youtube.com/watch?v=SSo_EIwHSd4"
                    id="youtube"
                  >
                    <img
                      src="src/assets/images/PLAY BUTTON.png"
                      className="play-btn"
                    ></img>
                  </a>
                  <img
                    width="100%"
                    height="auto"
                    src="src/assets/images/output-onlinepngtools.png"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </Fade>
        <div className="section section3">
          <p className="heading1">OUR MISSION</p>
          <p className="smallletters7">
            CONNCETING EMPLOYERS AND EMPLOYEES THROUGH OUR INNOVATIVE ONLINE
            PLATFORM,<br></br> EASING COMMUNICATION AND IMPROVING FINANCIAL
            STANDARDS OF ALL STAKEHOLDERS{" "}
          </p>
          <div className="mission_items">
            <div className="mission_item">
              <img src="src/assets/images/bi.png"></img>
              <div className="mission_content">
                <p style={{ marginBottom: "30px" }} className="mediumletter">
                  BLOCKCHAIN <br></br>INFRASTRUCTURE
                </p>
                <p className="smallletters8">
                  WORK COIN, IS A<br></br> CRYPTOCURRENCY USED TO<br></br>{" "}
                  CALCULATE REMUNERATION<br></br> BETWEEN AN EMPLOYEE AND
                  <br></br> EMPLOYER IN THE WORK<br></br> QUEST NETWORK.{" "}
                </p>
              </div>
            </div>
            <div className="mission_item">
              <img src="src/assets/images/eti.png"></img>
              <div className="mission_content">
                <p style={{ marginBottom: "30px" }} className="mediumletter">
                  EASY TOKEN <br></br>INTEGRATION
                </p>
                <p className="smallletters8">
                  WORK COIN, IS A<br></br> CRYPTOCURRENCY USED TO<br></br>{" "}
                  CALCULATE REMUNERATION<br></br> BETWEEN AN EMPLOYEE AND
                  <br></br> EMPLOYER IN THE WORK<br></br> QUEST NETWORK.{" "}
                </p>
              </div>
            </div>
            <div className="mission_item">
              <img src="src/assets/images/global.png"></img>
              <div className="mission_content">
                <p style={{ marginBottom: "30px" }} className="mediumletter">
                  GLOBAL SYSTEM<br></br> AND SECURE
                </p>
                <p className="smallletters8">
                  WORK COIN, IS A<br></br> CRYPTOCURRENCY USED TO<br></br>{" "}
                  CALCULATE REMUNERATION<br></br> BETWEEN AN EMPLOYEE AND
                  <br></br> EMPLOYER IN THE WORK<br></br> QUEST NETWORK.{" "}
                </p>
              </div>
            </div>
          </div>
          <a
            className="join_btn btn_whitepaper"
            href="src/assets/images/WORK QUEST white paper.pdf"
          >
            DOWNLOAD WHITEPAPER
          </a>
        </div>
        <div className="section section4">
          <p className="heading1">OUR FEATURES</p>
          <div className="feature_items">
            <div className="feature_item">
              <img src="src/assets/images/ltc.png"></img>
              <div>
                <p className="mediumletter">
                  LOW<br></br>TRANSACTION COST
                </p>
                <p className="smallletters8">
                  ON OUR WORK QUEST PLATFORM TRANSACTIONAL FEE IS SET AT 1% OF
                  THE TOTAL USER INCOME AGAINST 7-20% FEE CHARGED BY OTHER
                  MARKETPLACES. ZERO COST TO LIST NEW EMPLOYEES.
                </p>
              </div>
            </div>
            <div className="feature_item">
              <img src="src/assets/images/it.png"></img>
              <div>
                <p className="mediumletter">
                  INNOVATIVE<br></br>TECHNOLOGY
                </p>
                <p className="smallletters8">
                  IT IS AN ONLINE JOB MARKETPLACE POWERED BY BLOCKCHAIN THUS
                  TAPPING INTO DECENTRALIZATION FEATURES OF THIS TECHNOLOGY. ANY
                  ONE AROUND THE WORLD CAN USE THE PLATFORM AND BE PAID USING
                  OUR CRYPTOCURRENCY WORK COIN.
                </p>
              </div>
            </div>
            <div className="feature_item">
              <img src="src/assets/images/rt.png"></img>
              <div>
                <p className="mediumletter">REAL TIME</p>
                <p className="smallletters8">
                  WORK QUEST USES SMART CONTRACT TECHNOLOGY TO FACILLITATE REAL
                  TIME TRANSACTIONS ELIMINATING DELAYS CAUSED BY THIRD PARTIES.
                  IT TAKES A FEW MINUTES TO MATCH JOB DEMAND AND SKILLS AS IT IS
                  ALSO LOCATION BASED.
                </p>
              </div>
            </div>
            <div className="feature_item">
              <img src="src/assets/images/ss.png"></img>
              <div>
                <p className="mediumletter">SAFE AND SECURE</p>
                <p className="smallletters8">
                  THE PLATFORM IS SAFE AND SECURE TO USE AS THE USE OF
                  BLOCKCHAIN TECHNOLOGY ALLOWS HIGH DATA ENCRYPTION WHICH HELPS
                  IN HARNESSING SECURITY OF THE PLATFORM. AN ESCROW SYSTEM IS
                  INTEGRATED ON THE PLATFORM TO ELIMINATE FINANCIAL FRAUD.
                </p>
              </div>
            </div>
            <div className="feature_item">
              <img src="src/assets/images/ivrs.png"></img>
              <div>
                <p className="mediumletter">
                  IMMUTABLE VERIFICATION AND RATING SYSTEM
                </p>
                <p className="smallletters8">
                  BOTH EMPLOYERS AND EMPLOYEES UNDERGO VETTING DURING PROFILE
                  CREATION TO ENSURE USER LEGITIMACY. TRUSTWORTHY FEEDBACK ON
                  EACH QUEST TRANSACTED AND ITS RECORDED ON BLOCKCHAIN NETWORK.
                </p>
              </div>
            </div>
            <div className="feature_item">
              <a
                className="join_btn2 pitchdeck"
                href="src/assets/images/WORK QUEST pitch deck.pdf"
              >
                DOWNLOAD OUR PITCH DECK
              </a>
            </div>
          </div>
        </div>
        <div className="section section5" id="sale" ref={this.sale}>
          <p className="heading1">TOKEN SALE INFO</p>
          <p className="smallletters9">
            THE WORK COIN WILL BE ISSUED AS AN INDEPENDENT BLOCKCHAIN WORK QUEST
            AND WE WILL ISSUE 2 BILLION TOKENS
          </p>
          <div className="countdown">
            <p className="mediumletter">ICO WILL BE STARTED IN</p>
            <ul className="countdown-item">
              <li>
                <div id="exbox1" className="countdown-boxes">
                  {this.state.timer.days}
                </div>
                <p>DAYS</p>
              </li>
              <li>
                <div id="exbox2" className="countdown-boxes">
                  {this.state.timer.hours}
                </div>
                <p>HOURS</p>
              </li>
              <li>
                <div id="exbox3" className="countdown-boxes">
                  {this.state.timer.minutes}
                </div>
                <p>MINUTES</p>
              </li>
              <li>
                <div id="exbox4" className="countdown-boxes">
                  {this.state.timer.seconds}
                </div>
                <p>SECONDS</p>
              </li>
            </ul>
            <a className="timer-button" href="#">
              JOIN AND BUY TOKEN NOW
            </a>
          </div>
          <div className="sale_info">
            <div className="sale_info_item">
              <p className="mediumletter2">OUR START</p>
              <p className="blueletters">Jun 1, 2019 (12:00AM GMT)</p>
            </div>
            <div className="sale_info_item">
              <p className="mediumletter2">END</p>
              <p className="blueletters">Aug 1, 2019 (12:00AM GMT)</p>
            </div>
            <div className="sale_info_item">
              <p className="mediumletter2">ACCEPTABLE CURRENCIES</p>
              <p className="blueletters">ETH, BTC, LTC & FIAT</p>
            </div>
            <div className="sale_info_item">
              <p className="mediumletter2">NUMBER OF TOKENS FOR SALE</p>
              <p className="blueletters">600,000,000 WRC</p>
            </div>
            <div className="sale_info_item">
              <p className="mediumletter2">TOKENS EXCHANGE RATE</p>
              <p className="blueletters">1 ETH = 140 WRC</p>
            </div>
            <div className="sale_info_item">
              <p className="mediumletter2">MINIMUM TRANSCATION AMOUNT</p>
              <p className="blueletters">$50</p>
            </div>
          </div>

          <div className="sale_piechart">
            <p className="heading2">TOKEN DISTRIBUTION</p>
            <img src="src/assets/images/ifd.png" />
          </div>
          <div className="sale_piechart">
            <p className="heading3">ICO FUNDS DISTRIBUTION</p>
            <img src="src/assets/images/td.png" />
          </div>
        </div>
        <div className="section section6" id="road" ref={this.road}>
          <p className="heading1">ROAD MAP</p>
          <p className="smallletters9">
            WITH HELP FROM OUR TEAMS, CONTRIBUTORS AND INVESTORS THESE ARE THE
            MILESTONES WE ARE LOOKING FORWARD TO ACHEIVE
          </p>

          <div className="slider">
            <ItemsCarousel
              placeholderItem={
                <div style={{ height: 150, background: "#EEE" }} />
              }
              enablePlaceholder={true}
              numberOfPlaceholderItems={0}
              numberOfCards={1}
              gutter={12}
              slidesToScroll={1}
              chevronWidth={73}
              outsideChevron={true}
              showSlither={false}
              firstAndLastGutter={false}
              activeItemIndex={this.state.activeItemIndex}
              requestToChangeActive={(value) =>
                this.setState({ activeItemIndex: value })
              }
              rightChevron={
                <img
                  className="chevron"
                  src="../src/assets/images/next-page.png"
                />
              }
              leftChevron={
                <img
                  className="chevron"
                  src="../src/assets/images/prev-page.png"
                />
              }
            >
              {children}
            </ItemsCarousel>
          </div>
          <div className="section section6-item1">
            <p className="heading1">WHAT TECHNOLOGY IS BASED</p>
            <p className="smallletters9">
              WORK QUEST BASED ON BLOCKCHAIN TECHNOLOGY. BLOCKCHAIN TECHNOLOGY
              IS AN INCORRUPTIBLE DIGITAL LEDGER OF ECONOMIC TRANSACTIONS THAT
              CAN BE PROGRAMMED TO RECORD NOT JUST FINANCIAL TRANSACTIONS BUT
              VIRTUALLY EVERYTHING OF VALUE. OUR OBJECTIVE IS TO DEVELOP OWN
              BLOCKCHAIN KNOWN AS WORK QUEST BLOCKCHAIN AND WILL ALSO INTEGRATE
              SMART CONTRACTS TO EASE COMPLETION AND COMMUNICATION BETWEEN AN
              EMPLOYER AND EMPLOYEE IN THE PLATFORM
            </p>
            <div className="item1-child">
              <div className="child1-items">
                <p className="mediumletter2">
                  ELEMENTS OF WORK QUEST PLATFORM AND HOW THE SYSTEM WORKS:
                </p>
                <ul className="child1-list mediumletter2">
                  <li>
                    <div className="d.7onut Dblue"></div>
                    <p>USER REGISTRATION</p>
                  </li>
                  <li>
                    <div className="donut Dgreen"></div>
                    <p>QUEST CREATION</p>
                  </li>
                  <li>
                    <div className="donut Dgrey"></div>
                    <p>EMPLOYEE SEARCHING</p>
                  </li>
                  <li>
                    <div className="donut Dyellow"></div>
                    <p>SMART CONTRACT</p>
                  </li>
                  <li>
                    <div className="donut Dorange"></div>
                    <p>EVALUATION OF COMPLETED WORK AND FEEDBACK</p>
                  </li>
                </ul>
              </div>
              <div className="child1-items">
                <img src="src/assets/images/Clip.png"></img>
              </div>
            </div>
            <div className="bg-logo-container">
              <img src="src/assets/images/bg.png" className="bg-z-logo"></img>
            </div>
          </div>
          <div className="section section6-item2 section6-items">
            <p className="heading1">
              PROBLEMS WE SOLVE ON GLOBAL JOB MARKETPLACE
            </p>
            <div className="section6-items-content">
              <div className="section6-one-third first">
                <img src="src/assets/images/web.png" id="small-logo"></img>
                <div>
                  <p className="mediumletter">
                    GLOBAL SKILLS AVAILABILITY AND HIRING MISMATCH
                  </p>
                  <p className="smallletters8">
                    THERE IS JOB DEMAND IN SOME COUNTRIES WHILE LABOR SUPPLY IS
                    AVAILABLE ACROSS OTHER COUNTRIES.
                  </p>
                </div>
              </div>
              <div className="section6-one-third sectin6-middle1">
                <img src="src/assets/images/job.png" id="small-logo"></img>
                <div>
                  <p className="mediumletter">FRAGMENTED JOB BOARDS</p>
                  <p className="smallletters8">
                    IN THE EMERGENCE OF DIGITAL PLATFORMS MENY JOB BOARDS TRYING
                    TO MATCH RECRUITERS, EMPLOYERS AND EMPLOYEES HAVE SPRUNG UP.
                    THEY ARE INEFFICIENT AND NOT TRUSTWORTHY. HIGH INDUSTRY
                    FRAGMENTATION CREATES INFORMATION GAP WHICH LEADS TO POOR
                    INTEGRATION OF WORKERS INTO THE PROFFESIONAL COMMUNITY{" "}
                  </p>
                </div>
              </div>
              <div className="section6-one-third last">
                <img src="src/assets/images/central.png" id="small-logo"></img>
                <div>
                  <p className="mediumletter">CENTRALIZED PLATFORMS</p>
                  <p className="smallletters8">
                    EXISTING CENTRALIZED ONLINE MARKETPLACES CONTROL CRITICAL
                    USER DATA INCLUDING FINANCIAL INFORMATION AND ITS DONE
                    WITHOUT CONSENT OF USERS.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="section section6-item3 section6-items">
            <p className="heading1">SOLUTIONS</p>
            <div className="section6-items-content">
              <div className="section6-one-third">
                <img src="src/assets/images/tles.png" id="small-logo"></img>
                <div>
                  <p className="mediumletter">TRUST-LESS ECO-SYSTEM</p>
                  <p className="smallletters8">
                    WORK QUEST UTILIZES BLOCKCHAIN TECHNOLOGY WHICH CREATES AN
                    ECO-SYSTEM WHERE ALL TRANSACTIONS ARE IMPLEMENTED BY AN
                    INDEPENDENT NETWORK AND SMART CONTRACT EXECUTION. THE
                    PLATFORM OFFERS OPEN INDIVIDUAL USER REVIEW AND VERIFICATION
                    TO ELIMINATE THE PROBLEM OF DATA LOSS OR FRAUD IN THE JOB
                    MARKET.
                  </p>
                </div>
              </div>
              <div className="section6-one-third sectin6-middle2">
                <img src="src/assets/images/sec.png" id="small-logo"></img>
                <div>
                  <p className="mediumletter">SECURITY</p>
                  <p className="smallletters8">
                    USERS ON THE PLATFORM POSSESS CONTROL OF THEIR DATA AND
                    EITHER PARTY TO A CONTRACT WILL HAVE TO SEEK PERMISSION FROM
                    INDIVIDUAL PLATFORM PARTICIPANT IN ORDER TO USE, ACCESS OR
                    AMEND ANY INFORMATION ALTOUGH THIS WORKS IN REAL TIME TO
                    MAKE THE PROCESS FAST AND RELIABLE.{" "}
                  </p>
                </div>
              </div>
              <div className="section6-one-third last">
                <img
                  src="src/assets/images/decentral.png"
                  id="small-logo"
                ></img>
                <div>
                  <p className="mediumletter">
                    DECENTRALIZED PROFESSIONAL NETWORK
                  </p>
                  <p className="smallletters8">
                    WORK QUEST PROVIDES A SINGLE INTERFACE PLATFORM YET
                    DECENTRALIZED WITH BOTH PARTIES ACCESSING TRANSACTIONS ON
                    THE JOBS BOARD IN REAL TIME.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="section6-item4" id="mvp" ref={this.mvp}>
            <p className="heading1">MVP</p>
            <p className="smallletters9">
              OUR PROJECTS IS BASED ON WORK QUEST MARKETPLACE
            </p>
            <div className="item4-items">
              <div className="mac_container">
                <img
                  src="src/assets/images/macbook2.png"
                  className="macbook"
                ></img>
                <img
                  src="src/assets/images/wqmac.png"
                  className="macbook-wallpaper"
                ></img>
              </div>
              <img
                src="src/assets/images/BLUE BG TEXT.png"
                className="blue-wallpaper"
              ></img>
              <img src="src/assets/images/xd.png" id="small-logo6"></img>
            </div>
            <div className="section6-item4-content">
              <div>
                <p className="bigletters">WORK COIN PROJECT</p>
                <p className="smallletters8">
                  WORK QUEST IS BASED ON OWN BLOCKCHAIN COUPLED WITH ITS OWN
                  SMART CONTRACT SYSTEM. USERS BOTH EMPLOYERS AND EMPLOYEES WILL
                  BE ABLE TO CREATE PROFILES ON THE PLATFORM AND THEIR DATA IS
                  SAFELY SECURED BY THE BLOCKCHAIN.
                </p>
                <p className="smallletters8">
                  USERS UPON VETTING THEIR PROFILE IS UPDATED ON THE PLATFORM.
                  WHEN CREATING A QUEST USER FILLS IN ALL NECESSARY INFORMATION
                  INCLUDING CONDITIONS FOR EXECUTION, ANNOUNCED COST AND URGENCY
                  OF EXECUTION. USING GEOLOCATION SERVICES AN EMPLOYER WILL
                  SEARCH FOR PROSPECTIVE EMPLOYEES AND REVIEW THEIR PROFILE
                  PRIOR TO SENDING QUEST REQUEST. THE EMPLOYEE ENGAGES THE
                  EMPLOYER AND UPON AGREEMENT A SMART CONTRACT IS ESTABLISHED
                  BETWEEN THE PARTIES WITH ALL DETAILS AND CONDITIONS REQUIRED
                  FOR EXECUTION OF THE QUEST CREATED. SMART CONTRACT EXECUTES
                  ALL TRANSACTIONS AS FED IN TO THE SYSTEM INCLUDING HOLDING
                  FUNDS IN AN ESCROW AND RELEASE OF FUNDS AFTER COMPLETION OF
                  WORK BY EMPLOYEE.
                </p>
              </div>
              <a className="timer-button" href="Workquest/index.html">
                ENTER PLATFORM
              </a>
            </div>
          </div>
        </div>
        <div className="section section7" id="team" ref={this.team}>
          <p className="heading1 section-heading">OUR TEAM</p>
          <p className="smallletters9 section-description">
            OUR TEAM IS PASSIONATE AND COMMITED TO DELIVER RESULTS. DIVERSITY IS
            KEY TO US AND DRIVING INNOVATION DESIRED ON WORK QUEST
          </p>
          <div className="carousel2">
            <ItemsCarousel
              placeholderItem={
                <div style={{ height: 150, background: "#EEE" }} />
              }
              enablePlaceholder={true}
              numberOfPlaceholderItems={6}
              numberOfCards={1}
              gutter={12}
              slidesToScroll={1}
              chevronWidth={10}
              outsideChevron={true}
              showSlither={false}
              firstAndLastGutter={false}
              activeItemIndex={this.state.activeItemIndex1}
              requestToChangeActive={(value) =>
                this.setState({ activeItemIndex1: value })
              }
              rightChevron={
                <img
                  className="chevron carousel_chevron"
                  src="../src/assets/images/next-page.png"
                />
              }
              leftChevron={
                <img
                  className="chevron carousel_chevron"
                  src="../src/assets/images/prev-page.png"
                />
              }
            >
              <div className="carousel_card">
                <img src="src/assets/images/ceo.png"></img>
                <p className="mediumletter carousel_heading">
                  Andril Kotsur (CEO)
                </p>
                <p className="smallletters7 carousel_content">
                  Andrii expertise and experience includes knowledge of digital
                  currency, how to manage a highly skilled team, building
                  relationships and driving the company forward. Founder and
                  main ideologue of the project concept.
                </p>
              </div>
              <div className="carousel_card">
                <img src="src/assets/images/Abhishek Kishor.png"></img>
                <p className="mediumletter carousel_heading">Abhishek Kishor</p>
                <p className="smallletters7 carousel_content">
                  Blockchain developer and Network engineer. He is certified in
                  CCNA R&S and CCNA security. He has worked on Ethereum and
                  Hyperledger on the various project including Government
                  project. He is also passionate about Hacking & Security.
                </p>
              </div>
              <div className="carousel_card">
                <img src="src/assets/images/Abhishek Krishna.png"></img>
                <p className="mediumletter carousel_heading">
                  Abhishek Krishna
                </p>
                <p className="smallletters7 carousel_content">
                  Abhishek is a Tech Entrepreneur and started his first venture
                  6 years ago. Since then, he has built several products and has
                  consulted and advised a few startups and corporations. He
                  started coding in school and has a keen sense of product
                  design too. He specializes in building product and technology
                  teams. He currently runs Kcolbchain and Ojam.
                </p>
              </div>
            </ItemsCarousel>
          </div>
        </div>
        <div className="section section8" id="contact" ref={this.contact}>
          <p className="heading1 section-heading">GET IN TOUCH</p>
          <p className="smallletters9 section8-context">
            ANY QUESTION? REACH OUT TO US AND WE’LL GET BACK TO YOU SHORTLY.
          </p>
          <form className="contact_form">
            <p className="contact_input">
              <label className="smallletters9" htmlFor="contact_form_name">
                YOUR NAME
              </label>
              <input type="text" name="contact_form_name" />
            </p>
            <p className="contact_input">
              <label className="smallletters9" htmlFor="contact_form_email">
                YOUR EMAIL
              </label>
              <input type="text" name="contact_form_email" />
            </p>
            <p className="contact_input">
              <label className="smallletters9" htmlFor="contact_form_msg">
                YOUR MESSAGE
              </label>
              <input type="text" name="contact_form_msg" id="xdx" />
            </p>

            <input
              type="submit"
              className="join_btn contact_submit"
              value="SEND"
            />
          </form>
          <div className="contact_details">
            <p className="smallletters2">
              <br /> +044 0123 4567
            </p>
            <p className="smallletters2">
              feedback@workquest.co
              <br />
              join us on telegram
            </p>
          </div>
        </div>
        <div className="section section9" id="faq" ref={this.faq}>
          <p className="heading1 section9-heading">
            FREQUENTLY ASKED QUESTIONS
          </p>
          <p className="smallletters9 section9-context">
            BELOW WE’VE PROVIDED INFORMATION ABOUT WORKQUEST AND WORK COIN(WRC),
            AND FEW OTHERS, IF YOU HAVE ANY QUESTIONS, PLEASE GET IN TOUCH USING
            THE CONTACT FORM BELOW
          </p>
          <div className="faq-wrapper">
            <div className="pair-btn-container">
              <button
                className={
                  this.state.faq_active == "ico"
                    ? "faq-btn"
                    : "faq-btn faq-disable"
                }
                onClick={() => this.toggle_faq("ico")}
              >
                ICO
              </button>
              <button
                className={
                  this.state.faq_active == "general"
                    ? "faq-btn"
                    : "faq-btn faq-disable"
                }
                onClick={() => this.toggle_faq("general")}
              >
                GENERAL
              </button>
            </div>
            <div className="faq-content">
              <div
                className={
                  this.state.faq_active == "general"
                    ? "faq-items"
                    : "faq-items display_none_className"
                }
              >
                <p className="mediumletter2 faq-heading-item">GENERAL</p>
                <div className="faq-item">
                  <p className="blueletters2">
                    WHAT IS THE DIFFERENCE BETWEEN A WORK QUEST AND A WORK COIN
                  </p>
                  <p className="smallletters9">
                    WORK QUEST IS A PLATFORM CONNECTING EMPLOYERS AND EMPLOYEES
                    USING BLOCKCHAIN TECHNOLOGY. WORK COIN(WRC) IS THE TOKEN
                    USED IN THE ECO-SYSTEM TO FACILITATE PAYMENTS AND OTHER
                    TRANSACTIONS
                  </p>
                </div>
                <div className="faq-item">
                  <p className="blueletters2">
                    WHAT CRYPTOCURRENCIES CAN I USE TO PURCHASE WRC?
                  </p>
                  <p className="smallletters9">
                    ONE CAN USE ETH, BTC, LTC OR EVEN FIAT MONEY
                  </p>
                </div>
                <div className="faq-item">
                  <p className="blueletters2">
                    HOW CAN I PARTICIPATE IN THE ICO TOKEN SALE?
                  </p>
                  <p className="smallletters9">
                    IT IS EASY, REGISTER ON OUR WEBSITE, THE ACQUIRE THE
                    ACCEPTED CRYPTOCURRENCIES NAMELY, BTC ETH AND LTH, SEND THE
                    RESPECTIVE CRYPTOCURRENCY YOU PURCHASED AND HAVE IN YOUR
                    WALLET OUR CAMPAIGN ADDRESS AND IN RETURN YOU RECEIVE THE
                    WRC TOKENS AND THEN STORE THEM IN YOUR PREFERRED WALLET
                  </p>
                </div>
                <div className="faq-item">
                  <p className="blueletters2">WHO IS WORK QUEST TARGETED AT?</p>
                  <p className="smallletters9">
                    WORK QUEST TARGETS JOB SEEKERS AND EMPLOYERS WHO ARE WORLDS
                    APART AND CAN PROVIDE THEIR SERVICES VIA AN ONLINE PLATORM
                    WHILE GETTING THE BEST AWARD
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
              <div
                className={
                  this.state.faq_active == "ico"
                    ? "faq-items"
                    : "faq-items display_none_className"
                }
              >
                <p className="mediumletter2 faq-heading-item">ICO</p>
                <div className="faq-item">
                  <p className="blueletters2">WHY DO YOU NEED AN ICO?</p>
                  <p className="smallletters9">
                    SUCCESFUL ICO WILL ENABE US DEVELOP AND ACQUIRE MORE
                    BLOCKCHAIN AND CRYPTOCURRENCY TALENT TO CREATE A HIGHLY
                    UNIQUE AND BENEFICIAL PLATFORM TO HELP OUR STAKEHOLDERS. ALL
                    OUR PROCEEDS GO TO PRODUCT DEVELOPMENT RELATED ACTIVITIES
                    AND LAUNCH AS WELL AS USER ACQUISATION
                  </p>
                </div>
                <div className="faq-item">
                  <p className="blueletters2">
                    WHY SHOULD YOU INVEST IN OUR ICO?
                  </p>
                  <p className="smallletters9">
                    WE ARE COMMMITED TO CREATE THE MOST ADVANCED AND TRUSTWORTHY
                    PLATFORM THAT TRANSFORMS RELATIONS BETWEEN EMPLOTYERS AND
                    EMPLOYEES IN THE INDUSTRY AND AT A GLOBAL SCALE. WE TARGET
                    3.5 MILLION USERS AND 10,000 CORPORATE USERS BY 2023
                  </p>
                </div>
                <div className="faq-item">
                  <p className="blueletters2">
                    WHAT IS THE GOAL OF THE ICO CAMPAIGN?
                  </p>
                  <p className="smallletters9">
                    THE MAXIMUM TARGET FOR THE CAMPAIGN IS $1O MILLION
                  </p>
                </div>
                <div className="faq-item">
                  <p className="blueletters2">
                    HOW CAN YOU BE SURE WORK WILL COMMENCE AFTER TOKEN SALE?
                  </p>
                  <p className="smallletters9">
                    WE ARE A TEAM OF PEOPLE DRIVEN BY RESULTS AND THIS IS
                    EVIDENT FROM OUR PAST PROJECTS WIHTING THE ICO AND OUTSIDE
                    THE ICO SPACE. THE TEAM EITHE RCOLLABORATIVELY OR
                    INDIVIDUALLY HAVE BEEN INVOLVED IN INTERNATIONAL PROJECTS
                    WHICH HAVE BEEN CONCLUDED TO FRUITION. WE ARE USING ICO
                    FINACNING METHOD BECAUSE OF ITS AFFORDABILITY AND ABILITY TO
                    INVOLVE OTHER PEOPLE WORLDWIDE IN OUR PROJECT
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="src/assets/images/footer background.png"
          id="small-logo7"
        ></img>
        <div id="footer">
          <div className="footer_wrapper">
            <div className="footer_first_section">
              <div className="footer_section_image">
                <img src="src/assets/images/Logotype.png" />
              </div>
              <ul className="footer_links">
                <li>
                  <a onClick={this.scrollTofun.bind(this, "about")}>
                    WHAT IS WORK COIN?
                  </a>
                </li>
                <li>
                  <a onClick={this.scrollTofun.bind(this, "sale")}>
                    TOKEN SALE
                  </a>
                </li>
                <li>
                  <a onClick={this.scrollTofun.bind(this, "road")}>ROAD MAP</a>
                </li>
                <li>
                  <a onClick={this.scrollTofun.bind(this, "mvp")}>MVP</a>
                </li>
                <li>
                  <a onClick={this.scrollTofun.bind(this, "team")}>TEAM</a>
                </li>
                <li>
                  <a onClick={this.scrollTofun.bind(this, "contact")}>
                    CONTACT
                  </a>
                </li>
                <li>
                  <a onClick={this.scrollTofun.bind(this, "faq")}>FAQ</a>
                </li>
              </ul>
            </div>
            <ul className="footer_social_links">
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faTelegram} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer_foot">
            <img src="src/assets/images/croped_logo.png" />
            <div>
              <p>
                WORK COIN IS A CRYPTOCURRENCY USED TO CALCULATE RENUMERATION
                BETWEEN AN EMPLOYER AND AN EMPLOYEE IN THE WORKQUEST NETWORK.
                THE COIN IS ALSO USED TO FACILITATE PAYMENT TRANSACTION OF ANY
                TYPE WITHIN OUR WORKQUEST ECOSYSTEM.
              </p>
              <p>
                COPYRIGHT © 2020, WORKCOIN. ALL TRADE COPYRIGHTS BELONG TO THEIR
                RESPECTIVE OWNERS
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  //---------------------- checks login of user ----------------------------------
  handlelogin(event) {
    event.preventDefault();
    console.log(this.state.loginform);
    const userData = {
      Email: this.state.loginform.eMail,
      Password: this.state.loginform.passWord,
    };

    axios
      .post("http://localhost:3000/login", userData, { withCredentials: true })
      .then((result) => {
        console.log(result);
        return;
        this.props.history.push("/dashboard");
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  handleLoginChange(event) {
    const { name, value } = event.target;
    let loginform = { ...this.state.loginform, [name]: value };
    this.setState({ loginform });
  }
  //------------------------ END -------------------------------------------------

  //------------------ checks signup of user -------------------------------------
  handleSignupChange(event) {
    const { name, value } = event.target;
    let signupform = { ...this.state.signupform, [name]: value };
    this.setState({ signupform });
  }

  handleSignup(event) {
    event.preventDefault();
    const formData = this.state.signupform;
    console.log(this.state.signupform);
    const userData = {
      FirstName: formData.firstName,
      LastName: formData.lastName,
      UserName: formData.userName,
      Email: formData.eMail,
      Password: formData.passWord,
      ConfirmPassword: formData.confirmPass,
    };
    axios
      .post("http://localhost:3000/signup", userData)
      .then((data) => {
        console.log(data);
        this.props.history.push("/dashboard");
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        for (var ele in error.response.data.errors) {
          console.log(ele);
        }
      });
    // console.log(this.state.signupform);
  }
  ////////////////////////// END //////////////////////////////////////////
  toggle_faq(para) {
    para == "ico"
      ? this.setState({ faq_active: "ico" })
      : this.setState({ faq_active: "general" });
  }
  //////function to handle timer //////////////////////////
  timerCalculation() {
    let countDownDate = new Date("Sept 1, 2019 00:00:00").getTime();
    let now = new Date().getTime();
    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    let timerVar = {
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
    this.setState({ timer: timerVar });
  }

  handleForm(ele) {
    this.setState({ [ele]: true });
  }

  closeForm(ele) {
    this.setState({ [ele]: false });
  }

  // Toggle NavBar in mobile screens
  openNav(e) {
    let varEle = this.state.navActive;
    this.setState({ navActive: !varEle });
    let display = document.getElementById("myNavbar").style.display;
    if (display === "block") {
      document.getElementById("myNavbar").style.display = "none";
    } else {
      document.getElementById("myNavbar").style.display = "block";
    }
  }

  scrollTofun(ele) {
    this[ele].current.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  componentWillUnmount() {
    clearInterval(this.intervalHandler);
  }
}

export default Home;
