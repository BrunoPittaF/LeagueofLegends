import { createGlobalStyle } from "styled-components";
import { FuhthestBackground, TextColor } from "./components";


const GlobalStyle = createGlobalStyle`
  *{
    @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');
  }
  body{
    background-color: ${FuhthestBackground};
    color:${TextColor};
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Quicksand", "sans-serif";
   
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
        display: flex;
        flex-direction: column;
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
        p{
          display: flex;
          align-items: center;
          margin: 10px 0px;
        }
        .seta{
          align-self: center;
          border: 1px solid black;
          border-radius: 22px;
          padding: 12px;
          margin: 40px 0px 70px;
        }
        .notas{
          width: 270px;
          a{
            color: grey;
            text-decoration: none;
            font-size: 11px;
            text-transform: uppercase;
            &:hover{
              color: black;
              font-weight: bold;
            }
          }
          p{
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 0;
            span{
              color: grey;
              text-decoration: none;
              font-size: 10px;
              text-transform: uppercase;
              cursor: pointer;
              &:hover{
              color: black;
              font-weight: bold;
            }
            }
          }
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
