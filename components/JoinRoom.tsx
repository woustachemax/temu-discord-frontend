import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import "../app/global.css";
import { ToastProvider, useToast } from '../components/ToastComponent';



const JoinRoom = () => {
    const { show } = useToast();
    const[name, setName] = useState('');
    const [roomID, setRoomID] = useState('');
    const [isNameFocused, setIsNameFocused] = useState(false);
    const [isRoomFocused, setIsRoomFocused] = useState(false);
    const [createRoom, setCreateRoom] = useState(true);


    const router = useRouter();

    const handleAuth = () => {
        if(!name || !roomID) {
            show('*Please fill in all fields*', 'error');
            return;
        }

        if(roomID.length < 6) {
            show('*Room ID must be at least 6 characters*', 'error');
            return;
        }
        if(roomID.length > 10) {
            show('*Room ID is too big, 6-9 chars only*', 'error');
            return;
        }

        router.replace('/ChatPage');

    }



  return (
    <View className='flex-1 items-center justify-center bg-black p-2'>
        <View className='w-full max-w-md p-4 border rounded-xl '>
            <View className='justify-center items-center mb-4'>
               <MaterialCommunityIcons name="qqchat" size={64} color="#43A047" />
            </View>
            {/* <Text className="text-green-600 text-2xl font-bold mb-4 text-center">
                {createRoom ? 'Create Room' : 'Join Room'}
            </Text> */}
              <View className='mb-8'>
                <Text className={`text-sm mb-2 ml-1 ${isNameFocused ? 'text-green-600 ': 'text-gray-600'}`}>Name</Text>
                <View className="relative">
                    <TextInput
                    value={name}
                    onChangeText={setName}
                    onFocus={() => setIsNameFocused(true)}
                    onBlur={() => setIsNameFocused(false)}   
                    autoCapitalize="none"
                    keyboardType="default"
                    placeholder="John Doe"
                    placeholderTextColor="gray"
                    style={{ letterSpacing: 2,
                    minHeight: 48}}
                    className={` border-2 rounded-full px-4 py-3 bg-black text-gray-200 text-base ${
                        isNameFocused ? 'border-green-900' : 'border-gray-600'
                    }`}  
                    />
                    </View>
                </View>
                    <View className='mb-8'>
                    <Text className={`text-sm mb-2 ml-1 ${isRoomFocused ? 'text-green-600 ': 'text-gray-600'}`}>
                        {createRoom ? 'Create Room ID' : 'Room ID'}</Text>
                    <View className="relative">
                        <TextInput
                        value={roomID}
                        onChangeText={setRoomID}
                        onFocus={() => setIsRoomFocused(true)}
                        onBlur={() => setIsRoomFocused(false)}   
                        autoCapitalize="none"
                        keyboardType="default"
                        placeholder='abcd-efgh-ijkl'
                        placeholderTextColor="gray"
                        style={{ letterSpacing: 2,
                            minHeight: 48
                         }}
                        className={` border-2 rounded-full px-4 py-3 bg-black text-gray-200 text-base ${
                            isRoomFocused ? 'border-green-900' : 'border-gray-600'
                        }`}  
                        />
                        </View>
                    </View>
                    <TouchableOpacity 
                        className="bg-green-600 rounded-full py-4 mb-8 active:bg-green-900"
                        onPress={handleAuth}
                        >
                        <Text className="text-gray-200 text-center text-lg font-semibold">
                            {createRoom ? 'Create Room' : 'Join Room'}
                        </Text>
                    </TouchableOpacity>     
                    {createRoom ? (
                        <Text 
                        onPress={() => setCreateRoom(false)}
                        className='text-center text-green-600'>
                            Wanna join an existing Room? Join Room</Text>
                    ) : (
                        <Text 
                        onPress={() => setCreateRoom(true)}
                        className='text-center text-green-600'>
                            Don't Have a Room? Create Room!</Text>
                    )} 
              </View>
            </View>
  )
}

const WrappedJoinRoom = () => (
  <ToastProvider>
    <JoinRoom />
  </ToastProvider>
)

export default WrappedJoinRoom;