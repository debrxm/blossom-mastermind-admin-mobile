import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  RefreshControl,
} from "react-native";
import { firestore } from "../../firebase/config";
import NotificationPreview from "../../components/NotificationPreview/NotificationPreview";
import { Height, Width } from "../../constants/Layout";
import { COLORS } from "../../constants/Colors";
import notificationIcon from "../../assets/images/notification.png";
import NotificationViewer from "../../components/NotificationViewer/NotificationViewer";

import { styles } from "./styles";
import { useSelector } from "react-redux";

const Notification = () => {
  let onEndReachedCalledDuringMomentum = false;
  const user = useSelector(({ user }) => user.currentUser);
  const hasNoty = useSelector(({ user }) => user.hasNoty);
  const navigation = useNavigation();
  const [hasNotification, setHasNotification] = useState(false);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [notyVisible, setNotyVisible] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isMoreLoading, setIsMoreLoading] = useState(false);
  const [notificationDate, setNotificationDate] = useState({});
  const [lastDoc, setLastDoc] = useState(null);
  const onRefresh = () => {
    setTimeout(() => {
      getNotifications();
    }, 1000);
  };
  const notificationRef = firestore
    .collection("notifications")
    .doc(user.id)
    .collection("notifications")
    .orderBy("created_at", "desc");
  const getNotifications = async () => {
    setIsLoading(true);
    notificationRef.limit(20).onSnapshot((snapShot) => {
      if (!snapShot.empty) {
        setHasNotification(true);
        let newNotifications = [];
        setLastDoc(snapShot.docs[snapShot.docs.length - 1]);
        for (let index = 0; index < snapShot.docs.length; index++) {
          const data = {
            id: snapShot.docs[index].id,
            ...snapShot.docs[index].data(),
          };
          newNotifications.push(data);
        }
        setNotifications(newNotifications);
      } else {
        setLastDoc(null);
      }
    });
    setIsLoading(false);
  };

  const getMore = async () => {
    if (lastDoc) {
      setIsMoreLoading(true);
      notificationRef
        .startAfter(lastDoc.data().created_at)
        .limit(10)
        .onSnapshot((snapShot) => {
          if (!snapShot.empty) {
            let newNotifications = notifications;

            setLastDoc(snapShot.docs[snapShot.docs.length - 1]);

            for (let index = 0; index < snapShot.docs.length; index++) {
              const data = {
                id: snapShot.docs[index].id,
                ...snapShot.docs[index].data(),
              };
              newNotifications.push(data);
            }

            setNotifications(newNotifications);
            if (snapShot.docs.length < 10) setLastDoc(null);
          } else {
            setLastDoc(null);
          }
        });
      setIsMoreLoading(false);
    }

    onEndReachedCalledDuringMomentum = true;
  };

  useEffect(() => {
    getNotifications();
  }, [""]);
  return (
    <>
      <View style={styles.header}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <View
              style={{ flexDirection: "row", alignItems: "center", width: 60 }}
            >
              <Ionicons
                name="chevron-back-outline"
                size={24}
                color={COLORS.black}
              />
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.routeTitle}>Notifications</Text>
      </View>

      {isLoading ? (
        <ActivityIndicator
          size="large"
          color={COLORS.black}
          style={{ marginBottom: 10 }}
        />
      ) : hasNotification ? (
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.listContainer}>
            <FlatList
              data={notifications}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item, index }) => (
                <NotificationPreview
                  setNotificationDate={setNotificationDate}
                  setNotyVisible={setNotyVisible}
                  data={item}
                  customStyles={
                    index === notifications.length - 1 && { marginBottom: 60 }
                  }
                />
              )}
              ListFooterComponent={
                <RenderFooter isMoreLoading={isMoreLoading} />
              }
              refreshControl={
                <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
              }
              contentContainerStyle={{
                flexGrow: 1,
              }}
              style={{ paddingBottom: 20 }}
              initialNumToRender={10}
              onEndReachedThreshold={0.1}
              onMomentumScrollBegin={() => {
                onEndReachedCalledDuringMomentum = false;
              }}
              onEndReached={() => {
                if (!onEndReachedCalledDuringMomentum && !isMoreLoading) {
                  getMore();
                }
              }}
            />
          </View>
        </SafeAreaView>
      ) : (
        <NoMessage
          item={{
            image: notificationIcon,
            title: "You currently do not have notification",
            subtitle: `You will see notifications about your investment appear here `,
          }}
        />
      )}
      <NotificationViewer
        notyVisible={notyVisible}
        setNotyVisible={setNotyVisible}
        data={notificationDate}
      />
    </>
  );
};

function RenderFooter({ isMoreLoading }) {
  if (!isMoreLoading) return true;

  return (
    <ActivityIndicator
      size="large"
      color={COLORS.black}
      style={{ marginBottom: 10 }}
    />
  );
}

export default Notification;

const NoMessage = ({ item }) => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.white,
        height: Height,
      }}
    >
      <Image
        source={item?.image}
        style={{
          height: "30%",
          width: Width,
          resizeMode: "contain",
          marginTop: -100,
        }}
      />
      <View style={{ width: Width, alignItems: "center" }}>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.subtitle}>{item?.subtitle}</Text>
      </View>
    </View>
  );
};
