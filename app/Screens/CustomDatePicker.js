import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, Platform,Pressable} from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import moment from 'moment';

const DatePicker = (props) => {

  const [isPickerShow, setIsPickerShow] = useState(false);

  const showPicker = () => {
    setIsPickerShow(true);
  };
  const hidePicker = () => {
    if (Platform.OS === 'android') {
      setIsPickerShow(false);
    }  
  };

  return (
    <View>
      {/* Display the selected date */}
      <Pressable style={[styles.pickedDateContainer,props.dateContainerStyle]} onPress={showPicker} disabled={props.disabled ? props.disabled : !isPickerShow ? false : true}>
        <Text style={[styles.pickedDate,props.dateTextStyle,{color:(!props.date && props.placeholder) ? "#999" : props.dateTextStyle.color}]}>{props.date ? moment(props.date).format(props?.format ? props.format : 'YYYY-MM-DD') : props.placeholder}</Text>
       <FontAwesome5 name={props.customIcon ? props.customIcon :'calendar' } size={props.iconSize ? props.iconSize : 20} color={'#000'} />
      </Pressable>

      {/* The date picker */}
      {isPickerShow && (
        <DateTimePicker
          value={props.date ? props.date : new Date()}
          mode={props.mode}
          display={props.display}
          maximumDate={props.maxDate}
          onChange={(event,value)=>{
            hidePicker()
            props.onDateChange(event,value);
          }}
          style={[styles.datePicker,props.customStyle]}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  pickedDateContainer: {
    padding: 10,
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth:1,
    borderColor:'blue',
    width:140,
  },
  pickedDate: {
    fontSize: 18,
    color: 'black',
  },
  btnContainer: {
    padding: 30,
  },
  // This only works on iOS
  datePicker: {
    width: 320,
    height: 260,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});

export default DatePicker;