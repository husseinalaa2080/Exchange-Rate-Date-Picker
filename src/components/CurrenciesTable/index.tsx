import {
  View,
  Text,
  FlatList,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {styles} from './style';

// @ts-ignore
import {Table, TableWrapper, Row} from 'react-native-table-component';
import {COLORS} from '../../utils';

type tablePropTypes = {
  head: Array<string>;
  data: Array<Array<string | number>>;
  loading: boolean;
  startDate: Date | undefined;
  endDate: Date | undefined;
};

const CurrenciesTable = ({
  head,
  data,
  loading,
  startDate,
  endDate,
}: tablePropTypes) => {
  return (
    <View style={styles.tableWrapperStyle}>
      <Table borderStyle={styles.borderStyle}>
        <Row
          data={head}
          style={styles.headerStyle}
          textStyle={styles.headerTextStyle}
        />
      </Table>

      {loading && (
        <View style={[styles.loadingContainer, StyleSheet.absoluteFillObject]}>
          <ActivityIndicator color={COLORS.PRIMARY} />
        </View>
      )}

      {data?.length > 0 ? (
        <Table>
          <FlatList
            data={data}
            renderItem={({item, index}) => (
              <Row
                key={index}
                data={item}
                textStyle={styles.dataTextStyle}
                style={[
                  styles.tableRowStyle,
                  index % 2 == 0 && {backgroundColor: COLORS.LIGHT_GRAY},
                ]}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.flatListContainerStyle}
            showsVerticalScrollIndicator={false}
          />
        </Table>
      ) : (
        <View style={styles.noDataContainer}>
          {startDate && endDate ? (
            startDate > endDate ? (
              <Text style={styles.noDataTextStyle}>
                Please make sure that start date is less than or equal end date
              </Text>
            ) : (
              <Text style={styles.noDataTextStyle}>
                There are no data in this range
              </Text>
            )
          ) : (
            <Text style={styles.noDataTextStyle}>
              Please select start and end dates
            </Text>
          )}
        </View>
      )}
    </View>
  );
};

export default CurrenciesTable;
