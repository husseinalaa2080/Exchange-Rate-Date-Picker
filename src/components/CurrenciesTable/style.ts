import {StyleSheet} from 'react-native';
import {COLORS, HP} from '../../utils';

export const styles = StyleSheet.create({
  tableWrapperStyle: {
    flex: 1,
    paddingHorizontal: 15,
  },
  borderStyle: {
    borderWidth: 0.7,
    borderColor: COLORS.LIGHT_GRAY,
  },
  headerStyle: {
    height: HP('6%'),
    backgroundColor: COLORS.PRIMARY,
  },
  headerTextStyle: {
    fontSize: HP('2.35'),
    fontWeight: '500',
    color: COLORS.WHITE,
    textAlign: 'center',
  },
  dataTextStyle: {
    fontSize: HP('2.1'),
    color: COLORS.BLACK,
    textAlign: 'center',
  },
  tableRowStyle: {
    flexDirection: 'row',
    backgroundColor: COLORS.PRIMARY_OVERLAY,
    height: HP('5%'),
  },
  flatListContainerStyle: {
    paddingBottom: HP('6%') + 15,
  },
  loadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
    backgroundColor: COLORS.BLACK_OVERLAY,
  },
  noDataContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noDataTextStyle: {
    fontSize: HP('2%'),
    color: COLORS.BLACK,
    textAlign: 'center',
  },
});
