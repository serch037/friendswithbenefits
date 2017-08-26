import React, {Component} from 'react';

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      email:'',
      password:''
    }
  }
  onSubmit(event){
    console.log(this.state.email);
    console.log(this.state.password);
  }
  render(){
    return(
      <div>
        <form action="">
          <input type="text" onChange={event => this.setState({email: event.target.value})}/>
          <input type="text" onChange={event => this.setState({password: event.target.value})}/>
          <button onClick={this.onSubmit.bind(this)}>Login</button>
        </form>
      </div>
    )
  }
}

export default Login
