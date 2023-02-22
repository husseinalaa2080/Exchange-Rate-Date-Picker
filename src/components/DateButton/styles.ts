import { StyleSheet } from "react-native";
import { COLORS, HP } from "../../utils";

export const styles = StyleSheet.create({
  buttonContainerStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: HP('2.2%'),
    color: COLORS.BLACK
  },
  buttonStyle: {
    flex: 1,
    height: HP('5.5%'),
    borderRadius: HP('1.2%'),
    backgroundColor: COLORS.WHITE,
    borderWidth: 0.7,
    borderColor: COLORS.LIGHT_GRAY,
    alignItems: 'center',
    justifyContent: 'center'
  }
});