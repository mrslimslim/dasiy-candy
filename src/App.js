import React, { Component } from 'react';
import Playground from "./pages/playGround"
import Header from './components/Header'
import { Input } from "antd";


export class App extends Component {
  constructor(){
      super();
  }
  state = {
    inp: ''
  }
  
  componentDidUpdate(){
    console.log('app update');
  }

  componentWillUpdate(){
    console.log('app will update')
  }

  shouldComponentUpdate(){
    console.log('judge app')
    return true;
  }

  update= (e)=>{
    this.setState({
      inp: e.target.value
    })
  }

  render() {
    console.log('app trigger render')
    return (
      <div>
          <Header/>
          <Playground/>
          <Input style={{marginTop:'150px'}} onChange={this.update} value={this.state.inp}/>

          
      </div>
    )
  }
}

export default App;
