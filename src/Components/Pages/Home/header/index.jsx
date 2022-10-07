import React from "react";

import OnuLogo from '../../../../Assets/home/un-logo.png'
import Lupa from '../../../../Assets/home/lupa.png' 
import * as S from './style'

export default function HeaderHome() {
    return(
        <>       
            <S.Container>              
                    <figure>
                        <a href="https://brasil.un.org/pt-br" target="_blanc"><img src={OnuLogo} alt="imagem" />
                        <caption>Nações Unidas do Brasil</caption>
                        </a>
                    </figure>

                    <S.Search>
                        <input type="text" maxLength={18}></input>
                        <button><img src={Lupa} alt="lupa"  /></button>
                    </S.Search>
                    
            </S.Container>
        </>
    )
}