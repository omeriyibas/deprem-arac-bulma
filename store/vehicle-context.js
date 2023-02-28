import {createContext, useReducer} from 'react';

// const DUMMY_EXPENSES = [
//     {
//         contact: '531468912',
//         name: "Abdullah İyibaş",
//         where: "GaziAntep",
//         to: "İstanbul",
//         capacity: "5",
//         totalPeoples:0,
//         peoples: [{
//             contact: "54131867",
//             name: "asdsadxz zxczx",
//             ilce: "asdasd",
//             count:"10"
//         },
//             {
//                 contact: "5644651",
//                 name: "asdasd xzczxc",
//                 ilce: "rewre",
//                 count:"20"
//             }]
//     },
// ];

export const VehicleContext = createContext({
    vehicles: [],
    addVehicle: (vehicleNfo) => {
    },
    // setVehicle:(vehicle)=>{},
    deleteVehicle: (id) => {
    },
    updateVehicle: (id, {description, amount, date}) => {
    },
    addRegister: (vehicle_contact, registerNfo) => {
    }
});

function vehiclesReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            // const id = new Date().toString() + Math.random().toString();
            const updatableVehicleIndex = state.findIndex(
                (vehicle) => vehicle.contact === action.payload.contact
            );
            console.log(updatableVehicleIndex)
            if (updatableVehicleIndex!==-1) {
                const updatableVehicle = state[updatableVehicleIndex];
                const updatedItem = {...updatableVehicle, ...action.payload};
                const updatedVehicles = [...state];
                updatedVehicles[updatableVehicleIndex] = updatedItem;
                return updatedVehicles;
            }
            return [{...action.payload,peoples:[],totalPeoples:0}, ...state];
        case "ADDREGISTER":
            const selectedVehicleIndex = state.findIndex(
                (vehicle) => vehicle.contact === action.payload.vehicle_contact
            );
            const selectedVehicle = state[selectedVehicleIndex];
            selectedVehicle.peoples.push(action.payload.userData)
            selectedVehicle.totalPeoples+=parseInt(action.payload.userData.count)
            const updatedVehicles = [...state]
            updatedVehicles[selectedVehicleIndex] = selectedVehicle
            return updatedVehicles;


        // case 'UPDATE':
        //     const updatableVehicleIndex = state.findIndex(
        //         (vehicle) => vehicle.id === action.payload.id
        //     );
        //     const updatableVehicle = state[updatableVehicleIndex];
        //     const updatedItem = {...updatableVehicle, ...action.payload.data};
        //     const updatedVehicles = [...state];
        //     updatedVehicles[updatableVehicleIndex] = updatedItem;
        //     return updatedVehicles;
        case 'DELETE':
            return state.filter((vehicle) => vehicle.id !== action.payload);
        default:
            return state;
    }
}

function VehiclesContextProvider({children}) {
    const [vehiclesState, dispatch] = useReducer(vehiclesReducer, []);

    function addVehicle(vehicleData) {
        dispatch({type: 'ADD', payload: vehicleData});
    }

    function deleteVehicle(id) {
        dispatch({type: 'DELETE', payload: id});
    }

    function updateVehicle(id, vehicleData) {
        dispatch({type: 'UPDATE', payload: {id: id, data: vehicleData}});
    }

    function addRegister(vehicle_contact, userData) {
        dispatch({type: 'ADDREGISTER', payload: {vehicle_contact: vehicle_contact, userData: userData}});
    }

    const value = {
        vehicles: vehiclesState,
        addVehicle: addVehicle,
        deleteVehicle: deleteVehicle,
        updateVehicle: updateVehicle,
        addRegister: addRegister
    };

    return (
        <VehicleContext.Provider value={value}>
            {children}
        </VehicleContext.Provider>
    );
}

export default VehiclesContextProvider;