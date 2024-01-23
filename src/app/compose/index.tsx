import React, { useState } from "react";
import { TextInput, TouchableOpacity, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ComposeMail() {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const handleSend = () => {
    // Implement email sending functionality here
    alert(`Email sent to: ${to}\nSubject: ${subject}`);
  };

  return (
    <View className="flex-1 px-4 py-2">
      <View className="mb-4">
        <Text className="text-lg font-bold mb-2">To:</Text>
        <TextInput
          className="border border-gray-300 p-2 rounded"
          onChangeText={setTo}
          value={to}
          placeholder="Recipient's email"
          keyboardType="email-address"
        />
      </View>
      <View className="mb-4">
        <Text className="text-lg font-bold mb-2">Subject:</Text>
        <TextInput
          className="border border-gray-300 p-2 rounded"
          onChangeText={setSubject}
          value={subject}
          placeholder="Email subject"
        />
      </View>
      <View className="mb-4 flex-1">
        <Text className="text-lg font-bold mb-2">Body:</Text>
        <TextInput
          className="border border-gray-300 p-2 rounded flex-1"
          onChangeText={setBody}
          value={body}
          placeholder="Email body"
          multiline
        />
      </View>
      <TouchableOpacity
        className="bg-blue-500 p-3 rounded text-white"
        onPress={handleSend}
      >
        <Text className="text-center font-bold">Send Email</Text>
      </TouchableOpacity>
    </View>
  );
}
