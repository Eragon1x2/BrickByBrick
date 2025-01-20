import {createSlice}  from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import PlayerType from "../types/Player";


const initialState : PlayerType = {
        name: "Builder",
        money: 1000,
        materials: {
            "Wood": 20,
            "Stone": 20,
            "Clay": 20,
            "Metal": 20,
            "Glass": 20,
            "Sand": 20,
            "Water": 20,
            "Roofing": 20,
            "Paint": 20,
            "Pipes": 20,
            "Wires": 20
        }
    }

export const PlayerSlice = createSlice({
    name: "player",
    initialState,
    reducers: {
        updateMaterials: (state, action: PayloadAction<{name: string, amount: number}>) => {
            state.materials[action.payload.name] += action.payload.amount;
        },
        updateMoney: (state, action: PayloadAction<number>) => {
            state.money += action.payload;
        }
    }
})


export const { updateMaterials, updateMoney} = PlayerSlice.actions