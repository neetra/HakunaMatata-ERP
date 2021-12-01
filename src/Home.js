import React, { Component } from 'react';
import Login from './Login';
import UserDetails from './Details';
import Constants from './Constants';

class Home extends Component {
  
  constructor(){
    
    super();

        this.state = {
            access_token : null,
            basicUserDetails : null
        }
        this.changeToken = this.changeToken.bind(this)
        this.getUserDetails = this.getUserDetails.bind(this)
   
  }

  changeToken(token){
    Constants.HEADERS.Authorization = "Bearer " + this.token
    this.setState({access_token : token})
    
    
  }

  getUserDetails(){
    try{
       
        var url = Constants.BASEURL +  "/user_details" 
        Constants.HEADERS.Authorization = "Bearer " + this.state.access_token
        fetch(url, {"headers" : Constants.HEADERS})
        .then((response)=>{
        response.json().then((result)=>{
            this.setState({basicUserDetails : result}) 
         
        
      })
    }).catch(e => console.error(e))
      }
      catch(error){
        console.error(error)
      }    
}

 
  render() {
  if( this.state.access_token != null )
  {
      if(this.state.basicUserDetails ==  null){
        this.getUserDetails()  
        return (<div>Loading </div>)
      }

    return (<UserDetails  userDetails={this.state.basicUserDetails} access_token = {this.state.access_token}/>)

  }
  else{  return (
        
      
      <Login changeTokenCallBack= {this.changeToken} />
    );
  }
  }
}

export default Home;