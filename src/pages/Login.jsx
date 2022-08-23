import { useState } from "react";
import Navbar from "../components/NewNav";
import Footer from "../components/NewFooter";

import { login } from "../redux/apiCalls";
import { Container, Label, Input, SubmitButton, Error } from "./auth.styled";
import { useDispatch, useSelector } from "react-redux";

// const Container = styled.div`
//   width: 100vw;
//   height: 100vh;
//   background: linear-gradient(
//       rgba(255, 255, 255, 0.5),
//       rgba(255, 255, 255, 0.5)
//     ),
//     url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
//       center;
//   background-size: cover;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const Wrapper = styled.div`
//   width: 25%;
//   padding: 20px;
//   background-color: white;
//   ${mobile({ width: "75%" })}
// `;

// const Title = styled.h1`
//   font-size: 24px;
//   font-weight: 300;
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
// `;

// const Input = styled.input`
//   flex: 1;
//   min-width: 40%;
//   margin: 10px 0;
//   padding: 10px;
// `;

// const Button = styled.button`
//   width: 40%;
//   border: none;
//   padding: 15px 20px;
//   background-color: teal;
//   color: white;
//   cursor: pointer;
//   margin-bottom: 10px;
//   &:disabled {
//     color: green;
//     cursor: not-allowed;
//   }
// `;

// const Link = styled.a`
//   margin: 5px 0px;
//   font-size: 12px;
//   text-decoration: underline;
//   cursor: pointer;
// `;



const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <>
 
      <Container>
        <div>
          <div className="header-spacer" />
          <div className="container">
            <h1 className="text-center page-header">Login</h1>
            <div className="container mt-4 user__register-container">
              <form >
                <Label className="mt-2 mb-0 ">Email</Label>
                <Input type="text" name="email" onChange={(e) => setUsername(e.target.value)} />
                <Label className="mt-2 mb-0 ">Password</Label>
                <Input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                <div className="float-end">
                  <a href="#" className="generic-link">
                    Forgot Password?
                  </a>
                </div>
                <div style={{ clear: "both" }} />
                <div className="mt-3 float-end">
                  <SubmitButton
                    type="submit"
                    onClick={handleClick}
                    disabled={isFetching}
                  >
                    Login
                  </SubmitButton>
                 
                </div>
                {error && <Error>Something went wrong...</Error>}
                <div style={{ clear: "both" }} />
              </form>
              <div className="mt-4">
                <a href="/register" className="generic-link">
                  Don't have an account? Register here.
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    
    </>

    // <Container>
    //   <Wrapper>
    //     <Title>SIGN IN</Title>
    //     <Form>
    //       <Input
    //         placeholder="username"
    //         onChange={(e) => setUsername(e.target.value)}
    //       />
    //       <Input
    //         placeholder="password"
    //         type="password"
    //         onChange={(e) => setPassword(e.target.value)}
    //       />
    //       <Button onClick={handleClick} disabled={isFetching}>
    //         LOGIN
    //       </Button>
    //       {error && <Error>Something went wrong...</Error>}
    //       <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
    //       <Link>CREATE A NEW ACCOUNT</Link>
    //     </Form>
    //   </Wrapper>
    // </Container>
  );
};

export default Login;
