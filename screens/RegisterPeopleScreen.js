import {Text, StyleSheet, View} from "react-native-web";
import {styleElements} from "../constants/style-elements";
import {Button, TextInput} from "react-native-paper";
import {useContext, useEffect, useState} from "react";
import {VehicleContext} from "../store/vehicle-context";
import {useNavigation} from "@react-navigation/native";
import {addRegister, fetchVehicle, fetchVehicles} from "../util/dbUtil";

function RegisterPeopleScreen({route, navigation}) {
    const [contact, setContact] = useState("");
    const [name, setName] = useState("");
    const [ilce, setIlce] = useState("");
    const [count, setCount] = useState("");
    const [vehicle, setVehicle] = useState({});


    // const vehicleCtx = useContext(VehicleContext);
    const navgation = useNavigation()

    useEffect(() => {
        async function fetchVehicleEffect() {
            const fetchedVehicle = await fetchVehicle(route.params.id)
            setVehicle(fetchedVehicle)
            console.log(fetchedVehicle)
            // setFilteredVehicles(fetchedVehicle)
            // setLoading(false)
        }

        fetchVehicleEffect();
    }, [])


    async function save() {
        if (contact !== "") {
            const registerNfo = {
                contact: contact,
                name: name,
                ilce: ilce,
                count: count
            }
            await addRegister(route.params.id, vehicle, registerNfo)
            // vehicleCtx.addRegister(route.params.contact, registerNfo)
            navigation.navigate("home")
        }


    }

    return (
        <View style={styles.container}>
            <TextInput
                mode={"outlined"}
                label="İletişim No"
                value={contact}
                onChangeText={contact => setContact(contact)}
            />
            <TextInput
                mode={"outlined"}
                label="Ad Soyad"
                value={name}
                onChangeText={name => setName(name)}
            />
            <TextInput
                mode={"outlined"}
                label="İlçe"
                value={ilce}
                onChangeText={ilce => setIlce(ilce)}
            />
            <TextInput
                mode={"outlined"}
                label="Kişi Sayısı"
                value={count}
                onChangeText={count => setCount(count)}
            />
            <View style={styles.buttonContainer}>
                <Button mode="contained" onPress={save} buttonColor={styleElements.colors.red}>
                    Kaydet
                </Button>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        rowGap: 20,
        // flexDirection: "row",
        flex: 1,
        padding: 50,
        // backgroundColor: styleElements.colors.red,
        // justifyContent: "center"

    },
    buttonContainer: {
        flexDirection: "row",
        // flex: 1,
        // width: "50%",
        justifyContent: "center"
    },
})

export default RegisterPeopleScreen;