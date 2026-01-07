import { View, Text, StyleSheet } from 'react-native';

export default function ProfileScreen({ route }) {
  const { parent } = route.params;

  return (
    <View style={styles.container}>
      <Text>Name: {parent.name}</Text>
      <Text>Email: {parent.email}</Text>
      <Text>Child: {parent.childName}</Text>
      <Text>Class: {parent.class}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
});
