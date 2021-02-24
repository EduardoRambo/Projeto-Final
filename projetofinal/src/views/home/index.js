import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";

import Festa from "./Festa.png";
import Group from "./Group.png";

const Header = () => {
  return (
    <div >

      <figure> <img src={Festa}  id="recre" alt='Festa'/> </figure>
      <figure> <img src={Group} id="img" alt='Group.png'/> </figure>

      <h1 id="quem">
        QUEM SOMOS
      </h1>

        <p >A Escola de Educação Infantil Recriar surge como instituição de ensino em meados de dezembro de 2003. Esta escola antes desta data, apresentava-se com outra denominação e também com outro referencial teórico. No início de 2005, iniciam as reformas tanto no espaço físico, como no teórico e dos recursos humanos e pedagógicos. As melhorias seguem, enquanto isso as comunidade escolar vem se encontrando sistematicamente para a elaboração do Projeto Político Pedagógico. </p>

        <h1 id="quem">Proposta pedagogica</h1>

        <p >Promover o desenvolvimento integral da criança, em seus aspectos físicos, psíquicos, intelectual moral e social, incentivando a criatividade, a autonomia, as relações de respeito e solidariedade, a partir dos valores ético-eco-educativos, complementando assim a ação da família.Estamos diante de um mundo em constantes transformações, diferente e fruto de constantes inovações tecnológicas, da informática e da comunicação, do fenômeno da urbanização em massa e das transformações surpreendentes que vão se dando no campo da cultura, da política, da economia e da sociedade, seja no âmbito mundial, seja dentro de nosso país.</p>

      </div>
  );
}

export default Header;
