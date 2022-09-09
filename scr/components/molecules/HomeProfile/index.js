import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ILNullPhoto} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function HomeProfile() {
  return (
    <View style={styles.container}>
      <Image source={ILNullPhoto} style={styles.avatar} />
      <View>
        <Text style={styles.name}>Yafi' Irsyad</Text>
        <Text style={styles.profession}>Mobile Dev</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
  avatar: {width: 46, height: 46, borderRadius: 46 / 2, marginRight: 12},
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  profession: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
  },
});
