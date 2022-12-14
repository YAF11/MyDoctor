import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  DummyDoctor10,
  DummyDoctor11,
  DummyDoctor6,
  DummyDoctor7,
  DummyDoctor9,
} from '../../assets';
import {Header, ListDoctor} from '../../components';
import {colors} from '../../utils';

export default function ChooseDoctor({navigation}) {
  return (
    <View style={styles.page}>
      <Header
        type="dark"
        title="Pilih Dokter Anak"
        onPress={() => navigation.goBack()}
      />
      <ListDoctor
        type="next"
        profile={DummyDoctor7}
        name="Alexander Jannie"
        desc="Wanita"
      />
      <ListDoctor
        type="next"
        profile={DummyDoctor6}
        name="John McParker Steve"
        desc="Pria"
      />
      <ListDoctor
        type="next"
        profile={DummyDoctor9}
        name="Nairobi Putri Hayza"
        desc="Wanita"
        onPress={() => navigation.navigate('Chatting')}
      />
      <ListDoctor
        type="next"
        profile={DummyDoctor10}
        name="James Rivillia"
        desc="Pria"
      />
      <ListDoctor
        type="next"
        profile={DummyDoctor11}
        name="Liu Yue Tian Park"
        desc="Wanita"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
});
