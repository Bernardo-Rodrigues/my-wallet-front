import styled from "styled-components";

const Input = styled.input`
  width: 326px;
  height: 58px;
  margin-bottom: 13px;
  padding: 16px;
  border: 0;
  border-radius: 5px;
  
  font-size: 20px;
  line-height: 23px;

  pointer-events: ${(props) => props.disabled ? "none" : "all"};
  outline: 0;
  
  background-color: ${(props) => props.disabled ? "#F2F2F2" : "#FFFFFF"};
  color: ${(props) => props.disabled ? "#AFAFAF" : "#000"};

  &::placeholder{
    color: #000;
  }
`;

export default Input;