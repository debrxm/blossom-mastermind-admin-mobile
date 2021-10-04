import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import moment from "moment";
import { COLORS } from "../../constants/Colors";
import { styles } from "./styles";

export default function NotificationPreview({
  data,
  setNotificationDate,
  setNotyVisible,
  data: { title, adminMessage, created_at, viewed },
}) {
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setNotificationDate(data);
          setNotyVisible(true);
        }}
        activeOpacity={0.7}
        style={{
          width: "100%",
          marginVertical: 5,
          paddingHorizontal: 10,
        }}
      >
        <View
          style={{
            ...styles.container,
            backgroundColor: viewed ? "#ffffff" : COLORS.tint,
          }}
        >
          <View style={{ flex: 1 }}>
            <Text
              style={{
                ...styles.boldText,
                color: viewed ? COLORS.tint : "#ffffff",
              }}
            >
              {title}
            </Text>
            <Text
              style={{
                ...styles.lightText,
                color: viewed ? COLORS.tint : COLORS.white,
              }}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {adminMessage}
            </Text>
            <Text
              style={{
                ...styles.time,
                color: viewed ? COLORS.textColor : COLORS.white,
              }}
            >
              {moment(created_at).fromNow()}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
}
