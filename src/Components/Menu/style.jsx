import styled from "styled-components"

export const Container = styled.section`
    position: relative;
    top: 0;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid 4px #008ed4d7;
    figure{
        width: 250px;
        
        a{
            display: flex;
            justify-content: space-evenly;
            align-items: center;
        }
    }
    li{
        font-size: 1.5rem;
        &:hover{
        text-decoration: none;
        transition: all 1s;
        transform: scale(1.2);
        text-decoration: dotted;
    }
    }
    a{
        text-decoration: none;
        color: black;
        
        &:hover{
            text-shadow: 0 0 10px gray;
            }
        
        img{
            width: 40px;
        }
    }    
    
    `
    export const BoxBtn = styled.div`
        button{
       // position: absolute;
        background-color: black;
        padding: 4px 15px;
        border: outset 0.5px;
        font-size: 1.1rem;
        cursor: pointer;
        text-align: center;
        color: #fff;
        border-radius: 10px;
       // transform: translateX(43px);
       // transition: all 0.8s;
    }
    button:hover{
        background-color: #676767;
        transform: translateX(0px);
    }
    button:active {
        transform: translateY(3px);
        //transition: none;
    }
    div img{
        width: 30px;
    }
    `