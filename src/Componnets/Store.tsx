import { configureStore } from '@reduxjs/toolkit'
import sneakersSlice from './SneakersSlice'

export default configureStore({
  reducer: {
    sneakers: sneakersSlice
  },
})