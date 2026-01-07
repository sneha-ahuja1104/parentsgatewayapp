import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useState } from 'react';
import { mockSignup } from '../services/api';

export default function SignupScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const signup = async () => {
    await mockSignup({ name, email });
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Parent Name" onChangeText={setName} style={styles.input} />
      <TextInput placeholder="Email" onChangeText={setEmail} style={styles.input} />
      <Button title="Sign Up" onPress={signup} />
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
