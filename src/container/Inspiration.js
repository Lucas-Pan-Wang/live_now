import React, { Component } from 'react'
import { NavBar, Icon, Tabs } from 'antd-mobile';
import { Flex, WhiteSpace } from 'antd-mobile';
import myInspire from '../image/inspire_03.jpg'


const myHolder = ({ className = '', ...restProps }) => (
  <div className={`${className} placeholder`} {...restProps}>Block</div>
);
const mytab = [
    { title: '推荐' },
    { title: '冬季'},
    { title: '宜家' },
    { title: '小清新' },
    { title: '小户型' },
    { title: '个性彩色' },
  ];

export default class AppInspiration extends Component {
    constructor(){
        super();
        this.state = {   //设置默认值
            pic:[myInspire,myInspire,myInspire,myInspire,myInspire,myInspire],
        }
    }
    render() {
        return (
            <div style={{width:'100%'}}>
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:'white'}}
                    rightContent={[
                        <Icon key="0" type="search" style={{ color:'white', marginRight: '16px' }} />,
                    ]}
                    >灵感</NavBar>
                <Tabs tabs={mytab}
                    initialPage={0}
                    tabBarUnderlineStyle={{border:'0px solid #ffdb2c'}}
                >
             
                <div style={{alignItems: 'center', justifyContent: 'center', height: 'auto', backgroundColor: '#eeeeee' }}>
                    <Flex>
                        <Flex.Item style={{height:'auto',margin:'10px'}}>
                            <img src={this.state.pic[0]} style={{width:'100%'}}/>
                            <div className="insp">
                                <div className="self-pic"></div>
                                <span>橙色律动</span>    
                                <div className="xin"></div>
                            </div>    
                        </Flex.Item>
                        <Flex.Item style={{height:'auto',margin:'10px'}}>
                            <img src={this.state.pic[1]} style={{width:'100%'}}/>
                            <div className="insp">
                                <div className="self-pic"></div>
                                <span>橙色律动</span>    
                                <div className="xin"></div>
                            </div>
                        </Flex.Item>
                        </Flex>
                        <Flex>
                        <Flex.Item style={{height:'auto',margin:'10px'}}>
                            <img src={this.state.pic[2]} style={{width:'100%'}}/>
                            <div className="insp">
                                <div className="self-pic"></div>
                                <span>橙色律动</span>    
                                <div className="xin"></div>
                            </div>
                        </Flex.Item>
                        <Flex.Item style={{height:'auto',margin:'10px'}}>
                            <img src={this.state.pic[3]} style={{width:'100%'}}/>
                            <div className="insp">
                                <div className="self-pic"></div>
                                <span>橙色律动</span>    
                                <div className="xin"></div>
                            </div>
                        </Flex.Item>
                        </Flex>
                        <Flex>
                        <Flex.Item style={{height:'auto',margin:'10px'}}>
                            <img src={this.state.pic[4]} style={{width:'100%'}}/>
                            <div className="insp">
                                <div className="self-pic"></div>
                                <span>橙色律动</span>    
                                <div className="xin"></div>
                            </div>
                        </Flex.Item>
                        <Flex.Item style={{height:'auto',margin:'10px'}}>
                            <img src={this.state.pic[5]} style={{width:'100%'}}/>
                            <div className="insp">
                                <div className="self-pic"></div>
                                <span>橙色律动</span>    
                                <div className="xin"></div>
                            </div>
                        </Flex.Item>
                    </Flex>
                </div>
                </Tabs>
            </div> 
        );
    }
}
