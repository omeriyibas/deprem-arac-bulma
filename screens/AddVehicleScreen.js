import {Text, StyleSheet, View} from "react-native-web";
import {styleElements} from "../constants/style-elements";
import {Button, TextInput} from "react-native-paper";
// import {useContext, useState} from "react";
// import {VehicleContext} from "../store/vehicle-context";
import {locations1, locations2} from "../constants/locations";
import {Autocomplete, TextField} from "@mui/material";
import {useNavigation} from "@react-navigation/native";
import {addVehicle} from "../util/dbUtil";
import {useState} from "react";

function AddVehicleScreen({route, navigation}) {
    const [contact, setContact] = useState("");
    const [name, setName] = useState("");
    const [where, setWhere] = useState(locations1[-1]);
    const [to, setTo] = useState(locations2[-1]);
    const [capacity, setCapacity] = useState(undefined);


    // const vehicleCtx = useContext(VehicleContext);
    const navgation = useNavigation()


    async function save() {
        if (contact !== "") {
            const vehicleNfo = {
                contact: contact,
                name: name,
                where: where,
                to: to,
                capacity: capacity
            }

            await addVehicle(vehicleNfo)

            // vehicleCtx.addVehicle({...vehicleNfo,id:id})


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
                keyboardType='numeric'
                mode={"outlined"}
                label="Araç Kapasitesi"
                value={capacity}
                onChangeText={capacity => setCapacity(capacity)}
            />
            <Autocomplete
                label="Nerden"
                value={where}
                onChange={(event, newValue) => {
                    setWhere(newValue);
                }}
                options={locations1}
                renderInput={(params) => <TextField inputProps={{style: styles.muiTextInput}} {...params}
                                                    label="Nerden"/>}
            />

            <Autocomplete
                label="Nereye"
                value={to}
                onChange={(event, newValue) => {
                    setTo(newValue);
                }}
                options={locations2}
                renderInput={(params) => <TextField {...params} label="Nereye"/>}
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
    muiTextField: {backgroundColor: "white"},
    container: {
        rowGap: 20,
        // flexDirection: "row",
        flex: 1,
        padding: 50,
        // backgroundColor: styleElements.colors.primary800,
        // justifyContent: "center"

    },
    buttonContainer: {
        flexDirection: "row",
        // flex: 1,
        // width: "50%",
        justifyContent: "center"
    },
})

export default AddVehicleScreen;