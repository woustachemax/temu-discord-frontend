import React, { createContext, useContext, useRef, useState } from "react";
import { Animated, Text, View } from "react-native";

const ToastContext = createContext({ show: (msg: string, type?: "success" | "error") => {} });

export const useToast = () => useContext(ToastContext);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toast, setToast] = useState<{ msg: string; type: "success" | "error" } | null>(null);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const show = (msg: string, type: "success" | "error" = "success") => {
    setToast({ msg, type });
    Animated.timing(fadeAnim, { toValue: 1, duration: 200, useNativeDriver: true }).start(() => {
      setTimeout(() => {
        Animated.timing(fadeAnim, { toValue: 0, duration: 200, useNativeDriver: true }).start(() =>
          setToast(null)
        );
      }, 5000);
    });
  };

  return (
    <ToastContext.Provider value={{ show }}>
      {children}
      {toast && (
        <Animated.View
          style={{
            opacity: fadeAnim,
            transform: [{ translateY: fadeAnim.interpolate({ inputRange: [0, 1], outputRange: [40, 0] }) }],
          }}
          className="absolute bottom-20 self-center px-4 py-2 rounded-2xl shadow-md"
        >
          <View
            className={`px-4 py-2 rounded-2xl ${
              toast.type === "success" ? "bg-green-500" : "bg-red-500"
            }`}
          >
            <Text className="text-white font-semibold">{toast.msg}</Text>
          </View>
        </Animated.View>
      )}
    </ToastContext.Provider>
  );
}
