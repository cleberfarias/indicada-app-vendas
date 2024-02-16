import logo from "../../imagens/símbolo 01.png";
import styled, {keyframes} from 'styled-components';


const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;


const Applogo = styled.img`
  
height: 10vmin;
pointer-events: none;

@media (prefers-reduced-motion: no-preference) {
  animation: ${spinAnimation} infinite 20s linear;
}
`;




function LogoSecundaria() {
    return (
      <div>
        <header>
          <Applogo src={logo}alt="logo" />
        </header>
        
      </div>
    );
  }
  
  export default LogoSecundaria;