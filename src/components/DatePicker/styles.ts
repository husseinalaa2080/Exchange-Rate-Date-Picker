import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  rowStyle: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  horizontalSpace: {
    width: 15,
  },
  verticalSpace: {
    height: 15,
  },
  paddingHorizontal: {
    paddingHorizontal: 15,
  },
  paddingVertical: {
    paddingVertical: 15,
  },
  paddingTop: {
    paddingTop: 15,
  },
  activeButtonStyle: {
    backgroundColor: COLORS.PRIMARY,
    borderWidth: 0,
  },
  activeButtonTitleStyle: {
    color: COLORS.WHITE,
  },
});
