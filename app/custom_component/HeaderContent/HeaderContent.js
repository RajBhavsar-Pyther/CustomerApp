import React from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import styles from "./HeaderContent.style";
import { useNavigation } from "@react-navigation/core";


const HeaderContent = props => {
  let navigation = useNavigation();
  const { title, subtitle, imageSource, imageOnPress } = props;
  return (
    <SafeAreaView>
          {console.log("imageOnPress-Custom",imageOnPress)}
      <View style={styles.container}>
        <View style={styles.rightContainer}>
          <Text style={styles.dateTextStyle}>{title}</Text>
        </View>
        <View style={styles.leftContainer}>
          {imageSource && (
            <TouchableOpacity onPress={imageOnPress}>
              <Image source={imageSource} style={styles.myProfileImageStyle} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

HeaderContent.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  imageOnPress: PropTypes.func
};

HeaderContent.defaultProps = {
  title: "Today",
  subtitle: "Have a nice day",
  imageOnPress: () => {},
  imageSource: require("../../icons/BLIV_LOGO_white.png")
};

export default HeaderContent;
