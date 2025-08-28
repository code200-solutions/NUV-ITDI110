import React from 'react';
import { View } from 'react-native';

import TextImagePost from '@/components/TextImagePost';
import ImagePost from '@/components/ImagePost';
import TextPost from '@/components/TextPost';

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
      <TextPost />
      <TextImagePost />
      <ImagePost />
    </View>
  );
}
