import React, { Component } from 'react';
import './App.css';
// import { Alert } from 'reactstrap';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
       name: '',
       mail:'',
       ph:'',
       age:'',
       address:'',
       openFirstModal:false  
     };
     this.res=this.res.bind(this)
     this.ok=this.ok.bind(this)
     this.cancel=this.cancel.bind(this)
  }
  onDismiss() {
    this.setState({ visible: false });
  }

  onOpenFirstModal = () => {
    this.setState({ openFirstModal: true });
  };
  onCloseFirstModal = () => {
    this.setState({ openFirstModal: false });
  };

  updateState(field,e) {
    var object = {};
    object[field] = e.target.value;
    this.setState(object);
  }
  msg(e) {
    e.preventDefault();
    Alert.info('success', {
        position: 'top',
        effect: 'bouncyflip',
        timeout: 'none',
        offset: 15
  
    });
  }
  res()
  {
    this.setState({openFirstModal:true})
   
  }
  ok()
  {
    this.setState({name:''}) 
    this.setState({mail:''}) 
    this.setState({ph:''}) 
    this.setState({age:''}) 
    this.setState({address:''}) 
    this.setState({openFirstModal:false})
    
  }
  cancel()
  {
    this.setState({ openFirstModal: false });
  }


  render() {
    return (
      // const openFirstModal = this.state;
      <div class="container">
      <div>
        <p class="title">Registration form</p>
        <form id="form">
        <input
          class="input_name"
          value={this.state.name}
          onChange={this.updateState.bind(this, 'name')}
          id="name"
          type="text"
          placeholder="Name"
        />
        <input
          class="input_name"
          value={this.state.mail}
          onChange={this.updateState.bind(this, 'mail')}
          id="mail"
          type="text"
          placeholder="Email"
        /><br/>
        <input
          class="input_name"
          value={this.state.ph}
          onChange={this.updateState.bind(this, 'ph')}
          id="ph"
          type="text"
          placeholder="Phonenumber"
        />
        <input
          class="input_name"
          value={this.state.age}
          onChange={this.updateState.bind(this, 'age')}
          id="age"
          type="text"
          placeholder="Age"
        /><br /><br/>
        <input type="radio" name="gender" value="male"/> Male
        <input type="radio" name="gender" value="female" /> Female<br /><br />
        <textarea
          class="input_address"
          value={this.state.address}
          onChange={this.updateState.bind(this, 'address')}
          id="address"
          placeholder="Address"
        />
        <br />
        </form>
        <button
          class="button_box"
          onClick={this.msg}
        >Register
        </button>
       

        <button
          class="button_box"
         onClick={this.res}
        >
        Reset
        </button>
       
        <Modal open={this.state.openFirstModal} onClose={this.onCloseFirstModal} little>
           <button className="button_box" onClick={this.ok}>Ok
            </button>
            <button className="button_box" onClick={this.cancel}>Cancel</button>
    </Modal>
        
        <div>
          <Alert stack={{limit: 1}} />
            </div>
         </div>
      </div>
    );
  }
}

export default App;
