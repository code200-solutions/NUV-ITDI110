import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Button,
} from "react-native";
import PostComponent from "../Postcomponent/Postcomponent";

class PostData {
  author: string;
  date: string;
  content: string;
  image: string;

  constructor(content, image, author, date) {
    this.content = content;
    this.image = image;
    this.author = author;
    this.date = date;
  }
}

export default function HomeScreen() {
  const [post, setPost] = useState([
    new PostData(
      "This is a post content",
      "https://images.squaremeal.co.uk/cloud/restaurants/1863/images/132885365-4945006018874207-587427774498580542-o_20022021060534.jpg?w=928&h=522&fit=crop",
      "Paul",
      "Wednesday 24 2024"
    ),
    new PostData(
      "Joseph is a chef who loves making pasta. In his kitchen, he carefully prepares fresh dough, rolling it out until it is smooth and thin. He enjoys shaping the pasta into spaghetti, fettuccine, or ravioli, depending on the dish he plans to cook.",
      "https://hips.hearstapps.com/hmg-prod/images/creamy-pasta-burrata-7-1656098638.jpeg",
      "Joseph",
      "Wednesday 3 2025"
    ),
    new PostData(
      "In the heart of Paris, Le Ciel Gourmet is known as one of the city’s finest restaurants. It offers elegant French cuisine crafted from fresh, seasonal ingredients, paired with world-class wines. With its warm atmosphere and stunning view of the Eiffel Tower, it gives guests an unforgettable dining experience.",
      "https://tse1.mm.bing.net/th/id/OIP._2-r3CsJXATmQaf6_-mubAHaJ3?cb=12&w=1000&h=1333&rs=1&pid=ImgDetMain&o=7&rm=3",
      "Pter",
      "Monday 2 2025"
    ),
  ]);

  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleAddPost = () => {
    if (!author || !date || !content) return;

    const newArr = post.concat(
      new PostData(content, imageUrl, author, date)
    );
    setPost(newArr);
    setAuthor("");
    setDate("");
    setContent("");
    setImageUrl("");
  };

  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 15,
        margin: 15,
        backgroundColor: "#fff",
      }}
    >
      <Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
          marginBottom: 10,
          textAlign: "center",
        }}
      >
        Create a Post
      </Text>

      <View
        style={{
          flexDirection: "row",
        }}>
        <View style={{ marginBottom: 12 }}>
          <Text style={{ marginBottom: 5 }}>Author</Text>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "#ccc",
              borderRadius: 5,
              padding: 8,
              width: 450,
            }}
            placeholder="Enter author..."
            value={author}
            onChangeText={setAuthor}
          />
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={{ marginBottom: 5, marginStart: "5%" }}>Date</Text>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "#ccc",
              borderRadius: 5,
              padding: 8,
              width: 450,
              marginStart: "5%",
            }}
            placeholder="Enter date..."
            value={date}
            onChangeText={setDate}
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View style={{ marginBottom: 12 }}>
          <Text style={{ marginBottom: 5 }}>Content</Text>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "#ccc",
              borderRadius: 5,
              padding: 8,
              width: 450,
            }}
            placeholder="Enter post content..."
            value={content}
            onChangeText={setContent}
            multiline
          />
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={{ marginBottom: 5, marginStart: "5%" }}>Image URL</Text>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "#ccc",
              borderRadius: 5,
              padding: 8,
              width: 450,
              marginStart: "5%",
            }}
            placeholder="Paste image link..."
            value={imageUrl}
            onChangeText={setImageUrl}
          />
        </View>
      </View>

      <View style={{ width: "40%" }}>
        <Button title="Add Post" onPress={handleAddPost} />
      </View>

      <ScrollView style={{ height: 650, marginTop: 15 }}>
        {post.map((post, index) => (
          <PostComponent
            key={index}
            author={post.author}
            date={post.date}
            content={post.content}
            image={post.image}
          />
        ))}
      </ScrollView>
    </View>
  );
}
