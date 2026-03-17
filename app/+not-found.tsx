import { Link, Stack } from 'expo-router';
import { ArrowLeft, Car, MapPinOff } from 'lucide-react-native';
import { Text, TouchableOpacity, View } from 'react-native';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!', headerShown: false }} />
      
      <View className="flex-1 bg-white items-center justify-center p-6">
        {/* Decorative Icon Section */}
        <View className="relative mb-8">
          <View className="bg-slate-100 p-8 rounded-full">
            <MapPinOff size={64} color="#000" strokeWidth={1.5} />
          </View>
          <View className="absolute -bottom-2 -right-2 bg-blue-600 p-3 rounded-full border-4 border-white">
            <Car size={24} color="white" />
          </View>
        </View>

        {/* Text Content */}
        <Text className="text-3xl font-bold text-slate-900 mb-2">
          Wrong Destination
        </Text>
        <Text className="text-slate-500 text-center text-lg mb-10 px-4">
          We couldn&#39;t find the page you&#39;re looking for. It looks like this route isn&#39;t on our map.
        </Text>

        {/* Action Button */}
        <Link href="/" asChild>
          <TouchableOpacity 
            activeOpacity={0.8}
            className="flex-row items-center justify-center bg-black w-full py-4 rounded-xl shadow-lg"
          >
            <ArrowLeft size={20} color="white" style={{ marginRight: 8 }} />
            <Text className="text-white font-semibold text-lg">
              Back to Pickup
            </Text>
          </TouchableOpacity>
        </Link>

        {/* Subtle Branding */}
        <Text className="absolute bottom-12 text-slate-400 font-medium tracking-widest uppercase text-xs">
          Uber Clone Support
        </Text>
      </View>
    </>
  );
}