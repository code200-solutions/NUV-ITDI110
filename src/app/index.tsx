import React from 'react';
import { View, Text, Image } from 'react-native';

export default function HomeScreen() {
  return (
    <View>
      <View>
        <Text>My First Post</Text>
      </View>
      <View>
        <Text>My Second Post</Text>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93',
          }}
        />
      </View>
    </View>
  );
}
