import React, {useMemo} from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import type {StackNavigationOptions} from '@react-navigation/stack'
import {useNavigationHorizontalInterpolator} from '../hooks'
import {GridStackParamList} from '../theme'

import HomeLeft from './HomeLeft'
import HomeRight from './HomeRight'
import Grid from './Grid'

import AddInCart from './AddInCart'
import AppearProduct from './AppearProduct'
import Buy from './Buy'
import DeleteInCart from './DeleteInCart'
import PL from './PL'
import Join from './Join'
import Leave from './Leave'
import Link from './Link'
import LoginForAPI from './LoginForAPI'
import Search from './Search'
import Tel from './Tel'
import Webview from './Webview'

const Stack = createStackNavigator<GridStackParamList>()

export default function GridNavigator() {
  const interpolator = useNavigationHorizontalInterpolator()
  const leftOptions = useMemo<StackNavigationOptions>(
    () => ({
      gestureDirection: 'horizontal-inverted',
      cardStyleInterpolator: interpolator,
    }),
    [],
  )
  const rightOptions = useMemo<StackNavigationOptions>(
    () => ({
      gestureDirection: 'horizontal',
      cardStyleInterpolator: interpolator,
    }),
    [],
  )
  return (
    <Stack.Navigator
      initialRouteName="Grid"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Grid" component={Grid} />

      <Stack.Screen name="AddInCart" component={AddInCart} />
      <Stack.Screen name="AppearProduct" component={AppearProduct} />
      <Stack.Screen name="Buy" component={Buy} />
      <Stack.Screen name="DeleteInCart" component={DeleteInCart} />
      <Stack.Screen name="PL" component={PL} />
      <Stack.Screen name="Join" component={Join} />
      <Stack.Screen name="Leave" component={Leave} />
      <Stack.Screen name="Link" component={Link} />
      <Stack.Screen name="LoginForAPI" component={LoginForAPI} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Tel" component={Tel} />
      <Stack.Screen name="Webview" component={Webview} />

      <Stack.Screen
        name="HomeLeft"
        component={HomeLeft}
        options={leftOptions}
      />
      <Stack.Screen
        name="HomeRight"
        component={HomeRight}
        options={rightOptions}
      />
    </Stack.Navigator>
  )
}
