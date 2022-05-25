import { Dimensions } from "react-native";
import {
  isAndroid,
  getStatusBarHeight
} from "@freakycoder/react-native-helpers";
const { width } = Dimensions.get("window");

export default {
  container: {
    width,
    flexDirection: "row",
    marginTop: isAndroid ? getStatusBarHeight() + 8 : 8
  },
  leftContainer: {
    left: 16,
    position: "absolute",
    flexDirection: "row",
    // top:-10
  },
  dateTextStyle: {
    fontSize: 32,
    color: "white",
    fontWeight: "bold"
  },
  saluteTextStyle: {
    fontSize: 14,
    color: "white",
    fontWeight: "500"
  },
  rightContainer: {
    marginTop:6,
    right: 16,
    position: "absolute",
    // top:-8
  },
  ticketImageStyle: {
    top: 8,
    right: 20,
    width: 35,
    height: 35
  },
  myProfileImageStyle: {
    width: 80,
    height: 80,
    borderRadius:  80/5,
     
  }
};
