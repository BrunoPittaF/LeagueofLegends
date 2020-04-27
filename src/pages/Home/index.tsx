import React from "react";
import { Input, Checkbox } from "src/styles/components";
//import { useTheme } from "src/ThemeContext";*/
import  league from '../../assets/lol.jpg';
import logo from '../../assets/logo.svg';
import { FiArrowRight} from 'react-icons/fi';


export default function Home() {
  //const themeToggle = useTheme();

  return (
    <main>
    { /* <Button onClick={() => themeToggle.toggle()}>Toggle Theme</Button> */ }
    <div className="grid">
      <div className="login">
        <header>
          <img src={logo} alt=""/>
          <span>?</span>
        </header>
        

        <h1>Insira sua Conta Riot</h1>
        <Input type="text" placeholder="Nome de usuário"/>
        <Input type="password" placeholder="Senha"/>
        <p>
        <Checkbox type="checkbox" name="check"/>
        <label htmlFor="check">Manter login</label>
        </p>

        <FiArrowRight className="seta" size={35} color="grey"/>

        <div className="notas">
        <a href="#teste">criar conta</a>
       <p> 
       <a href="#teste">Não consegue iniciar a sessão?</a>
       <span>V20.0.0</span>
         </p> 
        </div>
        
      </div>

      <div className="wallpaper">
        <img src={league} alt="Champions"/>

      </div>






    </div>
    </main>
  );
}
