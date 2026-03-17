import { OnboardData } from "@/constants/onboarding";
import { router } from "expo-router";
import { useRef, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";


export default function Onboarding () {
    const swiperRef = useRef<Swiper>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <SafeAreaView className="flex h-full items-center justify-between bg-white">
            <TouchableOpacity onPress={() => router.navigate("/(auth)/sign-up")}
              className="flex w-full justify-end items-end p-5"
            >
                <Text className="text-black text-md font-JakartaBold">Skip</Text>
            </TouchableOpacity>

            <Swiper ref={swiperRef} loop={false}
                dot={ <View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full"/> }
                activeDot={ <View className="w-[32px] h-[4px] mx-1 bg-[#0286FF] rounded-full"/> }
                onIndexChanged={i => setActiveIndex(i)}
            >
                { OnboardData.map((data => (
                    <View key={data.id} className="flex justify-center items-center p-5">
                        <Image 
                            source={data.image}
                            className="w-full h-[300px]"
                            resizeMode="contain"
                        />
                        <View className="flex flex-row items-center justify-center w-full mt-10"></View>
                        <Text className="text-3xl text-black font-JakartaBold mx-10 text-center">{data.title}</Text>
                        <Text className="text-md font-JakartaSemiBold text-center text-[#858585] mx-10 mt-3">{data.description}</Text>
                    </View>
                )))}
            </Swiper>
        </SafeAreaView>
    )
}

