import React from 'react';
import { View, Text, Image } from 'react-native';

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
      <View
        style={{
          backgroundColor: '#F3F4F6',
          marginBottom: 16,
          padding: 16,
          borderRadius: 12,
          shadowColor: '#000',
          shadowOpacity: 0.05,
          shadowRadius: 4,
          elevation: 2,
          width: '100%',
        }}>
        <Text>My First Post</Text>
      </View>
      <View
        style={{
          backgroundColor: '#F3F4F6',
          marginBottom: 16,
          padding: 16,
          borderRadius: 12,
          shadowColor: '#000',
          shadowOpacity: 0.05,
          shadowRadius: 4,
          elevation: 2,
          width: '100%',
        }}>
        <Text>My Second Post</Text>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93',
          }}
          style={{ width: 200, height: 200, borderRadius: 12 }}
        />
      </View>
      <View
        style={{
          backgroundColor: '#F3F4F6',
          marginBottom: 16,
          padding: 16,
          borderRadius: 12,
          shadowColor: '#000',
          shadowOpacity: 0.05,
          shadowRadius: 4,
          elevation: 2,
          width: '100%',
        }}>
        <Image
          source={{
            uri: 'https://plus.unsplash.com/premium_photo-1673292293042-cafd9c8a3ab3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww',
          }}
          style={{ width: 200, height: 200, borderRadius: 12 }}
        />
      </View>
    </View>
  );
}
