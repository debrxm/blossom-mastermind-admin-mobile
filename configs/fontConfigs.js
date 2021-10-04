import * as Font from "expo-font";
module.exports = () =>
  Font.loadAsync({
    "open-sans-bold": require("../assets/fonts/OpenSansCondensed-Bold.ttf"),
    "open-sans-light": require("../assets/fonts/OpenSansCondensed-Light.ttf"),
    "open-sans-italic": require("../assets/fonts/OpenSansCondensed-LightItalic.ttf"),

    sofia: require("../assets/fonts/Sofia-Regular.ttf"),
    "suma-r": require("../assets/fonts/Sumana-Regular.ttf"),
    "suma-b": require("../assets/fonts/Sumana-Bold.ttf"),
    "narrow-bold": require("../assets/fonts/Roboto-Bold.ttf"),
    "narrow-regular": require("../assets/fonts/Roboto-Regular.ttf"),
  });
