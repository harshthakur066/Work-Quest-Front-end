import React, { Component } from 'react';
import UserSetting from './setting.js';
export default class UserWallet extends Component{
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div id="Wallet" class="tabcontent">
  		   <div id="wallet-head" class="header"><p id="header-text">WALLET</p>
          <UserSetting />
         </div>

  	     <div class="box_items">
            <div class="dash-box" id="box1"><p id="box-text">TOKEN BALANCE</p><img src="images/cloud.png" id="box-image1" /></div>
            <div class="dash-box" id="box2"><p id="box-text">ETH BALANCE</p><img src="images/blockchain.png" id="box-image2" /></div>
            <div class="dash-box" id="box3"><p id="box-text">TOKEN PER ETH</p><img src="images/eth.png" id="box-image3" /></div>
            <div class="dash-box" id="box4"><p id="box-text">TOKEN SOLD</p><img src="images/distribution.png" id="box-image4" /></div>
         </div>
      <div class="send_crypto">
          <div id="left-fill" class="fill">
          	<p id="fill-text1">SEND ETH</p>
          	<label for="email"><p id="mediumletters">TO ADDRESS</p></label>
          	<input type="text" placeholder="" name="address" required />

          	<label for="amount"><p id="mediumletters">AMOUNT IN ETHEREUM ( ALL: 0.000 TC )</p></label>
          	<input type="text" placeholder="" name="amount" required />
          	<button type="submit" class="btn" id="withdrawbtn">WITHDRAW FROM ETH WALLET</button>
          </div>
      		<div id="right-fill" class="fill">
      			  <p id="fill-text2">SEND TOKEN</p>
      		  	<label for="email"><p id="mediumletters">TO ADDRESS</p></label>
      		  <input type="text" placeholder="" name="address" required />

      		  <label for="amount"><p id="mediumletters">AMOUNT IN WRC COIN ( ALL: 0.000 TC )</p></label>
      		  <input type="text" placeholder="" name="amount" required />
      		  <button type="submit" class="btn" id="tokenbtn">WITHDRAW FROM TOKEN</button>
      		</div>
      </div>
  		</div>
    );
  }
}
