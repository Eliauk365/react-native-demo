import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
const ProfileScreen: React.FC<{}> = () => {
  const user = {
    name: '张三',
    age: 24,
    occupation: '软件开发工程师',
    profileImage: require('../static/image/avatar.png'),
  };
  return (
    <View style={styles.container}>
      <Image source={user.profileImage} style={styles.profileImage} />
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.info}>{`${user.age} years old`}</Text>
      <Text style={styles.info}>{user.occupation}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'black',
  },
  info: {
    fontSize: 16,
    marginBottom: 4,
    color: 'black',
  },
});
export default ProfileScreen;
