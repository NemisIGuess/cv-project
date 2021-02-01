import React from 'react';
import avatar from '../images/avatar.png';
import '../styles/Personal.css';

const Personal = (props) => {
  return (
    <div className="personalDiv">
      <img src={avatar} alt="" className="avatarImg"></img>
      <h1 className="name">
        <i>{props.personal.name}</i>
      </h1>
      <p className="jobPosition">
        <i>{props.personal.job}</i>
      </p>
      <div className="personalInfoDiv">
        <h2 className="personalSubtitle">
          <i>Contacto</i>
        </h2>
        <p className="personalInfoElement">{props.personal.telephone}</p>
        <p className="personalInfoElement">{props.personal.email}</p>
        <p className="personalInfoElement">{props.personal.website}</p>
      </div>
      <div className="profileDiv">
        <h2 className="personalSubtitle">
          <i>Perfil</i>
        </h2>
        <p className="profileText">{props.personal.profile}</p>
      </div>
    </div>
  );
};

export default Personal;
