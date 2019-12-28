import React, { Component } from 'react';
export default class UserTransaction extends Component{
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div id="Transactions" class="tabcontent">
  		<div id="trans-head" class="header"><p id="header-text">TRANSACTIONS</p></div>

  		<table id="trans-table">
  		<tr>
  		<th>S.NO.</th>
  		<th>ADDRESS</th>
  		<th>ETH/WRC</th>
  		<th>AMOUNT</th>
  		<th>HEX</th>
  		<th>TIME</th>
  		</tr>
  		<tr>
  		<td><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></td>
  		<td><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></td>
  		<td><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></td>
  		<td><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></td>
  		<td><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></td>
  		<td><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></td>
  		</tr>
  		</table>
  		</div>
    );
  }
}
