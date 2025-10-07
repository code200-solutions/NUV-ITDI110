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
  image?: string
}) {
  return (
    <View className="flex flex-1">
      <View style ={{
        backgroundColor: "peachpuff"
      }}>
        <View style={{ marginStart: 10 }}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Post</Text>
          <Text style={{ textAlign: "center" }}>Live feeds</Text>
        </View>

        <View
          style={{
            borderWidth: 1,
            flexDirection: "column",
            margin: 10,
            borderBottomEndRadius: 10,
            height: 250,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 5,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 10,
                borderWidth: 1,
                padding: 5,
              }}
            >
              {author}
            </Text>
            <Text style={{ borderWidth: 1, padding: 5 }}>{date}</Text>
          </View>

          <View
            style={{
              borderWidth: 1,
              padding: 5,
              margin: 5,
              height: 200,
            }}
          >
            {content ? (
              <Text style={{ textAlign: "justify" }}>{content}</Text>
            ) : null}

            <View style={{ alignItems: "center", marginTop: 10 }}>
              {image ? (
                <Image
                  source={{ uri: image }}
                  style={{
                    height: 150,
                    width: 200,
                  }}
                />
              ) : null}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
