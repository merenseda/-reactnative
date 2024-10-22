import { createStackNavigator } from "@react-navigation/stack";
import { Home } from './Home';
import { Profile } from './Profile';

const Stack = createStackNavigator();

export const Navigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{
                title: "Ana Sayfa",
            }} />
            <Stack.Screen name="Profile" component={Profile} options={{
                title: "Profil",
            }} />
        </Stack.Navigator>
    )
}