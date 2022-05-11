import { createSlice } from "@reduxjs/toolkit";
import { getFromLocalStorage } from "../utils/helpers/localStorage";

const initState = {
    allCountries: getFromLocalStorage('allCounties') || [],
    selectedCountry: getFromLocalStorage('selectedCountry') || [],
}

const statSlice = createSlice({
    name: 'stat',
    initialState: initState,

    reducers: {

    }

})
export const statActions = statSlice.actions
export default statSlice