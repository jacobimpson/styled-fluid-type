import React, { Component } from "react";
import { H2, H1, H3, H4, H5, H6, P } from "./components/type";
import SideBar from "./components/app/SideBar";
import Main from "./components/app/Main";
import PreviewPane from "./components/app/PreviewPane";
import FontSizePanel from "./components/app/FontSizePanel";

class App extends Component {
  state = {
    minScreenSize: "420px",
    maxScreenSize: "1280px",
    baseFontSize: "16px",
    unit: "px",
    fontSizes: {
      h1: {
        key: "h1",
        label: "h1",
        min: 32,
        max: 48
      },
      h2: {
        key: "h2",
        label: "h2",
        min: 2,
        max: 2
      },
      h3: {
        key: "h3",
        label: "h3",
        min: 1.75,
        max: 1.75
      },
      h4: {
        key: "h4",
        label: "h4",
        min: 1.5,
        max: 1.5
      },
      h5: {
        key: "h5",
        label: "h5",
        min: 1.25,
        max: 1.25
      },
      h6: {
        key: "h6",
        label: "h6",
        min: 1,
        max: 1
      },
      p: {
        key: "p",
        label: "p",
        min: 1,
        max: 1
      }
    }
  };

  setFontSize = (componentKey, minOrMax, value) => {
    const { fontSizes } = this.state;
    fontSizes[componentKey][minOrMax] = value;
    this.setState({ fontSizes });
  };

  render() {
    const { fontSizes, unit, minScreenSize, maxScreenSize } = this.state;

    return (
      <Main>
        <SideBar>
          <FontSizePanel
            handleChange={this.setFontSize.bind(this)}
            fontSize={fontSizes.h1}
          />
          <FontSizePanel
            handleChange={this.setFontSize.bind(this)}
            fontSize={fontSizes.h2}
          />
          <FontSizePanel
            handleChange={this.setFontSize.bind(this)}
            fontSize={fontSizes.h3}
          />
          <FontSizePanel
            handleChange={this.setFontSize.bind(this)}
            fontSize={fontSizes.h4}
          />
          <FontSizePanel
            handleChange={this.setFontSize.bind(this)}
            fontSize={fontSizes.h5}
          />
          <FontSizePanel
            handleChange={this.setFontSize.bind(this)}
            fontSize={fontSizes.h6}
          />
          <FontSizePanel
            handleChange={this.setFontSize.bind(this)}
            fontSize={fontSizes.p}
          />
        </SideBar>
        <PreviewPane>
          <H1
            unit={unit}
            min={fontSizes["h1"].min}
            max={fontSizes["h1"].max}
            minScreenSize={minScreenSize}
            maxScreenSize={maxScreenSize}
          >
            H1 Lorem Ipsum
          </H1>
          <H2
            unit={unit}
            min={fontSizes["h2"].min}
            max={fontSizes["h2"].max}
            minScreenSize={minScreenSize}
            maxScreenSize={maxScreenSize}
          >
            H2 Lorem Ipsum
          </H2>
          <H3
            unit={unit}
            min={fontSizes["h3"].min}
            max={fontSizes["h3"].max}
            minScreenSize={minScreenSize}
            maxScreenSize={maxScreenSize}
          >
            H3 Lorem Ipsum
          </H3>
          <H4
            unit={unit}
            min={fontSizes["h4"].min}
            max={fontSizes["h4"].max}
            minScreenSize={minScreenSize}
            maxScreenSize={maxScreenSize}
          >
            H4 Lorem Ipsum
          </H4>
          <H5
            unit={unit}
            min={fontSizes["h5"].min}
            max={fontSizes["h5"].max}
            minScreenSize={minScreenSize}
            maxScreenSize={maxScreenSize}
          >
            H5 Lorem Ipsum
          </H5>
          <H6
            unit={unit}
            min={fontSizes["h6"].min}
            max={fontSizes["h6"].max}
            minScreenSize={minScreenSize}
            maxScreenSize={maxScreenSize}
          >
            H6 Lorem Ipsum
          </H6>
          <P
            unit={unit}
            min={fontSizes["p"].min}
            max={fontSizes["p"].max}
            minScreenSize={minScreenSize}
            maxScreenSize={maxScreenSize}
          >
            P Lorem Ipsum
          </P>
        </PreviewPane>
      </Main>
    );
  }
}

export default App;
