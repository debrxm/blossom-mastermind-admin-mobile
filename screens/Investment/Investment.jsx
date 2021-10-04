import {
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import AppButton from "../../components/AppButton/AppButton";
import { COLORS } from "../../constants/Colors";
// import { COLORS } from "../../constants/Colors";
import { Width } from "../../constants/Layout";
import { firestore } from "../../firebase/config";
import {
  setActiveInvestment,
  setElapsedInvestment,
  setPendingInvestment,
} from "../../redux/investment/actions";
const { width, height } = Dimensions.get("window");
// const COLORS = { primary: "#ffffff", white: "#010101" };

import { styles } from "./styles";
import CustomInput from "../../components/CustomInput/CustomInput";

const MessagePreview = ({ item }) => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <View style={{ width: Width, alignItems: "center" }}>{item.data()}</View>
    </View>
  );
};
const Investment = () => {
  const user = useSelector(({ user }) => user.currentUser);

  const [query, setQuery] = useState("");
  const [foundUsers, setFoundUsers] = useState([]);
  const [searching, setSearching] = useState(false);
  const pending = useSelector(
    ({ investments }) => investments.pendingInvestments
  );
  const [messages] = useState([]);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const ref = React.useRef();
  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const messagesRef = firestore
    .collection("messages")
    .doc(user.id)
    .collection("messages");
  const findUser = async (e) => {
    query.trim() === "" ? setFoundUsers([]) : null;
    if (query.trim() === "") {
      return;
    }
    setSearching(true);
    const usersRef = firestore
      .collection("users")
      .where("first_name", ">=", `${query.toLowerCase()}`)
      .orderBy("first_name", "asc");
    const usersArr = [];
    (await usersRef.get()).docs.forEach((doc) => {
      setSearching(false);
      if (doc.data().username.toLowerCase().includes(query)) {
        usersArr.push(doc.data());
      }
      setFoundUsers(usersArr);
    });
  };

  const OnLoadMessages = () => {
    setIsLoading(true);
    messagesRef.onSnapshot((snapShot) => {
      if (!snapShot.empty) {
        const messages = [];
        const elapsedInvestment = [];
        const pending = { status: false, count: 0 };
        snapShot.docs.forEach((item, index) => {
          // console.log(item);
          messages.push(item.data);
          if (index === snapShot.size - 1) {
            dispatch(setPendingInvestment(pending));
            dispatch(setActiveInvestment(activeInvestment));
            dispatch(setElapsedInvestment(elapsedInvestment));
          }
        });
      }
    });
    setIsLoading(false);
  };
  useEffect(() => {
    OnLoadMessages();
  }, []);
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.routeTitle}>Messaging</Text>
        <CustomInput
          onChange={(e) => {
            setSearching(false);
            findUser(e);
            setQuery(e);
          }}
          value={query}
          placeholder={"Search user"}
          icon={<Feather name="search" size={20} color="black" />}
          otherIcon={
            searching ? (
              <Image
                style={{ marginRight: 10, width: 18, height: 18 }}
                source={require("../../assets/loader.gif")}
              />
            ) : query ? (
              <TouchableOpacity
                onPress={() => {
                  findUser(e);
                }}
              >
                <Feather
                  name="arrow-right"
                  size={20}
                  color="black"
                  style={{ marginRight: 10 }}
                />
              </TouchableOpacity>
            ) : null
          }
          iStyle={{ padding: 0, height: 40, paddingLeft: 10 }}
          cStyle={{ paddingLeft: 10, margin: 0, flex: 1 }}
        />
      </View>

      <ScrollView
        contentContainerStyle={styles.contentContainer}
        style={styles.container}
      >
        <FlatList
          ref={ref}
          onMomentumScrollEnd={updateCurrentSlideIndex}
          contentContainerStyle={{ height: height * 0.75 }}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={messages}
          pagingEnabled
          renderItem={({ item }) => <MessagePreview item={item} />}
        />
      </ScrollView>
      <View style={{ ...styles.buttonContainer }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Pending");
          }}
        >
          <View style={styles.button}>
            <MaterialCommunityIcons
              name="message-plus"
              size={24}
              color={COLORS.cloudyWhite}
            />
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Investment;
