import { createSlice } from "@reduxjs/toolkit";
import actGetCategories from "./act/actGetCategories";
import { TLoading } from "@myTypes/shared";
import { TCategory } from "@myTypes/category";

interface ICategoriesState {
 records: TCategory[],
 loading: TLoading,
 error: string | null    
}

const initialState: ICategoriesState = {
records: [],
loading: "idle",
error: null
}

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(actGetCategories.pending, (state) => {
            state.loading = "pending";
            state.error = null;
        });
        builder.addCase(actGetCategories.fulfilled, (state, action) => {
            state.loading = "success";
            state.records = action.payload;
        });
        builder.addCase(actGetCategories.rejected, (state, action) => {
            state.loading = "failed";
            state.error = action.payload as string;
        });
    }
});


export {actGetCategories}
export default categoriesSlice.reducer