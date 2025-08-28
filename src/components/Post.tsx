import { View, Text, Image } from 'react-native';

type PostProps = {
  text: string;
  imageUri: string;
};

export default function Post({ text, imageUri }: PostProps) {
  return (
    <View
      style={{
        backgroundColor: '#F3F4F6',
        marginBottom: 16,
        padding: 16,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
        width: '100%',
      }}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: '600',
          color: '#111827',
          marginBottom: 8,
        }}>
        {text}
      </Text>
      <Image
        source={{
          uri: `${imageUri}`,
        }}
        style={{ width: 200, height: 200, borderRadius: 12 }}
      />
    </View>
  );
}
