import React, { useState } from 'react';
import Personal from './components/Personal';
import Education from './components/Education';
import Experience from './components/Experience';
import './App.css';

const App = () => {
  const [infoArray, setInfoArray] = useState({
    name: 'Nemis',
    job: 'Editor',
    telephone: '68889313222',
    email: 'ismajur@gmail.com',
    website: 'asidhasd.ciom',
    profile: 'uoahsdoi',
  });

  const [name, setName] = useState('');
  const [job, setJob] = useState('');
  const [telephone, setTelephone] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [profile, setProfile] = useState('');

  const handleChange = (stateIdentifier, e) => {
    let { id, value } = e.target;
    if (id === 'telephone' && value.length > 9) {
      value = value.slice(0, 9);
    } else if (id === 'profile' && value.length > 180) {
      value = value.slice(0, 180);
    }
    stateIdentifier(value);
  };

  const onSubmitPersonalInfo = (e) => {
    e.preventDefault();
    setInfoArray({
      name: name,
      job: job,
      telephone: telephone,
      email: email,
      website: website,
      profile: profile,
    });
    setName('');
    setJob('');
    setTelephone('');
    setEmail('');
    setWebsite('');
    setProfile('');
  };

  return (
    <div className="main">
      <form onSubmit={onSubmitPersonalInfo}>
        <label htmlFor="name">Name</label>
        <input
          onChange={handleChange.bind(this, setName)}
          value={name}
          type="text"
          id="name"
        />
        <label htmlFor="job">Job Position</label>
        <input
          onChange={handleChange.bind(this, setJob)}
          value={job}
          type="text"
          id="job"
        />
        <label htmlFor="telephone">Telephone </label>
        <input
          onChange={handleChange.bind(this, setTelephone)}
          value={telephone}
          type="number"
          id="telephone"
        />
        <label htmlFor="email">Email </label>
        <input
          onChange={handleChange.bind(this, setEmail)}
          value={email}
          type="text"
          id="email"
        />
        <label htmlFor="website">Website </label>
        <input
          onChange={handleChange.bind(this, setWebsite)}
          value={website}
          type="text"
          id="website"
        />
        <label htmlFor="profile">Profile </label>
        <textarea
          className="profileTextArea"
          onChange={handleChange.bind(this, setProfile)}
          value={profile}
          type="text"
          id="profile"
        />
        <button type="submit">Add personal info</button>
      </form>
      <Personal personal={infoArray} />
      <Education />
      <Experience />
    </div>
  );
};

export default App;
