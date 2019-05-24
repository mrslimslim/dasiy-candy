import * as React from 'react'
import { Layout, Icon } from 'antd'
import './index.scss'

function Header({ sideBarCollapsed = true, toggleSideBarCollapsed , logout }) {
    return (
        <Layout.Header className={'header'}>
            <Icon
                className={'trigger'}
                type={sideBarCollapsed ? 'menu-unfold' : 'menu-fold'}
            />
            <div className={'right'}>
                <Icon
                    className={'rightIcon'}
                    type="github"
                    theme="outlined"
                    onClick={() => window.open('www.github.com')}
                />
                <Icon className={'rightIcon'} type="logout" theme="outlined" />
            </div>
        </Layout.Header>
    )
}

export default Header;
