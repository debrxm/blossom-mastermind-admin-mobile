import React from "react";
import { Text, TouchableWithoutFeedback, View, FlatList } from "react-native";
import { Height } from "../../constants/Layout";
import { styles } from "./styles";

const AddPackagePaymentDateTable = ({
  returns,
  total_return,
  setCurrent,
  setDialogVisible,
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
          data={returns}
          renderItem={({ item, index }) => (
            <View style={[styles.tableRow]}>
              <Text
                style={[
                  styles.tableText,
                  styles.tableTextLong,
                  styles.tableBodyText,
                  styles.tableBodyTextName,
                ]}
              >
                {item.month} Month
              </Text>
              <Text style={[styles.tableText, styles.tableBodyText]}>
                {item.amount === 0 ? "----------------" : `₦${item.amount}`}
              </Text>
            </View>
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
          <TouchableWithoutFeedback
            onPress={() => {
              setCurrent("total");
              setDialogVisible(true);
            }}
          >
            <Text style={[styles.tableText, styles.tableFooterText]}>
              ₦{total_return}
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
};

export default AddPackagePaymentDateTable;
