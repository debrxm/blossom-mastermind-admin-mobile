import { auth, firestore } from "./config";

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  let userRef = "";
  if (userAuth.email === "bmiglobalapp@gmail.com") {
    userRef = firestore.collection(`admin`).where("name", "==", "BMI Admin");
  } else if (userAuth.email === "ozzycdes@gmail.com") {
    userRef = firestore.collection(`developer`).where("name", "==", "BMI Dev");
  }
  const snapShot = (await userRef.get()).docs[0];
  if (!snapShot.exists) {
    const { email, uid } = userAuth;
    const joined = new Date();
    const data = {
      id: uid,
      email,
      joined,
      ...additionalData,
    };
    try {
      await userRef.set(data);
    } catch (error) {
      auth.currentUser.delete();
      console.log("Error creating user profile");
    }
  }
  return userRef;
};
export const onSubmitSetupForm = async (id, data, setLoading) => {
  const userRef = firestore.doc(`users/${id}`);
  const snapShot = await userRef.get();
  if (snapShot.exists) {
    try {
      await userRef.update(data);
      setLoading(false);
    } catch (error) {
      console.log("Error setting up user profile");
    }
  }
  return userRef;
};
