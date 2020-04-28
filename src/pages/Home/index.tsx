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
          <div className="boxHover">
            <p>Você não precisa mais selecionar uma região antes de fazer login.
               Quando fizer login, a região associada à sua conta será atualizada
                automaticamente.</p>
                <p>
                Se estiver com problemas para fazer login,<a href="criar conta">talvez precise atualizar sua conta.</a> 
                </p>

          </div>
        </header>
        

        <h1>Insira sua Conta Riot</h1>
        
        <div className="campos">
        <Input type="text" id="name"/>
        <label htmlFor="name">Nome de usuário</label>
        </div>
        
        <div className="campos">
        <Input type="password" id="senha"/>       
         <label htmlFor="senha">Senha</label>
        </div>

        <p>
        <Checkbox type="checkbox" name="check"/>
        <label htmlFor="check">Manter login</label>
        </p>

        <FiArrowRight className="seta" size={35} color="#dbdbdb"/>

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
