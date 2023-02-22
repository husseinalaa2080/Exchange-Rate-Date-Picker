import React, {useState} from 'react';
import {View, Text, Alert} from 'react-native';
import {styles} from './styles';
import DateButton from '../DateButton';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';

type pickerPropTypes = {
  startDate: Date | undefined;
  endDate: Date | undefined;
  setStartDate?: any;
  setEndDate?: any;
};

const DatePicker = ({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}: pickerPropTypes) => {
  const [show, setShow] = useState(false);
  const [isStart, setIsStart] = useState(true);
  const [activeBtn, setActiveBtn] = useState(0);

  const onStartDateClicked = () => {
    setIsStart(true);
    setShow(true);
  };

  const onEndDateClicked = () => {
    setIsStart(false);
    setShow(true);
  };

  const onChangeDate = (event: DateTimePickerEvent, selectedDate?: Date) => {
    setShow(false);

    if (isStart) {
      if (selectedDate?.getTime() !== startDate?.getTime()) {
        setStartDate(selectedDate);
        setActiveBtn(0);
        // console.log(selectedDate?.toISOString().split('T')[0]);
      }
    } else {
      if (selectedDate?.getTime() !== endDate?.getTime()) {
        setEndDate(selectedDate);
        setActiveBtn(0);
        // console.log(selectedDate?.toISOString().split('T')[0]);
      }
    }
  };

  const onClickThisWeek = async () => {
    setActiveBtn(1);

    const today = new Date();
    const firstDay = new Date(today.setDate(today.getDate() - today.getDay()));
    const lastDay = new Date(
      today.setDate(today.getDate() - today.getDay() + 6),
    );

    if (
      firstDay?.getTime() !== startDate?.getTime() ||
      lastDay?.getTime() !== endDate?.getTime()
    ) {
      setStartDate(firstDay);
      setEndDate(lastDay);
    }
  };

  const onClickThisMonth = async () => {
    setActiveBtn(2);

    const now = new Date();
    const firstDay = new Date(now.getFullYear(), now.getMonth(), 2);
    const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 1);

    if (
      firstDay?.getTime() !== startDate?.getTime() ||
      lastDay?.getTime() !== endDate?.getTime()
    ) {
      setStartDate(firstDay);
      setEndDate(lastDay);
    }
  };

  const onClickThisYear = async () => {
    setActiveBtn(3);

    const currentYear = new Date().getFullYear();
    const firstDay = new Date(currentYear, 0, 2);
    const lastDay = new Date(currentYear, 11, 32);

    if (
      firstDay?.getTime() !== startDate?.getTime() ||
      lastDay?.getTime() !== endDate?.getTime()
    ) {
      setStartDate(firstDay);
      setEndDate(lastDay);
    }
  };

  return (
    <View style={[styles.container, styles.paddingVertical]}>
      <View style={[styles.rowStyle, styles.paddingHorizontal]}>
        <DateButton
          text="from: "
          title={
            startDate ? startDate.toISOString().split('T')[0] : 'Start date'
          }
          onClick={onStartDateClicked}
        />
        <View style={styles.horizontalSpace} />
        <DateButton
          text="to  : "
          title={endDate ? endDate.toISOString().split('T')[0] : 'End date'}
          onClick={onEndDateClicked}
        />
      </View>

      <View
        style={[styles.rowStyle, styles.paddingHorizontal, styles.paddingTop]}>
        <DateButton
          disabled={activeBtn === 1}
          title="This Week"
          onClick={onClickThisWeek}
          buttonStyle={activeBtn === 1 ? styles.activeButtonStyle : undefined}
          titleStyle={
            activeBtn === 1 ? styles.activeButtonTitleStyle : undefined
          }
        />
        <View style={styles.horizontalSpace} />
        <DateButton
          disabled={activeBtn === 2}
          title="This Month"
          onClick={onClickThisMonth}
          buttonStyle={activeBtn === 2 ? styles.activeButtonStyle : undefined}
          titleStyle={
            activeBtn === 2 ? styles.activeButtonTitleStyle : undefined
          }
        />
        <View style={styles.horizontalSpace} />
        <DateButton
          disabled={activeBtn === 3}
          title="This Year"
          onClick={onClickThisYear}
          buttonStyle={activeBtn === 3 ? styles.activeButtonStyle : undefined}
          titleStyle={
            activeBtn === 3 ? styles.activeButtonTitleStyle : undefined
          }
        />
      </View>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          display="calendar"
          value={isStart ? startDate || new Date() : endDate || new Date()}
          mode={'date'}
          onChange={onChangeDate}
        />
      )}
    </View>
  );
};

export default DatePicker;
