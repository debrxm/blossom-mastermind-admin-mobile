import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import { useDispatch, useSelector } from "react-redux";
import InvestorsPreview from "../../components/InvestorsPreview/InvestorsPreview";
import InvestorViewer from "../../components/InvestorViewer/InvestorViewer";
import { COLORS } from "../../constants/Colors";
import { firestore } from "../../firebase/config";
import { setInvestors } from "../../redux/investors/actions";

import { styles } from "./styles";

const Home = () => {
  let onEndReachedCalledDuringMomentum = false;
  const user = useSelector(({ user }) => user.currentUser);
  const hasNoty = useSelector(({ user }) => user.hasNoty);
  const investors = useSelector(({ investors }) => investors.investors);
  const [hasInvestors, setHasInvestors] = useState(false);
  const [investorViewerVisible, setInvestorViewerVisible] = useState(false);
  const [investorData, setInvestorData] = useState({});
  const [hour, setHour] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isMoreLoading, setIsMoreLoading] = useState(false);
  const [investorsData, setInvestorsData] = useState({});
  const [lastDoc, setLastDoc] = useState(null);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const getHour = () => {
    const date = new Date();
    const hour = date.getHours();
    setHour(hour);
  };
  const onRefresh = () => {
    setTimeout(() => {
      getInvestors();
    }, 1000);
  };
  const investorsRef = firestore.collection("users");
  // .where("total_invested", ">", 0);
  const getInvestors = async () => {
    setIsLoading(true);
    investorsRef.limit(20).onSnapshot((snapShot) => {
      if (!snapShot.empty) {
        setHasInvestors(true);
        let newInvestors = [];
        setLastDoc(snapShot.docs[snapShot.docs.length - 1]);
        for (let index = 0; index < snapShot.docs.length; index++) {
          const data = {
            id: snapShot.docs[index].id,
            ...snapShot.docs[index].data(),
          };
          newInvestors.push(data);
        }
        dispatch(setInvestors(newInvestors));
      } else {
        setLastDoc(null);
      }
    });
    setIsLoading(false);
  };

  const getMore = async () => {
    if (lastDoc) {
      setIsMoreLoading(true);
      investorsRef
        .startAfter(lastDoc.data().created_at)
        .onSnapshot((snapShot) => {
          if (!snapShot.empty) {
            let newInvestors = [];

            setLastDoc(snapShot.docs[snapShot.docs.length - 1]);

            for (let index = 0; index < snapShot.docs.length; index++) {
              const data = {
                id: snapShot.docs[index].id,
                ...snapShot.docs[index].data(),
              };
              newInvestors.push(data);
            }

            setInvestors(newInvestors);
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
    getInvestors();
    getHour();
  }, [""]);

  return (
    <>
      <View style={styles.header}>
        <View style={styles.user}>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <View style={styles.imageContainer}>
              <Ionicons name="person-circle" size={50} color="#dddcdb" />
              {/* <Image style={styles.profilePic} source={avatar} /> */}
            </View>
          </TouchableOpacity>

          <View style={{ width: 10 }}></View>
          <View style={{}}>
            <Text
              style={[
                styles.title,
                {
                  color: COLORS.lightTextColor,
                  fontSize: responsiveFontSize(1.8),
                },
              ]}
            >
              {hour < 12
                ? `Good Morning`
                : hour < 17
                ? `Good Afternoon`
                : `Good Evening`}
              {/* Good Morning */}
            </Text>
            {user && (
              <Text style={styles.title}>
                <Text
                  style={{
                    color: COLORS.darkTextColor,
                    fontSize: responsiveFontSize(2.2),
                  }}
                >
                  Admin.
                </Text>
              </Text>
            )}
          </View>
        </View>

        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("Notification")}
        >
          <View style={styles.noty}>
            <Ionicons
              name="md-notifications-outline"
              size={24}
              color={COLORS.black}
            />
            {hasNoty && <View style={styles.dot}></View>}
          </View>
        </TouchableWithoutFeedback>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        ></View>
      </View>
      {isLoading ? (
        <ActivityIndicator
          size="large"
          color={COLORS.black}
          style={{ marginBottom: 10 }}
        />
      ) : investors ? (
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.listContainer}>
            <FlatList
              data={investors}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item, index }) => (
                <InvestorsPreview
                  data={item}
                  setInvestorData={setInvestorData}
                  setInvestorViewerVisible={setInvestorViewerVisible}
                />
              )}
              // ListFooterComponent={
              //   <RenderFooter isMoreLoading={isMoreLoading} />
              // }
              // refreshControl={
              //   <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
              // }
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
        <View>{/* <Text>No Investor</Text> */}</View>
      )}
      <InvestorViewer
        investorViewerVisible={investorViewerVisible}
        setInvestorViewerVisible={setInvestorViewerVisible}
        data={investorData}
      />
    </>
  );
};

export default Home;

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
