import "../global.css";
import React from "react";
import { View, Text } from "react-native";
import { Link } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Slot } from "expo-router";
import { Search } from "lucide-react-native";

function Header() {
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: top }}>
      <View className="px-4 lg:px-6 h-14 flex items-center flex-row justify-between">
        <Link
          className="font-bold flex-1 items-center justify-center text-2xl"
          href="/"
        >
          JUST MAIL
        </Link>
        <View className="flex flex-row gap-4 sm:gap-6">
          <Link
            className="text-md font-medium hover:underline web:underline-offset-4"
            href="/search/"
          >
            <View className="flex flex-row items-center gap-1">
              <Search color={"#000"} size={30} />
            </View>
          </Link>
        </View>
      </View>
    </View>
  );
}

function Footer() {
  const { bottom } = useSafeAreaInsets();
  return (
    <View style={{ paddingBottom: bottom }}>
      <View className="py-6 flex-1 items-start px-4 md:px-6">
        <Text className="text-center text-gray-700">
          © {new Date().getFullYear()} Me
        </Text>
      </View>
    </View>
  );
}

export default function HomeLayout() {
  return (
    <>
      <Header />
      <Slot />
      <Footer />
    </>
  );
}
