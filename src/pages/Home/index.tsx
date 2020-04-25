import React from "react";
import { Input } from "src/styles/components";
//import { useTheme } from "src/ThemeContext";*/
import  league from '../../assets/lol.jpg';
import logo from '../../assets/logo.svg';


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

      </div>

      <div className="wallpaper">
        <img src={league} alt="Champions"/>

      </div>






    </div>
    </main>
  );
}
