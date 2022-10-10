import styled from "styled-components"

export const Container = styled.section`
border: solid;
    position: relative;
    top: 0;
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid 1px gainsboro;
    figure{
        width: 250px;
        
        a{
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            text-decoration: none;
            color: black;
        
        &:hover{
            text-shadow: 0 0 10px gray;
            }
        
        img{
            width: 50px;
        }
        }
    }    
    `

export const Search = styled.div`
    position: relative;
    width: 240px;
    height: 40px;
        button:active {
            transform: translateY(3px);
        }

        input{
            position: absolute;
            font-family:'Henny Penny', cursive;
            border: solid 2px gainsboro;
            width: 100%;
            height: 6vh;
            border-radius: 10px;
            margin-right: 0.5rem;
            outline: 0;
            font-size: 1rem;
            font-weight: bolder;
            padding-left: 1rem;
            
        }
        
        button{
            background-color: unset;
            border: none;
            position: absolute;
            width: 15%;
            height: 80%;
            left: 83%;
            cursor: pointer;
        
            img{
                width: 100%;
                height: 100%;
            }
        }        
`