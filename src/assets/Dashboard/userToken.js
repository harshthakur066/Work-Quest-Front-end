import React, { Component } from 'react';
export default class UserToken extends Component{
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div id="Tokens" class="tabcontent">
  		<div id="buy-head" class="header"><p id="header-text">BUY TOKEN</p></div>
  		
  		<div id="center-fill" class="fill">
  		<p id="fill-text2">ETH: 0</p>
  		<label for="eth"><p id="mediumletters">ETHEREUM</p></label>
  		<input type="text3" placeholder="" name="address" required />
  		<label for="coin"><p id="mediumletters">WRC COIN ( ALL: 0.000 TC )</p></label>
  		<input type="text3" placeholder="" name="amount" required />
  		<button type="submit" class="btn" id="buybtn">ICO NOT STARTED YET</button>
  		</div>
  		</div>
    );
  }
}
