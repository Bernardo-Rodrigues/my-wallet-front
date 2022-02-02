import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    justify-content: space-between;

    width:100%;
    margin: 25px 0;

    h2{
        font-weight: bold;
        font-size: 26px;
        line-height: 31px;

        color: #FFFFFF;
    }
`

export const Registers = styled.main`
    margin: 0 25px; 
    width:100%;
    height:100%;
    background: #FFF;
    border-radius: 5px;
    display:flex;
    
`

export const AddTrasactions = styled.nav`
    display:flex;
    justify-content:space-between;
    width:100%;
    margin: 15px 0;
`

export const Button = styled.button`
    padding: 10px; 
    width:155px;
    height:115px;
    border: 0;
    background: #A328D6;;
    border-radius: 5px;
    
 span{
    text-align:left;
    color: #FFFFFF;
    font-weight: bold;
    font-size: 17px;
    line-height: 20px;
 }
    
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    
`

export const NoTransactions = styled.div`
    width: 180px;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    margin: auto;

    color: #868686;
`