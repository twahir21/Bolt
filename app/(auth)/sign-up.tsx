import Button from "@/components/button";
import InputField from "@/components/inputField";
import Oauth from "@/components/OAuth";
import { icons, images } from "@/constants/onboarding";
import { Link } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUp = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: ''
    });

    const onSignUpPress = async () => {}

    return (
    <SafeAreaView className="flex-1 bg-white">
        <ScrollView>
            <View className="flex-1 bg-white">
                <View className="relative w-full h-[250px]">
                    <Image 
                        source={images.signUpCar}
                        className="z-0 w-full h-[250px]"
                    />
                    <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
                        Create your Account
                    </Text>
                </View>

                <View className="p-5">
                    <InputField 
                        label="Name"
                        icon={icons.person}
                        placeholder="Enter your Name"
                        value={form.name}
                        onChangeText={value => setForm({ ...form, name: value })}
                    />

                    <InputField 
                        label="Email"
                        icon={icons.email}
                        placeholder="Enter email"
                        value={form.email}
                        onChangeText={value => setForm({ ...form, email: value })}
                    />

                    <InputField 
                        label="Password"
                        icon={icons.lock}
                        placeholder="Enter your password"
                        value={form.password}
                        secureTextEntry
                        onChangeText={value => setForm({ ...form, password: value })}
                    />

                    <Button onPress={onSignUpPress} title="Sign Up" className="mt-6"/>
                </View>

                {/* Oauth  */}
                <Oauth />

                {/* Footer  */}
                <Link href={"/sign-in"} className="text-lg text-center text-general-200 mt-10">
                    <Text>Already has an Account? </Text>
                    <Text className="text-primary-500">Log In</Text>
                </Link>

                {/* Verification Modal  */}
            </View>
        </ScrollView>
    </SafeAreaView>
    );
}

export default SignUp;