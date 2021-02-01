import React, { useState } from 'react';
import Personal from './components/Personal';
import Education from './components/Education';
import Experience from './components/Experience';
import './App.css';

const App = () => {
  const [infoArray, setInfoArray] = useState({
    name: '',
    job: '',
    telephone: '',
    email: '',
    website: '',
    profile: '',
  });

  const [name, setName] = useState('');
  const [job, setJob] = useState('');
  const [telephone, setTelephone] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [profile, setProfile] = useState('');

  const handleChange = (stateIdentifier, e) => {
    console.log(stateIdentifier);
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
  };

  return (
    <div className="main">
      <form onSubmit={onSubmitPersonalInfo}>
        <label htmlFor="name">Name</label>
        <input
          onChange={handleChange.bind(this, setName)}
          value={infoArray.name}
          type="text"
          id="name"
        />
        <label htmlFor="job">Job Position</label>
        <input
          onChange={handleChange.bind(this, setJob)}
          value={infoArray.job}
          type="text"
          id="job"
        />
        <label htmlFor="telephone">Telephone </label>
        <input
          onChange={handleChange.bind(this, setTelephone)}
          value={infoArray.telephone}
          type="number"
          id="telephone"
        />
        <label htmlFor="email">Email </label>
        <input
          onChange={handleChange.bind(this, setEmail)}
          value={infoArray.email}
          type="text"
          id="email"
        />
        <label htmlFor="website">Website </label>
        <input
          onChange={handleChange.bind(this, setWebsite)}
          value={infoArray.website}
          type="text"
          id="website"
        />
        <label htmlFor="profile">Profile </label>
        <textarea
          className="profileTextArea"
          onChange={handleChange.bind(this, setProfile)}
          value={infoArray.profile}
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

// class App extends Component {
// constructor() {
//   super();

//   this.state = {
//     personal: [
//       'Juan Palomo',
//       'Periodista',
//       '677123123',
//       '677123123@gmail.com',
//       '123123.com',
//       'En construccion...',
//     ],
//     name: '',
//     job: '',
//     telephone: '',
//     email: '',
//     website: '',
//     profile: '',
//   };
// }

// handleChange = (e) => {
//   if (e.target.id === 'telephone' && e.target.value.length > 9) {
//     e.target.value = e.target.value.slice(0, 9);
//   } else if (e.target.id === 'profile' && e.target.value.length > 180) {
//     e.target.value = e.target.value.slice(0, 180);
//   }
//   this.setState({
//     [e.target.id]: e.target.value,
//   });
// };

//   onSubmitPersonalInfo = (e) => {
//     e.preventDefault();
//     this.setState({
//       personal: [
//         this.state.name,
//         this.state.job,
//         this.state.telephone,
//         this.state.email,
//         this.state.website,
//         this.state.profile,
//       ],
//       name: '',
//       job: '',
//       telephone: '',
//       email: '',
//       website: '',
//       profile: '',
//     });
//   };

//   render() {
//     const {
//       personal,
//       name,
//       job,
//       telephone,
//       email,
//       website,
//       profile,
//     } = this.state;

//     return (
//       <div className="main">
//         <form onSubmit={this.onSubmitPersonalInfo}>
//           <label htmlFor="name">Name</label>
//           <input
//             onChange={this.handleChange}
//             value={name}
//             type="text"
//             id="name"
//           />
//           <label htmlFor="job">Job Position</label>
//           <input
//             onChange={this.handleChange}
//             value={job}
//             type="text"
//             id="job"
//           />
//           <label htmlFor="telephone">Telephone </label>
//           <input
//             onChange={this.handleChange}
//             value={telephone}
//             type="number"
//             id="telephone"
//           />
//           <label htmlFor="email">Email </label>
//           <input
//             onChange={this.handleChange}
//             value={email}
//             type="text"
//             id="email"
//           />
//           <label htmlFor="website">Website </label>
//           <input
//             onChange={this.handleChange}
//             value={website}
//             type="text"
//             id="website"
//           />
//           <label htmlFor="profile">Profile </label>
//           <textarea
//             className="profileTextArea"
//             onChange={this.handleChange}
//             value={profile}
//             type="text"
//             id="profile"
//           />
//           <button type="submit">Add personal info</button>
//         </form>
//         <Personal personal={personal} />
//         <Education />
//         <Experience />
//       </div>
//     );
//   }
// }

export default App;
