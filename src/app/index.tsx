import React, { useState } from 'react';
import { ScrollView, Text, View, TextInput, Button } from 'react-native';
import Post from '../components/post';
import { PostData } from '@/entities/PostData';

const image1 = require('../assets/P5.jpg');
const image2 = require('../assets/P1.jpg');
const image3 = require('../assets/P2.webp')

export default function HomeScreen() {
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  const [posts, setPosts] = useState([
    new PostData(undefined, 'To change directories (cd) into a folder with spaces in its name, you need to escape the spaces by adding a backslash (\) before each space.', 'Tim', '16-09-2025'),
    new PostData(image2, undefined, 'Ralph', '16-09-2025'),
    new PostData(undefined, "Noxa i tet!!", 'Juju', '16-09-2025'),
    new PostData(image3, "Mon Lapin . lol ", 'Ralph', '16-09-2025')
  ]);

  const handleAddPost = () => {
    if (!content && !image) return;

    const newPost = new PostData(
      image || undefined,
      content || '',
      '',
      new Date().toLocaleDateString()
    );
    setPosts([...posts, newPost]);
    setContent('');
    setImage('');
    
  };
 
  

  return (
    <View style={{ flex: 1, padding: 3 }}>
      <View style={{ borderWidth: 1, padding: 3, marginBottom: 10, }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
          <Text style={{ marginRight: 10 }}>Content:</Text>
          <TextInput
            value={content}
            onChangeText={setContent}
            placeholder="Type..."
            style={{
              borderWidth: 1,
              flex: 1,
              padding: 3,
              borderRadius: 4
            }}
          />
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
          <Text style={{ marginRight: 10 }}>Image:</Text>
          <TextInput
            value={image}
            onChangeText={setImage}
            placeholder="Insert..."
            style={{
              borderWidth: 1,
              flex: 1,
              padding: 3,
              borderRadius: 4
            }}
          />
        </View>
           <View style = {{
            height: 50,
            width: "40%",
            top: "5%",
            left: "30%"
            
           }}>
            <Button title="ADD" onPress={handleAddPost} />
           </View> 
      </View>

          

      <ScrollView style={{ flex: 1 }}>
        <View style={{ borderWidth: 1, backgroundColor: 'lightgrey', padding: 10 }}>
          <Text style={{ color: 'blue', marginBottom: 10 }}>POSTS</Text>
          {posts.map((post, index) => (
            <Post
              key={index}
              author={post.author}
              date={post.date}
              content={post.content}
              imageUrl={post.image}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
