import React, { Component } from 'react'
import { Menu, Icon } from 'antd'
import pathToRegexp from 'path-to-regexp'
import menu from './../menu'
import { arrayToTree } from '@utils/index'
const { SubMenu } = Menu

export default class SiderMenu extends Component {
    state = {
        sideBarTheme: 'light'
    }

    getPathArray = (array, current) => {
        const result = [String(current.id)]
        const getPath = (item) => {
            if (item && item.pid) {
                result.unshift(String(item.pid))
                getPath(queryArray(array, String(item.pid), 'id'))
            }
        }
        getPath(current)
        return result
    }
    getMenus = (menuTree) => {
        return menuTree.map(item => {
            if (item.children) {
                if (item.pid) {
                    this.levelMap[item.id] = item.pid
                }
                return (
                    <SubMenu
                        key={String(item.id)}
                        title={
                            <span>
                                {item.icon && <Icon type={item.icon} />}
                                <span>{item.title}</span>
                            </span>
                        }
                    >
                        {this.getMenus(item.children)}
                    </SubMenu>
                )
            }
            return (
                <Menu.Item key={String(item.id)}>
                    {item.icon && <i className='iconfont icon-emojiflashfill'></i>}
                    <span>{item.title}</span>
                </Menu.Item>
            )
        })
    }

    render() {
        this.levelMap = {}
        const { sideBarTheme } = this.state
        this.menuTree = arrayToTree(menu);
        const menuItems = this.getMenus(this.menuTree)
        // 寻找选中路由
        let currentMenu = null
        for (const item of menu) {
            if (item.path && pathToRegexp(item.path).exec(this.currentRoute)) {
                currentMenu = item
                break
            }
        }
        let selectedKeys = null
        if (currentMenu) {
            selectedKeys = this.getPathArray(menu, currentMenu)
        }
        if (!selectedKeys) {
            selectedKeys = ['1']
        }
        return (
            <Menu
                className='menu'
                theme={sideBarTheme}
                mode="inline"
                selectedKeys={selectedKeys}
                onClick={this.goto}
                {...this.menuProps}>
                {menuItems}
            </Menu>
        )
    }
}

