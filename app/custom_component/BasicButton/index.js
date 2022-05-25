import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

const BasicButton = ({width, color = 'blue', ...props}) => (
  <TouchableOpacity {...props} buttonStyle={{width, backgroundColor: color}} />
);

export default BasicButton;
