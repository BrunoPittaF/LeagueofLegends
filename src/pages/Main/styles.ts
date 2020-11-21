import styled from "styled-components";

export const ContainerContent = styled.div`
  background-color: #0a090e;
  width: 100%;
  height: 100%;
  header{
    height: 60px;
    background: #0a090e;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .game{
      height: 100%;
      display: flex;
      align-items: center;
      img{
      height: 100%;
      }
    }
    .icons{
    display: flex;
    align-items: center;
    justify-content: center;
    .money{
      p{
        color: white;
        display: flex;
        align-items: center;
        padding-left: 4px;
        svg{
          padding: 0px 4px;
        }
      }
    }
  }    
  }
  
`;
