import { Image, Text, View } from "react-native"
import { faker } from "@faker-js/faker";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const User = ({ data }) => {
    const sentence = faker.lorem.sentence();
    const nav = useNavigation();
    return (
        <TouchableOpacity onPress={() => {
            nav.navigate("Profile", {userId: data.id})
        }} >
            <View style={{ width: "99%", height: 75, borderWidth: 1, borderRadius: 10, padding: 5, margin: 3, flexDirection: "row" }}>
                <View style={{ flex: 2, justifyContent: "center", alignItems: "center", }}>
                    <Image style={{ width: 50, height: 50, borderRadius: 25, }} source={{ uri: data.image }} />
                </View>
                <View style={{ flex: 6, justifyContent: "center", paddingLeft: 5, }}>
                    <Text style={{ fontWeight: "bold", fontSize: 17 }} >{data.username} </Text>
                    <Text style={{ fontSize: 13, color: "gray" }} >{sentence}</Text>
                </View>
                <View style={{ flex: 2, alignItems: "flex-end" }}>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ color: "gray", fontSize: 10, }} >{data.role.toUpperCase()}</Text>
                        <Text>ID: {data.id}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}