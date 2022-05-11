import { createSlice } from "@reduxjs/toolkit";
import { getFromLocalStorage } from "../utils/helpers/localStorage";

const initState = {
    allCountries: getFromLocalStorage('allCountries') || [],
    selectedCountry: getFromLocalStorage('selectedCountry') || [],
}

const statSlice = createSlice({
    name: 'stat',
    initialState: initState,

    reducers: {
        getAllCountries: (state, action) => {
            state.allCountries = action.payload
        },
        showSelectedCountry: (state, action) => {
            state.selectedCountry = action.payload
        }
        
    }

})
export const statActions = statSlice.actions
export default statSlice