import React from 'react';
import {View, Text, StyleProp, ViewStyle, TextStyle} from 'react-native';
import {styles} from './styles';

type headerPropTypes = {
  title: string;
  style?: StyleProp<ViewStyle> | undefined;
  titleStyle?: StyleProp<TextStyle> | undefined;
};

const Header = ({title, style, titleStyle}: headerPropTypes) => {
  return (
    <View style={[styles.headerContainerStyle, style]}>
      <View style={styles.titleWrapperStyle}>
        <Text style={[styles.titleStyle, titleStyle]}>{title}</Text>
      </View>
    </View>
  );
};

export default Header;
