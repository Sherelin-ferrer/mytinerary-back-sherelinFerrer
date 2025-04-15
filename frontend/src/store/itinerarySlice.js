import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchItinerariesByCity = createAsyncThunk(
  'itineraries/fetchByCity',
  async (cityName, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:8080/api/itineraries/city/${cityName}`);
      
      if (!response.ok) {
      
        if (response.status === 404) {
          return [];
        }
        throw new Error('Server error');
      }
      
      const data = await response.json();
      
     
      return Array.isArray(data) ? data : [];
      
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const itinerarySlice = createSlice({
  name: 'itineraries',
  initialState: {
    byCity: [],
    status: 'idle', 
    error: null,
    likes: {}
  },
  reducers: {
    toggleLike: (state, action) => {
      const id = action.payload;
      state.likes[id] = (state.likes[id] || 0) + 1;
    },
    resetItineraries: (state) => {
      state.byCity = [];
      state.status = 'idle';
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItinerariesByCity.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchItinerariesByCity.fulfilled, (state, action) => {
        console.log('✅ Itineraries fetched successfully:', action.payload);
        state.status = 'succeeded';
        state.byCity = action.payload;
      })
      .addCase(fetchItinerariesByCity.rejected, (state, action) => {
        console.log('❌ Error fetching itineraries:', action.payload);
        state.status = 'failed';
        state.error = action.payload;
        state.byCity = [];
      });
  }
});

export const { toggleLike, resetItineraries } = itinerarySlice.actions;
export default itinerarySlice.reducer;