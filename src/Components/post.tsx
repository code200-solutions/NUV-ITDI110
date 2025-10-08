import React from "react";
import { Text, View, Image, ImageSourcePropType } from "react-native";

export default function Post({
  imageUrl,
  content,
  author,
  date,
}: {
  imageUrl: ImageSourcePropType;
  content?: string;
  author?: string;
  date: string;
}): React.JSX.Element {
  return (
    <View
      style={{
        padding: 10,
        backgroundColor: "whitesmoke",
      }}
    >
      <View
        style={{
          //outside boarder
          borderWidth: 1,
          padding: 10,
          borderBottomRightRadius: 20,
          backgroundColor: "thistle",
        }}
      >
        <View
          style={{
            // alignment of writing
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              color: "grey",
              fontSize: 10,
              fontWeight: "bold",
              borderWidth: 1,
              borderColor: "black",
            }}
          >
            {author}
          </Text>

          <Text
            style={{
              fontSize: 10,
              fontStyle: "italic",
              borderWidth: 1,
              borderColor: "black",
            }}
          >
            {date}
          </Text>
        </View>

        {(content || imageUrl) && (
          <View
            style={{
              // inside boarder
              borderWidth: 1,
              padding: 5,
              marginTop: 5,
              paddingVertical: 10,
              backgroundColor: "white",
            }}
          >
            {/* {content ? (<Text>=== {content} ===</Text>) : null} */}

            {content && <Text> {content} </Text>}

            {imageUrl && (
              <Image
                source={imageUrl}
                style={{
                  height: 100,
                  width: 200,
                  resizeMode: "contain",
                }}
              />
            )}
          </View>
        )}
      </View>
    </View>
  );
}
