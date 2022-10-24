import styled from "styled-components"
import Pobreza from '../../../../Assets/home/pobreza.png'

export const Container = styled.section`
    position: relative;
    width: 100%;
        
`
export const CardButton = styled.button`
    border: solid red;
    border-radius: 8px;
    margin: 1rem;
    width: 200px;
    height: 200px;
    cursor: pointer;

    &:hover{
        box-shadow: 0 0 5px 3px gray;
    }
    
    img{
        width: 100%;
        height: 100%; 
    }

`
export const Box = styled.section`
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
    position: relative;
    border: solid green;
    max-width: 70%;
    height: 500px;
    display: flex;
    justify-content: space-around;
    flex-flow: wrap;
    
    button:hover{
        cursor: pointer;
    }
    `


export const Overlay = styled.div`

    width: 5rem;
    aspect-ratio: 1;
    border-radius: 50px;
    position: fixed;
    top: 50%;
    z-index: 1000;
    transform: ${({status}) => (status ? 'scale(1000)' : 'scale(0)')};
    transition: transform 0.1s ease-in-out;
    background-image: linear-gradient( rgb(255, 0, 0, 0.5), rgb(0, 0, 0, 0.5) );
    

`

export const Modal = styled.div`
    position: fixed;
    z-index: 2000;
    top: 2.3vw;
    width: 70%;
    height:40vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
    
    transform: ${({ status }) => (status ? 'scale(1)' : 'scale(0)')};
    transition: transform 10s ease-in-out;
    
    
    p{
        position: absolute;
        z-index: 2;
        font-size: 2rem;
        font-weight: bolder;
    }
    button{
        position: absolute;
        top: 0;
        right: 0;
        font-size: 2rem;
        padding: 4px 8px;
        z-index: 3;
    }
`