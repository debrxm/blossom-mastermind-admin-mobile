import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useEffect } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import moment from "moment";
import styles from "./styles";

const ChatMessage = (props) => {
  const { message, setReply, endUser } = props;
  const user = useSelector((state) => state.user.currentUser);
  useEffect(() => {
    updateRead();
  }, []);
  const isMyMessage = () => {
    return message.uid === user.id;
  };
  const timeFromNow = (timestamp) => moment(timestamp).fromNow();

  const updateRead = () => {
    if (message.uid === user.id) {
      return;
    }
    if (message.read !== undefined) {
      if (!message.read) {
        messageRef().update({ read: true });
      }
    } else if (!message.read) {
      messageRef().update({ read: true });
    } else {
      return;
    }
  };
  const buttons = [
    <View
      style={
        isMyMessage()
          ? { ...styles.buttonContainer, left: 30 }
          : { ...styles.buttonContainer }
      }
    >
      <TouchableOpacity
        onPress={() => {
          setReply({
            reply_username: message.username,
            reply_uid: message.uid,
            reply_msg: message.content,
          });
        }}
      >
        <View style={styles.button}>
          <MaterialCommunityIcons
            name="reply-outline"
            size={18}
            color="white"
            style={isMyMessage() && { transform: [{ rotateY: "180deg" }] }}
          />
        </View>
      </TouchableOpacity>
    </View>,
    <View
      style={
        isMyMessage()
          ? { ...styles.buttonContainer, left: 5 }
          : { ...styles.buttonContainer, right: 5 }
      }
    >
      <TouchableOpacity
        onPress={() => {
          swipeToDelete();
        }}
      >
        <View style={{ ...styles.button, backgroundColor: "red" }}>
          <Feather name="trash-2" size={14} color="white" />
        </View>
      </TouchableOpacity>
    </View>,
  ];

  return (
    <>
      <View style={styles.container}>
        <View
          style={[
            styles.messageBox,
            {
              backgroundColor: isMyMessage() ? "#c5ddff" : "white",
              marginLeft: isMyMessage() ? 50 : 0,
              marginRight: isMyMessage() ? 0 : 50,
            },
          ]}
        >
          {message.reply_msg !== null ? (
            <View
              style={{
                borderLeftWidth: 4,
                borderColor: "#006eff",
                paddingLeft: 8,
                marginBottom: 5,
              }}
            >
              <Text style={{ color: "#666666", marginBottom: 5 }}>
                {message.reply_uid === endUser.id ? `${endUser.name}` : "You"}
              </Text>
              <Text style={{ marginBottom: 5 }}>{message.reply_msg}</Text>
            </View>
          ) : null}
          <Text style={styles.message}>{message.content}</Text>
          <Text style={styles.time}>{timeFromNow(message.timestamp)}</Text>
        </View>
        {message.uid === user.id &&
        props.quantity === props.index + 1 &&
        message.read ? (
          <Text
            style={{
              textAlign: "right",
              fontSize: 14,
              fontWeight: "bold",
              letterSpacing: 1,
              color: "#ffffff",
              marginTop: 5,
              textShadowOffset: { width: 10, height: 10 },
              textShadowRadius: 100,
              textShadowColor: "#ffffff",
            }}
          >
            Seen
          </Text>
        ) : null}
      </View>
    </>
  );
};

export default ChatMessage;
