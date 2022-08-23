import { Badge } from "@material-ui/core";
import {ShoppingCartOutlined } from "@material-ui/icons";
//import DehazeIcon from '@mui/icons-material/Dehaze';
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 80px;
  ${mobile({ height: "50px" })};
  &:hover{
    background-color: #3F6497;
    & > a {
      color:#fff
    }
  }
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

/* const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`; */

/* const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`; */

/* const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`; */

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.div`
  margin-top: 0.2rem;
  height: 60px;
  max-height: 60px;
  background: url(/images/wcm_logo.png) no-repeat 50%;
  background-size: contain;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  &>a{
    text-decoration:none;
    color:#000;
    font-weight:bold;
  }
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
const MenuItem2 = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  margin-left:25px;
  &>a{
    text-decoration:none;
    color:#000;
    font-weight:bold;
  }
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const quantity = useSelector(state => state.cart.quantity)
  return (
    <Container>
      <Wrapper>
        <Left>
        {/*  <DehazeIcon /> TO BE WORKED ON LATER */}
        <MenuItem><Link to='/cat/women'>WOMEN </Link></MenuItem>
          <MenuItem><Link to='/cat/men'>MEN</Link></MenuItem>
          <MenuItem><Link to='/cat/made-to-measure'>MADE TO MEASURE</Link></MenuItem>
        </Left>
        <Center>
          <Link to='/'>
            <Logo></Logo>
          </Link>
        </Center>
        <Right>
          <MenuItem><Link to='/register'>REGISTER </Link></MenuItem>
          <MenuItem><Link to='/login'>LOGIN </Link></MenuItem>
          <Link to="/cart">
            <MenuItem2>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined  className=""/>
              </Badge>
            </MenuItem2>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
