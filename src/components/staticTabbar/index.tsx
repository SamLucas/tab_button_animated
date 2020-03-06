import React, { useEffect, useState } from "react";
import { Animated } from "react-native";
import { Width, Height } from "../../configs/shape";

import {
  Container,
  Button,
  ButtonActive,
  ContentIcon,
  Icon,
  Circle
} from "./styles.js";

interface Props {
  tabs: string[];
  value: Animated.Value;
}

const App: React.FC<Props> = ({ tabs, value }: Props) => {
  const tabWidht = Width / tabs.length;
  const [values, setValues] = useState<Animated.Value[]>([]);

  useEffect(() => {
    const data_values = tabs.map(
      index => new Animated.Value(index === 0 ? 1 : 0)
    );
    setValues(data_values);
  }, []);

  const handlePress = (index: number) => {
    Animated.sequence([
      ...values.map(value =>
        Animated.timing(value, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true
        })
      ),
      Animated.parallel([
        Animated.spring(values[index], {
          toValue: 1,
          useNativeDriver: true
        }),
        Animated.spring(value, {
          toValue: -Width + tabWidht * index,
          useNativeDriver: true
        })
      ])
    ]).start();

    // Animated.spring(value, {
    //   toValue: -Width + tabWidht * index,
    //   useNativeDriver: true
    // }).start();
  };

  return (
    <Container>
      {tabs.map((tab, key) => {
        const opacity = value.interpolate({
          inputRange: [
            -Width + tabWidht * (key - 1),
            -Width + tabWidht * key,
            -Width + tabWidht * (key + 1)
          ],
          outputRange: [1, 0, 1],
          extrapolate: "clamp"
        });

        // Esta dando erro nessa constante
        const translateY = values[key].interpolate({
          inputRange: [0, 1],
          outputRange: [Height, 0]
        });

        return (
          <React.Fragment {...{ key }}>
            <Button onPress={() => handlePress(key)}>
              <ContentIcon opacity={opacity}>
                <Icon name={tab} />
              </ContentIcon>
            </Button>

            <ButtonActive
              iskey={key}
              onPress={() => handlePress(key)}
              active={value === key}
              translateY={translateY}
            >
              <Circle>
                <Icon name={tab} active />
              </Circle>
            </ButtonActive>
          </React.Fragment>
        );
      })}
    </Container>
  );
};

export default App;
