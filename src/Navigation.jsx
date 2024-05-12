import React, {useEffect} from 'react';
import {Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Init from './Init';
import Main from './Main';
import {
  LikedActive,
  LikedInActive,
  MainActive,
  MainInActive,
  SearchActive,
  SearchInactive,
} from './components/Svgs';
import Liked from './Liked';
import Search from './Search';
import Flexio from './Flexio';
import Cardio from './Cardio';
import Flexible from './Flexible';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const {height} = Dimensions.get('window');

export default function Navigator() {
  const [initialScreen, setInitialScreen] = React.useState('');

  const checkActivities = async () => {
    const trainings = await AsyncStorage.getItem('trainings');
    if (trainings) {
      setInitialScreen('TabScreen');
    } else {
      setInitialScreen('Init');
    }
  };

  useEffect(() => {
    checkActivities();
  }, []);

  if (initialScreen) {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={initialScreen}
          screenOptions={{headerShown: false}}>
          <Stack.Screen component={Init} name="Init" />
          <Stack.Screen component={TabScreen} name="TabScreen" />
          <Stack.Screen component={Flexio} name="Flexio" />
          <Stack.Screen component={Cardio} name="Cardio" />
          <Stack.Screen component={Flexible} name="Flexible" />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export function TabScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.6)',
        tabBarStyle: {
          flexDirection: 'row',
          height: height * 0.1,
          backgroundColor: '#FFFFFF',
        },
        tabBarLabelStyle: {
          fontSize: 13,
          fontFamily: 'Poppins-Regular',
        },
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Main"
        component={Main}
        options={{
          tabBarIcon: ({focused}) => {
            if (focused) {
              return <MainActive />;
            } else {
              return <MainInActive />;
            }
          },
        }}
      />

      <Tab.Screen
        name="Liked"
        component={Liked}
        options={{
          tabBarIcon: ({focused}) => {
            if (focused) {
              return <LikedActive />;
            } else {
              return <LikedInActive />;
            }
          },
        }}
      />

      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({focused}) => {
            if (focused) {
              return <SearchActive />;
            } else {
              return <SearchInactive />;
            }
          },
        }}
      />
    </Tab.Navigator>
  );
}
