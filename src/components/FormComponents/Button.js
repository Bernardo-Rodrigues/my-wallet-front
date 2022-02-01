import styled from "styled-components";

const Button = styled.button`
  width: 326px;
  height: 46px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 5px;
  
  cursor: pointer;
  pointer-events: ${(props) => props.disabled ? "none" : "all"};
  opacity: ${(props) => props.disabled ? 0.7 : 1};
  
  font-size: 20px;
  font-weight: bold;
  line-height: 23px;
  text-align: center;
  
  background: #A328D6;
  color: #FFFFFF;
`;

export default Button;