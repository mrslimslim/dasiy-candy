import * as React from 'react'
import { Layout, Icon, Switch } from 'antd'




class Sider extends React.Component {

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
             
             
            </Layout.Sider>
        )
    }
}

export default Sider
