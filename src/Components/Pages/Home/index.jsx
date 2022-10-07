import React from "react";

import Menu from '../../Menu/index'
import HeaderHome from "./header/index";
import MainHome from "./main/index";
import FooterHome from "./footer/index";
import { Container } from "./style";


export default function Home() {
    return(
        <>
            <Menu />

            <Container>
                <HeaderHome />
                <MainHome />
                <FooterHome />
            </Container>
        </>
    )
}