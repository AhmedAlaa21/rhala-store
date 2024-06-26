import { createSlice } from "@reduxjs/toolkit";
import actGetProductsByCatPrefix from "./act/actGetProductsByCatPrefix";
import { TLoading } from "@myTypes/shared";
import { TProduct } from "@myTypes/product";

interface ICategoriesState {
 records: TProduct[],
 loading: TLoading,
 error: string | null    
}

const initialState: ICategoriesState = {
records: [],
loading: "idle",
error: null
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        productsCleanUp: (state) => {
          state.records = [];
        },
      },
    extraReducers: (builder) => {
        builder.addCase(actGetProductsByCatPrefix.pending, (state) => {
            state.loading = "pending";
            state.error = null;
        });
        builder.addCase(actGetProductsByCatPrefix.fulfilled, (state, action) => {
            state.loading = "success";
            state.records = action.payload;
        });
        builder.addCase(actGetProductsByCatPrefix.rejected, (state, action) => {
            state.loading = "failed";
            state.error = action.payload as string;
        });
    }
});

export const { productsCleanUp } = productsSlice.actions;
export {actGetProductsByCatPrefix}
export default productsSlice.reducer