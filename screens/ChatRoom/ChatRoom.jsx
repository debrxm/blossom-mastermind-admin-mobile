import { Ionicons } from "@expo/vector-icons";
import { useRoute, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { firestore } from "../../firebase/config";
import ChatMessage from "../../components/ChatMessage";
import InputBox from "../../components/InputBox";
import { COLORS } from "../../constants/Colors";

let flatListRef;
const ChatRoom = () => {
  const route = useRoute();
  const data = route.params.data;
  const currentChannel = route.params.currentChannel;
  const navigation = useNavigation();
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const [messagesRef] = useState("");
  const [messages, setMessages] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [scrollToBottom, setScrollToBottom] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [searching, setSearching] = useState(false);
  const [query, setQuery] = useState("");
  const [reply, setReply] = useState({});

  const onClick = () => {
    navigation.goBack();
  };
  const OnLoadMessage = () => {
    // log
    const communicationRef = firestore.collection(
      `communication/${getChannelId(data.id)}`
    );
    communicationRef.onSnapshot((snapShot) => {
      const loadedMessage = [];

      snapShot.docs.forEach((item, index) => {
        console.log(item.data());
        loadedMessage.push(item.data());
        if (index === snapShot.size) {
          setMessages(loadedMessage);
        }
      });
    });
  };
  function getChannelId(userId) {
    const currentUserId = user.id;
    const channelUrl =
      userId < currentUserId
        ? `${userId}/${currentUserId}`
        : `${currentUserId}/${userId}`;
    return channelUrl;
  }
  useEffect(() => {
    OnLoadMessage();
  }, [""]);
  return (
    <>
      <View style={styles.header}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            onPress={onClick}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Ionicons name="close" size={24} color={COLORS.danger} />
            <View>
              <Text
                style={{
                  color: "#42414C",
                  fontSize: 16,
                  marginLeft: 10,
                  marginBottom: 1,
                }}
              >
                {data.investorname}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text>
            {data.first_name} {data.last_name}
          </Text>
        </View>
      </View>
      <FlatList
        data={query ? searchResults : messages}
        ref={async (ref) => {
          flatListRef = ref;
        }}
        initialNumToRender={messages.length}
        onContentSizeChange={() => flatListRef.scrollToEnd()}
        renderItem={({ item, index }) => (
          <ChatMessage
            message={item}
            channelId={data.first_name}
            quantity={messages.length}
            index={index}
            setReply={setReply}
            endUser={route.params}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={() => {
          setScrollToBottom(false);
        }}
        onEndReachedThreshold={() => {
          setScrollToBottom(false);
        }}
        extraData={messages}
      />
      <InputBox
        messagesRef={messagesRef}
        currentUser={user}
        endUser={route.params}
        currentChannel={currentChannel}
        reply={reply}
        setReply={setReply}
        messages={messages}
        setMessages={setMessages}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
  header: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    paddingTop: 30,
    paddingHorizontal: 20,
    zIndex: 1,
    minHeight: 80,
    backgroundColor: "#ffffff",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  // buttonContainer: {
  //   position: "absolute",
  //   bottom: 160,
  //   right: 15,
  // },
  button: {
    flexDirection: "row",
    backgroundColor: "#006eff",
    elevation: 2,
    alignItems: "center",
    justifyContent: "center",
    height: 35,
    width: 35,
    borderRadius: 20,
  },
  moreModalContainer: {
    position: "absolute",
    zIndex: 5,
    top: 0,
    right: 0,
    left: 0,
    alignItems: "flex-end",
    backgroundColor: "transparent",
    paddingTop: 85,
  },
  modalContainer: {
    alignItems: "center",
    minHeight: 20,
    minWidth: 150,
    maxWidth: 150,
    justifyContent: "center",
    padding: 10,
    borderRadius: 10,
    elevation: 2,
    backgroundColor: "#ffffff",
    elevation: 4,
  },
  modalTextButton: {
    flexDirection: "row",
    marginVertical: 3,
    paddingVertical: 5,
    // borderBottomColor: "#999999",
    // borderBottomWidth: 0.5,
  },
  modalText: {
    color: "#111111",
    fontWeight: "600",
    fontSize: 14,
  },
});

export default ChatRoom;
