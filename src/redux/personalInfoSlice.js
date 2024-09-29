import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../utils/axios'; // Ensure to import your axios instance

export const fetchPersonalInfo = createAsyncThunk('personalInfo/fetch', async () => {
  const response = await axios.get('/personalinfos'); // Correct endpoint
  return response.data;
});

const personalInfoSlice = createSlice({
  name: 'personalInfo',
  initialState: {
    info: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPersonalInfo.fulfilled, (state, action) => {
        state.info = action.payload;
        state.status = 'succeeded'; // Update status
      })
      .addCase(fetchPersonalInfo.pending, (state) => {
        state.status = 'loading'; // Set loading state
      })
      .addCase(fetchPersonalInfo.rejected, (state, action) => {
        state.status = 'failed'; // Set error state
        state.error = action.error.message;
      });
  },
});

export default personalInfoSlice.reducer;
