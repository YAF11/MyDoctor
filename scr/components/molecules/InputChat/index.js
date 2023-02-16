import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Button} from '../../atoms';

export default function InputChat({
  value,
  onChangeText,
  onButtonPress,
  placeholder,
}) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
      <Button
        type="btn-icon-send"
        disable={value.length < 1}
        onPress={onButtonPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {padding: 16, flexDirection: 'row', backgroundColor: colors.white},
  input: {
    backgroundColor: colors.disable,
    padding: 14,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    maxHeight: 45,
  },
});
