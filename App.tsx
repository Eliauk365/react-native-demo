import React from 'react';
import AppNavigation from './src/routes';
import SplashScreen from 'react-native-splash-screen';

const App: React.FC<{}> = () => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      // 在两秒后执行的代码
      SplashScreen.hide();
      // 这里可以进行其他操作，例如导航到您的主屏幕或执行其他初始化逻辑
    }, 2000); // 两秒的延迟时间

    return () => clearTimeout(timer); // 清除定时器以避免内存泄漏
  }, []);
  return <AppNavigation />;
};
export default App;
