import React, { Component } from 'react'
import { Input } from 'antd'

export default class PlayGround extends Component {
    static getDerivedStateFromProps(){
        console.log('getDerivedStateFromProps')
        return null;
    }

    state ={
        value:'hello world'
    }

    shouldComponentUpdate(){
        return true;
    }

    componentDidMount(){
        console.log('componentDidMount')
    }

    getSnapshotBeforeUpdate(){
        console.log('getSnapshotBeforeUpdate')
        return null;
    }

    componentDidUpdate(){
        console.log('componentDidUpdate');
    }
    onChange =(value)=>{
        this.setState({
            value
        })
    }

    render() {
        console.log('render');
        return (
            <div>
                <Input defaultValue={this.state.value} onChange={this.onChange}/>
            </div>
        )
    }
}
