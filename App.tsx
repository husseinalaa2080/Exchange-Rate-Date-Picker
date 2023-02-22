import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, StatusBar, SafeAreaView, Alert} from 'react-native';
import {getCurrenciesWithTimeSeries} from './src/apis/getCurrenciesWithTimeSeries';
import {CurrenciesTable, DatePicker, Header} from './src/components';
import {COLORS} from './src/utils';
import {AxiosResponse} from 'axios';

const tableHead = ["Date", "EGP", "CAD"];

const App = () => {
  const [rates, setRates] = useState([]);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (startDate && endDate) {
      getCurrencies();
    }
  }, [startDate, endDate]);

  const getCurrencies = () => {
    setLoading(true);
    const params = {
      base: "USD",
      start_date: startDate?.toISOString().split('T')[0],
      end_date: endDate?.toISOString().split('T')[0],
    };

    getCurrenciesWithTimeSeries(
      params,
      (data: AxiosResponse) => {
        const _rates = data?.rates;
        const dates = Object.keys(_rates);
        let datesAndCurrencies = dates?.map(date => {
          if ((date && _rates[date]['EGP'] && _rates[date]['CAD'])) {
            return [date, _rates[date]['EGP'], _rates[date]['CAD']];
          }

          return null;
        });
        datesAndCurrencies = datesAndCurrencies.filter((item) => item !== null);

        console.log(datesAndCurrencies);
        setRates(datesAndCurrencies);
        setLoading(false);
      },
      (err: any) => {
        Alert.alert("App", err?.response?.data)
        setLoading(false);
      },
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.WHITE} barStyle="dark-content" />
      <View style={[styles.container, styles.background]}>
        <Header title="USD --> EGP&CAD" />
        <DatePicker
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
        />
        <CurrenciesTable head={tableHead} data={rates} loading={loading} startDate={startDate} endDate={endDate} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    backgroundColor: COLORS.WHITE,
  },
});

export default App;
