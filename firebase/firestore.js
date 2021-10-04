import { firestore } from "./config";
import { SendNotification } from "../utils/helper";

// const salesRef = firestore.doc(`sales/${userId}/sales/${id}`);
// const userRef = firestore.doc(`users/${userId}`);
const adminRef = firestore.doc(`admins/blossom_mastermind`);

export const UpdateDatabaseNotification = (ownerId, notificationData) => {
  const notificationRef = firestore
    .collection("notifications")
    .doc(ownerId)
    .collection("notifications")
    .doc();
  try {
    notificationRef.set({
      ...notificationData,
      created_at: Date.now(),
      viewed: false,
    });
  } catch (error) {
    console.log(error);
  }
};
export const UpdateNotification = (
  ownerId,
  notificationData,
  pushNotificationData
) => {
  const notificationRef = firestore
    .collection("notifications")
    .doc(ownerId)
    .collection("notifications")
    .doc();
  try {
    notificationRef.set({
      ...notificationData,
      created_at: Date.now(),
      viewed: false,
    });
    SendNotification(pushNotificationData);
  } catch (error) {
    console.log(error);
  }
};

export const OnAddPackage = async (investmentPackage, cleanUp) => {
  const batch = firestore.batch();
  const packageRef = firestore
    .collection("packages")
    .doc(investmentPackage.code);
  batch.set(packageRef, investmentPackage);
  try {
    await batch.commit();
    cleanUp();
  } catch (error) {
    console.log("error creating sales", error.message);
    cleanUp();
  }
};

// SendNotification("pushNotificationData");
// UpdateNotification("userToNotifyId", "notificationDataForDatabase", "phoneNotificationData")
// UpdateNotification(
//   ownerId,
//   { title: "Product Alert!!!", message },
//   {
//     token: userSnap.data().notificationToken,
//     channelId: "productAlert",
//     title: "Product Alert!!!",
//     body: message,
//   }
// );
