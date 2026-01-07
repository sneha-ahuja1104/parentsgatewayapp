import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useState } from 'react';
import { mockLogin } from '../services/api';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');

  const login = async () => {
    const response = await mockLogin(email);
    navigation.navigate('Profile', { parent: response.parent });
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Email" onChangeText={setEmail} style={styles.input} />
      <Button title="Login" onPress={login} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
});
