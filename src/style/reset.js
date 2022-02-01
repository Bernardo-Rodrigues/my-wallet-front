import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	*{
        margin:0;
        padding:0;
		box-sizing:border-box;
		font-family: 'Raleway', sans-serif;
	}
    a{
		text-decoration: none;
	}
    button{
        cursor: pointer;
    }
    ol, ul {
	    list-style: none;
    }
` 