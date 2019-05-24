import React, { Component } from 'react'
import { Layout, Icon, Switch } from 'antd'


export default class Sider extends Component {
    handleThemeChange = (e) => {
        this.props.changeSiderTheme(e ? 'dark' : 'light')
    }

    render() {
        const { sideBarCollapsed, sideBarTheme } = this.props
        const ChangeTheme = (
            <div className={classnames(styles.changeTheme, sideBarTheme === 'dark' && styles.dark)}>
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
                className={styles.sider}
                trigger={null}
                theme={sideBarTheme}
                collapsible
                collapsed={sideBarCollapsed}
            >
                <div className={classnames(styles.logoBox, sideBarTheme === 'dark' && styles.dark)}>
                    <Icon type="ant-design" />
                </div>
                <SiderMenu />
                {!sideBarCollapsed && ChangeTheme}
            </Layout.Sider>
        )
    }    
}
