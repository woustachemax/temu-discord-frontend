import React, { useRef, useState } from 'react';
import { Image, Text, View } from 'react-native';

const Messages = () => {
  type Message = {
    sender: string;
    content: string;
  };

  const [messages, setMessages] = useState<Message[]>([
    {sender: 'User1', content: 'Hello!'},
    {sender: 'User2', content: 'Hi there!'},
    {sender: 'User1', content: 'How are you?'},
    {sender: 'User2', content: 'I am good, thanks! And you?'},
    {sender: 'User1', content: 'Doing well, thank you!'},
    {sender: 'Siddharth', content: 'Doing well, thank you!'},
  ]);

  const [input, setInput] = useState('');
  const [current] = useState("Siddharth");
  const inputRef = useRef(null);
  const scrollViewRef = useRef(null);
  const [stompClient, setStompClient] = useState(null);

  return (
    <View>
      {messages.map((msg, index) => (
        <View
          key={index}
          className={`flex-row items-center mb-2 ${
            msg.sender === current ? 'justify-end' : 'justify-start'
          }`}
        >
          {msg.sender !== current && (
            <View className="flex items-center mr-2">
              <Image
                source={{ uri: 'https://avatar.iran.liara.run/public/24' }}
                className="w-10 h-10 rounded-full"
              />
              <Text className="text-white text-xs mt-1">{msg.sender}</Text>
            </View>
          )}

          <View
            className={`rounded-2xl p-3 max-w-[75%] ${
              msg.sender === current ? 'bg-blue-500' : 'bg-green-400'
            }`}
          >
            <Text className="text-white">{msg.content}</Text>
          </View>

          {msg.sender === current && (
            <View className="flex items-center ml-2">
              <Image
                source={{ uri: 'https://avatar.iran.liara.run/public/24' }}
                className="w-10 h-10 rounded-full"
              />
              <Text className="text-white text-xs mt-1">{msg.sender}</Text>
            </View>
          )}
        </View>
      ))}
    </View>
  );
};

export default Messages;