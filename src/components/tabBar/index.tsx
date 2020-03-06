import React from "react";
import Svg, { Path } from "react-native-svg";
import { Animated } from "react-native";

import { Container, ContainerIcons, AbsoluteFill } from "./styles";
import StaticTabbar from "../staticTabbar";

import {
  PropsShape,
  NamesTabIcon,
  Width as width,
  Height as height
} from "../../configs/shape";

const AnimatedSvg = Animated.createAnimatedComponent(Svg);

const App: React.FC = () => {
  let value = new Animated.Value(-width);

  return (
    <>
      <ContainerIcons width={width} height={height}>
        <AnimatedSvg
          width={width * 2}
          style={{ transform: [{ translateX: value }] }}
          height={height}
        >
          <Path d={PropsShape} fill="white" />
        </AnimatedSvg>
        <AbsoluteFill>
          <StaticTabbar tabs={NamesTabIcon} value={value} />
        </AbsoluteFill>
      </ContainerIcons>
      <Container />
    </>
  );
};
export default App;
