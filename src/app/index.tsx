import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, Pressable, ImageSourcePropType } from 'react-native';
import PostComponent from './PostComponent';

type NewPost = {image: ImageSourcePropType; content: string; author: string};
const MyImage = require('./../../assets/images/12.jpg')


export default function HomeScreen() {
  let postList: NewPost[] = [];
  const [newPost, setNewPost] = useState<NewPost[]>([]);
  const [content, setContent] =useState<string>('');
  const [author, setAuthor] = useState<string>('');


  function onPressFunction(){
    //console.log('Hello')
    // postList.push({
    //   image : MyImage,
    //   content:'hey there'
    
    // });
    setNewPost((prev) => [...prev, {
      image: MyImage,
      content: content,
      author: author

    }]);
    //console.log(postList);
  }

  return (
    <View>
          <Text style={{ fontWeight: 'bold', fontSize: 10, margin: 5 }}>POST</Text>
    
     <View>
      <View style={{flexDirection:'row'}}>
        <Text>Content</Text>
        <TextInput placeholder='TEXT' value={content} onChangeText={setContent}/>
      </View>

        <View style={{ flexDirection: 'row' }}>
          <Text>Author</Text>
          <TextInput placeholder='TEXT' value={author} onChangeText={setAuthor} />

          <TextInput/>

        </View>

        <Pressable onPress={onPressFunction}>
          <Text>ADD</Text>
        </Pressable>
        

     </View>
    
     <ScrollView style={{ height: 520, flex: 1 }}>
        {newPost && newPost.map((post) => (<View key={post.content}><PostComponent Author= {post.author} Date='15 -09-2025'
          ImageUrl={post.image}
          Content={post.content}

        /></View>))}
        {/* {postList && postList.map((post) => (<PostComponent Author='Tim' Date='15 -09-2025'
          ImageUrl={post.image}
          Content={post.content}

        />))} */}
       
      {/* < View className='flex flex-1'>

        <PostComponent Author='Tim' Date='15 -09-2025' Content='This is my first post'
          ImageUrl={MyImage}
        />
      
        <PostComponent Author='Cody' Date='15 -09-2025' Content='This is my first post'
        />

        <PostComponent Author='Roro' Date='13-09-2024' Content='Sea view'
          ImageUrl={{ uri: 'https://wallpaperaccess.com/full/4074027.jpg' }}
        />

        <PostComponent Author='Cody' Date='15 -09-2025' Content='Vanuatu, Port-Vila, Teouma' 
        />

        <PostComponent Author='Sang' Date='13-09-2024'
          ImageUrl={{ uri: 'https://www.turtlebaybeachhouse.com/wp-content/uploads/2017/03/dancers-with-masks.jpg' }}
        />

        <PostComponent Author='Manu' Date='15 -09-2025' Content='This is my first post'
        />

        <PostComponent Author='Mwulue' Date='13-09-2024' Content='Vanuatu custom'
          ImageUrl={{ uri: 'https://www.travelonline.com/vanuatu/culture-and-history/warriors-with-kids-31854-ws.jpg' }}
        />

        <PostComponent Author='KALL' Date='15 -09-2025' Content='This is my first post'
        />

        <PostComponent Author='Krek' Date='13-09-2024' Content='Sea view'
          ImageUrl={{ uri: 'https://blog.polynesianpride.co/wp-content/uploads/2024/07/Vanuatu-Culture.jpg' }}
        />

        <PostComponent Author='Finu' Date='15 -09-2025' Content='This is my first post'
        />

      </View> */}
      
     </ScrollView>
    </View>


  );

}

