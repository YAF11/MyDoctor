import React, {useEffect} from 'react';
import {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  DummyDoctor10,
  DummyDoctor11,
  DummyDoctor6,
  DummyDoctor7,
  DummyDoctor9,
} from '../../assets';
import {Header, List} from '../../components';
import {Firebase} from '../../config';
import {colors} from '../../utils';

export default function ChooseDoctor({navigation, route}) {
  const [listDoctor, setListDoctor] = useState([]);
  const itemCategory = route.params;

  useEffect(() => {
    callDoctorByCategory(itemCategory.category);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const callDoctorByCategory = category => {
    Firebase.database()
      .ref('doctors/')
      .orderByChild('category')
      .equalTo(category)
      .once('value')
      .then(res => {
        console.log('data list doctor: ', res.val());
        if (res.val()) {
          const oldData = res.val();
          const data = [];
          Object.keys(oldData).map(key => {
            data.push({
              id: key,
              data: oldData[key],
            });
          });
          setListDoctor(data);
        }
      });
  };
  return (
    <View style={styles.page}>
      <Header
        type="dark"
        title={`Pilih ${itemCategory.category}`}
        onPress={() => navigation.goBack()}
      />
      {listDoctor.map(doctor => {
        return (
          <List
            key={doctor.id}
            type="next"
            profile={{uri: doctor.data.photo}}
            name={doctor.data.fullName}
            desc={doctor.data.gender}
            onPress={() => navigation.navigate('DoctorProfile', doctor)}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
});
