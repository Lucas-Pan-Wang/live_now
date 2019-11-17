import React, { Component } from 'react'
import { Carousel, WingBlank } from 'antd-mobile';
import { Flex, WhiteSpace } from 'antd-mobile';
import carousel from '../image/my_index_02.jpg';
import carousel2 from '../image/my_index2_02.jpg';
import big from '../image/my_index_17.jpg';
import small from '../image/my_index_05.jpg'
import { NavBar, Icon, Tabs } from 'antd-mobile';
const myHolder = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder`} {...restProps}>Block</div>
  );
export default class my_home extends Component {
    state = {
        data: ['1', '2', '3'],
        imgHeight: 160,
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
          this.setState({
            data: [carousel,carousel2],
          });
        }, 100);
      }
    render() {
        return (
            <div style={{width:'100%'}}>
                {/* <p className="home1st">住吧家具</p> */}
                <NavBar
                    style={{backgroundColor:'#3fcccb'}}
                    rightContent={[
                        // <Icon key="0" type="search" style={{ marginRight: '18px' }} />,
                    ]}
                    >住吧家具</NavBar>
                    <WingBlank style={{width:'100%',marginLeft:"0px"}}>
                        <Carousel
                        autoplay={false}
                        infinite
                        >
                        {this.state.data.map((val,idx) => (
                            <img key={idx}
                                src={`${val}`}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        ))}
                        </Carousel>
                    </WingBlank>
                    <Flex className="home2nd">
                        <Flex.Item id="small">
                            <img src={small} style={{width:'100%'}}/>
                            <myHolder />
                            </Flex.Item>
                        <Flex.Item id="small">
                        <img src={small} style={{width:'100%'}}/><myHolder /></Flex.Item>
                        <Flex.Item id="small">
                        <img src={small} style={{width:'100%'}}/><myHolder /></Flex.Item>
                    </Flex>
                    <div className="sth">
                        <p className="changer"></p>
                        <span>热门推荐</span>
                    </div>
                    <div className="myhome_bottom">
                        <img src={big} />
                        <span>什么是英伦装修风格 英伦风家装 英伦风格装修效果图</span>
                    </div>
            </div> 
        );
    }
}
