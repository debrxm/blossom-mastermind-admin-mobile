import React, { useState } from "react";
import { Text, View } from "react-native";
import AppButton from "../AppButton/AppButton";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import { styles } from "./styles";
import { COLORS } from "../../constants/Colors";

const UpdatePaymentDatePaymentBreakdownTableRow = ({
  data,
  returns,
  setReturns,
}) => {
  const [date, setDate] = useState();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const toggleDatePicker = () => {
    setDatePickerVisibility(!isDatePickerVisible);
  };
  const handleConfirmDate = (date) => {
    const date_string = new Date(date).toISOString().substring(0, 10);
    const timeString = new Date(date).getTime();
    setDate(date_string);
    setDatePickerVisibility(!isDatePickerVisible);
    const filterReturns = returns.filter(
      (item, index) => item.month !== data.month
    );
    const updatedData = {
      ...data,
      pay_day: date_string,
      pay_day_timestring: timeString,
    };
    filterReturns.push(updatedData);
    setReturns(filterReturns);
  };
  return (
    <View style={[styles.tableRow]}>
      <Text style={[styles.tableText, styles.tableTextLong]}>
        {data.month} Month
      </Text>

      <AppButton
        onPress={toggleDatePicker}
        title={date ? date : "Select Date"}
        customStyle={styles.productCardFooterBtn}
        textStyle={{
          textTransform: "capitalize",
          fontWeight: "400",
          fontSize: responsiveFontSize(1.5),
        }}
      />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={(date) => handleConfirmDate(date)}
        onCancel={toggleDatePicker}
        isDarkModeEnabled={false}
        pickerContainerStyleIOS={{ backgroundColor: COLORS.black }}
        minimumDate={new Date()}
      />
      <Text style={[styles.tableText, styles.tableBodyText]}>
        {data.amount === 0 ? "----------------" : `₦${data.amount}`}
      </Text>
    </View>
  );
};

export default UpdatePaymentDatePaymentBreakdownTableRow;
