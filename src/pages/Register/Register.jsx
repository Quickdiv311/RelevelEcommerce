import './Register.css';
import { useState,useEffect } from 'react';


function Register() {
    
     const [user, setUser] = useState({});

     function handleSubmit(e)
     {
      console.log(user.name);
        console.log(user.address);
     }

      return(
          <div className="registration-form">
               <h3>Please Register</h3>
               <hr />

               <form action="" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="mb-3 col-6">
                      <input onInput={(e) => {
                        if(!user.name) user.name = {};
                        user.name.firstName = e.target.value;
                        setUser(user);
                      }} 
                  type="text" name="firstName" className="form-control" placeholder='First Name' />
                  </div>

                  <div className="mb-3 col-6">
                      <input type="text" onInput={(e) => {
                        if(!user.name) user.name = {};
                        user.name.lastName = e.target.value;
                      }} 
                   name="lastName" className="form-control" placeholder='LastName' />
                  </div>
                  </div>

                  <div className="mb-3">
                      <label htmlFor="" className="form-label">Email</label>
                      <input onInput={e => {
                        user.email = e.target.value;
                      }} type="text" name="email" className="form-control" />
                  </div>

                  
                  <div className="mb-3">
                      <label htmlFor="" className="form-label">UserName</label>
                      <input 
                      onInput={e => {
                        user.userName = e.target.value;
                      }}
                      type="text" name="userName" className="form-control" />
                  </div>

                  <div className="mb-3">
                      <label htmlFor="" className="form-label">Password</label>
                      <input 
                      onInput={e => {
                        user.password = e.target.value;
                      }}
                      type="password" name="password" className="form-control" />
                  </div>

                  <div className="mb-3">
                      <label htmlFor="" className="form-label">Phone</label>
                      <input onInput={e => {
                        user.password = e.target.value;
                      }} type="number" name="phone" className="form-control" />
                  </div>


                  <h4>Address</h4>
                  <br />
                  <div className="row">
                  <div className="mb-3 col-6">
                      <input onInput={e => {
                        if(!user.address) user.address = {};
                        user.address.flatNo = e.target.value;
                      }} type="number" name="flatNo" className="form-control" placeholder='Flat no'/>
                  </div>

                  <div className="mb-3 col-6">
                      <input onInput={e => {
                        if(!user.address) user.address = {};
                        user.address.street = e.target.value;
                      }} type="text" name="street" className="form-control" placeholder='Street/Apartment'/>
                  </div>
                  </div>

                  <div className="row">
                  <div className="mb-3 col-6">
                      <input onInput={e => {
                        if(!user.address) user.address = {};
                        user.address.locality = e.target.value;
                      }} type="text" name="locality" className="form-control" placeholder='Locality'/>
                  </div>

                  <div className="mb-3 col-6">
                      <input onInput={e => {
                        if(!user.address) user.address = {};
                        user.address.city = e.target.value;
                      }} type="text" name="city" className="form-control" placeholder='City'/>
                  </div>
                  </div>

                  <div className="mb-3 col-3">
                      <input onInput={e => {
                        if(!user.address) user.address = {};
                        user.address.pinCode = e.target.value;
                      }} type="text" name="pin" className="form-control" placeholder='Pin code'/>
                  </div>

                  <button type="submit" className="float-end btn btn-success">Register</button>
               </form>
          </div>
      );
}


export default Register;