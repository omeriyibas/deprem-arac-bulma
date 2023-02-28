import {FlatList} from "react-native-web";
import VehicleItem from "./VehicleItem";
import PoepleItem from "./PoepleItem";

function renderPoepleItem(ItemData){
    return <PoepleItem {...ItemData.item}/>
}

function PoeplesList({poeples}) {
    return (
        <FlatList
            data={poeples}
            renderItem={renderPoepleItem}
            keyExtractor={(item)=>item.contact}
        />
    )
}

export default PoeplesList;