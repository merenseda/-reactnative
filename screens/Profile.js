import { useRoute } from "@react-navigation/native"
import { useEffect, useState } from "react"
import { ActivityIndicator, FlatList, Image, ScrollView, StyleSheet, Text, View } from "react-native"

export const Profile = () => {
    const route = useRoute();
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        (() => {
            const userId = route.params.userId;
            fetch("https://dummyjson.com/users/" + userId)
                .then(resp => resp.json())
                .then(json => setUser(json))
                .finally((e) => setLoading(false));
        })();
    }, [])

    return (
        <View style={{ backgroundColor: "white", flex: 1 }}>
            {
                loading ? (<Loading />) : (<UserInfo data={user} />)
            }
        </View>
    )
}

const UserInfo = ({ data }) => {
    return (
        <ScrollView>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <View style={{ width: "99%", height: 75, padding: 5, margin: 3, flexDirection: "row" }}>
                    <View style={{ flex: 2, justifyContent: "center", alignItems: "center", }}>
                        <Image style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: "yellow" }} source={{ uri: data.image }} />
                    </View>
                    <View style={{ flex: 6, justifyContent: "center", paddingLeft: 12,}}>
                        <Text style={{ fontWeight: "bold", fontSize: 17 }} >{data.firstName} {data.lastName} </Text>
                        <Text style={{ fontSize: 13, color: "gray" }} >{data.email}</Text>
                    </View>
                </View>

                <View style={styles.infoTextContainer} >

                    <View style={styles.infoTextBox}>
                        <Text style={styles.infoTitle}>Rol:</Text>
                        <Text style={styles.infoContent}>{data.role}</Text>
                    </View>

                    <View style={styles.infoTextBox}>
                        <Text style={styles.infoTitle}>Kullanıcı Adı:</Text>
                        <Text style={styles.infoContent}>{data.username}</Text>
                    </View>

                    <View style={styles.infoTextBox}>
                        <Text style={styles.infoTitle}>Yaş:</Text>
                        <Text style={styles.infoContent}>{data.age}</Text>
                    </View>

                    <View style={styles.infoTextBox}>
                        <Text style={styles.infoTitle}>Cinsiyet:</Text>
                        <Text style={styles.infoContent}>{data.age}</Text>
                    </View>

                    <View style={styles.infoTextBox}>
                        <Text style={styles.infoTitle}>Kızlık Soyadı:</Text>
                        <Text style={styles.infoContent}>{data.maidenName}</Text>
                    </View>

                    <View style={styles.infoTextBox}>
                        <Text style={styles.infoTitle}>Telefon No:</Text>
                        <Text style={styles.infoContent}>{data.phone}</Text>
                    </View>

                    <View style={styles.infoTextBox}>
                        <Text style={styles.infoTitle}>Doğum Günü:</Text>
                        <Text style={styles.infoContent}>{data.birthDate}</Text>
                    </View>

                    <View style={styles.infoTextBox}>
                        <Text style={styles.infoTitle}>Kan Grubu:</Text>
                        <Text style={styles.infoContent}>{data.bloodGroup}</Text>
                    </View>

                    <View style={styles.infoTextBox}>
                        <Text style={styles.infoTitle}>Boy:</Text>
                        <Text style={styles.infoContent}>{data.height}</Text>
                    </View>

                    <View style={styles.infoTextBox}>
                        <Text style={styles.infoTitle}>Kilo:</Text>
                        <Text style={styles.infoContent}>{data.weight}</Text>
                    </View>

                    <View style={styles.infoTextBox}>
                        <Text style={styles.infoTitle}>Göz Rengi:</Text>
                        <Text style={styles.infoContent}>{data.eyeColor}</Text>
                    </View>

                    <View style={styles.infoTextBox}>
                        <Text style={styles.infoTitle}>Saç Rengi:</Text>
                        <Text style={styles.infoContent}>{data.hair.color}</Text>
                    </View>
                </View>

                <View style={styles.infoTextContainer} >
                    <View style={styles.infoTextBox}>
                        <Text style={styles.infoTitle}>Adres:</Text>
                        <Text style={styles.infoContent}>{data.address.address}</Text>
                    </View>

                    <View style={styles.infoTextBox}>
                        <Text style={styles.infoTitle}>Şehir:</Text>
                        <Text style={styles.infoContent}>{data.address.city}</Text>
                    </View>

                    <View style={styles.infoTextBox}>
                        <Text style={styles.infoTitle}>Eyalet:</Text>
                        <Text style={styles.infoContent}>{data.address.state}</Text>
                    </View>

                    <View style={styles.infoTextBox}>
                        <Text style={styles.infoTitle}>Eyalet Kodu:</Text>
                        <Text style={styles.infoContent}>{data.address.stateCode}</Text>
                    </View>

                    <View style={styles.infoTextBox}>
                        <Text style={styles.infoTitle}>Posta Kodu:</Text>
                        <Text style={styles.infoContent}>{data.address.postalCode}</Text>
                    </View>

                    <View style={styles.infoTextBox}>
                        <Text style={styles.infoTitle}>Ülke:</Text>
                        <Text style={styles.infoContent}>{data.address.country}</Text>
                    </View>
                </View>

                <View style={styles.infoTextContainer} >
                    <View style={styles.infoTextBox}>
                        <Text style={styles.infoTitle}>Şirket Adı:</Text>
                        <Text style={styles.infoContent}>{data.company.name}</Text>
                    </View>
                    <View style={styles.infoTextBox}>
                        <Text style={styles.infoTitle}>Departman:</Text>
                        <Text style={styles.infoContent}>{data.company.department}</Text>
                    </View>
                    <View style={styles.infoTextBox}>
                        <Text style={styles.infoTitle}>Mevki:</Text>
                        <Text style={styles.infoContent}>{data.company.title}</Text>
                    </View>
                    <View style={styles.infoTextBox}>
                        <Text style={styles.infoTitle}>Şirkt Adresi:</Text>
                        <Text style={styles.infoContent}>{data.company.address.address}</Text>
                    </View>
                </View>

                <View style={styles.infoTextContainer} >
                    <View style={styles.infoTextBox}>
                        <Text style={styles.infoTitle}>Son Tarih:</Text>
                        <Text style={styles.infoContent}>{data.bank.cardExpire}</Text>
                    </View>

                    <View style={styles.infoTextBox}>
                        <Text style={styles.infoTitle}>No:</Text>
                        <Text style={styles.infoContent}>{data.bank.cardNumber}</Text>
                    </View>

                    <View style={styles.infoTextBox}>
                        <Text style={styles.infoTitle}>Tip:</Text>
                        <Text style={styles.infoContent}>{data.bank.cardType}</Text>
                    </View>
                    <View style={styles.infoTextBox}>
                        <Text style={styles.infoTitle}>Para Birimi:</Text>
                        <Text style={styles.infoContent}>{data.bank.currency}</Text>
                    </View>

                    <View style={styles.infoTextBox}>
                        <Text style={styles.infoTitle}>IBAN:</Text>
                        <Text style={styles.infoContent}>{data.bank.iban}</Text>
                    </View>

                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    infoTextContainer: {
        backgroundColor: "black",
        width: "97%",
        height: "auto",
        borderRadius: 10,
        borderWidth: 5,
        marginBottom: 10,
    },

    infoTextBox: {
        flexDirection: "row",
        height: 30,
        marginBottom: 1,
    },

    infoTitle: {
        flex: 2,
        backgroundColor: "#f5f5f5",
        paddingLeft: 5,
        fontWeight: "bold",
        fontSize: 12,
        justifyContent: "center",
        alignItems: "center",
    },

    infoContent: {
        flex: 7,
        backgroundColor: "white",
        paddingLeft: 5,
    },
})

const Loading = () => {
    return (
        <View style={{ justifyContent: "center", alignItems: "center", backgroundColor: "white", flex: 1 }}>
            <ActivityIndicator size={"large"} color={"#223B7B"} />
        </View>
    )
}