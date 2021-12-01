import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Constants from './Constants';

class AllUsers extends Component {
 
  constructor(){
    
    super();
  
    this.state ={
      employeeList : []
    }
  }
componentDidMount(){
  let employees  =  [
    {
      firstName : "Rohan",
      lastName :  "Patel",
      email : "rohanpatel@gmail.com",
      salary : "120,000",
      joinDate : "2021-19-08"

    },
    {
      firstName : "Govinder",
      lastName :  "Somal",
      email : "govindersomal@gmail.com",
      salary : "140,000",
      joinDate : "2021-19-08"

    },
    {
      firstName : "Netra",
      lastName :  "Amrale",
      email : "netra@gmail.com",
      salary : "160,000",
      joinDate : '2021-19-08'

    },
    {
      firstName : "Zi Shun",
      lastName :  "Yang",
      email : "zisyang@gmail.com",
      salary : "200,000",
      joinDate : '2021-19-08'
    }
  ]
this.setState({employeeList :employees })
try{
       
  var url = Constants.BASEURL +  "/users" 
  Constants.HEADERS.Authorization = "Bearer " + this.state.access_token
  fetch(url, {"headers" : Constants.HEADERS})
  .then((response)=>{
  response.json().then((result)=>{
      this.setState({employeeList : result}) 
   
  
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
          <div className="renderTodoList">
          <h1 className="todoHeader">Employee List</h1>
          <div className="employeeList">
            <table className="table table-striped table-dark">
              <thead>
                <tr>
                  <th scope="col" className="centerAll">#</th>
                  <th scope="col" className="centerAll">First Name</th>
                  <th scope="col" className="centerAll">Last Name</th>
                  <th scope="col" className="centerAll">Email</th>
                  <th scope="col" className="centerAll">Salary</th>
                  <th scope="col" className="centerAll">Join Date</th>
                  <th scope="col" className="centerAll">Edit</th>
                  <th scope="col" className="centerAll">Delete</th>
                </tr>
              </thead>
              <tbody>
              {this.state.employeeList.map((value, index)=>{
                    return(
                      this.state.editIndex !== index ? <tr>
                            <th scope="row" id={index+1}>{index+1}</th>
                            <td className="centerAll" id={index+2}>{value.First_name}</td>
                            <td className="centerAll" id={index+3}>{value.lastName}</td>
                            <td className="centerAll" id={index+4}>{value.email}</td>
                            <td className="centerAll" id={index+5}>${value.salary}</td>
                            <td className="centerAll" id={index+6}>{value.joinDate}</td>
                            <td className="centerAll" id={index+7}><button onClick={()=>{
                              this.editEmployee(index)
                            }} className="btn btn-primary">Edit</button></td>
                            <td className="centerAll" id={index+8}><button onClick={()=>{
                              this.deleteEmployee(index)
                            }} className="btn btn-danger">Delete</button></td>
                          </tr>
                          : <tr>
                          <th scope="row" id={index+1}>{index+1}</th>
                          <td className="centerAll" id={index+2+'edit'}><input type="text" defaultValue={value.First_name} onChange={this.updateFirstName}/></td>
                          <td className="centerAll" id={index+3+'edit'}><input type="text" defaultValue={value.lastName} onChange={this.updateLastName}/></td>
                          <td className="centerAll" id={index+4+'edit'}><input type="text" defaultValue={value.email} onChange={this.updateEmail} /></td>
                          <td className="centerAll" id={index+5+'edit'}><input type="text" defaultValue={value.salary} onChange={this.updateSalary}/></td>
                          <td className="centerAll" id={index+6+'edit'}><input type="text" defaultValue={value.joinDate} onChange={this.updateJoinDate}/></td>
                          <td className="centerAll" id={index+7+'edit'}><button onClick={()=>{
                            this.canceleditEmployee()
                          }} className="btn btn-primary">Cancel</button></td>
                          <td className="centerAll" id={index+8}><button onClick={()=>{
                            this.updateEmployee(index)
                          }} className="btn btn-info">Update</button></td>
                        </tr>
                    )
                  })}
              </tbody>
            </table>
          </div>
          <a class="btn-floating btn-large waves-effect waves-light green" onClick={()=>{
            this.addEmployee()
          }}><i class="material-icons">+</i></a>
        </div>
      </div>    
    );
  }
}

export default AllUsers;
