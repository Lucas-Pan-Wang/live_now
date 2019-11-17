import React from "react";
import { TabBar } from "antd-mobile";
import AppHome from "./Home";
import AppMe from "./Me";
import shouye from "../App";
import myInspire from "../image/inspire.png";
import wode from "../image/mine.png";
import shangcheng from "../image/my_shop.png" 
import shouye1 from "../image/首页 (1).png";
import myInspire1 from "../image/inspire (1).png";
import wode1 from "../image/mine (1).png";
import shangcheng1 from "../image/my_shop (1).png" 
import AppInspiration from './Inspiration'
import AppShop from './Shop'
export default class AppTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "blueTab"
    };
  }
  render() {
    return (
      <div
        style={{
          position: "fixed",
          height: "100%",
          width: "100%",
          top: 0
        }}
      >
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#3fcccb"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="Life"
            icon={
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  background:
                    "url("+shouye+") center center /  21px 21px no-repeat"
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  background:
                    "url("+shouye1+") center center /  21px 21px no-repeat"
                }}
              />
            }
            selected={this.state.selectedTab === "blueTab"}
            onPress={() => {
              this.setState({
                selectedTab: "blueTab"
              });
            }}
          >
            <AppHome />
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  background:
                  "url("+myInspire+") center center /  21px 21px no-repeat"
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  background:
                    "url("+myInspire1+") center center /  21px 21px no-repeat"
                }}
              />
            }
            title="灵感"
            key="Koubei"
            selected={this.state.selectedTab === "redTab"}
            onPress={() => {
              this.setState({
                selectedTab: "redTab"
              });
            }}
          >
          <AppInspiration />
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  background:
                    "url("+shangcheng+") center center /  21px 21px no-repeat"
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  background:
                    "url("+shangcheng1+") center center /  21px 21px no-repeat"
                }}
              />
            }
            title="商城"
            key="Friend"
            // dot
            selected={this.state.selectedTab === "greenTab"}
            onPress={() => {
              this.setState({
                selectedTab: "greenTab"
              });
            }}
          >
          <AppShop />
          </TabBar.Item>
          <TabBar.Item
            icon={{
              uri:wode
              // "url("+wode+")"
            }}
            selectedIcon={{
              uri:
                wode1
            }}
            title="我的"
            key="my"
            selected={this.state.selectedTab === "yellowTab"}
            onPress={() => {
              this.setState({
                selectedTab: "yellowTab"
              });
            }}
          >
          <AppMe />
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}
