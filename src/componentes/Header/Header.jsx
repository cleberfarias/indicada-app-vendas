import React, { useState } from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';



const HeaderContainer = styled.header`
    background-color: #3B3333;
    height: 60px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    
`;

const Opcoes = styled.ul`
    display: flex;
    justify-content: center;
    align-items: left;
    list-style-type: none;
    padding: 0;

    @media screen and (max-width: 768px) {
        display: ${props => (props.showMenu ? 'flex' : 'none')};
        flex-direction: column;
        position: absolute;
        top: 60px;
        left: 0;
        width: 100%;
        background-color: #3B3333;
        padding-top: 20px;
        z-index: 1;
    }
`;

const Opcao = styled.li`
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 5px;
    cursor: pointer;
    min-width: 150px;
    background-color: transparent;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #5b5353;
    }

    @media screen and (max-width: 768px) {
        padding: 8px;
        font-size: 14px;
        width: 100%;
        border-bottom: 1px solid #FFD38F;
    }
`;

const TextoOpcao = styled.p`
    margin: 0;
    color: #FFD38F;
    text-decoration: none;
`;

const BotaoMenu = styled.button`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 18px;
        right: 15px;
        background: none;
        border: none;
        color: white;
        font-size: 24px;
        cursor: pointer;
        z-index: 2;
    }
`;

const textoOpcoes = ['Clientes', 'Produtos','Caixa','Relatórios'];

function Header() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <HeaderContainer>
            
            <BotaoMenu onClick={toggleMenu}>&#9776;</BotaoMenu>
            <Opcoes showMenu={showMenu}>
                {textoOpcoes.map((texto, index) => (
                    <Link to={`/${texto.toLowerCase()}`} key={index}>
                        <Opcao onClick={() => setShowMenu(false)}>
                            <TextoOpcao>{texto}</TextoOpcao>
                        </Opcao>
                    </Link>
                ))}
            </Opcoes>
        </HeaderContainer>
    );
}

export default Header;
