import React, { Component } from 'react';
import UserSetting from './setting.js';
import axios from 'axios';

export default class UserDashboard extends Component{
  constructor(props){
    super(props);
    this.handleTest = this.handleTest.bind(this);
  }

  componentDidMount(){
    	var countDownDate = new Date("Sept 1, 2019 00:00:00").getTime();

    	// Update the count down every 1 second
    	var x = setInterval(function() {

    	  // Get today's date and time
    	  var now = new Date().getTime();

    	  // Find the distance between now and the count down date
    	  var distance = countDownDate - now;

    	  // Time calculations for days, hours, minutes and seconds
    	  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    	  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    	  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    	  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    	  document.getElementById("id_days").innerHTML = days;
    	  document.getElementById("id_hours").innerHTML = hours;
    	  document.getElementById("id_minutes").innerHTML = minutes;
    	  document.getElementById("id_seconds").innerHTML = seconds;


    	}, 1000);
  }

  render(){
    return(
      <div id="Dashboard" class="tabcontent">
        <div id="dashboard-head" class="header"><p id="header-text">DASHBOARD</p>
          <UserSetting />
        </div>
        <div class="box_items">
          <div class="dash-box" id="box1"><p id="box-text">TOKEN BALANCE</p><img src="images/cloud.png" id="box-image1" /></div>
          <div class="dash-box" id="box2"><p id="box-text">ETH BALANCE</p><img src="images/blockchain.png" id="box-image2" /></div>
          <div class="dash-box" id="box3"><p id="box-text">TOKEN PER ETH</p><img src="images/eth.png" id="box-image3" /></div>
          <div class="dash-box" id="box4"><p id="box-text">TOKEN SOLD</p><img src="images/distribution.png" id="box-image4" /></div>
        </div>
        <div id="ico-start">
          <div>Test container <button onClick={this.handleTest}>Click to check</button></div>
          <img src="../../images/coin.png" id="coin" />
          <p id="ico-text">ICO WILL BE STARTED IN</p>
          <div class="ico_counter">
            <span id="id_days"></span><p>DAYS</p>
          </div>
          <div class="ico_counter">
            <span id="id_hours"></span><p>HOURS</p>
          </div>
          <div class="ico_counter">
            <span id="id_minutes"></span><p>MINUTES</p>
          </div>
          <div class="ico_counter">
            <span id="id_seconds"></span><p>SECONDS</p>
          </div>
        </div>
      </div>
    );
  }

  handleTest(event){
    axios.get('http://localhost:3000/getUser').then((result) =>{
      console.log(result);
    }).catch((error)=>{
      console.log(error.response);
    });
  }
}
