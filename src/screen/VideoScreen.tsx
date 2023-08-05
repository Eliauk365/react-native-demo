import React, {useState} from 'react';
import Video from 'react-native-video';
import {StyleSheet, Text, View} from 'react-native';

const VideoScreen: React.FC<{}> = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>视频界面：需要等待加载完成后才能播放</Text>
      <Video
        source={{uri: 'https://media.w3.org/2010/05/sintel/trailer.mp4'}}
        style={styles.backgroundVideo}
        controls={true} // 是否显示控制条
        resizeMode="contain" // 视频缩放模式
      />
    </View>
  );
};

var styles = StyleSheet.create({
  backgroundVideo: {
    width: 300,
    height: 200,
  },
});
export default VideoScreen;
