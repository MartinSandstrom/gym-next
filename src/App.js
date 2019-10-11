import React from 'react';
import logo from './logo.svg';

import './App.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import EXERCISES from './constants/exercises.js';
import PERSONAS from './constants/personas.js';
import Card from './components/Card';

import { MDBInput, MDBContainer, MDBCol, MDBBtn, MDBRow } from "mdbreact";


const InputComponent = ({ text, desc, levels, setLevel, levelValue }) => (
  <div style={{ marginBottom: 10 }}>
    <Card>
      <div style={{ color: 'black' }}>
        <div>
          <p>
            <strong>{ text }</strong>
          </p>
          <p>
            <i>{ desc }</i>
          </p>
        </div>
        <div>
          <ol>
          {
            levels.map((levelInstruction, index) => (
              <li key={index}>
                { levelInstruction }
              </li>
            ))
          }
          </ol>
          <MDBInput value={levelValue} onChange={(e) => setLevel('type', e.target.value)} type="number" label="Score (e.g. 1.2)" />
        </div>
      </div>
    </Card>
  </div>
);

export default class App extends React.Component {

  setLevel = (type, level) => {
    console.log('type', type);
    console.log('level', level);
  }

  evaluate = () => {
    const persona = this.getPersona();
    alert(`You are the ${persona.name}, ${persona.desc}`)
  }

  getPersona = () => {
    return PERSONAS.theGymnastProdigy;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to the gymnastics assessment
          </p>
        </header>
        <div className="App-body">
          <h3>
            Strength areas
          </h3>
          <MDBContainer>
            <MDBRow>
                {
                  EXERCISES.STRENGTH.map((e, index) => (
                    <MDBCol lg="4" md="6">
                      <InputComponent
                        setLevel={this.setLevel}
                        key={index}
                        text={e.text}
                        desc={e.desc}
                        levels={e.levels}
                        value={0}
                      />
                    </MDBCol>
                  ))
                }
            </MDBRow>
          </MDBContainer>

        <MDBBtn color="secondary" onClick={this.evaluate}>Asses me</MDBBtn>
        </div>
      </div>
    )
  }
}
