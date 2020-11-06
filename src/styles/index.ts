import { createGlobalStyle } from "styled-components";
import { FuhthestBackground, TextColor } from "./components";


const GlobalStyle = createGlobalStyle`
  *{
    @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');
    margin: 0;
    padding: 0;
    font-family: "Quicksand", "sans-serif";
  }
  body{
    background-color: ${FuhthestBackground};
    color:${TextColor};
    box-sizing: border-box;
  }
  main{
    .grid{
      display: grid;
      grid-template-columns: 30% 70%;
      max-width: 1800px;
      margin: 50px auto;
      height: 540px;
      @media screen and (max-width: 1024px){
        grid-template-columns: 1fr;
        margin: 0;
      }
      .login{
        background-color: #f9f9f9;
        padding: 20px 30px;
        display: flex;
        flex-direction: column;
        @media screen and (max-width: 1024px){
          align-items: center;
        }
        .campos{
          position: relative;
          label{
            position: absolute;
            top: 20px;
            left: 15px;
            font-size: 14px;
            cursor: text;
            transition: top linear 1s;
            transition: left linear 1s;
          }
        }
        header{
          display: flex;
         /* justify-content: space-between;*/
          align-items: center;
          width: 270px;
          position: relative;
          height: 50px;
          img{
            width: 50px;
          }
          span{
            font-size: 13px;
            color: white;
            background-color: grey;
            padding: 0px 5px;
            border-radius: 100%;
            position: absolute;
            right: 0;
            &:hover{
              + div{
                display: block;
              }
            }
          }
          .boxHover{
            display: none;
            width: 600px;
            height: 300px;
            transform: translate(108%,37%);
            background-color: white;
            p{
              font-size: 14px;
              font-weight: bold;
              padding: 20px;
              margin: 0;
              a{
                text-decoration: none;
                color: #333;
              }
            }
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
        a{
          width: 63px;
          svg{
          align-self: center;
          border: 2px solid #dbdbdb;
          border-radius: 22px;
          padding: 12px;
          margin: 40px 0px 70px;
        }
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
        @media screen and (max-width: 1024px){
        grid-row-start: 1;
      }
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;
export default GlobalStyle;
