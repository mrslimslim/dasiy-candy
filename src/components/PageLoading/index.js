import React, { Component } from 'react'
import { Spin } from 'antd'

export default class PageLoading extends Component {
    
    componentDidMount(){
        console.log('this.props',this.props)
    }

    render() {
        return (
            <div>
                <Spin/>
            </div>
        )
    }
}
