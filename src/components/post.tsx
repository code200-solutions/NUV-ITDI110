import React from 'react';
import { Text, View,Image, ImageSourcePropType } from 'react-native'
export default function Post({ author, date, content ,imageUrl}: { author: string, date: String, content?: string ,imageUrl?:ImageSourcePropType}) {
  return (
    <View style={{ borderWidth: 1, flexDirection: 'column', borderBottomRightRadius: 5, }} >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white' }}>
        <Text style={{ color: 'grey', fontWeight: 'bold', }}>{author}</Text>
        <Text style={{ fontStyle: 'italic', borderWidth: 1 }}>{date}</Text>
      </View>
      <View>
        <Text>{content && (<Text> {content}</Text>)}</Text>
        <View style={{alignItems:'center'}}>

        {imageUrl &&
        <Image source={imageUrl} style={{ width: 100, height: 100, }} />
}
        </View>
      </View>
    </View>
  );
}