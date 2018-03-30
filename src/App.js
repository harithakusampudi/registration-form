import React, { Component } from 'react';
import './App.css';

class App extends Component {
  msg() {
    alert("success");
  }
  render() {
    return (
      <div class="container">
      <div>
        <p class="title">Registration form</p>
        <input
          class="input_name"
          id="name"
          type="text"
          placeholder="Name"
        />
        <input
          class="input_name"
          id="mail"
          type="text"
          placeholder="Email"
        /><br/>
        <input
          class="input_name"
          id="ph"
          type="text"
          placeholder="Phonenumber"
        />
        <input
          class="input_name"
          id="age"
          type="text"
          placeholder="Age"
        /><br />
        <textarea
          class="input_address"
          id="msg"
          placeholder="Address"
        />
        <br />
        <button
          class="button_box"
          onClick={this.msg}
        >
        Register
        </button>
        </div>
      </div>
    );
  }
}

export default App;
