import React, { useState } from "react";
import { Text, View, FlatList } from "react-native";
import { Height } from "../../constants/Layout";
import { styles } from "./styles";
import UpdatePaymentDatePaymentBreakdownTableRow from "../UpdatePaymentDatePaymentBreakdownTableRow/UpdatePaymentDatePaymentBreakdownTableRow";

const UpdatePaymentDatePaymentBreakdownTable = ({
  data,
  returns,
  setReturns,
}) => {
  return (
    <View style={styles.table}>
      <View style={[styles.tableHead]}>
        <View style={[styles.tableRow]}>
          <Text
            style={[
              styles.tableText,
              styles.tableTextLong,
              styles.tableHeadText,
              styles.tableHeadTextName,
            ]}
          >
            Period
          </Text>
          <Text style={[styles.tableText, styles.tableHeadText]}>Return</Text>
        </View>
      </View>
      <View style={[styles.tableBody, { height: Height * 0.38 }]}>
        <FlatList
          contentContainerStyle={{}}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          data={data.returns}
          renderItem={({ item, index }) => (
            <UpdatePaymentDatePaymentBreakdownTableRow
              data={{ amount: item.amount, month: item.month }}
              returns={returns}
              setReturns={setReturns}
            />
          )}
        />
      </View>
      {/* <View style={{ height: 10 }}></View> */}

      <View style={[styles.tableFooter]}>
        <View style={[styles.tableRow]}>
          <Text
            style={[
              styles.tableText,
              styles.tableTextLong,
              styles.tableFooterText,
              styles.tableFooterTextName,
            ]}
          >
            Total
          </Text>
          <Text style={[styles.tableText, styles.tableFooterText]}>
            ₦{data.total_return}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default UpdatePaymentDatePaymentBreakdownTable;
