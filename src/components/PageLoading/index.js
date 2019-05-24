import React, { Component } from 'react'
import { Spin } from "antd"

export default class PageLoading extends Component {
    render() {
        return (
            <div>
                <Spin/>
            </div>
        )
    }
}
