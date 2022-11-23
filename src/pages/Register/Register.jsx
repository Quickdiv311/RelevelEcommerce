import './Register.css';
import { useState,useEffect } from 'react';
import Header from '../../components/shared/header/header';
import { useNavigate } from 'react-router-dom';


function Register() {
    
     const [user, setUser] = useState({});
    const navigate = useNavigate();


     function handleSubmit(e)
     {
      console.log()
     }

     function handleClick()
     {
       navigate('/login')
     }

      return(
        <div>
               <Header/>
          <div className="registration-form">
               <h3>Please Register</h3>
               <hr />

               <form action="" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="mb-3 col-12 col-md-6">
                      <input onInput={(e) => {
                        if(!user.name) user.name = {};
                        user.name.firstName = e.target.value;
                        setUser(user);
                      }} 
                  type="text" name="firstName" className="form-control" placeholder='First Name' />
                  </div>

                  <div className="mb-3 col-12 col-md-6">
                      <input type="text" onInput={(e) => {
                        if(!user.name) user.name = {};
                        user.name.lastName = e.target.value;
                      }} 
                   name="lastName" className="form-control" placeholder='LastName' />
                  </div>
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
                      <label htmlFor="" className="form-label">Email</label>
                      <input onInput={e => {
                        user.email = e.target.value;
                      }} type="email" name="email" className="form-control" />
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
                  <div className="mb-3 col-12 col-lg-6">
                      <input onInput={e => {
                        if(!user.address) user.address = {};
                        user.address.number = e.target.value;
                      }} type="number" name="number" className="form-control" placeholder='Flat no'/>
                  </div>

                  <div className="mb-3 col-12 col-lg-6">
                      <input onInput={e => {
                        if(!user.address) user.address = {};
                        user.address.street = e.target.value;
                      }} type="text" name="street" className="form-control" placeholder='Street'/>
                  </div>
                  </div>

                  <div className="row">
                  <div className="mb-3 col-12 col-md-6">
                      <input onInput={e => {
                        if(!user.address) user.address = {};
                        user.address.city = e.target.value;
                      }} type="text" name="city" className="form-control" placeholder='City'/>
                  </div>

                  <div className="mb-3 col-6">
                      <input onInput={e => {
                        if(!user.address) user.address = {};
                        user.address.zipCode = e.target.value;
                      }} type="text" name="zipCode" className="form-control" placeholder='Zip code'/>
                  </div>
                  </div>

                  <button type="submit" className="float-end btn btn-success">Register</button>
                  <br />
                  <br />
                  <hr />
                 
               </form>
               <p>Already a User?</p>
                  <button className="btn btn-danger" onClick={handleClick}>Sign IN</button>
          </div>
          </div>
      );
}


export default Register;