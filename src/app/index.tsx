import React from 'react';
import { ScrollView, Text, View, Image, TextInput, Button } from 'react-native'
import { useState } from 'react';
import POST from './postComponent';
const image1 = require('./assets/P5.jpg');

export default function HomeScreen() {


  return (


    <View className='flex flex-1'>
      <View style = {{ borderWidth:1 }}>

        <View style={{ flexDirection: 'row' }}>
          <Text>Content:</Text>
          <TextInput style={{borderWidth:1
          }}/>

        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text>Image:</Text>
          <TextInput
          style={{borderWidth:1,
          }}
          />
        </View>
        <View>
          <Button title='ADD' onPress={() => ('Simple Button pressed')} />
        </View>

      </View>
      <ScrollView style={{ height: 375 }}>
        <View style={{ borderWidth: 1, backgroundColor: 'grey', }}>
          <View style={{ gap: 10, margin: 5, }}>
            <Text style={{ color: 'blue' }}>POSTS</Text>
            <View style={{ borderWidth: 1, gap: 10, marginBottom: 5 }}>

              <POST author="Tim" date='16.09.2025' content='To change directories (cd) into a
                 folder with spaces in its name, you need to escape the spaces by adding a backslash (\) 
                 before each space.' />

              <POST author="Ralph" date='16-09-2025' content="" imageUrl={require('./assets/P1.jpg')} />

              <POST author="Juju" date='16-09-2025' content="Noxa i tet!!S" />

              <POST author="Ralph" date='16-09-2025' content="Mon Lapin . lol "
                imageUrl={require('./assets/P2.webp')} />

              <POST author="Samsung Company" date='16-09-2025' content="Samsung:It formed
                 several electronics-related divisions, such as Samsung Electronics Devices, Samsung 
                 Electro-Mechanics, Samsung Corning and Samsung Semiconductor & Telecommunications, 
                 and opened the facility in Suwon."
                imageUrl={image1} />

              <POST author="Samson" date='16-09-2025' content="Happy Birthday Ludovic.Ureehh!!!" />
              <POST author="PSG" date='16-09-2025' content="Le PSG aurait acté une décision forte pour Kylian Mbappé" imageUrl={require('./assets/P7.webp')} />
              <POST author="Milroy" date='16-09-2025' content="Pikinini Bar is a delightful retreat located
                 in the bustling city of Port Vila, Vanuatu. This charming bar embodies the laid-back island vibe 
                 with its colorful decor and welcoming atmosphere, making it an ideal spot for tourists looking to 
                 experience the local culture. The moment you step inside, you are greeted by the sounds of laughter
                  and the clinking of glasses, as locals and visitors alike gather to enjoy the friendly ambiance. 
                  The bar is renowned for its selection of refreshing cocktails and local brews, offering a taste of 
                  Vanuatu's vibrant drinking culture. Whether you are looking to sip on a classic tropical drink or 
                  try something unique, Pikinini Bar has something for everyone." imageUrl={require('./assets/p8.webp')} />
              <POST author="Juju" date='16-09-2025' content="Hello Worl" />
              <POST author="Ludo" date='16-09-2025' content="OMG, Wooooow" />
              <POST author="Ralph" date='16-09-2025' content="" imageUrl={require('./assets/P10.png')} />
              <POST author="Juju" date='16-09-2025' content="" imageUrl={require('./assets/P11.webp')} />
              <POST author="John" date='16-09-2025' content="" imageUrl={require('./assets/P12.jpg')} />
              <POST author="Noxa" date='16-09-2025' content="" imageUrl={require('./assets/P13.webp')} />
              <POST author="Meadow Fresh NZ" date='16-09-2025' content="Our Original fresh milk is a creamy
                   full bodied family favourite, with protein and calcium for healthy bones, teeth and muscles" imageUrl={require('./assets/P20.webp')} />






              <POST author="Ralph" date='16-09-2025' imageUrl={require('./assets/P1.jpg')} />

              <POST author="Ralph" date='16-09-2025' content='food' />




            </View>
          </View>
        </View>
      </ScrollView>
    </View>

  );
}
