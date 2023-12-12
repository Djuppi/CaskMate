import React, { FC } from 'react'
import { Text, View, useColorScheme } from 'react-native';

import {
    Colors,
  } from 'react-native/Libraries/NewAppScreen';

type Props = {}

const HomeScreen: FC<Props> = (props: Props) => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    return (
      <View style={backgroundStyle}>
        <Text>Welcome to CaskMate</Text>
      </View>
    );
}

export default HomeScreen