import React from "react";
import { TabBar } from "antd-mobile";
import myInspire from "../image/inspire.png";
import mine from "../image/mine.png";
import myStore from "../image/my_shop.png" 
import myIndex from "../image/首页 (1).png";
import AppHome from "./Home";
import AppMe from "./Me";
import shouye from "../App";
import myInspire1 from "../image/inspire (1).png";
import mine1 from "../image/mine (1).png";
import myStore1 from "../image/my_shop (1).png" 
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
                    "url("+myIndex+") center center /  21px 21px no-repeat"
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
                    "url("+myStore+") center center /  21px 21px no-repeat"
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  background:
                    "url("+myStore1+") center center /  21px 21px no-repeat"
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
              uri:mine
              // "url("+mine+")"
            }}
            selectedIcon={{
              uri:
                mine1
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
