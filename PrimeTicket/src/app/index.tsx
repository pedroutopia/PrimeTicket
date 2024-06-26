import { View, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons"

import { Input } from "@/components/input";
import { colors } from "@/styles/colors";

export default function Home() {

    return (

        <View className="flex-1 bg-green-500 items-center justify-center p-8">
            <Image source={require("@/assets/logo.png")} className="h-16" resizeMode="contain" />

            <View className="w-full mt-12 gap-3">
                <Input>
                    <MaterialCommunityIcons name="ticket-confirmation-outline" size={20} color={colors.green[200]} />
                    <Input.Field placeholder="Código do ingresso" />
                </Input>
            </View>


        </View>
    )
}