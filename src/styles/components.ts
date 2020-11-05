import styled from "styled-components";
import theme from "styled-theming";

export const TextColor = theme("mode", {
  light: "#333",
  dark: "#DEE4E7"
});
export const FuhthestBackground = theme("mode", {
  light: "#DEE4E7",
  dark: "#111418"
});
export const MiddleBackground = theme("mode", {
  light: "#eff0f2",
  dark: "#191f24"
});
export const MiddleSecondBackground = theme("mode", {
  light: "#f9f9fa",
  dark: "#232a31"
});
export const ClosestBackground = theme("mode", {
  light: "#fff",
  dark: "#38434f"
});
export const Shadow = theme("mode", {
  light: "#0002",
  dark: "#fff2"
});

export const MainBackground = theme("mode", {
  dark: "#0a090e",
  light: "#fff"  
});


export const Button = styled.button`
  background-color: ${MiddleSecondBackground};
  color: ${TextColor};
  padding: 15px 30px;
  border-radius: 30px;
  cursor: pointer;
  transition: 0.2s;
  border: none;
  &:hover,
  &:focus {
    transform: translateY(-2px);
    box-shadow: 0px 2px 30px ${Shadow};
    outline: none;
  }
`;
export const ButtonOutline = styled(Button)`
  background-color: transparent;
  border: 1px solid ${TextColor};
`;

export const Input = styled.input`
    background-color: #ededed;
    border-radius: 6px;
    border: none;
    height: 5px;
    padding: 20px;
    color: black;
    width: 230px;
    margin: 8px 0px;
    font-weight: bold;
    &:focus{
      border: 2px solid black;
      outline: none;
     & + label{
        top: 10px !important;
        font-size: 12px !important;
        left: 6px !important;
              }
    }

`

export const Checkbox = styled.input`
    height: 16px;
    border: none;
    border-radius: 4px;
    background-color: #ededed;
    margin: 0;
    margin-right: 6px;  

`;

export const Container = styled.div`
    width: 1200px;
    max-width: 1800px;
    margin: 50px auto;
    height: 540px;
`;
