import React, { Component }  from 'react';
import './css/app.css';
import './css/sushil.css';
import ItemsCarousel from 'react-items-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube, faInstagram, faTelegram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAt } from "@fortawesome/free-solid-svg-icons";
import Particles from 'react-particles-js';
import axios from 'axios';
import Fade from 'react-reveal/Fade';



class Home extends Component{
    constructor(props){
      super(props);
      this.state = {
        loginform:{ eMail:'', passWord:''},
        signupform:{ firstName:'', lastName:'', userName:'', eMail:'', passWord:'', confirmPass:''},
        faq_active:'ico',
        timer:{days:'', hours:'', minute:'', seconds:''},
        login:false,
        signup:false,
        forgot:false
      };
      this.handleLoginChange = this.handleLoginChange.bind(this);
      this.handleSignupChange = this.handleSignupChange.bind(this);
      this.handlelogin = this.handlelogin.bind(this);
      this.handleSignup = this.handleSignup.bind(this);
      this.timerCalculation = this.timerCalculation.bind(this);
      this.openNav = this.openNav.bind(this);
      this.intervalHandler;
      this.sale = React.createRef();
      this.about =  React.createRef();
      this.mvp =  React.createRef();
      this.faq =  React.createRef();
      this.road =  React.createRef();
      this.contact =  React.createRef();
      this.team =  React.createRef();
    }
	  componentWillMount() {

    this.setState({
      children: [],
      activeItemIndex: 0
    });

    this.setState({
      children: Array.from(new Array(8)).map((_, i) =>
    <img class="slider1-images"
      key={i}
      src = "../images/1.png"
    />
  ),
       });
  }

  componentDidMount(){
      this.intervalHandler = setInterval(this.timerCalculation,1000);
  }

//************************//

   render(){

     const {
      activeItemIndex,
      children,
    } = this.state;

return(<div id="wholepage" class="pageWrapper">
	 <div id="particles" style={{
		position: "absolute",
		top: 0,
		left: 0,

	}}>
	 <Particles params={{
	    "particles": {
	        "number": {
	            "value": 60
	        },
	        "size": {
	            "value": 6,
	            "random": true
	        },
	        "color": {
            "value": "#186287"
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#294079",
            opacity: 1,
            width: 0.6413648243462091
          },
          opacity: {
            value:1,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          }
	    },


	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}}
	canvasClassName="example"
	 /></div>
  <div class="navbar">
  	<nav>
      <div class = "nav_items">
        <div><a href="#"><img src="images/logo.png" class="brand"></img></a></div>
      </div>
      <div class="nav_items">
        <div class="collapse_btn" onClick={this.openNav}>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
        </div>
      </div>
      <div class="nav_items_wrapper" id="myNavbar">
        <div  class="wqNav nav_items">
          <div class="nav_link_container">
            <div class="wqname">
              <img src="images/wqname.png"></img>
            </div>
            <ul class="nav_link_items">
          		<li><a class="nav-links" onClick={this.scrollTofun.bind(this,'about')}>WHAT IS WORK COIN?</a></li>
      				<li><a class="nav-links" onClick={this.scrollTofun.bind(this,'sale')}>TOKEN SALE</a></li>
      				<li><a class="nav-links" onClick={this.scrollTofun.bind(this,'road')}>ROAD MAP</a></li>
      				<li><a class="nav-links" onClick={this.scrollTofun.bind(this,'mvp')}>MVP</a></li>
      				<li><a class="nav-links" onClick={this.scrollTofun.bind(this,'team')}>TEAM</a></li>
      				<li><a class="nav-links" onClick={this.scrollTofun.bind(this,'contact')}>CONTACT</a></li>
      				<li><a class="nav-links" onClick={this.scrollTofun.bind(this,'faq')}>FAQ</a></li>
            </ul>
            <div class="nav_link_items">
              <a id="signup" class="account nav-links" onClick={this.handleForm.bind(this,'signup')}>SIGN UP</a>
      				<a id="login" class="account nav-links" onClick={this.handleForm.bind(this,'login')}>LOGIN</a>
            </div>
            <div class="mobile_nav_footer">
              <img src="images/croped_logo.png"></img>
            </div>
          </div>
    	  </div>
      </div>
  	</nav>
  </div>
  <div  id="login-form" style={{display: this.state.login?"block":"none"}}  class="form_bg_container">
  	 <div class="form_parent">
      <span id="x" class="close" onClick={this.closeForm.bind(this,'login')} title="Close Modal">&times;</span>
      <div class="login_form_item">
        <div class="login_form_wq_logo">
          <img src="images/wq.png"></img>
        </div>
        <div class="login_form_ico_item">
          <img class="login_form_croped_logo" src="images/croped_logo.png"></img>
          <p class="join_ico_pre">
            LOGIN AND JOIN ICO PRESALE
          </p>
        </div>
      </div>
    	<form class="login_form_content">
      	<div class="login_form_container">
      	    <div>
            	<p class="whiteprint">L<span><img src="images/photo.png"></img></span>gin</p>
      	      <div class="input_item">
                <label class="input_label" for="login_email">USER NAME
                  <div class="login_input">
                    <img class="log_img" src="images/user-input.png" />
                    <input id="login_email" name="email" type="text" placeholder="Enter Email" value={this.state.loginform.eMail} name="eMail" onChange={this.handleLoginChange} required></input>
                  </div>
                </label>
              </div>
              <div class="input_item">
                <label class="input_label" for="login_psw">ENTER PASSWORD</label>
                  <div class="login_input">
                    <img class="log_img log_psw_logo" src="images/password icon.png" />
                    <input type="password" id="login_psw" value={this.state.loginform.passWord}  placeholder="Enter Password" onChange={this.handleLoginChange} name="passWord" required />
                  </div>
              </div>
              <div class="login_form_btns">
                <button onClick={this.handlelogin} class="loginbtn">LOGIN</button>
                <div class="forgot_or_create">
                  <p id="forgot-pass-text" onClick={this.handleForm.bind(this,'forgot')}>FORGOT PASSWORD?</p>
                  <p class="mediumletter3">DON'T HAVE AN ACCOUNT YET?</p>
                </div>
                <button id="signup2" class="signupbtn" onClick={this.handleForm.bind(this,'signup')}>CREATE ACCOUNT</button>
              </div>
            </div>
      	</div>
      </form>
    </div>
  </div>
  <div id="forgot-pass" style={{display: this.state.forgot?'block':'none'}} class="forgot_pass_container">
   <div class="form_forgot_pass">
    <span id="xx" class="close" onClick={this.closeForm.bind(this,'forgot')} title="Close Modal">&times;</span>
    <div class="forgot_item">
  	  <p class="forgot-heading">FORGOT YOUR PASSWORD?</p>
  	  <p class="smallletters"> Don't worry, just enter your registered email and we'll send you a link to your registered email.</p>
      <div class="forgot_input">
        <input type="text" placeholder="Enter Email" name="email" required />
      </div>
      <button id="forgot-pass-email" >SEND</button>
    </div>
   </div>
  </div>
  <div id="forgot-pass-notif" class="forgot_pass_container">
    <div class="forgot-notif-item">
  	    <span id="xx" class="close" title="Close Modal">&times;</span>
  	    <p class="forgot-heading">CHECK YOUR EMAIL </p>
  	    <p class="pass-email-conf">We've sent an email to your mail. Click the link in the email to reset the password.</p>
        <p class="pass-email-conf">If you don't see the mail, check other plpaces it might be in spam or other folders.</p>
    </div>
  </div>
  <div id="signup-form" style={{display: this.state.signup?'block':'none'}} class="form_bg_container">
    <div class="form_parent">
      <span id="x" onClick={this.closeForm.bind(this,'signup')}class="close" title="Close Modal">&times;</span>
      <div class="signup_form_item">
        <div class="signup_form_wq_logo">
          <img src="images/wq.png" />
        </div>
        <div class="signup_form_ico_item">
          <img src="images/WORK QUEST_sign.svg" class="signup_form_croped_logo" />
          <p class="wq_signup_text">ENTER BASIC INFORMATIOIN TO GET STARTED</p>
        </div>
      </div>
      <form class="form-content">
        <div class="input_item">
          <label for="firstName" class="input_label">FIRST NAME</label>
          <div class="login_input">
           <img src="images/user-input.png" class="log_img" id="input-icons" />
           <input type="text" placeholder="First Name" name="firstName" onChange={this.handleSignupChange} required />
          </div>
        </div>
        <div class="input_item">
          <label class="input_label" for="lastName">LAST NAME</label>
          <div class="login_input">
           <img class="log_img" src="images/user-input.png"/>
           <input type="text" placeholder="Last Name" name="lastName" onChange={this.handleSignupChange} required />
          </div>
        </div>
        <div class="input_item">
          <label class="input_label" for="UserName">USER NAME</label>
          <div class="login_input">
            <img class="log_img" src="images/check-square.png" />
            <input type="text" placeholder="User Name" name="userName" onChange={this.handleSignupChange} required />
          </div>
        </div>
        <div class="input_item">
          <label class="input_label" for="eMail">MAIL</label>
          <div class="login_input">
            <img class="log_img" src="images/mail.png"  />
            <input type="text" placeholder="E-Mail" name="eMail" onChange={this.handleSignupChange} required />
          </div>
        </div>
        <div class="input_item">
          <label for="passWord" class="input_label">ENTER PASSWORD</label>
          <div class="login_input">
            <img src="images/password icon.png" class="log_img"/>
            <input type="password" placeholder="Password" name="passWord" onChange={this.handleSignupChange} required />
          </div>
        </div>
        <div class="input_item">
          <label for="confirmPass" class="input_label">CONFIRM PASSWORD</label>
          <div class="login_input">
            <img src="images/password icon.png" class="log_img" />
            <input type="password" placeholder="Confirm Password" name="confirmPass" onChange={this.handleSignupChange} required />
          </div>
        </div>
        <div class="register_container">
          <button class="registerbtn" onClick={this.handleSignup}>REGISTRATION</button>
        </div>
      </form>
    </div>
  </div>
  <div class="section sectionFirst" id="firstSection">
    <div class="firstBox">
    	<div class="first_items first_text">
    		<p class="bigletters">WORK QUEST ICO STARTUP A GLOBAL JOB MARKETPLACE FOR <br></br> ANY TYPE OF WORK.</p>
        <div class="first_text_item">
        	<p class="smallletters">WORK QUEST ICO STARTUP <br></br>A GLOBAL JOB <br></br>MARKETPLACE FOR <br></br>ANY TYPE OF WORK.</p>
      		<a id="join" class="join_btn btn_signup" onClick={this.handleForm.bind(this,'signup')}>SIGN UP TO JOIN</a>
        </div>
        <span>
          <p class="smallletters2">OUR PARTNERS</p>
        </span>
      </div>
      <div class="first_items">
    	   <img src="images/a.png"></img>
      </div>
    </div>
    <ul class="partners-list">
      <li><a href="https://eucc.eu/"><img src="images/EUCC.png"></img></a></li>
      <li><a href="https://globiance.com/"><img src="images/globiance.png"></img></a></li>
      <li><a href="http://attis-group.com/?page_id=252&lang=en"><img src="images/ag.png"></img></a></li>
      <li><a href="https://kcolbchain.com/"><img src="images/KCOLBCHAIN.png"></img></a></li>
    </ul>
  </div>
  <Fade bottom>
  <div>
	<div class="section section2" id="about" ref={this.about}>
    <p class="heading1">ABOUT PROJECT</p>
    <div class="about_section">
      <div class="about_section_items about_text_container">
        <p  class="heading2">WORK COIN<br /> WHY DO WE USE IT?</p>
        <p  class="smallletters7">WORK COIN IS A CRYPTOCURRENCY USED ON THE WORK QUEST ECO-SYSTEM</p>
        <p  class="smallletters7">WORK COIN, IS A CRYPTOCURRENCY USED TO CALCULATE REMUNERATION BETWEEN AN EMPLOYEE AND EMPLOYER IN THE WORK QUEST NETWORK. THE COIN IS ALSO USED TO FACI.LLITATE PAYMENT TRANSACTION OF ANY TYPE WITHIN OUR WORK QUEST ECO-SYSTEM. </p>
        <p  class="smallletters7">WORK QUEST AS A GLOBAL PROJECT THAT WOULD WORK AS A TOOL SEARCH AND COMMUNICATION OF WORKERS AND EMPLOYEES. IT IS AN ONLINE WORK MARKETPLACE CONNECTING ALL TYPES OF EMPLOYEES WITH WORKERS AROUND EVERY CORNER OF THE WORLD THROUGH A BLOCKCHAIN POWERED SMART CONTRACT.</p>
  		</div>
      <div class="about_section_items about_image_container">
    		<a href="https://www.youtube.com/watch?v=SSo_EIwHSd4" id="youtube"><img src="images/PLAY BUTTON.png" class="play-btn"></img></a>
    	  <img src="images/output-onlinepngtools.png"></img>
      </div>
    </div>
	</div>
  </div>
  </Fade>
	<div class="section section3">
		<p class="heading1">OUR MISSION</p>
		<p class="smallletters8">CONNCETING EMPLOYERS AND EMPLOYEES THROUGH OUR INNOVATIVE ONLINE PLATFORM,<br></br> EASING COMMUNICATION AND IMPROVING FINANCIAL STANDARDS OF ALL STAKEHOLDERS </p>
		<div class="mission_items">
			<div class="mission_item">
				<img src="images/bi.png" ></img>
        <div class="mission_content">
          <p class="mediumletter">BLOCKCHAIN <br></br>INFRASTRUCTURE</p>
          <p class="smallletters8">WORK COIN, IS A<br></br> CRYPTOCURRENCY USED TO<br></br> CALCULATE REMUNERATION<br></br> BETWEEN AN EMPLOYEE AND<br></br> EMPLOYER IN THE WORK<br></br> QUEST NETWORK. </p>
        </div>
      </div>
			<div class="mission_item">
				<img src="images/eti.png"></img>
        <div class="mission_content">
          <p class="mediumletter">EASY TOKEN <br></br>INTEGRATION</p>
  				<p class="smallletters8">WORK COIN, IS A<br></br> CRYPTOCURRENCY USED TO<br></br> CALCULATE REMUNERATION<br></br> BETWEEN AN EMPLOYEE AND<br></br> EMPLOYER IN THE WORK<br></br> QUEST NETWORK. </p>
        </div>
      </div>
			<div class="mission_item">
				<img src="images/global.png" ></img>
        <div class="mission_content">
  				<p class="mediumletter">GLOBAL SYSTEM<br></br> AND SECURE</p>
  				<p class="smallletters8">WORK COIN, IS A<br></br> CRYPTOCURRENCY USED TO<br></br> CALCULATE REMUNERATION<br></br> BETWEEN AN EMPLOYEE AND<br></br> EMPLOYER IN THE WORK<br></br> QUEST NETWORK. </p>
        </div>
      </div>
		</div>
		<a  class="join_btn btn_whitepaper" href="images/WORK QUEST white paper.pdf">DOWNLOAD WHITEPAPER</a>
	</div>
	<div class="section section4">
		<p class="heading1">OUR FEATURES</p>
	<div class="feature_items">
			<div class="feature_item">
				<img src="images/ltc.png"></img>
        <div>
  				<p class="mediumletter">LOW<br></br>TRANSACTION COST</p>
  				<p class="smallletters8">ON OUR WORK QUEST PLATFORM TRANSACTIONAL FEE IS SET AT 1% OF THE TOTAL USER INCOME AGAINST 7-20%  FEE CHARGED BY OTHER MARKETPLACES.
  ZERO COST TO LIST NEW EMPLOYEES.</p>
        </div>
			</div>
			<div class="feature_item">
				<img src="images/it.png"></img>
        <div>
  				<p class="mediumletter">INNOVATIVE<br></br>TECHNOLOGY</p>
  				<p class="smallletters8">IT IS AN ONLINE JOB MARKETPLACE POWERED BY BLOCKCHAIN THUS TAPPING INTO DECENTRALIZATION FEATURES OF THIS TECHNOLOGY. ANY ONE AROUND THE WORLD CAN USE THE PLATFORM AND BE PAID USING OUR CRYPTOCURRENCY WORK COIN.</p>
        </div>
      </div>
			<div class="feature_item">
				<img src="images/rt.png"></img>
        <div>
  				<p class="mediumletter">REAL TIME</p>
  				<p class="smallletters8">WORK QUEST USES SMART CONTRACT TECHNOLOGY TO FACILLITATE REAL TIME TRANSACTIONS ELIMINATING DELAYS CAUSED BY THIRD PARTIES. IT TAKES A FEW MINUTES TO MATCH JOB DEMAND AND SKILLS AS IT IS ALSO LOCATION BASED.</p>
        </div>
      </div>
			<div class="feature_item">
				<img src="images/ss.png"></img>
        <div>
          <p class="mediumletter">SAFE AND SECURE</p>
				  <p class="smallletters8">THE PLATFORM IS SAFE AND SECURE TO USE AS THE USE OF BLOCKCHAIN TECHNOLOGY ALLOWS HIGH DATA ENCRYPTION WHICH HELPS IN HARNESSING SECURITY OF THE PLATFORM. AN ESCROW SYSTEM IS INTEGRATED ON THE PLATFORM TO ELIMINATE FINANCIAL FRAUD.</p>
        </div>
      </div>
			<div class="feature_item">
				<img src="images/ivrs.png" ></img>
        <div>
  				<p class="mediumletter">IMMUTABLE VERIFICATION AND RATING SYSTEM</p>
  				<p class="smallletters8">BOTH EMPLOYERS AND EMPLOYEES UNDERGO VETTING DURING PROFILE CREATION TO ENSURE USER LEGITIMACY. TRUSTWORTHY FEEDBACK ON EACH QUEST TRANSACTED AND ITS RECORDED ON BLOCKCHAIN NETWORK.</p>
        </div>
      </div>
			<div class="feature_item">
				<a class="join_btn2 pitchdeck" href="images/WORK QUEST pitch deck.pdf">DOWNLOAD OUR PITCH DECK</a>
			</div>
		</div>
	</div>
	<div class="section section5" id="sale" ref={this.sale}>
	<p class="heading1">TOKEN SALE INFO</p>
		<p class="smallletters9">THE WORK COIN WILL BE ISSUED AS AN INDEPENDENT BLOCKCHAIN WORK QUEST AND WE WILL ISSUE 2 BILLION TOKENS</p>
	<div class="countdown">
	  <p class="mediumletter">ICO WILL BE STARTED IN</p>
    <ul class="countdown-item">
  	  <li><div id="exbox1" class="countdown-boxes">{this.state.timer.days}</div><p>DAYS</p></li>
   	  <li><div id="exbox2" class="countdown-boxes">{this.state.timer.hours}</div><p>HOURS</p></li>
   	  <li><div id="exbox3" class="countdown-boxes">{this.state.timer.minutes}</div><p>MINUTES</p></li>
   	  <li><div id="exbox4" class="countdown-boxes">{this.state.timer.seconds}</div><p>SECONDS</p></li>
    </ul>
      <a class="timer-button" href="#">JOIN AND BUY TOKEN NOW</a>
  </div>
	 <div class="sale_info">
    <div class="sale_info_item">
      <p class="mediumletter2">OUR START</p>
		  <p class="blueletters">Jun 1, 2019 (12:00AM GMT)</p>
    </div>
    <div class="sale_info_item">
    <p class="mediumletter2">END</p>
		<p class="blueletters">Aug 1, 2019 (12:00AM GMT)</p>
    </div>
    <div class="sale_info_item">
      <p class="mediumletter2">ACCEPTABLE CURRENCIES</p>
		  <p class="blueletters">ETH, BTC, LTC & FIAT</p>
    </div>
    <div class="sale_info_item">
     <p class="mediumletter2">NUMBER OF TOKENS FOR SALE</p>
		 <p class="blueletters">600,000,000 WRC</p>
    </div>
    <div class="sale_info_item">
     <p class="mediumletter2">TOKENS EXCHANGE RATE</p>
		 <p class="blueletters">1 ETH = 140 WRC</p>
    </div>
    <div class="sale_info_item">
     <p class="mediumletter2">MINIMUM TRANSCATION AMOUNT</p>
		 <p class="blueletters">$50</p>
    </div>
  </div>

  	<div class="sale_piechart">
  		<p class="heading3">TOKEN DISTRIBUTION</p>
  		<img src="images/ifd.png"/>
  	</div>
  	<div class="sale_piechart">
  		<p class="heading3">ICO FUNDS DISTRIBUTION</p>
  		<img src="images/td.png"/>
  	</div>
  </div>
  <div class="section section6" id="road" ref={this.road}>
    <p class="heading1">ROAD MAP</p>
    <p class="smallletters9">WITH HELP FROM OUR TEAMS, CONTRIBUTORS AND INVESTORS THESE ARE THE MILESTONES WE ARE LOOKING FORWARD TO ACHEIVE</p>

    <div class="slider">
      <ItemsCarousel
      placeholderItem={<div style={{ height: 150, background: '#EEE' }} />}
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
      requestToChangeActive={ value => this.setState({ activeItemIndex: value })}
      rightChevron={<img class="chevron" src="../images/next-page.png"/>}
      leftChevron={<img class="chevron" src="../images/prev-page.png" />}
      >
      {children}
      </ItemsCarousel>
    </div>
    <div class="section section6-item1" >
    	<p class="heading1">WHAT TECHNOLOGY IS BASED</p>
    	<p class="smallletters9">WORK QUEST BASED ON BLOCKCHAIN TECHNOLOGY. BLOCKCHAIN TECHNOLOGY IS AN INCORRUPTIBLE DIGITAL LEDGER OF ECONOMIC TRANSACTIONS THAT CAN BE PROGRAMMED TO RECORD NOT JUST FINANCIAL TRANSACTIONS BUT VIRTUALLY EVERYTHING OF VALUE. OUR OBJECTIVE IS TO DEVELOP OWN BLOCKCHAIN KNOWN AS WORK QUEST BLOCKCHAIN AND WILL ALSO INTEGRATE SMART CONTRACTS TO EASE COMPLETION AND COMMUNICATION BETWEEN AN EMPLOYER AND EMPLOYEE IN THE PLATFORM</p>
    	<div class="item1-child">
         <div class="child1-items">
          	<p class="mediumletter2">ELEMENTS OF WORK QUEST PLATFORM AND HOW THE SYSTEM WORKS:</p>
          	<ul class="child1-list mediumletter2" >
          		<li><div class="donut Dblue"></div><p>USER REGISTRATION</p></li>
          		<li><div class="donut Dgreen"></div><p>QUEST CREATION</p></li>
          		<li><div class="donut Dgrey"></div><p>EMPLOYEE SEARCHING</p></li>
          		<li><div class="donut Dyellow"></div><p>SMART CONTRACT</p></li>
          		<li><div class="donut Dorange"></div><p>EVALUATION OF COMPLETED WORK AND FEEDBACK</p></li>
          	</ul>
        </div>
        <div class="child1-items"><img src="images/Clip.png"></img></div>
      </div>
      <div class="bg-logo-container"><img src="images/bg.png" class="bg-z-logo"></img></div>
    </div>
    <div class="section sectino6-item2 section6-items">
    		<p class="heading1">PROBLEMS WE SOLVE ON GLOBAL JOB MARKETPLACE</p>
    		<div class="section6-items-content">
    			<div class="section6-one-third">
    				<img src="images/web.png" id="small-logo"></img>
            <div>
    				    <p class="mediumletter">GLOBAL SKILLS AVAILABILITY AND HIRING MISMATCH</p>
    				    <p class="smallletters8">THERE IS JOB DEMAND IN SOME COUNTRIES WHILE LABOR SUPPLY IS AVAILABLE ACROSS OTHER COUNTRIES.</p>
            </div>
          </div>
    			<div class="section6-one-third sectin6-middle1">
    				<img src="images/job.png" id="small-logo"></img>
            <div>
              <p class="mediumletter">FRAGMENTED JOB BOARDS</p>
    				  <p class="smallletters8">IN THE EMERGENCE OF DIGITAL PLATFORMS MENY JOB BOARDS TRYING TO MATCH RECRUITERS, EMPLOYERS AND EMPLOYEES HAVE SPRUNG UP. THEY ARE INEFFICIENT AND NOT TRUSTWORTHY. HIGH INDUSTRY FRAGMENTATION CREATES INFORMATION GAP WHICH LEADS TO POOR INTEGRATION OF WORKERS INTO THE PROFFESIONAL COMMUNITY </p>
            </div>
          </div>
    			<div class="section6-one-third">
    				<img src="images/central.png" id="small-logo"></img>
            <div>
              <p class="mediumletter">CENTRALIZED PLATFORMS</p>
    				  <p class="smallletters8">EXISTING CENTRALIZED ONLINE MARKETPLACES CONTROL CRITICAL USER DATA INCLUDING FINANCIAL INFORMATION AND ITS DONE WITHOUT CONSENT OF USERS.</p>
            </div>
          </div>
    		</div>
    </div>
    <div class="section section6-item3 section6-items">
    		<p class="heading1">SOLUTIONS</p>
    		<div class="section6-items-content">
    			<div class="section6-one-third">
    				<img src="images/tles.png" id="small-logo"></img>
            <div>
                  <p class="mediumletter">TRUST-LESS ECO-SYSTEM</p>
    				      <p class="smallletters8">WORK QUEST UTILIZES BLOCKCHAIN TECHNOLOGY WHICH CREATES AN ECO-SYSTEM WHERE ALL TRANSACTIONS ARE IMPLEMENTED BY AN INDEPENDENT NETWORK
                  AND SMART CONTRACT EXECUTION. THE PLATFORM OFFERS OPEN INDIVIDUAL USER REVIEW
                  AND VERIFICATION TO ELIMINATE THE PROBLEM OF DATA LOSS OR FRAUD IN THE JOB MARKET.</p>
            </div>
          </div>
    			<div class="section6-one-third sectin6-middle2">
    				<img src="images/sec.png" id="small-logo"></img>
            <div>
      				<p class="mediumletter">SECURITY</p>
      				<p class="smallletters8">USERS ON THE PLATFORM POSSESS CONTROL OF THEIR
      DATA AND EITHER PARTY TO A CONTRACT WILL HAVE TO SEEK PERMISSION FROM INDIVIDUAL PLATFORM PARTICIPANT IN ORDER TO USE, ACCESS OR AMEND ANY INFORMATION ALTOUGH THIS WORKS IN REAL TIME TO MAKE THE PROCESS FAST AND RELIABLE. </p>
            </div>
        	</div>
    			<div class="section6-one-third">
    				<img src="images/decentral.png" id="small-logo"></img>
            <div>
              <p class="mediumletter">DECENTRALIZED PROFESSIONAL NETWORK</p>
      				<p class="smallletters8">WORK QUEST PROVIDES A SINGLE INTERFACE PLATFORM YET DECENTRALIZED WITH BOTH PARTIES ACCESSING TRANSACTIONS ON THE JOBS BOARD IN REAL TIME.</p>
            </div>
          </div>
    		</div>
     </div>
  	<div class="section6-item4" id="mvp" ref={this.mvp}>
  	  <p class="heading1">MVP</p>
  	  <p class="smallletters9">OUR PROJECTS IS BASED ON WORK QUEST MARKETPLACE</p>
    	<div class="item4-items">
      	<div class="mac_container">
          <img src="images/macbook2.png" class="macbook" ></img>
          <img src="images/wqmac.png" class="macbook-wallpaper"></img>
        </div>
        <img src="images/BLUE BG TEXT.png" class="blue-wallpaper"></img>
        <img src="images/xd.png" id="small-logo6"></img>
    	</div>
      <div class="section6-item4-content">
          <div>
            <p class="bigletters">WORK COIN PROJECT</p>
            <p class="smallletters8">
                WORK QUEST IS BASED ON OWN BLOCKCHAIN COUPLED WITH ITS OWN SMART CONTRACT SYSTEM. USERS BOTH EMPLOYERS AND EMPLOYEES WILL BE ABLE TOCREATE PROFILES ON THE PLATFORM AND THEIR DATA IS SAFELY SECURED BY THE BLOCKCHAIN.
            </p>
            <p class="smallletters8">
                USERS UPON VETTING THEIR PROFILE IS UPDATED ON THE PLATFORM. WHEN CREATING A QUEST USER FILLS IN ALL NECESSARY INFORMATION INCLUDING CONDITIONS FOR EXECUTION, ANNOUNCED COST AND URGENCY OF EXECUTION.
                USING GEOLOCATION SERVICES AN EMPLOYER WILL SEARCH FOR PROSPECTIVE EMPLOYEES AND REVIEW THEIR PROFILE PRIOR TO SENDING QUEST REQUEST. THE EMPLOYEE ENGAGES THE EMPLOYER AND UPON AGREEMENT A SMART CONTRACT IS ESTABLISHED BETWEEN THE PARTIES WITH ALL DETAILS AND CONDITIONS REQUIRED FOR EXECUTION OF THE QUEST CREATED. SMART CONTRACT EXECUTES ALL TRANSACTIONS AS FED IN TO THE SYSTEM INCLUDING HOLDING FUNDS IN AN ESCROW AND RELEASE OF FUNDS AFTER COMPLETION OF WORK BY EMPLOYEE.
            </p>
         </div>
          <a class="timer-button" href="Workquest/index.html">ENTER PLATFORM</a>
      </div>
  	</div>
  </div>
	<div class="section section7" id="team" ref={this.team}>
	<p class="heading1 section-heading">OUR TEAM</p>
	<p class="smallletters9 section-description">OUR TEAM IS PASSIONATE AND COMMITED TO DELIVER RESULTS. DIVERSITY IS KEY TO US AND DRIVING INNOVATION DESIRED ON WORK QUEST</p>
  <div class = "carousel2">
    <ItemsCarousel
    placeholderItem={<div style={{ height: 150, background: '#EEE' }} />}
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
    requestToChangeActive={ value => this.setState({ activeItemIndex1: value })}
    rightChevron={<img class="chevron carousel_chevron" src="../images/next-page.png"/>}
    leftChevron={<img class="chevron carousel_chevron" src="../images/prev-page.png" />}
    >
    <div class="carousel_card">
      <img src="images/ceo.png"></img>
      <p class="mediumletter carousel_heading">Andril Kotsur (CEO)</p>
      <p class="smallletters7 carousel_content">Andrii expertise and experience includes knowledge of digital currency, how to manage a highly skilled team, building relationships and driving the company forward. Founder and main ideologue of the project concept.</p>
    </div>
    <div class="carousel_card">
      <img src="images/Abhishek Kishor.png"></img>
      <p class="mediumletter carousel_heading">Abhishek  Kishor</p>
      <p class="smallletters7 carousel_content">Blockchain developer and Network engineer. He is certified in CCNA R&S and CCNA security. He has worked on Ethereum and Hyperledger on the various project including Government project. He is also passionate about Hacking & Security.</p>
    </div>
    <div class="carousel_card">
      <img src="images/Abhishek Krishna.png"></img>
      <p class="mediumletter carousel_heading">Abhishek Krishna</p>
      <p class="smallletters7 carousel_content">Abhishek is a Tech Entrepreneur and started his first venture 6 years ago. Since then, he has built several products and has consulted and advised a few startups and corporations. He started coding in school and has a keen sense of product design too. He specializes in building product and technology teams. He currently runs Kcolbchain and Ojam.</p>
    </div>
    </ItemsCarousel>
    </div>
	</div>
	<div class="section section8" id="contact" ref={this.contact}>
  	<p class="heading1 section-heading">GET IN TOUCH</p>
  	<p class="smallletters9 section8-context">ANY QUESTION? REACH OUT TO US AND WE’LL GET BACK TO YOU SHORTLY.</p>
    <form class="contact_form">
       <p class="contact_input">
          <label  class="smallletters9" for="contact_form_name">YOUR NAME</label>
          <input type="text" name="contact_form_name" />
       </p>
       <p class="contact_input">
         <label class="smallletters9" for="contact_form_email">YOUR EMAIL</label>
         <input type="text" name="contact_form_email" />
       </p>
       <p class="contact_input">
         <label class="smallletters9" for="contact_form_msg">YOUR MESSAGE</label>
         <input type="text" name="contact_form_msg" id="xdx" />
       </p>

         <input type="submit" class="join_btn contact_submit" value="SEND" />
    </form>
    <div class="contact_details">
    <p class="smallletters2">+044 0123 4567</p>
  	 <p class="smallletters2">feedback@workquest.co<br />join us on telegram</p>
    </div>
  </div>
  <div class="section section9" id="faq" ref={this.faq}>
    <p class="heading1 section9-heading">FREQUENTLY ASKED QUESTIONS</p>
    <p class="smallletters9 section9-context">BELOW WE’VE PROVIDED INFORMATION ABOUT WORKQUEST AND WORK COIN(WRC), AND FEW OTHERS, IF YOU HAVE ANY QUESTIONS, PLEASE GET IN TOUCH USING THE CONTACT FORM BELOW</p>
    <div class="faq-wrapper">
      <div class="pair-btn-container">
        <button  className={this.state.faq_active == 'ico'? 'faq-btn' : 'faq-btn faq-disable'}  onClick={()=> this.toggle_faq('ico')}>ICO</button>
        <button  className={this.state.faq_active == 'general'? 'faq-btn' : 'faq-btn faq-disable'} onClick={()=>this.toggle_faq('general')}>GENERAL</button>
      </div>
      <div class="faq-content">
        <div  className={this.state.faq_active == 'general'? 'faq-items' : 'faq-items display_none_class'}  >
          <p class="mediumletter2 faq-heading-item">GENERAL</p>
          <div class="faq-item">
            <p class="blueletters2">WHAT IS THE DIFFERENCE BETWEEN A WORK QUEST AND A WORK COIN</p>
            <p class="smallletters9">WORK QUEST IS A PLATFORM CONNECTING EMPLOYERS AND EMPLOYEES USING BLOCKCHAIN TECHNOLOGY. WORK COIN(WRC) IS THE TOKEN USED IN THE ECO-SYSTEM TO FACILITATE PAYMENTS AND OTHER TRANSACTIONS</p>
          </div>
          <div class="faq-item">
            <p class="blueletters2">WHAT CRYPTOCURRENCIES CAN I USE TO PURCHASE WRC?</p>
            <p class="smallletters9">ONE CAN USE ETH, BTC, LTC OR EVEN FIAT MONEY</p>
          </div>
          <div class="faq-item">
            <p class="blueletters2">HOW CAN I PARTICIPATE IN THE ICO TOKEN SALE?</p>
            <p class="smallletters9">IT IS EASY, REGISTER ON OUR WEBSITE, THE ACQUIRE THE ACCEPTED CRYPTOCURRENCIES NAMELY, BTC ETH AND LTH, SEND THE RESPECTIVE CRYPTOCURRENCY YOU PURCHASED AND HAVE IN YOUR WALLET OUR CAMPAIGN ADDRESS AND IN RETURN YOU RECEIVE THE WRC TOKENS AND THEN STORE THEM IN YOUR PREFERRED WALLET
            </p>
          </div>
          <div class="faq-item">
            <p class="blueletters2">WHO IS WORK QUEST TARGETED AT?</p>
            <p class="smallletters9">WORK QUEST TARGETS JOB SEEKERS AND EMPLOYERS WHO ARE WORLDS APART AND CAN PROVIDE THEIR SERVICES VIA AN ONLINE PLATORM WHILE GETTING THE BEST AWARD<br /><br /><br /><br /><br /><br /><br /></p>
          </div>
        </div>
        <div  className={this.state.faq_active == 'ico'? 'faq-items' : 'faq-items display_none_class'}>
          <p class="mediumletter2 faq-heading-item">ICO</p>
          <div class="faq-item">
            <p class="blueletters2">WHY DO YOU NEED AN ICO?</p>
            <p class="smallletters9">SUCCESFUL ICO WILL ENABE US DEVELOP AND ACQUIRE MORE BLOCKCHAIN AND CRYPTOCURRENCY TALENT TO CREATE A HIGHLY UNIQUE AND BENEFICIAL PLATFORM TO HELP OUR STAKEHOLDERS. ALL OUR PROCEEDS GO TO PRODUCT DEVELOPMENT RELATED ACTIVITIES AND LAUNCH AS WELL AS USER ACQUISATION
            </p>
          </div>
          <div class="faq-item">
            <p class="blueletters2">WHY SHOULD YOU INVEST IN OUR ICO?</p>
            <p class="smallletters9">WE ARE COMMMITED TO CREATE THE MOST ADVANCED AND TRUSTWORTHY PLATFORM THAT TRANSFORMS RELATIONS BETWEEN EMPLOTYERS AND EMPLOYEES IN THE INDUSTRY AND AT A GLOBAL SCALE. WE TARGET 3.5 MILLION USERS AND 10,000 CORPORATE USERS BY 2023</p>
          </div>
          <div class="faq-item">
            <p class="blueletters2">WHAT IS THE GOAL OF THE ICO CAMPAIGN?</p>
            <p class="smallletters9">THE MAXIMUM TARGET FOR THE CAMPAIGN IS $1O MILLION</p>
          </div>
          <div class="faq-item">
            <p class="blueletters2">HOW CAN YOU BE SURE WORK WILL COMMENCE AFTER TOKEN SALE?</p>
            <p class="smallletters9">WE ARE A TEAM OF PEOPLE DRIVEN BY RESULTS AND THIS IS EVIDENT FROM OUR PAST PROJECTS WIHTING THE ICO AND OUTSIDE THE ICO SPACE. THE TEAM EITHE RCOLLABORATIVELY OR INDIVIDUALLY HAVE BEEN INVOLVED IN INTERNATIONAL PROJECTS WHICH HAVE BEEN CONCLUDED TO FRUITION. WE ARE USING ICO FINACNING METHOD BECAUSE OF ITS AFFORDABILITY AND ABILITY TO INVOLVE OTHER PEOPLE WORLDWIDE IN OUR PROJECT</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <img src="images/footer background.png" id="small-logo7"></img>
  <div id="footer">
    <div class="footer_wrapper">
    <div class="footer_first_section">
      <div class="footer_section_image"><img src="images/Logotype.png"/></div>
      <ul class="footer_links">
    				<li><a onClick={this.scrollTofun.bind(this,'about')}>WHAT IS WORK COIN?</a></li>
    				<li><a onClick={this.scrollTofun.bind(this,'sale')}>TOKEN SALE</a></li>
    				<li><a onClick={this.scrollTofun.bind(this,'road')}>ROAD MAP</a></li>
    				<li><a onClick={this.scrollTofun.bind(this,'mvp')}>MVP</a></li>
    				<li><a onClick={this.scrollTofun.bind(this,'team')}>TEAM</a></li>
    				<li><a onClick={this.scrollTofun.bind(this,'contact')}>CONTACT</a></li>
    				<li><a onClick={this.scrollTofun.bind(this,'faq')}>FAQ</a></li>
    	</ul>
    </div>
    	<ul class="footer_social_links">
      	<li><a href="#"><FontAwesomeIcon icon={faFacebook}/></a></li>
      	<li><a href="#"><FontAwesomeIcon icon={faTwitter}  /></a></li>
      	<li><a href="#"><FontAwesomeIcon icon={faYoutube} /></a></li>
      	<li><a href="#"><FontAwesomeIcon icon={faInstagram}  /></a></li>
      	<li><a href="#"><FontAwesomeIcon icon={faTelegram} /></a></li>
      	<li><a href="#"><FontAwesomeIcon icon={faLinkedin}  /></a></li>
      </ul>
    </div>
    <div class="footer_foot">
      <img src="images/croped_logo.png" />
      <div>
        <p>WORK COIN IS A CRYPTOCURRENCY USED TO CALCULATE RENUMERATION BETWEEN AN EMPLOYER AND AN EMPLOYEE IN THE WORKQUEST NETWORK. THE COIN IS ALSO USED TO FACILITATE PAYMENT TRANSACTION OF ANY TYPE WITHIN OUR WORKQUEST ECOSYSTEM.</p>
        <p>COPYRIGHT © 2019, WORKCOIN. ALL TRADE COPYRIGHTS BELONG TO THEIR RESPECTIVE OWNERS</p>
      </div>
   </div>
  </div>
</div>);}

//---------------------- For carousel ------------------------------------------
// changeActiveItem(activeItemIndex){this.setState({ activeItemIndex });}
// createChildren(n){range(n).map(i => <div key={i} style={{ height: 200, background: '#333' }}>{i}</div>);}



// Function handling for login and signup


//---------------------- checks login of user ----------------------------------
  handlelogin(event){
    event.preventDefault();
    console.log(this.state.loginform);
    const userData = {
      "Email":this.state.loginform.eMail,
      "Password":this.state.loginform.passWord
    }

    axios.post('http://localhost:3000/login',userData,{withCredentials:true}).then(result =>{
      console.log(result);
      return;
      this.props.history.push('/dashboard');
    }).catch(error => {
      console.log(error.response);
    });
  }

  handleLoginChange(event){
    const {name , value} = event.target;
    let loginform = {...this.state.loginform, [name]: value};
    this.setState({loginform});
  }
//------------------------ END -------------------------------------------------

//------------------ checks signup of user -------------------------------------
  handleSignupChange(event){
    const {name , value} = event.target;
    let signupform = {...this.state.signupform,[name]:value};
    this.setState({signupform});
  }

  handleSignup(event){
    event.preventDefault();
    const formData = this.state.signupform;
    console.log(this.state.signupform);
    const userData =   {
          "FirstName": formData.firstName,
          "LastName": formData.lastName,
          "UserName": formData.userName,
          "Email": formData.eMail,
          "Password": formData.passWord,
          "ConfirmPassword": formData.confirmPass
        };
        axios.post('http://localhost:3000/signup',userData).then(data =>{
            console.log(data);
            this.props.history.push('/dashboard');
        }).catch(error =>{
          console.log(error.response.data.errors);
          for(var ele in error.response.data.errors){
            console.log(ele);
          }
        });
    // console.log(this.state.signupform);
  }
////////////////////////// END //////////////////////////////////////////
  toggle_faq(para){
    para == 'ico'?this.setState({faq_active:'ico'}):this.setState({faq_active:'general'});
  }
//////function to handle timer //////////////////////////
  timerCalculation(){
      let countDownDate = new Date("Sept 1, 2019 00:00:00").getTime();
      let now = new Date().getTime();
      let distance = countDownDate - now;

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      let timerVar = {
        'days':days,
        'hours':hours,
        'minutes':minutes,
        'seconds':seconds
      }
      this.setState({timer:timerVar});
  }

  handleForm(ele){
    this.setState({[ele]:true});
  }

  closeForm(ele){
    this.setState({[ele]:false});
  }

  // Toggle NavBar in mobile screens
  openNav(e){
      console.log(document.getElementsByClassName('collapse_btn')[0].classList.toggle('nav_close_btn'));

      let display = document.getElementById("myNavbar").style.display;
      if(display === "block")
        {
          document.getElementById("myNavbar").style.display = 'none';
        }else {
          document.getElementById("myNavbar").style.display = 'block';
        }
      }

  scrollTofun(ele){
      this[ele].current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  componentWillUnmount(){
    clearInterval(this.intervalHandler);
  }

}


export default Home;
