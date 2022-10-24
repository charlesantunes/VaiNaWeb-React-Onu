import React, { useState } from "react";

import * as S from './style'
import Pobreza from '../../../../Assets/home/pobreza.png'

export default function MainHome() {
    const [status, setStatus] = useState(false)

    const ListModal = () =>{
        return(
            <>
                <S.Modal status={status}>                    
                    <button onClick={()=>{setStatus(!status)}}>X</button>
                    <p>No bairro a falta de container para recolher os lixo é um problema a ser resolvido pelo município, logo a necessidade de cada morador levar seu lixo um dia antes da passagem do coletor do carro lixo para evitar que animais venham a rasgar o lixo</p>
                </S.Modal>
            </>
        )
    }

    return(
        <>       
            <S.Container>
                <S.Box>
                    <h1>Os Objetivos de Desenvolvimento Sustentável no bairro do Novo Boa Vista - Cascavel - CE</h1>
                    <p> Novo Boa Vista é um bairro do municipio de Cascavel, localizado no Estado do Ceará e possue as seguintes: caracteristicas</p>
                    <ul>
                        <li>
                            Está a 2km do centro da cidade

                        </li>
                        <li>
                            Fundação em 2017  

                        </li>

                        <li>
                            O bairro tem em média 5 mil habitantes
                        </li>
                        <li>Possui  casas, comércios, bares, Salão de beleza, ruas sinalizadas, entre outras</li>
                        
                    
                    </ul>  
                
                        <S.Overlay status={status} onClick={()=>{setStatus(!status)}}></S.Overlay>
                    <S.BoxFig>
                        <S.CardButton status={status} onClick={()=>{setStatus(!status)}}>                        
                            <img src={Pobreza} alt="imagem de um banner pobreza"/>  
                        </S.CardButton>                
                        <S.CardButton onClick={()=>{setStatus(!status)}}>                        
                            <img src={Pobreza} alt="imagem de um banner pobreza"/>  
                        </S.CardButton>                
                        <S.CardButton onClick={()=>{setStatus(!status)}}>                        
                            <img src={Pobreza} alt="imagem de um banner pobreza"/>  
                        </S.CardButton>               
                        <S.CardButton onClick={()=>{setStatus(!status)}}>                        
                            <img src={Pobreza} alt="imagem de um banner pobreza"/>  
                        </S.CardButton>               
                        <S.CardButton onClick={()=>{setStatus(!status)}}>                        
                            <img src={Pobreza} alt="imagem de um banner pobreza"/>  
                        </S.CardButton>               
                        <S.CardButton onClick={()=>{setStatus(!status)}}>                        
                            <img src={Pobreza} alt="imagem de um banner pobreza"/>  
                        </S.CardButton>
                        {status && ListModal()}
                    </S.BoxFig>
                </S.Box>              
                    
            </S.Container>
        </>
    )
}