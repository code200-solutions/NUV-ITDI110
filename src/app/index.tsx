import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, Pressable, ImageSourcePropType } from 'react-native';
import PostComponent from './PostComponent';

// type NewPost = {image: ImageSourcePropType; content: string; author: string};
class PostData {
  author:string;
  content:string;
  image: ImageSourcePropType;
  date : string;

  constructor(author: string, content: string, image:ImageSourcePropType, date:string){
    this.author = author;
    this.content = content;
    this.image = image;
    this.date = date;

  }
}
const MyImage = require('./../../assets/images/12.jpg')


export default function HomeScreen() {
  let postList: PostData[] = [];
  const [newPost, setNewPost] = useState<PostData[]>([]);
  const [author, setAuthor] =useState<string>('');
  const [content, setContent] = useState<string>('');
  


  function onPressFunction(){
    const today = new Date().toLocaleDateString();
    const post = new PostData(author, content, MyImage,today)
    //console.log('Hello')
    // postList.push({
    //   image : MyImage,
    //   content:'hey there'
    
    // });
    setNewPost((prev) => [...prev, post])
    
      setAuthor('');
      setContent('');
      

    }

    // function postToDelete(index:number){
    //   setNewPost((prev) => prev.filter((_, i) => i! == index));
    // }
    // //console.log(postList);
  

  return (
    <View style={{backgroundColor:'#f1e8edff'}}>
          <Text style={{ fontWeight: 'bold', fontSize: 10, margin: 5 }}>POST</Text>
    
     <View>
      <View style={{flexDirection:'row', margin:5}}>
        <Text style={{justifyContent:'space-between',borderWidth:1}}>Content</Text>

          <View style={{justifyContent:'space-between', paddingLeft:10}}>
            <TextInput placeholder='TEXT' value={content} onChangeText={setContent} />
          </View>
        
      </View>

        <View style={{ flexDirection: 'row', margin:5}}>
          <Text style={{justifyContent:'space-between', borderWidth:1,}}>Author</Text>

          <View style={{justifyContent:'space-between',paddingLeft:10 }}>
            <TextInput placeholder='TEXT' value={author} onChangeText={setAuthor} />
          </View>
          

          <TextInput/>

        </View>

        <Pressable 
            onPress={onPressFunction}>
              
              <Text style={{color:'red', borderWidth:1, borderColor:'gray', borderStyle:"dotted", paddingLeft:10

          }}>ADD</Text>
        </Pressable>

        {/* <Pressable onPress={()=>postToDeleteost(index)}>
          <Text style={{ color: 'red', borderWidth: 1, borderColor: 'gray', borderStyle: "dotted" }}>DELETE</Text>
        </Pressable>
         */}

     </View>
    
     <ScrollView style={{ height: 520, flex: 1 }}>
        {newPost && newPost.map((post,index) => (<View key={index}>
          <PostComponent 
          Author= {post.author}
          Date={post.date}
          ImageUrl={post.image}
          Content={post.content}

        /></View>
        ))}
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

