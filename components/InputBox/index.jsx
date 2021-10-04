import { MaterialCommunityIcons, Entypo, Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { v4 as uuidv4 } from "uuid";
import { firestore } from "../../firebase/config";
import styles from "./styles";

const InputBox = (props) => {
  const { currentChannel } = props;
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState([]);
  const [replyingMessage, setReplyingMessage] = useState(false);
  useEffect(() => {}, [message]);

  async function sendMessage() {
    const { getMessagesRef, messages, setMessages } = props;
    setMessages([...messages, createMes]);

    send();

    async function send() {
      if (message.trim() !== "") {
        setLoading(true);
      } else {
        setError(errors.concat({ message: "Add a message" }));
      }
    }
  }

  const onSendPress = async () => {
    const messageId = uuidv4().split("-").join("");
    setLoading(true);
    if (message.trim() === "") {
      setError(errors.concat({ message: "Add a message" }));
      return;
    }
    const messageData = {
      id: messageId,
      message,
      timestamp: Date.now(),
      viewers: {},
    };
    const communicationRef = firestore.doc(
      `communication/${currentChannel}/${messageId}`
    );
    try {
      await communicationRef.set(messageData);
      setMessage("");
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <View style={{ width: "100%", position: "relative" }}>
        <View style={styles.container}>
          <View
            style={
              !message
                ? styles.mainContainer
                : { ...styles.mainContainer, alignItems: "flex-end" }
            }
          >
            <TextInput
              placeholder={"Type a message"}
              style={styles.textInput}
              multiline
              autoFocus={true}
              value={message}
              onChangeText={setMessage}
            />
          </View>
          <TouchableOpacity onPress={!loading && onSendPress}>
            <View style={styles.buttonContainer}>
              <Ionicons name="ios-send" size={24} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default InputBox;
