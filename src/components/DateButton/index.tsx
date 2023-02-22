import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {styles} from './styles';

type buttonPropTypes = {
  title: string;
  onClick: (event: GestureResponderEvent) => void;
  text?: string;
  buttonStyle?: StyleProp<ViewStyle> | undefined;
  titleStyle?: StyleProp<TextStyle> | undefined;
  disabled?: boolean;
};

const DateButton = ({
  title,
  onClick,
  text,
  buttonStyle,
  titleStyle,
  disabled = false,
}: buttonPropTypes) => {
  return (
    <View style={styles.buttonContainerStyle}>
      {text && <Text style={styles.textStyle}>{text}</Text>}
      <TouchableOpacity
        disabled={disabled}
        style={[styles.buttonStyle, buttonStyle]}
        onPress={onClick}
        activeOpacity={0.4}>
        <Text style={[styles.textStyle, titleStyle]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DateButton;
