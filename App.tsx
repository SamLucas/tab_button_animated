import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  justify-content: flex-end;
  background-color: #ea3345;
`;

import TabBar from "./src/components/tabBar";

const App: React.FC = () => (
  <Container>
    <TabBar />
  </Container>
);

export default App;

console.ignoredYellowBox = true;
