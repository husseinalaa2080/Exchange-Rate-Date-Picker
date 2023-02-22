import { StyleSheet } from "react-native";
import { COLORS, HP } from "../../utils";

export const styles = StyleSheet.create({
  headerContainerStyle: {
    height: HP("7%"),
    width: "100%",
    flexDirection: "row",
    alignItems: 'center',
  },
  titleWrapperStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleStyle: {
    fontSize: HP('3%'),
    color: COLORS.BLACK,
    fontWeight: '600'
  }
});