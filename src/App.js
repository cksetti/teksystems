import React, { Component } from 'react';

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: '',
      capital: ''
    }
  }
  handleSubmit = async () => {
    const countryName = `https://restcountries.eu/rest/v2/name/${this.state.countries}?fullText=true`;
    const countryCode = `https://restcountries.eu/rest/v2/name/${this.state.countries}?fullText=true`;
    const country =  countryName || countryCode ;
      await fetch(country)
        .then(res => res.json())
        .then(data => {
          data.forEach(country => {
            if (country.capital)
              this.setState({ capital: country.capital })
          })
        }).catch(e => this.setState({ capital: `${this.state.countries} not found please try valid country name` }))
    }
  

  handleChange = (e) => {
    this.setState({ countries: e.target.value })
  }
  render() {
    return (
      // fragment it does not add extra div in the UI
      <>
        <div>
          <h1>TekSystems Assessment</h1>
          <div>Enter Country Name</div>
          <input onChange={this.handleChange}></input>
          <button onClick={this.handleSubmit}>submit</button>
          <div>{this.state.capital}</div>
        </div>
      </>)
  }
}

export default App;