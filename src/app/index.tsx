import React from 'react';
import { View } from 'react-native';

import Post from '@/components/Post';

export default function HomeScreen() {
  return (
    <View
      style={{
        alignItems: 'center',
        backgroundColor: '#E5E7EB',
        paddingVertical: 20,
        paddingHorizontal: 40,
        height: '100%',
      }}>
      <Post />
      <Post />
      <Post />
    </View>
  );
}
