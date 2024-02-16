import { useState } from "react";
import Logo from './imagens/Logo.png';
import styled from "styled-components";
import firebaseApp from './firebaseConfig';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Navigate } from 'react-router-dom'; // Importando Navigate

const ContainerPagina = styled.div`
    background-image: url(${Logo}); 
    background-repeat: no-repeat; 
    background-position: center center; 
    background-size: contain;
    height: 100vh;
    max-height: 100vh; 
    display: flex; 
    justify-content: center;
    align-items: center; /* Centraliza verticalmente */
    margin: 0; /* Remove margens padrão */
`;

const ContainerLogin = styled.div`
    text-align: center; /* Alinha o conteúdo no centro */
`;

const TituloLogin = styled.h1`
    color: #3B3333;
    font-size: 50px;
    font-weight: 400;
    padding: 50px;
    margin: auto; 
    margin-top: 80px; /* Ajuste a margem superior para centralizar mais */
    text-shadow: 3px 3px 5px #FFD38F;      
`;

const ContainerFormulario = styled.div`
    margin-top: 20px; /* Adicione uma margem superior para centralizar mais */
`;

const CaixaEntrada = styled.input`
    font-size: 18px;
    border-radius: 10px;
    display: block;
    padding: 10px;
    margin: 10px;
    margin-top: 0%;
    border-color: rgba(0, 0, 0, 0.5);
    margin-bottom: 1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
`;

const BotaoLogin = styled.button`
    width: 48%;
    border: none;
    background-image: url("../imagens/mao.png");
    background-repeat: no-repeat;
    background-size: contain;
    text-align-last: right;
    background-color: #3B3333;
    cursor: pointer;
    border-radius: 5px;
    font-size: 14px;
    font-weight: bold;
    color: #FFFFFF;
    height: 30px;
    &:hover {
        background-color: #22778b;
        color: #FFD38F;
    }
`;

const BotaoLimpar = styled.button`
    width: 48%;
    border: none;
    background-image: url('./imagens/mao.png');
    background-repeat: no-repeat;
    background-size: contain;
    text-align-last: right;
    background-color: #3B3333;
    cursor: pointer;
    border-radius: 5px;
    font-size: 14px;
    font-weight: bold;
    color: #FFFFFF;
    height: 30px;
    &:hover {
        background-color: #22778b;
        color: #FFD38F;
    }
`;

const LinkSenha = styled.a`
    color: #22778b;
    font-size:14px;
    display: block;
    padding: 5px;
    margin: 10px;
`;

function Login(){

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [sucesso, setSucesso] = useState(false);

    function LoginUsuario() {
        const auth = getAuth(firebaseApp);
        signInWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                // Conectado
                const user = userCredential.user;
                setSucesso(true); // Definir sucesso como true
            })
            .catch((error) => {
                setSucesso(false); // Definir sucesso como false
            });
    }

    function alterarEmail(event) {
        setEmail(event.target.value);
    }

    function alterarSenha(event) {
        setSenha(event.target.value);
    }

    return(
        <>
            {sucesso && <Navigate to="/Home" />} {/* Redirecionar para /Home se sucesso for true */}
            <ContainerPagina>
                <ContainerLogin>
                    <TituloLogin>Login</TituloLogin>
                    <ContainerFormulario>
                        <form>
                            <CaixaEntrada onChange={alterarEmail}  type="email" placeholder="E-mail" />
                            <CaixaEntrada onChange={alterarSenha} type="password" placeholder="Senha" />
                            <div>
                                <BotaoLogin onClick={LoginUsuario} type="button">Fazer Login</BotaoLogin>
                                <BotaoLimpar type="reset">Limpar Campos</BotaoLimpar>
                            </div>
                            <LinkSenha href="/NovaSenha">Esqueci Minha Senha</LinkSenha>
                            {sucesso === false && <div className="alert alert-danger mt-2" role="alert">E-mail ou senha inválido</div>}
                        </form>
                    </ContainerFormulario>
                </ContainerLogin>
            </ContainerPagina>
        </>
    )
}

export default Login;
