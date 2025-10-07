import React from "react";
import { Text, View, Image, ImageSourcePropType } from "react-native";

export default function PostComponent({
  author,
  date,
  content,
  image,
}: {
  author: string;
  content?: string;
  date: string;
  image?: string;
}) {
  return (
    <View className="flex flex-1">
      
        <View
      style={{
        borderColor: "#ddd",
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 15,
        backgroundColor: "#faebd7", 
        padding: 12,
      }}
    >
      
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 8,
        }}
      >
        <Text style={{ fontWeight: "bold" }}>{author}</Text>
        <Text style={{ fontWeight: "bold" }}>{date}</Text>
      </View>

      
      {content ? (
        <Text style={{ marginBottom: 10, textAlign: "justify" }}>{content}</Text>
      ) : null}



      <View style = {{
        justifyContent: "center",
        alignContent: 'center'
      }}>
        {image ? (
        <Image
          source={{ uri: image }}
          style={{
            width: "50%",
            height: 200,
            left: "30%",
            borderWidth: 1,
            borderColor: "#000",
            resizeMode: "cover",
          }}
        />
      ) : null}
      </View>
      
    </View>

    </View>
  );
}
