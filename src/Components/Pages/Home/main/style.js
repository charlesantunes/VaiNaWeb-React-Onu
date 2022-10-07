import styled from "styled-components"

export const Container = styled.section`
    position: relative;
    width: 100%;
        
`
export const Box = styled.article`
    border: solid maroon;
    max-width: 65rem;
    height: 200vh;
    margin: 0 auto;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        font-size: 1.6rem;
        margin-left: 10px;
        padding:1rem 0;
    }
    p{
        padding: 0 .7rem;        
        max-width: 42.5rem;
    }

`
export const BoxFig = styled.div`
    border: solid green;
    max-width: 90%;
    height: 200vh;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    
    `
export const CardButton = styled.button`
    border: solid red;
    border-radius: 8px;
    position: relative;
    width: 150px;
    height: 155px;
    margin: 10px;
    cursor: pointer;

    &:hover{
        box-shadow: 0 0 5px 3px gray;
    }
    
    img{
        width: 100%;
        height: 100%; 
    }


`