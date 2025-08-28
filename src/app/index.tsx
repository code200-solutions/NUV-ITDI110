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
      <Post text='My First Post' />
      <Post
        text='My Second Post'
        imageUri='https://images.unsplash.com/photo-1509042239860-f550ce710b93'
      />
      <Post imageUri='https://plus.unsplash.com/premium_photo-1673292293042-cafd9c8a3ab3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww' />
    </View>
  );
}
