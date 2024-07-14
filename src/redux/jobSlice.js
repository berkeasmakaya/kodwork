import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const loadFavoriteJobs = createAsyncThunk('jobs/loadFavoriteJobs', async () => {
    const jsonValue = await AsyncStorage.getItem('favoriteJobs');
    return jsonValue != null ? JSON.parse(jsonValue) : [];
})

const saveFavoriteJobs = async (jobs) => {
    try {
        const jsonValue = JSON.stringify(jobs);
        await AsyncStorage.setItem("favoriteJobs", jsonValue)
    } catch (err) {
        console.error("Error saving favorite jobs to AsyncStorage: ",err)
    }
}

const initialState = {
    jobs: [],
};

export const jobSlice = createSlice({
    name:"jobs",
    initialState:initialState,
    reducers: {
        setJobs: (state, action) => {
            state.jobs = action.payload;
        },
        addJob: (state,action) => {
            state.jobs.push(action.payload);
            saveFavoriteJobs(state.jobs);
        },
        removeJob:(state,action)=>{
            state.jobs = state.jobs.filter(job => job.id !== action.payload);
            saveFavoriteJobs(state.jobs);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loadFavoriteJobs.fulfilled, (state,action) => {
            state.jobs = action.payload;
        })
    }
})

export const {setJobs, addJob, removeJob} = jobSlice.actions;
export default jobSlice.reducer;