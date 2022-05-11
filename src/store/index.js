import { configureStore } from "@reduxjs/toolkit"
import statSlice from "./statSlice"

const store = configureStore({
    reducer: {stat: statSlice.reducer,}
})

export default store