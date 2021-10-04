import { firestore } from "../firebase/config";
import Constants from "expo-constants";
import * as Notifications from "expo-notifications";

export const GenerateRandomNDigits = (n) => {
  return Math.floor(Math.random() * (9 * Math.pow(10, n))) + Math.pow(10, n);
};
export const MoneyFormat = (labelValue) => {
  // Nine Zeroes for Billions
  return Math.abs(Number(labelValue)) >= 1.0e9
    ? Math.abs(Number(labelValue)) / 1.0e9 + "B"
    : // Six Zeroes for Millions
    Math.abs(Number(labelValue)) >= 1.0e6
    ? Math.abs(Number(labelValue)) / 1.0e6 + "M"
    : // Three Zeroes for Thousands
    Math.abs(Number(labelValue)) >= 1.0e3
    ? Math.abs(Number(labelValue)) / 1.0e3 + "K"
    : Math.abs(Number(labelValue));
};
const date = new Date(),
  year = date.getFullYear(),
  month = date.getMonth();

export const firstDayOfTheMonth = Date.parse(
  new Date(year, month, 1).toLocaleString()
);

const first = date.getDate() - date.getDay();
const last = first + 6;

export const firstDayOfTheWeek = Date.parse(
  new Date(date.setDate(first)).toLocaleString()
);

export const lastDayOfTheWeek = Date.parse(
  new Date(date.setDate(last)).toLocaleString()
);
export const StartOfToday = () => {
  const d = new Date();
  d.setUTCHours(0, 0, 0, 0);
  const timeString = +d;
  return timeString;
};
export const TransferBarcode = async (barcode, ownerId) => {
  const barcodeRef = firestore
    .collection("barcode")
    .doc(ownerId)
    .collection("codes")
    .doc("line_one");
  console.log(barcode, ownerId);
  await barcodeRef.set({ barcode });
};

export const Wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

export async function SchedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "You've got mail! 📬",
      body: "Here is the notification body",
      data: { data: "goes here" },
    },
    trigger: { seconds: 2 },
  });
}
// SchedulePushNotification();
export async function ScheduleReportPushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Report Ready !!!",
      body: "View todays sales report",
      data: { data: "" },
    },
    trigger: { repeats: true, hour: 21, minute: 12 },
  });
}

export async function RegisterForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
  } else {
    alert("Must use physical device for Push Notifications");
  }

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  return token;
}

export const SendNotification = (pushNotificationData) => {
  const { body, token, title } = pushNotificationData;
  fetch("https://exp.host/--/api/v2/push/send", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      channelId: pushNotificationData.channelId || "defalt",
      to: token,
      sound: "default",
      title,
      body,
    }),
  });
};
