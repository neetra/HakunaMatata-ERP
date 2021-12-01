import React, { Component } from 'react';

import GoogleLogin from 'react-google-login';
import Constants from './Constants';

class Login extends Component {
  
  constructor(){
    
    super();
  
    this.handlelogin = this.handlelogin.bind(this)
    this.handleGoogleLogin =  this.handleGoogleLogin.bind(this);
  }

  //Event Functions
  
 async handlelogin() {
    const email = document.getElementById(`email`).value;
    const password = document.getElementById('password').value;
    console.log(email)
    console.log(password)  

    try{
 
      var url = Constants.BASEURL +  "/get_token?emailId=" + email
     
      fetch(url)
      .then((response)=>{
      response.json().then((result)=>{
      console.log("result", result);
      if(result && result.access_token != null){
        this.props.changeTokenCallBack(result.access_token)
    }
    })
  }).catch(e => console.error(e))
    }
    catch(error){
      console.error(error)
    }    
  }

  async handleGoogleLogin(e) {
    try{
      var emailId = e['profileObj']['email']
      var url = Constants.BASEURL +  "/get_token?emailId=" + emailId
     
      fetch(url)
      .then((response)=>{
      response.json().then((result)=>{
      console.log("result", result);
      if(result && result.access_token != null){
        this.props.changeTokenCallBack(result.access_token)
    }
    })
  }).catch(e => console.error(e))
    }
    catch(error){
      console.error(error)
    }    
  }

 

 
  render() {
    return (
      <div>
        <div className="custom-login">
        <div className="loginForm">
      <h1 className="loginFormHeader"><b>Login</b></h1>
      <form>
        <div className="form-group">
          <label >Email address</label>
          <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
        </div>
        <div className="form-group">
          <label >Password</label>
          <input type="password" className="form-control" id="password" placeholder="Password"/>
        </div>
        <button type="button" className="btn btn-primary" onClick={this.handlelogin}>Login</button>
      </form>
    </div>  
        </div>
      
        <GoogleLogin
         clientId="1017420389855-td23vj4avfi4t5piq8628o8juqpmptng.apps.googleusercontent.com"
         buttonText=""
         onSuccess={this.handleGoogleLogin}
         onFailure={this.handleGoogleLogin}
         cookiePolicy={'single_host_origin'}         />

</div>
        
     
      

     
    );
  }
}

export default Login;