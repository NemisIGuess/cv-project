import React, { Component } from 'react';
import Personal from './components/Personal';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      personal: [
        'Ismael Perez',
        'Frontend Developer',
        '688931222',
        'ismaelpjgg@gmail.com',
        'rotxor.com',
        'En construccion...',
      ],
      name: '',
      job: '',
      telephone: '',
      email: '',
      website: '',
      profile: '',
    };
  }

  handleChange = (e) => {
    if (e.target.id === 'telephone' && e.target.value.length > 9) {
      e.target.value = e.target.value.slice(0, 9);
    } else if (e.target.id === 'profile' && e.target.value.length > 180) {
      e.target.value = e.target.value.slice(0, 180);
    }
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  onSubmitPersonalInfo = (e) => {
    e.preventDefault();
    this.setState({
      personal: [
        this.state.name,
        this.state.job,
        this.state.telephone,
        this.state.email,
        this.state.website,
        this.state.profile,
      ],
      name: '',
      job: '',
      telephone: '',
      email: '',
      website: '',
      profile: '',
    });
    const main = document.querySelector('.main');
    const perDiv = <Personal personal={this.state.personal} />;
    main.appendChild(perDiv);
  };

  render() {
    const {
      personal,
      name,
      job,
      telephone,
      email,
      website,
      profile,
    } = this.state;

    return (
      <div className="main">
        <form onSubmit={this.onSubmitPersonalInfo}>
          <label htmlFor="name">Name</label>
          <input
            onChange={this.handleChange}
            value={name}
            type="text"
            id="name"
          />
          <label htmlFor="job">Job Position</label>
          <input
            onChange={this.handleChange}
            value={job}
            type="text"
            id="job"
          />
          <label htmlFor="telephone">Telephone </label>
          <input
            onChange={this.handleChange}
            value={telephone}
            type="number"
            id="telephone"
          />
          <label htmlFor="email">Email </label>
          <input
            onChange={this.handleChange}
            value={email}
            type="text"
            id="email"
          />
          <label htmlFor="website">Website </label>
          <input
            onChange={this.handleChange}
            value={website}
            type="text"
            id="website"
          />
          <label htmlFor="profile">Profile </label>
          <textarea
            className="profileTextArea"
            onChange={this.handleChange}
            value={profile}
            type="text"
            id="profile"
          />
          <button type="submit">Add personal info</button>
        </form>
        <Personal personal={personal} />
      </div>
    );
  }
}

export default App;
