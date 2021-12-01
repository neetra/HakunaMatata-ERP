import React, { Component } from 'react';
import AllUsers from './AllUsers';

class UserDetails extends Component {
 
    constructor(){
    
        super();

        this.state ={
            isRoleHR : false
        }
    
         
      }

  componentDidMount(){
      try{
      let desgination = this.props.userDetails["designation"]
      if(desgination.includes("HR "))
      {

        this.setState({isRoleHR :true})
      }
    }
    catch(e){

        
    }
   
      
  }

  
  render() {
    if(this.state.isRoleHR)  {

          return(  <div>
                <div>User Details are {(JSON.stringify(this.props.userDetails))}</div> 
               <AllUsers />
                <div>Add new employee</div>
            </div>)
    }
    else{
        return(

            <div>
    
            <h1>Token is  {this.props.access_token}</h1>
            <div>User Details are {(JSON.stringify(this.props.userDetails))}</div>
            </div>
        )
    }
   
  }
}

export default UserDetails;