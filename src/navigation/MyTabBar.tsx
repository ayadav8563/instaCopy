import React from 'react';
import { View, Platform, TouchableOpacity, Text, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import { Colors, IMAGES, vw } from '_styles';

function MyTabBar({ state, descriptors, navigation }) {
  let image = IMAGES.home;
  const { colors } = useTheme();
  const { buildHref } = useLinkBuilder();

  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

          switch (route.name) {
            case 'Home':
              image = IMAGES.home;
              break;
            case 'Search':
              image = IMAGES.search;
              break;
            case 'Upload':
              image = IMAGES.upload;
              break;
            case 'Reel':
              image = IMAGES.reel;
              break;
            case 'Profile':
              image = IMAGES.home;
              break;
          
            default:
              break;
          }

        console.log("check routes :: ", route, index);
        

        return (
          <TouchableOpacity
            key={route.key}
            activeOpacity={0.8}
            // href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, paddingBottom: Platform.OS === 'ios' ? vw(40) : vw(20), marginHorizontal: vw(16) }}
          >
            {/* <Text style={{ color: isFocused ? colors.primary : colors.text }}>
              {label}
            </Text> */}
            <Image source={image} style={{ width: vw(24), height: vw(24), tintColor: isFocused ? Colors.primaryBlue_700 : Colors.white }} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default MyTabBar;