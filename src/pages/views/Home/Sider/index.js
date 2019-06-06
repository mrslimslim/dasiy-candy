import React, { Component } from 'react'
import { Layout, Icon, Switch } from 'antd'
import classnames from 'classnames'
import SiderMenu from './Menu'
import "./index.scss"


export default class Sider extends Component {
    handleThemeChange = (e) => {
        this.setState({
            sideBarTheme: e ? 'dark' : 'light'
        })
    }

    state = {
        sideBarTheme: 'light',
        sideBarCollapsed: false
    }

    render() {
        const { sideBarCollapsed, sideBarTheme } = this.state
        const ChangeTheme = (
            <div  className={classnames('changeTheme', sideBarTheme === 'dark' && 'dark')}>
                Switch Theme
                <Switch
                    checkedChildren="dark"
                    unCheckedChildren="light"
                    checked={sideBarTheme === 'dark'}
                    onChange={this.handleThemeChange}
                />
            </div>
        )
        return (
            <Layout.Sider
                className={'candy-sider-container'}
                trigger={null}
                theme={sideBarTheme}
                collapsible
                collapsed={sideBarCollapsed}
            >
                <div className={classnames('logoBox', sideBarTheme === 'dark' && 'dark')}>
                    <i style={{fontSize:'64px'}} className='iconfont icon-emojiflashfill'></i>
                </div>
                <SiderMenu />
                {!sideBarCollapsed && ChangeTheme}
            </Layout.Sider>
        )
    }    
}
