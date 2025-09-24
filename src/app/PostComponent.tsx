import React from "react";
import { View, Text, Image, ImageSourcePropType, ViewStyle, ImageStyle } from "react-native";

export default function PostComponent({
  author,
  date,
  content,
  imageSource,
  imageStyle,
}: {
  author: string;
  date: String;
  content?: string;
  imageSource?: ImageSourcePropType;
  imageStyle?: ImageStyle;
}) {
  return (
    <View style={{ borderWidth: 2, borderBottomRightRadius: 20, margin: 6 , }}>
      <View
        style={{
          borderWidth: 0,
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10,
          borderBottomWidth: 2,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            padding: 10,
            margin: 10,
            borderWidth: 2,
            backgroundColor:'#247CDC',
            borderBottomLeftRadius:20,
            borderTopRightRadius:20,
            borderBottomRightRadius:20,
            borderTopLeftRadius:20,
          }}
        >
          {author}
        </Text>
        <Text
          style={{
            fontStyle: "italic",
            padding: 10,
            margin: 10,
            borderWidth: 2,
            backgroundColor:'#247CDC',
            borderBottomLeftRadius:20,
            borderTopRightRadius:20,
            borderBottomRightRadius:20,
            borderTopLeftRadius:20,
          }}
        >
          {date}
        </Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Text style={{ padding: 10, margin: 10, borderWidth: 2 }}>
          {content}
          <View>
            <Image source={imageSource} style={[{width:100, height: 100, alignItems:"center"},imageStyle]}/>
            </View>
        </Text>
      </View>
    </View>
  );
}
