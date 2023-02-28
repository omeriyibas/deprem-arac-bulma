import {View, StyleSheet, Pressable} from "react-native-web";
import {styleElements} from "../constants/style-elements";
import {useNavigation} from "@react-navigation/native";
import {Text} from "react-native-paper";


function VehicleItem(item) {
    const navigaton = useNavigation();

    return (
        //     onPress={vehiclePressHandler}
        //     style={({pressed}) => pressed && styles.pressed}
        // >
        <View style={styles.vehicleItem}>
            {/*<Text*/}
            <View>
                <Text style={[styles.textBase, styles.description]}>
                    {item.name}
                </Text>
                <Text style={styles.textBase}>
                    Tel No: {item.contact}
                </Text>
                <Text style={styles.textBase}>
                    {item.where}->{item.to}
                </Text>
            </View>
            <View style={styles.amountContainer}>
                <Text style={styles.amount}>
                    Kapasite
                </Text>
                <Text style={styles.amount}>
                    {item.totalPeoples}/{item.capacity}
                </Text>
                <View style={styles.amountContainer}>

                </View>
            </View>

            <View style={styles.buttonsContainer}>
                <Pressable style={styles.buttonContainer}
                           onPress={() => navigaton.navigate("view", {contact: item.contact,id:item.id,where:item.where,to:item.to})}>
                    <Text style={styles.itemButton}>
                        Yolcular
                    </Text>
                </Pressable>
                <Pressable style={styles.buttonContainer}
                           onPress={() => navigaton.navigate("register", {contact: item.contact,id:item.id,where:item.where,to:item.to})}>
                    <Text style={styles.itemButton}>
                        Yolcu Ekle
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}

export default VehicleItem;

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.75,
    },

    itemButton: {
        // color: styleElements.colors.primary500,
        fontWeight: 'bold',
    },

    buttonsContainer: {
        rowGap: 5,
        flexDirection: 'column',
        // paddingHorizontal: 12,
        // paddingVertical: 4,
        // backgroundColor: 'white',
        // justifyContent: 'center',
        // alignItems: 'center',
        // borderRadius: 4,
        // minWidth: 80,
    },

    buttonContainer: {
        // flexDirection: 'row',
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        minWidth: 80,
    },

    vehicleItem: {
        padding: 12,
        marginVertical: 8,
        backgroundColor: styleElements.colors.red,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 6,
        elevation: 3,
        shadowColor: styleElements.colors.gray500,
        shadowRadius: 4,
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.4,
    },
    textBase: {
        color: "white",
    },
    description: {
        fontSize: 16,
        marginBottom: 4,
        fontWeight: 'bold',
    },
    amountContainer: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        // backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        // minWidth: 80,
    },
    amount: {
        color: "white",
        fontWeight: 'bold',
    },
});