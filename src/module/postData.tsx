import { ImageSourcePropType } from "react-native";

export class PostData {
  image: ImageSourcePropType;
  content: string;
  author: string;
  date: string;

  constructor(
    image: ImageSourcePropType,
    content: string,
    author: string,
    date: string
  ) {
    this.image = image;
    this.content = content;
    this.author = author;
    this.date = date;
  }
}
