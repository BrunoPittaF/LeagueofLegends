import { createGlobalStyle } from "styled-components";
import { FuhthestBackground, TextColor } from "./components";


const GlobalStyle = createGlobalStyle`
  body{
    background-color: ${FuhthestBackground};
    color:${TextColor};
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  main{
    .grid{
      display: grid;
      grid-template-columns: 30% 70%;
      width: 1200px;
      max-width: 1800px;
      margin: 50px auto;
      height: 540px;
      .login{
        background-color: #f5f5f5;
        padding: 20px 30px;
        header{
          display: flex;
          justify-content: space-between;
          align-items: center;
          img{
            width: 50px;
          }
          span{
            font-size: 15px;
            color: white;
            background-color: grey;
            padding: 0px 5px;
            border-radius: 100%;
          }
        }
        h1{
          font-size: 1.6em;
          font-weight: bold;
          margin-top: 60px;
          margin-bottom: 30px;
        }
      }
      .wallpaper{
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;
export default GlobalStyle;
