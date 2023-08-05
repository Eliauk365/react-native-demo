import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
const UpgradeModalScreen: React.FC<
  NativeStackScreenProps<AppParamList, 'Upgrade'>
> = props => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00000066',
      }}
      onPress={() => props.navigation.goBack()}>
      <View
        style={{
          width: 300,
          height: 200,
          backgroundColor: '#fff',
          borderRadius: 5,
        }}>
        <Text style={{fontSize: 16, fontWeight: '700'}}>发现新版本</Text>
        <Text style={{fontSize: 14, color: '#999'}}>
          发现新版本，快来更新吧！！！
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default UpgradeModalScreen;
