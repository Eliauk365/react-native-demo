import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

const numColumns = 2; // 列数
const itemWidth = Dimensions.get('window').width / numColumns;

const data = [
  {id: '1', image: require('../static/image/image1.jpg')},
  {id: '2', image: require('../static/image/image1.jpg')},
  {id: '3', image: require('../static/image/image1.jpg')},
  {id: '4', image: require('../static/image/image1.jpg')},
  {id: '5', image: require('../static/image/image1.jpg')},
  {id: '6', image: require('../static/image/image1.jpg')},
  {id: '7', image: require('../static/image/image1.jpg')},
  {id: '8', image: require('../static/image/image1.jpg')},
  // 添加更多数据...
];

const HomeScreen: React.FC<
  NativeStackScreenProps<AppParamList, 'Home'>
> = () => {
  const [items] = useState(data);

  const handleItemPress = (itemId: string) => {
    // 处理项目点击事件
    console.log('Item clicked:', itemId);
  };
  const renderItem = ({item}: {item: {id: string; image: number}}) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => handleItemPress(item.id)}>
      <Image source={item.image} style={styles.itemImage} />
    </TouchableOpacity>
  );
  useEffect(() => {
    // const hideSplashScreen = () => {
    //   setTimeout(() => {
    //     SplashScreen.hide();
    //   }, 2000); // 延迟2秒后隐藏启动页
    // };
    // hideSplashScreen();
  }, []);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={styles.container}>
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={numColumns}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: '#fff',
  },
  itemContainer: {
    width: itemWidth,
    marginBottom: 8,
  },
  itemImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
  },
});
export default HomeScreen;
