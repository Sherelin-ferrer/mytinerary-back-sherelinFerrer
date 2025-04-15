import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk para cargar ciudades desde el backend
export const fetchCities = createAsyncThunk('cities/fetchCities', async () => {
    const response = await fetch('http://localhost:8080/api/cities');
    const data = await response.json();
    return data.data;
});

const citySlice = createSlice({
    name: 'cities',
    initialState: {
        allCities: [],
        filteredCities: [],
        status: 'idle',
        error: null,
        search: '',
        selectedCity: null // Añadido: Estado para la ciudad seleccionada
    },
    reducers: {
        setSearch(state, action) {
            state.search = action.payload;
            state.filteredCities = state.allCities.filter(city =>
                city.name.toLowerCase().startsWith(action.payload.toLowerCase())
            );
        },
        setSelectedCity(state, action) {  // Añadido: Acción para establecer la ciudad seleccionada
            state.selectedCity = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCities.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCities.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.allCities = action.payload;
                state.filteredCities = action.payload;
            })
            .addCase(fetchCities.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export const { setSearch, setSelectedCity } = citySlice.actions; // Exporta la nueva acción
export default citySlice.reducer;
