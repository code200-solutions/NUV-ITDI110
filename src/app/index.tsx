import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import PostComponent from './Postcomponent';

export default function HomeScreen() {
  return (
    <ScrollView style={{
      height: 650
    }}>
    
    <PostComponent author='paul' date='wednesday 17 2025' context='breaking News, the Minister of internal affairs was convicted 
    following some untrusted gester the leads to breaking the article 4 chap.3 sect. 25'/>
    <PostComponent author='paul' date='wednesday 17 2025'  imageUrl={require('./img/pexels-pixabay-206359 (1).jpg')}/>
    <PostComponent author='paul' date='wednesday 17 2025' context='breaking News, the Minister of internal affairs was convicted 
    following some untrusted gester the leads to breaking the article 4 chap.3 sect. 25'/>
    <PostComponent author='paul' date='wednesday 17 2025'  imageUrl={require('./img/pexels-souvenirpixels-1486974.jpg')}/>
    <PostComponent author='paul' date='wednesday 17 2025' context='breaking News, the Minister of internal affairs was convicted 
    following some untrusted gester the leads to breaking the article 4 chap.3 sect. 25'/>
    <PostComponent author='paul' date='wednesday 17 2025'  imageUrl={require('./img/pexels-wardmediauk-3347244.jpg')}/>
    <PostComponent author='paul' date='wednesday 17 2025' context='breaking News, the Minister of internal affairs was convicted 
    following some untrusted gester the leads to breaking the article 4 chap.3 sect. 25'/>
    <PostComponent author='paul' date='wednesday 17 2025'  imageUrl={require('./img/pexels-recalmedia-60217.jpg')}/>
    <PostComponent author='paul' date='wednesday 17 2025' context='breaking News, the Minister of internal affairs was convicted 
    following some untrusted gester the leads to breaking the article 4 chap.3 sect. 25'/>
    <PostComponent author='paul' date='wednesday 17 2025'  imageUrl={require('./img/pexels-pixabay-373447.jpg')}/>

    <PostComponent author='paul' date='wednesday 17 2025' context='In the heart of Vanuatu’s lush interior, nestled between the 
    whispering palms and ancient banyan trees, lived a quiet boy named Lanu. He wasn’t like the other children in his village—while 
    they chased wild pigs and 
    climbed coconut trees, Lanu spent his days scribbling numbers in the sand and watching the stars shift overhead.' imageUrl={require('./img/pexels-wardmediauk-3347244.jpg')} />

    <PostComponent author='John' date='Tuesday 23 2025' context='One day, while exploring the edge of the forest, Lanu stumbled upon a 
    vine-covered stone tablet. It was etched with symbols that looked eerily like logarithmic spirals and exponential curves. Intrigued,
    he copied the markings and brought them to his grandfather, a retired teacher from Onesua Presbyterian College.' imageUrl={require('./img/pexels-pixabay-206359 (1).jpg')}/>

    <PostComponent author='petit' date='Friday 20 2025' context='His grandfather’s eyes widened. “This,” he whispered, “is the Forest Equation.
    Legend says it predicts the rise and fall of 
    the locust swarms that come every few decades. But no one has ever solved it.”' imageUrl={require('./img/pexels-pixabay-373447.jpg')}/>

    <PostComponent author='Jack' date='Thursday 22 2025' context='Lanu was hooked. He spent weeks decoding the symbols, 
    applying everything he knew—fractional exponents, decay models, even population dynamics. Slowly, the equation began to reveal
    a pattern: the locusts would return in exactly 73 days, unless the forest’s balance was restored.' imageUrl={require('./img/pexels-recalmedia-60217.jpg')}/>
    
    <PostComponent author='Ludo' date='Monday 11 2025' context='With the help of his village, Lanu planted fast-growing 
    vines known to repel the insects. He calculated the rate of growth needed, adjusted for rainfall, and even factored in the moon’s gravitational pull. When the 73rd day
    arrived, the skies remained clear. No locusts. Just the hum of cicadas and the rustle of leaves.' imageUrl={require('./img/pexels-wardmediauk-3347244.jpg')}/>

    </ScrollView>
  );
}
