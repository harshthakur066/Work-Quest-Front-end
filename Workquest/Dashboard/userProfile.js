import React, { Component } from 'react';
export default class UserProfile extends Component{
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div id="Profile" class="tabcontent">
      <div id="profile-head" class="header">
        <p id="header-text">PROFILE</p>
      </div>
  		<div id="center-fill2" class="fill">
  		<p id="fill-text2">PROFILE</p>
  		<label for="name"><p id="mediumletters">USER NAME</p></label>
  		<input type="text2" placeholder="" name="name" required />

  		<label for="mail"><p id="mediumletters">MAIL</p></label>
  		<input type="text2" placeholder="" name="mail" required />
  		<button type="submit" class="btn" id="updatebtn">UPDATE</button>
  		</div>
  		<div id="center-fill3" class="fill">
  		<p id="fill-text2">PROFILE</p>
  		<label for="currpass"><p id="mediumletters">CURRENT PASSWORD</p></label>
  		<input type="text2" placeholder="" name="cpass" required />
  		<label for="newpass"><p id="mediumletters">ENTER NEW PASSWORD</p></label>
  		<input type="text2" placeholder="" name="npass" required />
  		<label for="confirm"><p id="mediumletters">CONFIRM NEW PASSWORD</p></label>
  		<input type="text2" placeholder="" name="cnfnpass" required />
  		<button type="submit" class="btn" id="updatebtn2">SAVE CHANGES</button>
  		</div>
  		</div>
    );
  }
}
