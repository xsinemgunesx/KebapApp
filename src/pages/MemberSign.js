import React, {useState} from 'react';
import {SafeAreaView, View, Text, Alert} from 'react-native';

import Input from '../components/Input';
import Button from '../components/Button';

function MemberSign({navigation}) {
  const [userName, setUserName] = useState(null);
  const [userSurname, setUserSurname] = useState(null);
  const [userAge, setUserAge] = useState(null);
  const [userMail, setUserMail] = useState(null);
  const [userHometown, setHometown] = useState(null);

  function handleSubmit() {
    if (!userName || !userSurname || !userAge || !userMail || !userHometown) {
      Alert.alert('Kebap Fitness Salonu', 'Bilgiler boş bırakılmaz!');
      return;
    }

    const user = {
      userName,
      userSurname,
      userAge,
      userMail,
      userHometown,
    };
    navigation.navigate('MemberResultScreen', {user});
  }

  return (
    <SafeAreaView>
      <Input
        label="Üye Adı"
        placeholder="Üye ismini giriniz..."
        onChangeText={setUserName}
      />
      <Input
        label="Üye Soyadı"
        placeholder="Üye soyismini giriniz... "
        onChangeText={setUserSurname}
      />
      <Input
        label="Üye yaşı"
        placeholder="Üyenin yaşını giriniz..."
        onChangeText={setUserAge}
      />
      <Input
        label="Üye E-posta"
        placeholder="Üyenin e-posta adresini giriniz..."
        onChangeText={userMail}
      />
      <Input
        label="Üye Memlekti"
        placeholder="Üyenin memleketini giriniz..."
        onChangeText={setHometown}
      />
      <Button text="Kaydı tamamla" onPress={handleSubmit} />
    </SafeAreaView>
  );
}

export default MemberSign;
