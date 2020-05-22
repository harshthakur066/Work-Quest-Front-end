import React , {Component} from "react";


export default class UserSetting extends Component{
  dropdownHandler(){
    console.log("click on button");
  }
  render(){
    return(
    <div class="setting_section">
      <div class="user-input"><img src="../../images/user.png" id="user-logo" /><p id="user-name4">Christopher Smith</p></div>
        <div class="dropdown">
          <a class="dropbtn" onClick={this.dropdownHandler}><img src="../images/arrow.png" id="arrow4" /></a>
          <div class="dropdown-content" id="Dropdwn">
          <a class="tablinks"  id="profile-link"><div id="droplink">Profile</div></a>
          <a href=""><div id="droplink">Logout</div></a>
        </div>
      </div>
    </div>
    );
  }
}
