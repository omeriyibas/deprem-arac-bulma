import {FlatList} from "react-native-web";
import VehicleItem from "./VehicleItem";

function renderVehicleItem(ItemData){
    return <VehicleItem {...ItemData.item}/>
}

function VehiclesList({vehicles}) {
    return (
        <FlatList
            data={vehicles}
            renderItem={renderVehicleItem}
            keyExtractor={(item)=>item.contact}
        />
    )
}

export default VehiclesList;