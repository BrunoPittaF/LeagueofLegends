(this["webpackJsonpturupon-com-br"]=this["webpackJsonpturupon-com-br"]||[]).push([[0],{19:function(n,e,t){n.exports=t.p+"static/media/lol.60785311.jpg"},20:function(n,e,t){n.exports=t.p+"static/media/logo.5742ab23.svg"},27:function(n,e,t){n.exports=t(38)},38:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(16),i=t.n(o),l=t(39),c=t(2),s=t(5),d=t(6),m=t.n(d);function p(){var n=Object(s.a)(["\n    height: 16px;\n    border: none;\n    border-radius: 4px;\n    background-color: #ededed;\n    margin: 0;\n    margin-right: 6px;  \n\n"]);return p=function(){return n},n}function u(){var n=Object(s.a)(["\n    background-color: #ededed;\n    border-radius: 6px;\n    border: none;\n    height: 5px;\n    padding: 20px;\n    color: black;\n    width: 230px;\n    margin: 8px 0px;\n    font-weight: bold;\n    &:focus{\n      border: 2px solid black;\n      outline: none;\n     & + label{\n                line-height: 2.8;\n                font-size: 12px;\n              }\n    }\n      &:valid {\n       & +label{\n                line-height: 2.8;\n                font-size: 12px;\n        }\n     }\n\n"]);return u=function(){return n},n}function g(){var n=Object(s.a)(["\n  background-color: transparent;\n  border: 1px solid ",";\n"]);return g=function(){return n},n}function f(){var n=Object(s.a)(["\n  background-color: ",";\n  color: ",";\n  padding: 15px 30px;\n  border-radius: 30px;\n  cursor: pointer;\n  transition: 0.2s;\n  border: none;\n  &:hover,\n  &:focus {\n    transform: translateY(-2px);\n    box-shadow: 0px 2px 30px ",";\n    outline: none;\n  }\n"]);return f=function(){return n},n}var h=m()("mode",{light:"#333",dark:"#DEE4E7"}),b=m()("mode",{light:"#DEE4E7",dark:"#111418"}),x=(m()("mode",{light:"#eff0f2",dark:"#191f24"}),m()("mode",{light:"#f9f9fa",dark:"#232a31"})),E=(m()("mode",{light:"#fff",dark:"#38434f"}),m()("mode",{light:"#0002",dark:"#fff2"})),v=c.c.button(f(),x,h,E),k=(Object(c.c)(v)(g(),h),c.c.input(u())),w=c.c.input(p()),y=t(19),z=t.n(y),j=t(20),O=t.n(j),N=t(23);function S(){return r.a.createElement("main",null,r.a.createElement("div",{className:"grid"},r.a.createElement("div",{className:"login"},r.a.createElement("header",null,r.a.createElement("img",{src:O.a,alt:""}),r.a.createElement("span",null,"?"),r.a.createElement("div",{className:"boxHover"},r.a.createElement("p",null,"Voc\xea n\xe3o precisa mais selecionar uma regi\xe3o antes de fazer login. Quando fizer login, a regi\xe3o associada \xe0 sua conta ser\xe1 atualizada automaticamente."),r.a.createElement("p",null,"Se estiver com problemas para fazer login,",r.a.createElement("a",{href:"criar conta"},"talvez precise atualizar sua conta.")))),r.a.createElement("h1",null,"Insira sua Conta Riot"),r.a.createElement("div",{className:"campos"},r.a.createElement(k,{type:"text",id:"name"}),r.a.createElement("label",{htmlFor:"name"},"Nome de usu\xe1rio")),r.a.createElement("div",{className:"campos"},r.a.createElement(k,{type:"password",id:"senha"}),r.a.createElement("label",{htmlFor:"senha"},"Senha")),r.a.createElement("p",null,r.a.createElement(w,{type:"checkbox",name:"check"}),r.a.createElement("label",{htmlFor:"check"},"Manter login")),r.a.createElement(N.a,{size:35,color:"#dbdbdb"}),r.a.createElement("div",{className:"notas"},r.a.createElement("a",{href:"#teste"},"criar conta"),r.a.createElement("p",null,r.a.createElement("a",{href:"#teste"},"N\xe3o consegue iniciar a sess\xe3o?"),r.a.createElement("span",null,"V20.0.0")))),r.a.createElement("div",{className:"wallpaper"},r.a.createElement("img",{src:z.a,alt:"Champions"}))))}var F="League of Legends";function I(n){return Object(a.useEffect)((function(){n.title&&n.title.trim()&&(document.title="".concat(n.title," - ").concat(F))}),[n.title]),n.logged?r.a.createElement(l.a,{to:"/"}):r.a.createElement(l.b,n)}function C(){return r.a.createElement(l.d,null,r.a.createElement(I,{path:"/",exact:!0,component:S,title:"Home"}),r.a.createElement(l.a,{from:"*",to:"/"}))}var H=t(4),Q=Object(H.a)();function D(){var n=Object(s.a)(['\n  *{\n    @import url(\'https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap\');\n    margin: 0;\n    padding: 0;\n    font-family: "Quicksand", "sans-serif";\n  }\n  body{\n    background-color: ',";\n    color:",";\n    box-sizing: border-box;\n  }\n  main{\n    .grid{\n      display: grid;\n      grid-template-columns: 30% 70%;\n      width: 1200px;\n      max-width: 1800px;\n      margin: 50px auto;\n      height: 540px;\n      .login{\n        background-color: #f9f9f9;\n        padding: 20px 30px;\n        display: flex;\n        flex-direction: column;\n        .campos{\n          position: relative;\n          label{\n            position: absolute;\n            top: 0;\n            left: 15px;\n            font-size: 14px;\n            line-height: 4;\n            cursor: text;\n            transition: line-height linear 1s;\n          }\n        }\n        header{\n          display: flex;\n         /* justify-content: space-between;*/\n          align-items: center;\n          width: 270px;\n          position: relative;\n          height: 50px;\n          img{\n            width: 50px;\n          }\n          span{\n            font-size: 13px;\n            color: white;\n            background-color: grey;\n            padding: 0px 5px;\n            border-radius: 100%;\n            position: absolute;\n            right: 0;\n            &:hover{\n              + div{\n                display: block;\n              }\n            }\n          }\n          .boxHover{\n            display: none;\n            width: 600px;\n            height: 300px;\n            transform: translate(108%,37%);\n            background-color: white;\n            p{\n              font-size: 14px;\n              font-weight: bold;\n              padding: 20px;\n              margin: 0;\n              a{\n                text-decoration: none;\n                color: #333;\n              }\n            }\n          }\n        }\n        h1{\n          font-size: 1.6em;\n          font-weight: bold;\n          margin-top: 60px;\n          margin-bottom: 30px;\n        }\n        p{\n          display: flex;\n          align-items: center;\n          margin: 10px 0px;\n        }\n        svg{\n          align-self: center;\n          border: 2px solid #dbdbdb;\n          border-radius: 22px;\n          padding: 12px;\n          margin: 40px 0px 70px;\n        }\n        .notas{\n          width: 270px;\n          a{\n            color: grey;\n            text-decoration: none;\n            font-size: 11px;\n            text-transform: uppercase;\n            &:hover{\n              color: black;\n              font-weight: bold;\n            }\n          }\n          p{\n            display: flex;\n            align-items: center;\n            justify-content: space-between;\n            margin: 0;\n            span{\n              color: grey;\n              text-decoration: none;\n              font-size: 10px;\n              text-transform: uppercase;\n              cursor: pointer;\n              &:hover{\n              color: black;\n              font-weight: bold;\n            }\n            }\n          }\n        }\n      }\n      .wallpaper{\n        img{\n          width: 100%;\n          height: 100%;\n        }\n      }\n    }\n  }\n"]);return D=function(){return n},n}var J=Object(c.b)(D(),b,h),L=Object(c.d)((function(n){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.c,{history:Q},r.a.createElement(C,null)),r.a.createElement(J,null))})),V=t(24),B=r.a.createContext({toggle:function(){}}),M=function(n){var e=n.children,t=Object(a.useState)({mode:"light"}),o=Object(V.a)(t,2),i=o[0],l=o[1];return r.a.createElement(B.Provider,{value:{toggle:function(){var n="light"===i.mode?"dark":"light";l({mode:n}),localStorage.setItem("mode",n)}}},r.a.createElement(c.a,{theme:{mode:localStorage.getItem("mode")?localStorage.getItem("mode"):i.mode}},r.a.createElement(r.a.Fragment,null,e)))};i.a.render(r.a.createElement(M,null,r.a.createElement(L,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.b297a6c2.chunk.js.map