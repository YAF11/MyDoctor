import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DummyNews1} from '../../../assets';

export default function NewsItem() {
  return (
    <View>
      <Text>Is it safe to stay at home during coronavirus?</Text>
      <Text>Today</Text>
      <Image source={DummyNews1} />
    </View>
  );
}

const styles = StyleSheet.create({});
