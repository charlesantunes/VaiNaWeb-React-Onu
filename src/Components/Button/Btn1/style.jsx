import styled from "styled-components";

export const Btn = styled.button`
       
           background-color: unset;
           cursor: pointer;
           border: 1px solid #3498db;
           border-radius: 4px;
           color: #3498db;
           text-decoration: none;
           padding: 8px 10px;
           white-space: nowrap;

           &:hover{
               background-color: #e0e0e0;
               transform: translateX(0px);
            }
            &:active {
                transform: translateY(3px);
                //transition: none;
            }
            
            img{
                width: 30px;
            }

            `