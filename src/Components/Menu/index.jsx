import React, { useRef, useState } from "react";

import * as S from './style'
import Portfolio from '../../Assets/menu/home6.png'
import Lua2 from '../../Assets/menu/lua2.png'
import Btn1 from '../Button/Btn1/index';
//import Link1 from '../Link/'


export default function MenuGeral() {
    const [inputLogin, setInputLogin] = useState('')
    const [inputSenha, setInputSenha] = useState('')
    const [msg, setMsg] = useState('')

    const refinputsenha = useRef()

    const handleLogin = (e) =>{
        if (inputSenha.length < 8) {
            refinputsenha.current.focus()
            alert("senha precisa conter 8 caracteres")
        }else if(inputSenha !== String){
            refinputsenha.current.focus()
            alert("precisa usar uma letra")
        }else if(inputSenha !== Number){
            refinputsenha.current.focus()
            alert("precisa usar um número")
        }else{
            setMsg("Bem vindo "+ inputLogin +"!")

        }

        e.preventDefault()
        setInputLogin('')
        setInputSenha('')
    }

    

    return(
        <>           
          <S.Container>               
                    
                    <figure>
                        <a href="https://charlesantunesportfolio.herokuapp.com/" target="_blanc"><img src={Portfolio} alt="imagem"  />
                        <caption>Retornar ao portfólio</caption>
                        </a>
                    </figure>

                    <form onSubmit={handleLogin}>
                    
                        <label htmlFor="">Login:</label><input value={inputLogin} onChange={(e)=>{setInputLogin(e.target.value)}} />
                        <label htmlFor="">Senha:</label><input type={"password"} ref={refinputsenha} value={inputSenha} onChange={(e)=>{setInputSenha(e.target.value)}}/>
                        <input onClick={()=>handleLogin} type="submit" name="" id="" />
                    </form>
                        {msg && <p>{msg}</p>}

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