import {View, StyleSheet, Text, Pressable} from "react-native-web";
import {styleElements} from "../constants/style-elements";
import {useNavigation} from "@react-navigation/native";


function PeopleItem(item) {
    // const navigaton = useNavigation();
    //
    // function vehiclePressHandler() {
    //     navigaton.navigate("Register", {contact: item.contact})
    // }

    return (
        // <Pressable
        //     onPress={vehiclePressHandler}
        //     style={({pressed}) => pressed && styles.pressed}
        // >
            <View style={styles.expenseItem}>
                <View>
                    <Text style={[styles.textBase, styles.description]}>
                        {item.name}
                    </Text>
                    <Text style={styles.textBase}>
                        Tel No: {item.contact}
                    </Text>
                </View>
                <View style={styles.amountContainer}>
                    <Text style={styles.amount}>
                        Kişi Sayısı: {item.count}
                    </Text>
                </View>
            </View>
        // </Pressable>
    )
}

export default PeopleItem;

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.75,
    },
    expenseItem: {
        padding: 12,
        marginVertical: 8,
        backgroundColor: styleElements.colors.red,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 6,
        elevation: 3,
        shadowColor: styleElements.colors.red,
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
        minWidth: 80,
    },
    amount: {
        color: "white",
        fontWeight: 'bold',
    },
});