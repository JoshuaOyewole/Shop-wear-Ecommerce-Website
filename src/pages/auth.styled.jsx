import styled from "styled-components";
import { mobile } from "../responsive";

export const Container = styled.div`
  min-height: 70vh;
  margin-bottom : 20px;
`;

export const Label = styled.p`
  font-size: large;
`;

export const RadioLabel = styled.label`
  font-size: large;
  margin-left: 5px;
`;

export const Input = styled.input`
  font-size: large;
  width: 100%;
  border: none;
  border-bottom: 2px solid #221f28;
  margin-bottom: 20px;
  background-color: transparent;
`;

export const Submit = styled.input`
  height: 50px;
  width: auto;
  min-width: 165px;
  font-size: 18px;
  margin-top: 10px;
  background-color: transparent;
  border: 2px solid #000;
  border-radius: 10px;
`;

export const SubmitButton = styled.button`
  height: 50px;
  width: auto;
  min-width: 165px;
  font-size: 18px;
  margin-top: 10px;
  background-color: transparent;
  border: 2px solid #000;
  border-radius: 10px;
`;

export const Radio = styled.input`
  font-size: large;
`;

export const Error = styled.span`
  color: red;
`;