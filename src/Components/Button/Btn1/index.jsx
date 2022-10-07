import React from "react"
import {Btn} from "./style"

//import Lua2 from '../../../Assets/menu/lua2.png'

 const Btn1 = ({children, component:Component, ...restProps}) => {
     return(
        <Btn>
        
            <Component {...restProps}>{children}</Component>
        </Btn>
     )    
            //<img src={Lua2} alt="sol" />
        
    
       
}

export default Btn1;