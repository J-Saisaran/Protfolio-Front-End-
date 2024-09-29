import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../utils/axios'; // Ensure to import your axios instance

export const fetchProjects = createAsyncThunk('projects/fetch', async () => {
  const response = await axios.get('/projects'); // Adjust endpoint to match your backend
  return response.data;
});

const projectSlice = createSlice({
  name: 'projects',
  initialState: {
    list: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.list = action.payload; // Store fetched projects
        state.status = 'succeeded'; // Update status
      })
      .addCase(fetchProjects.pending, (state) => {
        state.status = 'loading'; // Set loading state
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.status = 'failed'; // Set error state
        state.error = action.error.message;
      });
  },
});

export default projectSlice.reducer;
