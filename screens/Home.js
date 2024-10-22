import { Text, View } from "react-native"
import { UserList } from "../UserList"

export const Home = () => {
    return (
        <View style={{flex: 1}}>
            <UserList/>
        </View>
    )
}