import React from "react";

import * as S from './style'
import Portfolio from '../../Assets/menu/home6.png'
import Lua2 from '../../Assets/menu/lua2.png'
import Btn1 from '../Button/Btn1/index';
//import Link1 from '../Link/'


export default function MenuGeral() {
    return(
        <>           
          <S.Container>               
                    <figure>
                        <a href="https://charlesantunesportfolio.herokuapp.com/" target="_blanc"><img src={Portfolio} alt="imagem"  />
                        <caption>Retornar ao portfólio</caption>
                        </a>
                    </figure>
                        {/* <div>
                            <h2><Link1 /></h2>
                        </div> */}

                    <S.BoxBtn>
                        <Btn1
                            component="a"
                            href="https://charlesantunesportfolio.herokuapp.com/"
                            target="_blanc"
                        >
                            <img src={Lua2} alt="sol" />
                        </Btn1>                        
                    </S.BoxBtn>
                
          </S.Container>
        </>
    )
}