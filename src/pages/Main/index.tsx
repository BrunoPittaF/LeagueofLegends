import React from "react";
import { Container, Nav } from "../../styles/components";
import { ContainerContent } from "./styles";
import { FaUserAlt, FaShoppingBag, FaHammer, FaCoins} from 'react-icons/fa';
import { GiCrystalCluster, GiFloatingCrystal } from 'react-icons/gi';

import logo from '../../assets/logo.svg';
import Sidebar from "src/components/Sidebar";

export default function Main() {
  return (
    <Container>
      <ContainerContent>
          <header>
            <div className="game">
            <img src={ logo } alt=""/>
          <button>Jogar</button>
         <Nav>
           <ul>
             <li>
               início
             </li>
             <li>
               Ttft
             </li>
             <li>
               Clash
             </li>        
           </ul>
         </Nav>
            </div>
         
         <div className="icons">
         <Nav>
           <ul>
             <li>
            <FaUserAlt size={20} color="#ccbe95"/>
             </li>
             <li>
             <FaShoppingBag size={20} color="#ccbe95" />
               </li>
               <li>
               <FaHammer size={20} color="#ccbe95" />
               </li>
               <li>
               <FaCoins size={20} color="#ccbe95" />
               </li>
           </ul>
         </Nav>
         <span> | </span>
         <div className="money">
           <p>
             <GiFloatingCrystal size={15} color="#ccbe95" />
             54
           </p>
            <p>
            <GiCrystalCluster size={15} color="#ccbe95" />
            440779
            </p>
         </div>
         </div> 

         
          </header>

      </ContainerContent>
      <Sidebar />
    </Container>
  );
}
