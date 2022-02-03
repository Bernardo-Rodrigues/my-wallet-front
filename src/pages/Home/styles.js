import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    justify-content: space-between;

    width:100%;
    margin: 25px 0;

    h2{
        max-width:88%;
        
        font-weight: bold;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
        word-break:break-word;
    }
`

export const Registers = styled.main`
    width:100%;
    height:100%;
    max-height:70vh;
    background: #FFF;
    border-radius: 5px;
    margin: 0 25px; 
    padding: 20px 12px 50px;
    
    position: relative;

    display:flex;
    flex-direction:column;
`

export const AddTrasactions = styled.nav`
    display:flex;
    justify-content:space-between;

    width:100%;
    margin: 15px 0;
`

export const Button = styled.button`
    width:155px;
    height:115px;
    border: 0;
    background: #A328D6;;
    border-radius: 5px;
    padding: 10px; 
    
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
    margin: auto;

    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #868686;
`
export const Transactions = styled.div`
    display:flex;
    flex-direction: column;
`
export const Transaction = styled.div`
    display:flex;
    justify-content:space-between;

    width:100%;
    min-height:35px;
`
export const Desc = styled.div`
    display:flex;
    align-items:center;
    max-width:60%;

    span{
        font-size: 15px;
        line-height: 19px;
        color: #C6C6C6;

        margin-right: 5px;
    }
    p{
        font-size: 15px;
        line-height: 19px;
        color: #000000;
    }

    overflow:hidden;
`
export const Value = styled.div`
    display:flex;
    align-items:center;

    font-size: 15px;
    line-height: 19px;
    text-align: right;
    color: ${ ({type}) => type === "entry" ? "#03AC00" : "#C70000" };
`

export const Balance = styled.div`
    display:flex;
    justify-content:space-between;

    width:100%;
    padding:0 12px 10px;

    position: absolute;
    bottom:0;
    left:0;

    font-size: 17px;
    line-height: 20px;
    text-align: right;
    color: ${ ({type}) => type === "positive" ? "#03AC00" : "#C70000" };

    span{
        font-weight: bold;
        font-size: 17px;
        line-height: 20px;
        color: #000000;
    }
`

export const Delete = styled.button`
    background:0;
    border:0;
    margin-left: 10px;

    display:flex;
    justify-content:center;
    align-items:center;

    font-size: 16px;
line-height: 19px;
text-align: center;

color: #C6C6C6;
`