import { ListGroup } from "react-bootstrap"

const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            persons: [],
            planets: [],
            vehicles: [],
            personsId: [],
            planetId: [],
            vehicleId: [],
            favorites: []
        },
        actions: {
            getPersonsApi: async () => {
                const response = await fetch("https://www.swapi.tech/api/people/", {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                })
                const json = await response.json()
                console.log({ persons: json })
                setStore({ persons: json.results })
            },

            getPersonsApiId: async uid => {
                const url = `https://www.swapi.tech/api/people/${uid}`
                const response = await fetch(url, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                })
                const json = await response.json()
                console.log({ personsId: json })
                setStore({ personsId: json.result })
            },

            getPlanetsApi: async () => {
                const response = await fetch("https://www.swapi.tech/api/planets/", {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                })
                const json = await response.json()
                console.log({ planets: json })
                setStore({ planets: json.results })
            },

            getPlanetId: async uid => {
                const url = `https://www.swapi.tech/api/planets/${uid}`
                const response = await fetch(url, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                })
                const json = await response.json()
                console.log({ planetId: json })
                setStore({ planetId: json.result })
            },

            getVehiclesApi: async () => {
                const response = await fetch("https://www.swapi.tech/api/vehicles/", {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                })
                const json = await response.json()
                console.log({ vehicles: json })
                setStore({ vehicles: json.results })
            },

            getVehicleId: async uid => {
                const url = `https://www.swapi.tech/api/vehicles/${uid}`
                const response = await fetch(url, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' }
                })
                const json = await response.json()
                console.log({ vehicleId: json })
                setStore({ vehicleId: json.result })
            },

            agregarLista: (item) => {
                const store = getStore()
                setStore({ favorites: [...store.favorites, item] })
                getActions().setLocalStorage()
            },

            eliminarLista: (name) => {
                console.log(name)
                const store = getStore()
                const newLista = store.favorites.filter(function (item) {
                    return (item !== name)
                })
                setStore({
                    favorites: newLista
                })
                getActions().setLocalStorage()
            },
            setLocalStorage: () => {
                const store = getStore()
                const list = store.favorites
                localStorage.setItem("my-favorites-list", JSON.stringify(list))
            },
            getLocalStorage: () => {
                if (localStorage.getItem("my-favorites-list")) {
                    const data = localStorage.getItem("my-favorites-list")
                    setStore({
                        favorites: JSON.parse(data)
                    })
                }

            }
        }
    }
}

export default getState;