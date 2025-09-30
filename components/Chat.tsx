import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import Messages from './Messages';

const Chat = () => {
  const router = useRouter();
  const [text, setText] = useState('');
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [inputHeight, setInputHeight] = useState(48); 

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>  
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-black"
    >
      <View className="flex-row mt-12 p-4 justify-between">
        <View className="w-24 h-10 rounded-full justify-center items-center">
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            className="text-gray-200"
          >
            User: SuperLongUsername
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => router.replace('/')}
          activeOpacity={0.6}
          className="bg-red-600 w-24 h-10 rounded-full justify-center items-center"
        >
          <Text className="text-gray-200">Leave</Text>
        </TouchableOpacity>
      </View>

      <View className="flex-1 p-2">
        <Messages />
      </View>

      <View className="flex-row items-end p-2 mb-6 border-gray-600 rounded-full mx-2">
        <TouchableOpacity className="rounded-xl px-2 py-2 h-12 justify-center">
          <Ionicons name="document-attach" size={24} color="gray" />
        </TouchableOpacity>
        <TextInput
          value={text}
          onChangeText={setText}
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
          placeholder="Type a message"
          placeholderTextColor="white"
          multiline
          textAlignVertical='center'
          onContentSizeChange={(e) =>
            setInputHeight(Math.min(e.nativeEvent.contentSize.height, 120))
          }
          style={{
            flex: 1,
            borderRadius: 9999,
            paddingTop: 16,
            paddingBottom: 8, 
            paddingRight: 14,    
            backgroundColor: 'black',
            fontSize: 16,
            color: isInputFocused ? 'limegreen' : 'white',
            minHeight: 48,
            maxHeight: 120,
            height: inputHeight,
          }}
        />

        <TouchableOpacity className="rounded-xl px-2 py-2 h-12 justify-center">
          <AntDesign name="send" size={24} color="green" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
</TouchableWithoutFeedback>

  );
};

export default Chat;
