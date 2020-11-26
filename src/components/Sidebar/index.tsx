import React, { useEffect, useState } from 'react';

import { SidebarContent } from './styles';

import logo from '../../assets/logo.svg';
import { Iphotos } from '../../interfaces';
import api from 'src/services/api';

const Sidebar: React.FC = () => {
  const [photos, setPhotos] = useState<Iphotos>();

  useEffect(() =>{
    api.get(`photos/1`).then(response => {
      setPhotos(response.data);
    });
  }, []);

  if(!photos){
    return <p>Carregando...</p>
  }

  return (
      <SidebarContent>
          <img src={photos.url} alt=""/>
        </SidebarContent>
    );
}

export default Sidebar;