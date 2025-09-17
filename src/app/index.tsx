import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import PostComponent from './PostComponent';

const MyImage = require('./../../assets/images/12.jpg')

export default function HomeScreen() {
  return (
    <View>
          <Text style={{ fontWeight: 'bold', fontSize: 10, margin: 5 }}>POST</Text>
    

    
    <ScrollView style={{ height: 520 }}>
      <View style={{ margin: 5, justifyContent: 'space-between' }}>
        

      </View>


      < View className='flex flex-1'>

        <PostComponent Author='Tim' Date='15 -09-2025' Content='This is my first post'
          ImageUrl={MyImage}
        />
      
        <PostComponent Author='Cody' Date='15 -09-2025' Content='This is my first post'
        />

        <PostComponent Author='Roro' Date='13-09-2024' Content='Sea view'
          ImageUrl={{ uri: 'https://wallpaperaccess.com/full/4074027.jpg' }}
        />

        <PostComponent Author='Cody' Date='15 -09-2025' Content='Vanuatu, Port-Vila, Teouma' 
        />

        <PostComponent Author='Sang' Date='13-09-2024'
          ImageUrl={{ uri: 'https://www.turtlebaybeachhouse.com/wp-content/uploads/2017/03/dancers-with-masks.jpg' }}
        />

        <PostComponent Author='Manu' Date='15 -09-2025' Content='This is my first post'
        />

        <PostComponent Author='Mwulue' Date='13-09-2024' Content='Vanuatu custom'
          ImageUrl={{ uri: 'https://www.travelonline.com/vanuatu/culture-and-history/warriors-with-kids-31854-ws.jpg' }}
        />

        <PostComponent Author='KALL' Date='15 -09-2025' Content='This is my first post'
        />

        <PostComponent Author='Krek' Date='13-09-2024' Content='Sea view'
          ImageUrl={{ uri: 'https://blog.polynesianpride.co/wp-content/uploads/2024/07/Vanuatu-Culture.jpg' }}
        />

        <PostComponent Author='Finu' Date='15 -09-2025' Content='This is my first post'
        />

      </View>
      
    </ScrollView>
    </View>


  );

}

