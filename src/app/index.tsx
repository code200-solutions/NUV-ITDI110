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
  const [imageUrl,setImage]= useState("");

  


  function onPressFunction(){
    const today = new Date().toLocaleDateString();
    const post = new PostData(author, content, MyImage,today)

    setNewPost((prev) => [...prev, post])
    
      setAuthor('');
      setContent('');
      setImage('');
      

    }

    // function postToDelete(index:number){
    //   setNewPost((prev) => prev.filter((_, i) => i! == index));
    // }
    // //console.log(postList);
  

  return (
    <View style={{backgroundColor:'#f1e8edff', flex:1}}>
          <Text style={{ fontWeight: 'bold', fontSize: 10, margin: 5 }}>POST</Text>
    
     <View>
      <View style={{flexDirection:'row', margin:5,}}>
        <Text style={{justifyContent:'space-between',borderWidth:1, paddingRight:5}}>Content</Text>

          <View style={{justifyContent:'space-between', borderWidth:1,paddingLeft:5,marginLeft:10}}>
            <TextInput placeholder='write something' value={content} onChangeText={setContent} />
          </View>
        
      </View>

        <View style={{ flexDirection: 'row', margin:5}}>
          <Text style={{justifyContent:'space-between', borderWidth:1,}}>Author</Text>

          <View style={{justifyContent:'space-between',paddingLeft:10,borderWidth:1, marginLeft:22 }}>
          
            <TextInput placeholder='your name' value={author} onChangeText={setAuthor} />
          </View>
    
        </View>
        
        <View style={{ flexDirection: 'row', margin: 5 }}>
          <Text style={{ justifyContent: 'space-between', borderWidth: 1, }}>Url Image</Text>

          <View style={{ justifyContent: 'space-between', paddingLeft: 10, borderWidth: 1, marginLeft: 22 }}>

            <TextInput placeholder='Passed your url image' value={imageUrl} onChangeText={setImage} />
          </View>

        </View>
        

        <Pressable 
            onPress={onPressFunction}>

              
              <Text style={{color:'red', borderWidth:1, borderColor:'gray', 
              borderStyle:"solid",alignSelf:'flex-start',
              fontWeight:'500', 
              fontSize:12, margin:5, 

          }}>ADD</Text>
        </Pressable>

       

     </View>
    
     <ScrollView style={{ flex: 1 }}>
        {newPost && newPost.map((post,index) => (<View key={index}>
          <PostComponent 
          Author= {post.author}
          Date={post.date}
          ImageUrl={post.image}
          Content={post.content}

        />
        </View>
        ))}
        
      
     </ScrollView>
    </View>


  );

}

