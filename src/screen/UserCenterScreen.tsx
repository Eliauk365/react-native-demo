import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Text, View, Button} from 'react-native';

const UserCenterScreen: React.FC<
  NativeStackScreenProps<AppParamList, 'UserCenter'>
> = props => {
  const userid = props.route.params?.userid;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>个人中心页面</Text>
      <Text>传递过来的userid：{userid}</Text>
      <Button
        title="个人中心"
        onPress={() =>
          props.navigation.push('UserCenter', {
            userid: Math.ceil(Math.random() * 10000000),
          })
        }
      />
      <Button
        title="设置"
        onPress={() => props.navigation.navigate('Setting')}
      />
    </View>
  );
};
export default UserCenterScreen;
