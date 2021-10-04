import { AntDesign, Ionicons } from "@expo/vector-icons";
import React, { useCallback, useEffect, useState } from "react";
import {
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Dimensions,
} from "react-native";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { useNavigation } from "@react-navigation/native";
import { firestore } from "../../firebase/firebase.utils";

import styles from "./styles";

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};
const ReportBug = () => {
  // const currentUser = useSelector((state) => state.user.currentUser);
  const currentUser = {
    id: "msvywgjsh",
    first_name: "Sam",
    last_name: "Jackson",
    username: "sxm",
    email: "ibrahxxm@gmail.com",
    phone: "08117671213",
  };
  const [bugReport, setBugReport] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);
  const [reported, setReported] = useState(false);
  const [issues, setIssues] = useState([]);

  const navigation = useNavigation();
  const onReport = useCallback(() => {
    setReported(true);
    wait(2000).then(() => setReported(false));
  }, []);
  useEffect(() => {
    fetchIssues();
  }, []);
  async function fetchIssues(params) {
    const snapshot = await firestore.collection("bug_reports").get();
    const issueArr = [];
    snapshot.docs.forEach((item) => {
      issueArr.push(item.data());
      if (issueArr.length === snapshot.docs.length) {
        console.log(issueArr.length, snapshot.docs.length);
        setIssues(issueArr);
      }
    });
  }
  const onBugReport = async () => {
    setLoading(true);
    const id = uuidv4().split("-").join("");
    if (bugReport.trim() === "") {
      console.log("Tell us about the issue");
      return;
    }
    try {
      const newBugReport = {
        id,
        issue: bugReport,
        userID: currentUser.id,
        username: currentUser.username,
        votes: {},
        count: 0,
      };
      firestore.collection("bug_reports").doc(id).set(newBugReport);
      setLoading(false);
      setBugReport("");
      onReport();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <View style={styles.header}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons
                name="chevron-back-outline"
                size={24}
                color="black"
                style={{ marginRight: 10 }}
              />
            </View>
          </TouchableOpacity>
        </View>
        <Text style={{ ...styles.title, fontSize: 14 }}>Bug Report</Text>
      </View>

      <View style={styles.container}>
        <TextInput
          value={bugReport}
          onChangeText={setBugReport}
          numberOfLines={5}
          placeholder={"What went wrong?"}
          style={styles.textInput}
        />
        {reported ? (
          <View style={{ ...styles.centerContainer, opacity: 0.7 }}>
            <Text style={{ fontSize: 18, color: "#111111" }}>
              Thanks for your support!
            </Text>
          </View>
        ) : null}
        <View style={styles.trendingIssues}>
          <View style={[styles.trendingIssuesHead, { borderBottomWidth: 0 }]}>
            <Text
              style={[
                styles.trendingIssuesHeadText,
                { textTransform: "none", fontSize: 15, fontWeight: "500" },
              ]}
            >
              Upvote an existing issue if it matches with the one you're
              reporting
            </Text>
          </View>
          <View style={styles.trendingIssuesHead}>
            <Text style={styles.trendingIssuesHeadText}>Trending Issues</Text>
          </View>
          <View style={styles.issues}>
            <FlatList
              contentContainerStyle={{}}
              scrollEnabled={false}
              snapToInterval={Dimensions.get("screen").width}
              snapToAlignment={"start"}
              decelerationRate={"fast"}
              data={issues}
              initialScrollIndex={0}
              initialNumToRender={3}
              keyExtractor={(item, index) => index.toString()}
              renderItem={(item) => <IssuePreview issue={item.item} />}
            />
          </View>
        </View>
        <TouchableOpacity onPress={onBugReport}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Report</Text>
            {loading && (
              <Image
                style={{ marginTop: 2, marginLeft: 5, width: 18, height: 18 }}
                source={require("../../assets/loader.gif")}
              />
            )}
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ReportBug;

function IssuePreview({ issue }) {
  // const currentUser = useSelector((state) => state.user.currentUser);
  const currentUser = {
    id: "msvywgjsh",
    first_name: "Sam",
    last_name: "Jackson",
    username: "sxm",
    email: "ibrahxxm@gmail.com",
    phone: "08117671213",
  };
  const [hasVoted, setHasVoted] = useState(
    issue.votes[currentUser.id] === true
  );
  const [voteCount, setvoteCount] = useState(0);
  useEffect(() => {
    getVotesCount();
  }, [voteCount]);
  function getVotesCount() {
    const count = Object.values(issue.votes).filter((v) => v).length;
    setvoteCount(count);
  }
  const onUpVote = () => {
    const currentUserId = currentUser.id;
    const hasVoted = issue.votes[currentUser.id] === true;
    if (hasVoted) {
      issue.votes[currentUserId] = false;
      let votes = issue.votes;
      setvoteCount(voteCount - 1);
      firestore
        .collection("bug_reports")
        .doc(issue.id)
        .update({ count: voteCount - 1, votes });
      setHasVoted(!hasVoted);
    } else if (!hasVoted) {
      issue.votes[currentUserId] = true;
      let votes = issue.votes;
      setvoteCount(voteCount + 1);
      firestore
        .collection("bug_reports")
        .doc(issue.id)
        .update({ count: voteCount + 1, votes });
      setHasVoted(!hasVoted);
    }
  };
  return (
    <View style={styles.issuePreview}>
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: "bold",
              color: "#222222",
              textTransform: "uppercase",
            }}
          >
            {voteCount} Upvote{voteCount > 1 && "s"}
          </Text>
          <TouchableOpacity style={styles.iconContainer} onPress={onUpVote}>
            <AntDesign
              name={hasVoted ? "like1" : "like2"}
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={{ fontSize: 14, color: "#222222" }}>{issue.issue}</Text>
    </View>
  );
}
