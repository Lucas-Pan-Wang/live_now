import React, { Component } from 'react'
import { Carousel, WingBlank } from 'antd-mobile';
import carousel from '../image/my_shop_02.jpg';
import { SearchBar, Button, WhiteSpace } from 'antd-mobile';
import hey1 from '../image/my_shop_05.jpg'
import hey2 from '../image/my_shop_07.jpg'
import { Grid } from 'antd-mobile';
import { Flex} from 'antd-mobile';
import myStar from '../image/地址.png'
import myshop_icon from '../image/购物车.png'
import { NavBar, Icon, Tabs } from 'antd-mobile';
const sss =[hey1,hey2]
const data = Array.from(new Array(10)).map((_val, i) => ({
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
  text: `name${i}`,
}));
const myData = Array.from(new Array(10)).map(() => ({
    icon:[myStar,myStar,myStar,myStar,myStar,myStar,myStar,myStar,myStar]
}));
const color=['#111111','#222222','#333333','#444444','#555555','#777777','#888888','#999999','#aaaaaa','#bbbbbb','green'];
const data3 = Array.from(new Array(4)).map(() => ({
    icon:[myStar,myStar]
}));
const wenzi=['Too Art Studion欧式风格精细研磨','顺顺工艺欧式风格塑料外框黑色']
export default class AppShop extends Component {
    state = {
        data: ['1', '2', '3','4'],
        disabled: false,
        hey2: ['桌','床','椅','几','柜','书架','沙发','家居饰品','户外家具','全部分类'],
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
          this.setState({
            data: [carousel,carousel,carousel,carousel],
          });
        }, 100);
    }
    clear = () => {
        this.setState({ value: '' });
    };
    handleClick = () => {
        this.manualFocusInst.focus();
    }
    onChange= (value) => {
        this.setState({ value });
    };
    render() {
        return (
            <div style={{width:'100%'}}>
                    <NavBar
                    style={{backgroundColor:'#3fcccb',color:'white'}}
                    rightContent={[
                        // <p className="myshop_icon"></p>
                        <img src={myshop_icon} style={{width:'30px'}}/>
                    ]}
                    >商城</NavBar>
                <WingBlank style={{width:'100%',marginLeft:"0px",position:'relative'}}>
                        <Carousel
                        autoplay={false}
                        infinite
                        >
                        {this.state.data.map((val,idx) => (
                            <img key={idx}
                                src={`${val}`}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top'}}
                                onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        ))}
                        </Carousel>
                        <SearchBar placeholder="输入关键字搜索" maxLength={8} style={{opacity:'0.9',position:'absolute',width:'100%',top:'0px'}}/>
                    </WingBlank>

                    <Grid data={myData}
                        columnNum={5}
                        renderItem={(dataItem,idx) => (
                            <div style={{ padding: '12.5px' }}>
                            <img src={dataItem.icon[idx]} style={{ width: '45px', height: '45px' ,borderRadius:'50px',backgroundColor:color[idx]}} alt="" />
                            <div style={{ color: '#888', fontSize: '12px', marginTop: '12px' }}>
                                <span>{this.state.hey2[idx]}</span>
                            </div>
                            </div>
                        )}
                    />
                    <Flex>
                        <Flex.Item style={{height:'auto',margin:'12px'}}>
                            <img src={sss[1]} style={{width:'100%'}}/>
                            <div>
                                <span>{wenzi[0]}</span>    
                                <br/>
                                <span>$1234</span>  
                            </div>    
                        </Flex.Item>
                        <Flex.Item style={{height:'auto',margin:'12px'}}>
                            <img src={sss[1]} style={{width:'100%'}}/>
                            <div>
                                <span>{wenzi[0]}</span>    
                                <br/>
                                <span>$5678</span>  
                            </div>
                        </Flex.Item>
                    </Flex>
                    <Flex>
                        <Flex.Item style={{height:'auto',margin:'12px'}}>
                            <img src={sss[0]} style={{width:'100%'}}/>
                            <div>
                                <span>{wenzi[0]}</span>    
                                <br/>
                                <span>$1234</span>  
                            </div>    
                        </Flex.Item>
                    </Flex>
            </div> 
        );
    }
}
