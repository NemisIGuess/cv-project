import React, { Component } from 'react';
import Personal from './components/Personal';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      personal: ['periquito', '13/12/1922', 'caraculo@culocara', '292292922'],
      name: '',
      telephone: '',
      email: '',
      birth: '',
    };
  }

  handleChange = (e) => {
    if (e.target.id === 'telephone' && e.target.value.length > 9) {
      e.target.value = e.target.value.slice(0, 9);
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
        this.state.birth,
        this.state.email,
        this.state.telephone,
      ],
      name: '',
      telephone: '',
      email: '',
      birth: '',
    });
  };

  render() {
    const { personal, name, telephone, email, birth } = this.state;

    return (
      <div className="asd">
        <form onSubmit={this.onSubmitPersonalInfo}>
          <label htmlFor="name">Name</label>
          <input
            onChange={this.handleChange}
            value={name}
            type="text"
            id="name"
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
          <label htmlFor="birth">Date of birth </label>
          <input
            onChange={this.handleChange}
            value={birth}
            type="date"
            id="birth"
          />
          <button type="submit">Add personal info</button>
        </form>
        <Personal personal={personal} />
      </div>
    );
  }
}

export default App;
