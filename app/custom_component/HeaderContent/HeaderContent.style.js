import { Dimensions } from "react-native";
import {
  isAndroid,
  getStatusBarHeight
} from "@freakycoder/react-native-helpers";
const { width } = Dimensions.get("window");

export default {
  container: {
    width,
    display:'flex',
    flexDirection: "row-reverse",
   justifyContent:'flex-end',
   alignItems:'flex-start',
    marginTop: isAndroid ? getStatusBarHeight() + 8 : 8
  },
  leftContainer: {
    marginTop:20,
    marginLeft:20,
    borderWidth:0,
    borderColor:"#000"
  },
  dateTextStyle: {
    fontSize: 28,
    color: "white",
    fontWeight: "bold"
  },
  rightContainer: {
    marginTop:20,
    marginLeft: 15,
    top:0,
    alignSelf:'center',
    borderWidth:0,
    borderColor:"#000"
  },
  ticketImageStyle: {
    top: 8,
    right: 20,
    width: 35,
    height: 35
  },
  myProfileImageStyle: {
    width: 45,
    height: 45,
    borderRadius: 30 / 5
    
  }
};
