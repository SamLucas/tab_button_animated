import styled, { css } from "styled-components/native";

import { Animated } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Height, tabWidth } from "../../configs/shape";

export const Container = styled.View`
  flex-direction: row;
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const Button = styled.TouchableWithoutFeedback``;

export const ButtonActive = styled(Animated.View)`
  position: absolute;
  width: ${tabWidth + "px"};
  left: ${props => tabWidth * props.iskey + "px"}};
  height: ${Height + "px"};
  justify-content: center;
  align-items: center;
  top: -8px;
  /* ${props =>
    props.translateY && `transform: [{ translateY: ${props.translateY}}]`}; */
`;

export const Circle = styled.View`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  background-color: white;
  justify-content: center;
  align-items: center;
  display: ${props => (props.active ? "flex" : "none")};
`;

export const ContentIcon = styled(Animated.View)`
  flex: 1;
  height: ${Height + "px"};
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

export const Icon = styled(Feather)`
  font-size: 25px;
`;
