import axios from 'axios';

const URL =
    'https://deprem-arac-bulma-default-rtdb.europe-west1.firebasedatabase.app/';


export async function addVehicle(vehicleData) {
    // console.log(vehicleData)
    const newData = {...vehicleData, peoples: [], totalPeoples: 0}
    const response = await axios.post(URL + '/vehicles.json', newData);
    const id = response.data.name;
    return id;
}

export async function addRegister(id,vehicleData, userData) {
    console.log(vehicleData)
    // let newPoeples;
    // let newTotalPeoples;
    vehicleData.totalPeoples += parseInt(userData.count)
    if (vehicleData.peoples) {
        vehicleData.peoples.push(userData)
        const response = await axios.put(URL + `/vehicles/${id}.json`, vehicleData);
        // //     vehicleData.totalPeoples += parseInt(userData.count)
    } else {
        const newData={...vehicleData,peoples:[userData]}
        const response = await axios.put(URL + `/vehicles/${id}.json`, newData);
    }
}

export async function fetchVehicle(id) {
    const response = await axios.get(URL + `/vehicles/${id}.json`);
    console.log(response.data.peoples)
    return {...response.data}
}

export async function fetchPoeples(id) {
    const response = await axios.get(URL + `/vehicles/${id}.json`);
    // console.log(response.data.peoples)

    return response.data.peoples
}


export async function fetchVehicles() {
    const response = await axios.get(URL + `/vehicles.json`);

    const vehicles = [];

    for (const key in response.data) {
        const vehicle = {
            id: key,
            contact: response.data[key].contact,
            name: response.data[key].name,
            capacity: response.data[key].capacity,
            where: response.data[key].where,
            to: response.data[key].to,
            peoples: response.data[key].peoples,
            totalPeoples: response.data[key].totalPeoples

        }
        vehicles.push(vehicle)
    }

    // console.log(vehicles)

    return vehicles
}