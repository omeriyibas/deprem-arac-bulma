import {FlatList, StyleSheet, View} from "react-native-web";
// import {useContext, useEffect, useState} from "react";
// import {VehicleContext} from "../store/vehicle-context";
import {styleElements} from "../constants/style-elements";
import VehiclesList from "../component/VehiclesList";
import {Autocomplete, TextField} from "@mui/material";
import {locations1, locations2} from "../constants/locations";
import {fetchVehicles} from "../util/dbUtil";
import {useEffect, useState} from "react";
import {TextInput} from "react-native-paper";

function MainScreen() {
    // const vehicleContext = useContext(VehicleContext);
    // const vehicles = vehicleContext.vehicles;
    // const vehicles=fetchVehicles()
    const [vehicles, setVehicles] = useState([]);
    const [filteredVehicles, setFilteredVehicles] = useState(vehicles);

    const [loading, setLoading] = useState(true);


    // console.log(vehicles)


    const [where, setWhere] = useState(locations1[-1]);
    const [to, setTo] = useState(locations2[-1]);
    const [contact, setContact] = useState("");


    useEffect(() => {
        async function fetchVehiclesEffect() {
            const fetchedVehicles = await fetchVehicles();
            setVehicles(fetchedVehicles)
            setFilteredVehicles(fetchedVehicles)
            setLoading(false)
        }

        fetchVehiclesEffect();
    }, [])

    useEffect(() => {
        if (where !== undefined && where !== null) {
            setFilteredVehicles(vehicles.filter((vehicle) => vehicle.where === where))
        } else {
            setFilteredVehicles(vehicles)
        }

        if (where !== undefined && where !== null) {
            setFilteredVehicles(vehicles.filter((vehicle) => vehicle.where === where))
        } else {
            setFilteredVehicles(vehicles)
        }
    }, [where])

    useEffect(() => {
        console.log("asd")
        setFilteredVehicles(vehicles.filter((vehicle) => vehicle.contact.includes(contact)))
        //
        // if (where !== undefined && where !== null) {
        // } else {
        //     setFilteredVehicles(vehicles)
        // }
    }, [contact])
    return (
        <>
            <View style={styles.container}>
                <TextInput
                    mode={"outlined"}
                    label="İletişim No"
                    value={contact}
                    onChangeText={contact => setContact(contact)}
                />
                <View style={styles.inputsContainer}>
                    <View style={styles.inputContainer}>
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
                    </View>
                    <View style={styles.inputContainer}>
                        <Autocomplete
                            label="Nereye"
                            value={to}
                            onChange={(event, newValue) => {
                                setTo(newValue);
                            }}
                            options={locations2}
                            renderInput={(params) => <TextField inputProps={{style: styles.muiTextInput}} {...params}
                                                                label="Nereye"/>}
                        />
                    </View>
                </View>

                {!loading && <VehiclesList vehicles={filteredVehicles}/>}
            </View>
        </>

        // <FlatList
        //     data={vehicles}
        //     renderItem={renderVehicleItem}
        //     keyExtractor={(item) => item.contact}
        // />
        // <Text>
        //     Arac Listesi
        // </Text>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
    },
    inputsContainer: {
        // flex: 1,
        padding: 8,
        backgroundColor: "white",
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'center',
        columnGap: 50,
        alignItems: 'center',
    },
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 0,
        // backgroundColor: "red",
        rowGap: 20
    },
    infoText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 32,
    },
});
export default MainScreen;