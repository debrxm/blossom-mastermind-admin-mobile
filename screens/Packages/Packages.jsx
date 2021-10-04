import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  RefreshControl,
  View,
} from "react-native";

import ProductPreview from "../../components/ProductPreview/ProductPreview";

import { styles } from "./styles";
import { COLORS } from "../../constants/Colors";
import { Plans } from "../../constants/Packages";
import { firestore } from "../../firebase/config";
import { setPackages } from "../../redux/packages/actions";

const Packages = () => {
  let onEndReachedCalledDuringMomentum = false;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const packages = useSelector(({ packages }) => packages.packages);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isMoreLoading, setIsMoreLoading] = useState(false);
  const [lastDoc, setLastDoc] = useState(null);

  const onRefresh = () => {
    setTimeout(() => {
      getPackages();
    }, 1000);
  };
  const packagesRef = firestore.collection("packages");
  const getPackages = async () => {
    setIsLoading(true);
    packagesRef.limit(20).onSnapshot((snapShot) => {
      if (!snapShot.empty) {
        let loadedPackages = [];
        setLastDoc(snapShot.docs[snapShot.docs.length - 1]);
        for (let index = 0; index < snapShot.docs.length; index++) {
          const data = {
            id: snapShot.docs[index].id,
            ...snapShot.docs[index].data(),
          };
          loadedPackages.push(data);
        }
        dispatch(setPackages(loadedPackages));
      } else {
        setLastDoc(null);
      }
    });
    setIsLoading(false);
  };

  const getMore = async () => {
    if (lastDoc) {
      setIsMoreLoading(true);
      packagesRef
        .startAfter(lastDoc.data().created_at)
        .limit(10)
        .onSnapshot((snapShot) => {
          if (!snapShot.empty) {
            let loadedPackages = [];

            setLastDoc(snapShot.docs[snapShot.docs.length - 1]);

            for (let index = 0; index < snapShot.docs.length; index++) {
              const data = {
                id: snapShot.docs[index].id,
                ...snapShot.docs[index].data(),
              };
              loadedPackages.push(data);
            }

            setInvestors(loadedPackages);
            if (snapShot.docs.length < 10) setLastDoc(null);
          } else {
            setLastDoc(null);
          }
        });
      setIsMoreLoading(false);
    }

    onEndReachedCalledDuringMomentum = true;
  };

  const handleLoaderContent = () => {
    return !loading ? null : <ActivityIndicator color={"black"} size={20} />;
  };
  useEffect(() => {
    getPackages();
  }, [""]);

  return (
    <>
      <View style={styles.header}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={() => navigation.navigate("AddPackage")}>
            {/* <View
              style={{ flexDirection: "row", alignItems: "center", width: 60 }}
            >
              <Ionicons
                name="chevron-back-outline"
                size={24}
                color={COLORS.black}
              />
            </View> */}
            <View style={styles.button}>
              <Feather name="plus" size={20} color={COLORS.cloudyWhite} />
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.routeTitle}>Packges</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.listContainer}>
          <FlatList
            keyboardShouldPersistTaps="always"
            data={packages}
            keyExtractor={(item) => item.code.toString()}
            renderItem={({ item, index }) => <ProductPreview data={item} />}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            ListFooterComponent={handleLoaderContent}
            contentContainerStyle={{
              alignItems: "center",
            }}
            style={{ paddingBottom: 20 }}
            initialNumToRender={10}
            onEndReachedThreshold={0.4}
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
      </View>
    </>
  );
};

export default Packages;
