import React from 'react';
import { Container, Label, RadioLabel, Submit, Input, Radio } from "./auth.styled";
import { useState } from "react";
import { register } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";


const Register = () => {
  const [user, setUser] = useState({
    firstname: undefined,
    lastname: undefined,
    username: undefined,
    email: undefined,
    password: undefined,
    gender:undefined,
    phone:undefined
  });

  const handleChange = (e) => {
    setUser(
      (prev) => ({
        ...prev,
        [e.target.name]: e.target.value
      }
      )
    )
  }

  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    register(dispatch, {user});
  };
  return (
    <>
      <Container>
        <div>
          <div className="header-spacer" />
          <div className="container">
            <h1 className="text-center page-header ">Register</h1>
            <div className="container mt-4 user__register-container ">
              <form method="post" action="#">
                <Label className="mt-2 mb-0 ">First Name</Label>
                <Input 
                    type="text" 
                    onChange={handleChange} 
                    name="firstname"  
                />
                <Label className="mt-2 mb-0 ">Last Name</Label>
                <Input type="text" onChange={handleChange} name="lastname"  />
                <Label className="mt-2 mb-2 ">Gender</Label>
                <Radio 
                    type="radio" 
                    checked={user.gender === 'Male'}
                    onChange={handleChange} 
                    name="gender" 
                    defaultValue="Male" 
                />
                <RadioLabel htmlFor="male">Male</RadioLabel>
                <br />
                <Radio 
                    type="radio" 
                    name="gender" 
                    defaultValue="Female" 
                    checked={user.gender === 'Female'}
                    onChange={handleChange} 
                />
                <RadioLabel htmlFor="female">Female</RadioLabel>
                <br />
                <Label className="mt-2 mb-0 ">Your Email</Label>
                <Input type="email" name="email" onChange={handleChange} />
                <Label className="mt-2 mb-0 ">
                  Your Password (Minimum 8 characters)
                </Label>
                <Input type="password" name="password" onChange={handleChange} />
                <Label className="mt-2 mb-0 ">Confirm Password</Label>
                <Input type="password" onChange={handleChange} name="password_confirmation" />
                <Label className="mb-0 ">Mobile Number (Required)</Label>
                <Input type="text" onChange={handleChange} name="phone" />
                <div className="float-end">
                  <Submit
                    type="submit"
                    defaultValue="Register"
                    onClick={handleSubmit}
                    disabled={isFetching}
                  />
                </div>
                {error && <Error>Something went wrong...</Error>}
                <div style={{ clear: "both" }} />
              </form>
              <div className="mt-3">
                <a href="/login" className="generic-link">
                  Already have an account? Log in here.
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>

    </>

  );
};

export default Register;
