import React from "react";
import { Text, View, Image, ImageSourcePropType } from "react-native";

    export  default  function PostComponent({author, date, context, imageUrl}:
        {
        author: string, 
        context?:string, 
        date: string,
        imageUrl?:ImageSourcePropType
    }) {
    return(
        <View className='flex flex-1'>
            <View>
                <View style = {{marginStart: 10}}>
                <Text style = {{ fontWeight: 'bold', fontSize: 20}}>Post</Text>
                <Text style ={{ textAlign: 'center'}}>Live feeds</Text>
            </View>
            <View style = {{borderWidth:1, flexDirection: 'column', margin:10, borderBottomEndRadius:10, height: 250}}>
            <View style = {{flexDirection: 'row', justifyContent: 'space-between', padding: 5}}>
        
                <Text style = {{ fontWeight: 'bold', fontSize: 10, borderWidth: 1, padding: 5}}>{author}</Text>
                <Text style ={{ borderWidth: 1, padding:5}}>{date}</Text>
        
            </View>
        
            <View style = {{ borderWidth: 1, padding: 5, margin: 5, height: 200}}>

                <View>
                    <Text>{context && (<Text style = {{
                            textAlign: 'justify'}}>
                        {context}
                        </Text>)}</Text> 
                </View>
                
                
                <View style = {{alignItems: 'center',}}>
                {imageUrl && <Image source={imageUrl} style = {{height: 115,
                    width: 150,
                    }} />} 
                </View>

            </View>

    

            </View>
            </View>
            </View>
    )
}