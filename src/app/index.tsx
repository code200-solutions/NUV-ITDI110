import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Pressable,
  ImageSourcePropType ,
} from "react-native";
import PostComponent from "./PostComponent";
class PostData {
  author: string;
  content: string;
  image: string;
  date: Date;

  constructor(
    author: string,
    content: string,
    image: string,
    date: Date
  ) {
    this.author = author;
    this.content = content;
    this.date = date;
    this.image = image;
  }
}

export default function HomeScreen() {
  let postlist: PostData[] =( [
    new PostData('ralph','this is my first post',require('./assets/add internetworking .png'),new Date()),
  ]);

  const [newPost, setNewPost] = useState<PostData[]>([]);
  const [author, setAuthor] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const[image,setimage] = useState<string>("");

  function onePressFunction() {
    const today = new Date().toLocaleDateString();
    const post = new PostData(author, content,image, new Date());

    setNewPost((prev) => [post, ...prev]);
    setAuthor("");
    setContent("");
    setimage("");
  }
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 56,
              padding: 10,
              backgroundColor: "#2CB0D4",
              fontFamily: "Franklin Gothic Medium",
              textAlign: "center",
            }}
          >
            POST
          </Text>
        </View>
        <View style={{ borderWidth: 2 }}>
          <View style = {{flexDirection: "row"}}>
            <View>
             <Text style ={{ 
                    borderWidth: 2,
                    backgroundColor: "#2CB0D4",
                    borderRadius: 10,
                    margin:10,
                    color: "white",
                    fontWeight: "bold",
                    padding:10 }}>Author</Text>
            </View>
            <View>
                <TextInput
                  placeholder="Author"
                  value={author}
                  onChangeText={setAuthor}
                  textAlignVertical="center"
                  style ={{padding:10, marginTop: 11,borderWidth:1}}
                />
              </View>
            </View>
            <View>
           
            
            <View style ={{flexDirection:"row"}}>
              <View>
                <Text
                  style={{
                    borderWidth: 2,
                    backgroundColor: "#2CB0D4",
                    borderRadius: 10,
                    color: "white",
                    fontWeight: "bold",
                    margin:10,
                    padding:10,

                  }}                >
                  Content
                </Text>
               </View>
                <View>
                  <TextInput
                    placeholder="Content"
                    textAlign="center"
                    value={content}
                    onChangeText={setContent}
                    style = {{padding:10, marginTop:11, borderWidth:1}}
                  />
                </View>
            </View>

          </View>
          <View style ={{flexDirection:"row"}}>  
             <View>
                <Text
                  style={{
                    borderWidth: 2,
                    backgroundColor: "#2CB0D4",
                    borderRadius: 10,
                    color: "white",
                    fontWeight: "bold",
                    margin:10,
                    padding:10,

                  }}                >
                  image
                </Text>
               </View>
                <View>
                  <TextInput
                    placeholder="image"
                    value={image}
                    onChangeText={setimage}
                    style = {{padding:10, marginTop:11, borderWidth:1}}
                  />
                </View>

          </View>

          <Pressable
            onPress={onePressFunction}
            style={{
              backgroundColor: "#2CB0D4",
              padding: 10,
              margin: 10,
              borderRadius: 10,
              borderWidth: 2,
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Add Post
            </Text>
          </Pressable>
        </View>
        {newPost.map((post, index) => (
          <PostComponent
            key={index}
            author={post.author}
            date={post.date.toLocaleDateString()}
            content={post.content}
          />
        ))}

        {/* <View style={{ gap: 5,backgroundColor:'#2CB0D4'}}>
          <PostComponent
            author="JUNIOR"
            date={"16.09.2025"}
            content="MY FIRST POST THIS YEAR "
            imageSource={require("./assets/add internetworking .png")} />

        </View> */}
      </ScrollView>
    </View>
  );
}
