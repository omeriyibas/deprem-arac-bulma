import {StyleSheet, View} from "react-native-web";
import {useContext, useEffect, useState} from "react";
import {styleElements} from "../constants/style-elements";
import {VehicleContext} from "../store/vehicle-context";
import PoeplesList from "../component/PeoplesList";
import {fetchPoeples, fetchVehicles} from "../util/dbUtil";


function PoepleListScreen({route, navigation}) {
    // const vehicles = useContext(VehicleContext).vehicles;
    // const poeples=vehicles.find(vehicle=>vehicle.contact===route.params.contact).peoples
    const [poeples, setPoeples] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPoeplesEffect()
        {
            // console.log("asd")
            const fetchedPoeples = await fetchPoeples(route.params.id)
            setPoeples(fetchedPoeples)
            // setFilteredVehicles(fetchedVehicles)
            setLoading(false)
        }
        fetchPoeplesEffect();
    }, [])

    return (
        <View style={styles.container}>
            {!loading && <PoeplesList poeples={poeples}/>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 0,
        // backgroundColor: styleElements.colors.red,
    },
    infoText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 32,
    },
});
export default PoepleListScreen;