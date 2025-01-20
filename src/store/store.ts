import { configureStore } from "@reduxjs/toolkit";
import { PlayerSlice } from "./PlayerSlice";

export const store = configureStore({
    reducer: {
        player: PlayerSlice.reducer
    },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;