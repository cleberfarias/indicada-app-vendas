
import styled from "styled-components";
import Header from "../componentes/Header/Header";
import Logo from "../imagens/Logo.png";

const HomeContainer = styled.div`
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

@media screen and (max-width: 768px) {
    background-size: cover; /* Altera o tamanho da imagem para cobrir a área */
}
`


function Home() {
    return (    
                <HomeContainer>
                    <Header/>
                    
                </HomeContainer>     
              
                       
    
    )
}

export default Home;
