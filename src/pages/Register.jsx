import {Container, Label, RadioLabel, Submit, Input, Radio} from "./auth.styled";
import Navbar from "../components/NewNav";
import Footer from "../components/NewFooter";





const Register = () => {
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
                <Input type="text" name="firstName" defaultValue />
                <Label className="mt-2 mb-0 ">Last Name</Label>
                <Input type="text" name="lastName" defaultValue />
                <Label className="mt-2 mb-2 ">Gender</Label>
                <Radio type="radio" name="gender" defaultValue="male" />
                <RadioLabel htmlFor="male">Male</RadioLabel>
                <br />
                <Radio type="radio" name="gender" defaultValue="female" />
                <RadioLabel htmlFor="female">Female</RadioLabel>
                <br />
                <Label className="mt-2 mb-0 ">Your Email</Label>
                <Input type="text" name="email" />
                <Label className="mt-2 mb-0 ">
                  Your Password (Minimum 8 characters)
                </Label>
                <Input type="password" name="password" />
                <Label className="mt-2 mb-0 ">Confirm Password</Label>
                <Input type="password" name="password_confirmation" />
                <Label className="mb-0 ">Mobile Number (Required)</Label>
                <Input type="text" name="mobile" />
                <div className="float-end">
                  <Submit
                    type="submit"
                    defaultValue="Register"
                  />
                </div>
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
