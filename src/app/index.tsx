import React, { useState } from "react";
import { ScrollView, Text, TextInput, View, Button } from "react-native";
import Post from "../Components/post";
import { PostData } from "@/module/postData";

export default function HomeScreen() {
  const [Posts, setPosts] = useState([]); // start with no posts

  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  function onPress() {
    if (!content.trim() || !author.trim()) {
      return; // stop if author or content is empty
    }

    const imageSource = imageUrl.trim() ? { uri: imageUrl } : undefined;

    // create a new post
    const newPost = new PostData(
      imageSource,
      content,
      author,
      new Date().toLocaleDateString()
    );

    // add to the list
    setPosts([...Posts, newPost]);

    // clear inputs
    setContent("");
    setAuthor("");
    setImageUrl("");

    // Total number of characters in all posts
    const totalCharacters = Posts.reduce((sum, post) => {
      // post.content might be empty or undefined
      return sum + (post.content ? post.content.length : 0);
    }, 0);
  }

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {/* Input Area */}
      <View
        style={{
          borderWidth: 1,
          borderColor: "lightgrey",
          borderRadius: 10,
          padding: 10,
          margin: 10,
          backgroundColor: "white",
        }}
      >
        <Text style={{ fontWeight: "bold", marginBottom: 3 }}>Content:</Text>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: "lightgrey",
            borderRadius: 5,
            padding: 6,
            marginBottom: 10,
          }}
          value={content}
          onChangeText={setContent}
          placeholder="Type your post content"
        />

        <Text style={{ fontWeight: "bold", marginBottom: 3 }}>Author:</Text>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: "lightgrey",
            borderRadius: 5,
            padding: 6,
            marginBottom: 10,
          }}
          value={author}
          onChangeText={setAuthor}
          placeholder="Enter author name"
        />

        <Text style={{ fontWeight: "bold", marginBottom: 3 }}>
          Image URL (optional):
        </Text>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: "lightgrey",
            borderRadius: 5,
            padding: 6,
            marginBottom: 10,
          }}
          value={imageUrl}
          onChangeText={setImageUrl}
          placeholder="Paste image link or leave empty"
        />

        <Button onPress={onPress} title="Add Post" />
      </View>

      {/* Post List */}
      <ScrollView style={{ flex: 1, paddingHorizontal: 10 }}>
        {Posts.map((post, index) => (
          <View key={index} style={{ marginBottom: 10 }}>
            <Post
              author={post.author}
              date={post.date}
              content={post.content}
              imageUrl={post.image}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
