import React from 'react';


import { View, Text, Image, ImageSourcePropType } from "react-native";

export default function PostComponent({ Author, Date, Content, ImageUrl: imageUrl }: { Author: string, Date: string, Content?: string, ImageUrl?: ImageSourcePropType }) {
  return (

    <View className='flex flex-1'>


      <View style={{ borderWidth: 1, margin: 10, flexDirection: 'column', borderBottomRightRadius: 15 }}>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>

          <Text style={{
            color: 'gray', borderWidth: 1,
            borderBottomWidth:1,
            margin: 5,
            fontWeight: 'bold',
            fontSize:10

          }}>{Author}</Text>
          <Text style={{
            borderWidth: 1, fontStyle: 'italic',
            margin: 10
          }}>{Date}</Text>
        </View>

        <View style={{ borderWidth: 1, margin: 10, }}>
          <Text style={{
            margin: 5,
            fontSize: 10,
          }}>{Content}</Text>

          <Image
            source={imageUrl}
            style={{
              height: 100,
              width: 100,
              padding: 1,
              resizeMode: 'contain',
              marginStart: 5
            }}

          />

        </View>

      </View>
    </View>


  )


}

