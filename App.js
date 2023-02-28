import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MainScreen from "./screens/MainScreen";
import VehiclesContextProvider from "./store/vehicle-context";
import RegisterPeopleScreen from "./screens/RegisterPeopleScreen";
import {Text} from "react-native-web";
import PoepleListScreen from "./screens/PoepleListScreen";
import {Button} from "react-native-paper";
import AddVehicleScreen from "./screens/AddVehicleScreen";
import {createURL} from "expo-linking";


const Stack = createNativeStackNavigator();
// const location = useLocation()

const prefix = createURL('/');

export default function App() {
    console.log(prefix)
    const linking = {
        // prefixes:[prefix],
        config: {
            screens: {
                home: "/",
                register: "/register",
                view: "/view",
                addvehicle: "/addvehicle"
                // NotFound: "404"
            }
        },
    };
    return (
        <>
            {/*<StatusBar style={"auto"}/>*/}
            <VehiclesContextProvider>
                <NavigationContainer linking={linking}>
                    <Stack.Navigator>
                        <Stack.Screen name={"home"} component={MainScreen}
                                      options={({navigation}) => ({
                                          headerTitle: () => <Text>Araç Listesi</Text>,
                                          headerRight: () => <Button icon={"plus"}
                                                                     onPress={() => navigation.navigate("addvehicle")}/>,
                                      })}/>
                        <Stack.Screen name={"register"} component={RegisterPeopleScreen}
                                      options={({route}) => ({
                                          headerTitle: () =>
                                              <Text>{route.params.contact} {route.params.where} -> {route.params.to}</Text>,
                                          headerLeft: false,
                                      })}/>
                        <Stack.Screen name={"view"} component={PoepleListScreen}
                                      options={({route}) => ({
                                          headerTitle: () =>
                                              <Text>{route.params.contact} {route.params.where} -> {route.params.to}</Text>,
                                          headerLeft: false
                                      })}/>
                        <Stack.Screen name={"addvehicle"} component={AddVehicleScreen}
                                      options={({route}) => ({
                                          headerTitle: () => <Text>Araç Ekle</Text>,
                                          headerLeft: false
                                      })}/>

                    </Stack.Navigator>

                </NavigationContainer>
            </VehiclesContextProvider>
        </>
    );
}
