import React from "react";

import * as S from './style'
import Pobreza from '../../../../Assets/home/pobreza.png'

export default function MainHome() {
    return(
        <>       
            <S.Container>
                <S.Box>
                    <h1>Os Objetivos de Desenvolvimento Sustentável no Brasil</h1>
                    <p>Os Objetivos de Desenvolvimento Sustentável são um apelo global à ação para acabar com a pobreza, proteger o meio ambiente e o clima e garantir que as pessoas, em todos os lugares, possam desfrutar de paz e de prosperidade. Estes são os objetivos para os quais as Nações Unidas estão contribuindo a fim de que possamos atingir a Agenda 2030 no Brasil.</p>    
                
                    <S.BoxFig>
                        <S.CardButton>                        
                            <img src={Pobreza} alt="imagem de um banner pobreza"/>  
                        </S.CardButton>                
                        <S.CardButton>                        
                            <img src={Pobreza} alt="imagem de um banner pobreza"/>  
                        </S.CardButton>                
                        <S.CardButton>                        
                            <img src={Pobreza} alt="imagem de um banner pobreza"/>  
                        </S.CardButton>               
                        <S.CardButton>                        
                            <img src={Pobreza} alt="imagem de um banner pobreza"/>  
                        </S.CardButton>               
                        <S.CardButton>                        
                            <img src={Pobreza} alt="imagem de um banner pobreza"/>  
                        </S.CardButton>               
                        <S.CardButton>                        
                            <img src={Pobreza} alt="imagem de um banner pobreza"/>  
                        </S.CardButton>
                        <S.CardButton>                        
                            <img src={Pobreza} alt="imagem de um banner pobreza"/>  
                        </S.CardButton>                
                        <S.CardButton>                        
                            <img src={Pobreza} alt="imagem de um banner pobreza"/>  
                        </S.CardButton>                
                        <S.CardButton>                        
                            <img src={Pobreza} alt="imagem de um banner pobreza"/>  
                        </S.CardButton>               
                        <S.CardButton>                        
                            <img src={Pobreza} alt="imagem de um banner pobreza"/>  
                        </S.CardButton>               
                        <S.CardButton>                        
                            <img src={Pobreza} alt="imagem de um banner pobreza"/>  
                        </S.CardButton>               
                        <S.CardButton>                        
                            <img src={Pobreza} alt="imagem de um banner pobreza"/>  
                        </S.CardButton>              
                                 
                        
                    </S.BoxFig>
                </S.Box>              
                    
            </S.Container>
        </>
    )
}