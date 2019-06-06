import React, { Component } from 'react'

export default class Error extends Component {
    componentDidCatch(props){
        console.log(props);
    }
    render() {
        return (
            <div>
                Error
            </div>
        )
    }
}
