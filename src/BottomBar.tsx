import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import ProfileScreen from './Screens/ProfileScreen';
import Icon from 'react-native-ico-material-design';

type Props = {};

const BottomBar = (props: Props) => {
  const [text, changeText] = useState<string>('Hey');


  return (
    <View style={styles.NavContainer}>
      <Text>{text}</Text>
      <View style={styles.NavBar}>
        <Pressable
          onPress={() => changeText('Aske')}
          style={styles.IconBehave}
          android_ripple={{borderless: true, radius: 50}}>
          <Icon name="favorite-heart-button" height={26} width={26} color="#E38035" />
        </Pressable>
        <Pressable
          onPress={() => changeText('Hey')}
          style={styles.IconBehave}
          android_ripple={{borderless: true, radius: 50}}>
          <Icon name="plus" height={26} width={26} />
        </Pressable>
        <Pressable
          onPress={() => changeText('Hey')}
          style={styles.IconBehave}
          android_ripple={{borderless: true, radius: 50}}>
          <Icon name="favorite-heart-button" height={26} width={26} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  NavContainer: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 20,
    flex: 1,
  },
  NavBar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '95%',
    alignSelf: 'center',
    backgroundColor: '#110',
    borderRadius: 40,
  },
  IconBehave: {
    padding: 14,
  },
});

export default BottomBar;
