
import React from "react";
import { ScrollView, View, Text } from "react-native";
import PostComponent from "./PostComponent";
class NewPost {
  author: string;
  content : string;
  

constructor(author: string, content: string) {
  this.author = author;
  this.content = content;  
}
}

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 56, padding: 10 , backgroundColor:'#2CB0D4',
          fontFamily:'Franklin Gothic Medium', textAlign:'center',  
          }}>
            POST
          </Text>
        </View>
        <View style={{ gap: 5,backgroundColor:'#2CB0D4'}}>
          <PostComponent
            author="JUNIOR"
            date={"16.09.2025"}
            content="MY FIRST POST THIS YEAR "
            imageSource={require("./assets/add internetworking .png")} />

        </View>
      </ScrollView>
    </View>
  );
}
