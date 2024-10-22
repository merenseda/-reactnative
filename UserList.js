import { FlatList, Text, View } from "react-native";
import { User } from "./User";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";

export const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
        useEffect(() => {
            (async () => {
                fetch("https://dummyjson.com/users")
                    .then((resp) => resp.json())
                    .then((json) => { setUsers(json.users); })
                    .finally(e => setLoading(false));
            })();
        }, []);

    return (
        <View style={{ width: "96%", marginBottom: 20, }}>
            {
                loading ? (
                    <ActivityIndicator size={"large"} color="#223B7B" />
                ) : (

                    <FlatList
                        data={users}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => <User data={item} />}
                    />
                )
            }
        </View>
    );
};
