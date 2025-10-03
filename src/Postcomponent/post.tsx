import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import PostComponent from "../Postcomponent/Postcomponent";
import { useState } from "react";

class Post {
    author: string;
    context: string;
    image: string;
    date: string

    constructor(author, context, image, date) {
        this.author = author;
        this.date = date;
        this.image = image;
        this.context = context;
    }
}

export default function post() {

    const [host, setHost] = useState([

    ])

    return (
    <View>
        <View
        style={{
            flexDirection: "row",
            borderWidth: 1,
            padding: 20,
            margin: 10,
        }}
        >
        <View>
            <View style={{ flexDirection: "row" }}>
            <Text style={{ marginStart: 5 }}>context</Text>
            <TextInput style={{ marginStart: 3, borderWidth: 1 }} />
            </View>

            <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Text>Image Url</Text>
            <TextInput style={{ marginStart: 3, borderWidth: 1 }} />
            </View>
        </View>

        <View>
            <Button title={"ADD"}/>
        </View>
        </View>
    </View>
    );
    }