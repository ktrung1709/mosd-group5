import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { moviesService } from "./moviesService";

export const getMovies = createAsyncThunk(
    "movies/getMovies",
    async (movieData, thunkAPI) => {
        try {
            return await moviesService.getMovies(movieData);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

const initialState = {
    movies: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
};

export const moviesSlice = createSlice({
    name: "movies",
    initialState: initialState,
    reducers: {
        setMovies: (state, action) => {
            return {
                ...state,
                movies: action.payload,
            };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getMovies.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getMovies.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isError = false;
                state.movies = action.payload;
            })
            .addCase(getMovies.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action?.error?.message || "An error occurred";
            });
    },
});

export const { setMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
