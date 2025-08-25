import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { AnimatedFlashList } from '@shopify/flash-list';
import { Colors, FontStyles, vw } from '_styles';
import StoryProfile from './StoryProfile';

const Stories = () => {
  const _renderItem = React.useCallback(({ item, index }) => {
    return (
      <View>
        <StoryProfile
          source={{ uri: item.userImage }}
          storyType={item.storyType}
          seen={item.seen}
          resizeMode='stretch'
          removeBorder={index === 0}
          style={styles.profileStyle}
        />
        <Text ellipsizeMode="tail" style={styles.userNameStyle} numberOfLines={1}>{index === 0 ? 'Your Story' : item.userName}</Text>
      </View>
    );
  }, []);
  return (
    <View style={styles.container}>
      <AnimatedFlashList horizontal data={mockData} renderItem={_renderItem} />
    </View>
  );
};

export default React.memo(Stories);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: vw(8),
    marginTop: vw(24),
  },
  userNameStyle: {
    ...FontStyles.poppinsRegular_12,
    color: Colors.white,
    alignSelf: 'center',
    marginTop: vw(6),
    width: vw(90),
    textAlign: 'center',
  },
  profileStyle: {
    width: vw(110),
    height: vw(110),
    borderRadius: vw(55),
    marginHorizontal: vw(8),
  },
});

const mockData = [
  {
    _id: '1',
    seen: false,
    userName: 'alex_garcia',
    userImage: 'https://randomuser.me/api/portraits/men/1.jpg',
    createdAt: '2023-10-15T09:30:00Z',
    updatedAt: '2023-10-15T09:30:00Z',
    storyType: 'story'
  },
  {
    _id: '2',
    seen: false,
    userName: 'jane_doe',
    userImage: 'https://randomuser.me/api/portraits/women/2.jpg',
    createdAt: '2023-10-15T10:15:00Z',
    updatedAt: '2023-10-15T10:15:00Z',
    storyType: 'reel'
  },
  {
    _id: '3',
    seen: true,
    userName: 'mike_tyson',
    userImage: 'https://randomuser.me/api/portraits/men/3.jpg',
    createdAt: '2023-10-14T14:20:00Z',
    updatedAt: '2023-10-15T11:05:00Z',
    storyType: 'story'
  },
  {
    _id: '4',
    seen: false,
    userName: 'sarah_k',
    userImage: 'https://randomuser.me/api/portraits/women/4.jpg',
    createdAt: '2023-10-16T08:45:00Z',
    updatedAt: '2023-10-16T08:45:00Z',
    storyType: 'reel'
  },
  {
    _id: '5',
    seen: true,
    userName: 'david_lee',
    userImage: 'https://randomuser.me/api/portraits/men/5.jpg',
    createdAt: '2023-10-13T16:10:00Z',
    updatedAt: '2023-10-15T12:30:00Z',
    storyType: 'story'
  },
  {
    _id: '6',
    seen: false,
    userName: 'emily_c',
    userImage: 'https://randomuser.me/api/portraits/women/6.jpg',
    createdAt: '2023-10-16T13:20:00Z',
    updatedAt: '2023-10-16T13:20:00Z',
    storyType: 'reel'
  },
  {
    _id: '7',
    seen: true,
    userName: 'robert_p',
    userImage: 'https://randomuser.me/api/portraits/men/7.jpg',
    createdAt: '2023-10-12T11:40:00Z',
    updatedAt: '2023-10-15T14:15:00Z',
    storyType: 'story'
  },
  {
    _id: '8',
    seen: false,
    userName: 'lisa_m',
    userImage: 'https://randomuser.me/api/portraits/women/8.jpg',
    createdAt: '2023-10-16T15:50:00Z',
    updatedAt: '2023-10-16T15:50:00Z',
    storyType: 'reel'
  },
  {
    _id: '9',
    seen: true,
    userName: 'kevin_j',
    userImage: 'https://randomuser.me/api/portraits/men/9.jpg',
    createdAt: '2023-10-11T18:25:00Z',
    updatedAt: '2023-10-15T16:40:00Z',
    storyType: 'story'
  },
  {
    _id: '10',
    seen: false,
    userName: 'nina_s',
    userImage: 'https://randomuser.me/api/portraits/women/10.jpg',
    createdAt: '2023-10-16T17:30:00Z',
    updatedAt: '2023-10-16T17:30:00Z',
    storyType: 'reel'
  },
  {
    _id: '11',
    seen: false,
    userName: 'tom_h',
    userImage: 'https://randomuser.me/api/portraits/men/11.jpg',
    createdAt: '2023-10-16T18:10:00Z',
    updatedAt: '2023-10-16T18:10:00Z',
    storyType: 'story'
  },
  {
    _id: '12',
    seen: true,
    userName: 'olivia_w',
    userImage: 'https://randomuser.me/api/portraits/women/12.jpg',
    createdAt: '2023-10-10T20:05:00Z',
    updatedAt: '2023-10-15T19:20:00Z',
    storyType: 'reel'
  },
  {
    _id: '13',
    seen: false,
    userName: 'peter_b',
    userImage: 'https://randomuser.me/api/portraits/men/13.jpg',
    createdAt: '2023-10-16T19:45:00Z',
    updatedAt: '2023-10-16T19:45:00Z',
    storyType: 'story'
  },
  {
    _id: '14',
    seen: true,
    userName: 'sophia_l',
    userImage: 'https://randomuser.me/api/portraits/women/14.jpg',
    createdAt: '2023-10-09T22:15:00Z',
    updatedAt: '2023-10-15T21:10:00Z',
    storyType: 'reel'
  },
  {
    _id: '15',
    seen: false,
    userName: 'daniel_k',
    userImage: 'https://randomuser.me/api/portraits/men/15.jpg',
    createdAt: '2023-10-16T21:30:00Z',
    updatedAt: '2023-10-16T21:30:00Z',
    storyType: 'story'
  },
  {
    _id: '16',
    seen: true,
    userName: 'mia_r',
    userImage: 'https://randomuser.me/api/portraits/women/16.jpg',
    createdAt: '2023-10-08T23:50:00Z',
    updatedAt: '2023-10-15T22:40:00Z',
    storyType: 'reel'
  },
  {
    _id: '17',
    seen: false,
    userName: 'ryan_s',
    userImage: 'https://randomuser.me/api/portraits/men/17.jpg',
    createdAt: '2023-10-16T22:55:00Z',
    updatedAt: '2023-10-16T22:55:00Z',
    storyType: 'story'
  },
  {
    _id: '18',
    seen: true,
    userName: 'chloe_m',
    userImage: 'https://randomuser.me/api/portraits/women/18.jpg',
    createdAt: '2023-10-07T01:25:00Z',
    updatedAt: '2023-10-15T23:30:00Z',
    storyType: 'reel'
  },
  {
    _id: '19',
    seen: false,
    userName: 'jack_b',
    userImage: 'https://randomuser.me/api/portraits/men/19.jpg',
    createdAt: '2023-10-16T23:40:00Z',
    updatedAt: '2023-10-16T23:40:00Z',
    storyType: 'story'
  },
  {
    _id: '20',
    seen: true,
    userName: 'ava_t',
    userImage: 'https://randomuser.me/api/portraits/women/20.jpg',
    createdAt: '2023-10-06T02:45:00Z',
    updatedAt: '2023-10-16T00:50:00Z',
    storyType: 'reel'
  }
];
