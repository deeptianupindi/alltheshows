import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from '../../axios-movies'
import { RootState } from '../index'
import { IMovieDetails } from './movieDetailsSlice'

const initialState: { data: IMovieDetails[] } = {
  data: [],
}

export const getNetflixOriginalsAsync = createAsyncThunk<
  any,
  void,
  { state: RootState }
>('netflixOriginals/getNetflixOriginals', async () => {
  const response = await axios.get('&q=improv%2Bshows%2Bberlin')
  return response.data.results
})

const netflixOriginalsSlice = createSlice({
  name: 'netflixOriginals',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getNetflixOriginalsAsync.fulfilled,
      (state, { payload }) => {
        state.data = payload
      }
    )
  },
})

export default netflixOriginalsSlice.reducer
