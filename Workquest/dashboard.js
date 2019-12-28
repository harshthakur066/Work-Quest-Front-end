import React, { Component } from 'react';
import './css/dashboard.css';
import UserDashboard from './Dashboard/userDashboard.js';
import UserToken from './Dashboard/userToken.js';
import UserProfile from './Dashboard/userProfile.js';
import UserTransaction from './Dashboard/userTransaction.js';
import UserWallet from './Dashboard/userWallet.js';

class Dashboard extends Component{
	constructor(props) {
    super(props);
    this.state = {
									isToggleOn: true,
									displayContext:'dashboard',
								};
    this.tabHandler = this.tabHandler.bind(this);
  }

	tabHandler(componentName) {
  this.setState({displayContext: componentName});
	console.log(this);
}

	render(){
		const components = {
			 		"profile":<UserProfile />,
			 		"token":<UserToken />,
					"dashboard": <UserDashboard />,
			 		"transaction":<UserTransaction />,
			 		"wallet":<UserWallet />
		}

		return (
<div id="wholepage_dashboard">
	<div id="left-menu">
		<img src="images/wq.png" id="logo" class="brand_logo" />
			<div class="user_social">
				<img src="images/Color Overlay.png" class="social_icons"/>
				<img src="images/photo1.png" class="user_img"/>
			</div>
			<div class="menu_tab">
				<hr/>
				<img src="images/menu.png"/>
			</div>
		<div class="tab">
	  	<button className={`tablinks ${this.state.displayContext == "dashboard"?"active":""}`} onClick={() => this.tabHandler("dashboard")} ><img src="images/dashboard icon.png" class="tab-icon" />Dashboard</button>
	  	<button className={`tablinks ${this.state.displayContext == "wallet"?"active":""}`} onClick={() => this.tabHandler("wallet")} ><img src="images/credit-card.png" class="tab-icon" />Wallet</button>
	  	<button className={`tablinks ${this.state.displayContext == "token"?"active":""}`} onClick={() => this.tabHandler("token")} ><img src="images/spider-web.png" class="tab-icon" />Buy Tokens</button>
	  	<button className={`tablinks ${this.state.displayContext == "transaction"?"active":""}`} onClick={() => this.tabHandler("transaction")} ><img src="images/browser.png" class="tab-icon" />Transactions</button>
		</div>
		<p id="copyright">Workquest.co 2019. All rights reserved</p>
	</div>
	<div id="right-menu">
		 {components[this.state.displayContext]}
	</div>
</div>
		);
	}



	componentDidMount(){
	// 	function openTab(evt, tabName) {
	// 	  var i, tabcontent, tablinks;
	// 	  tabcontent = document.getElementsByClassName("tabcontent");
	// 	  for (i = 0; i < tabcontent.length; i++) {
	// 	    tabcontent[i].style.display = "none";
	// 	  }
	// 	  tablinks = document.getElementsByClassName("tablinks");
	// 	  for (i = 0; i < tablinks.length; i++) {
	// 	    tablinks[i].className = tablinks[i].className.replace(" active", "");
	// 	  }
	// 	  document.getElementById(tabName).style.display = "block";
	// 	  evt.currentTarget.className += " active";
	// 	}
	//
	// 	document.getElementById("Dashboard").style.display = "block";
	//
	// 	function fdropdown() {
	// 	  document.getElementById("Dropdwn").classList.toggle("showmenu");
	// 	}
	//
	// 	function fdropdown2() {
	// 	  document.getElementById("Dropdwn2").classList.toggle("showmenu");
	// 	}
	//
	// 	function fdropdown3() {
	// 	  document.getElementById("Dropdwn3").classList.toggle("showmenu");
	// 	}
	//
	// 	function fdropdown4() {
	// 	  document.getElementById("Dropdwn4").classList.toggle("showmenu");
	// 	}
	//
	// 	function fdropdown5() {
	// 	  document.getElementById("Dropdwn5").classList.toggle("showmenu");
	// 	}
	//
	// 	// Close the dropdown if the user clicks outside of it
	// 	window.onclick = function(e) {
	// 	  if (!e.target.matches('.dropbtn')) {
	// 	  var myDropdown = document.getElementById("Dropdwn");
	// 	    if (myDropdown.classList.contains('show')) {
	// 	      myDropdown.classList.remove('show');
	// 	    }
	// 	  }
	// 	}

	 }
}

export default Dashboard;
