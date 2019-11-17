import React, { Component } from 'react'
import shezhi from '../image/设置.png'
import { NavBar, Icon, Tabs } from 'antd-mobile';

export default class AppMe extends Component {

    render() {
        return (
            <div style={{width:'100%'}}>
                    <NavBar
                    style={{backgroundColor:'#3fcccb',color:'white'}}
                    rightContent={[
                        // <p className="myshop_icon"></p>
                        <img src={shezhi} style={{width:'30px'}}/>
                    ]}
                    >我的</NavBar>
            </div> 
        );
    }
}
