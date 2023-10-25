import { createSlice } from "@reduxjs/toolkit";
import { request, setToken as _setToken, getToken } from "@/utils";

const userStore = createSlice({
  name: 'user',
  initialState: {
    token: getToken() || ''
  },
  reducers: {
    setToken (state, action) {
      state.token = action.payload
      _setToken(action.payload)
    }
  }
})

const { setToken } = userStore.actions

const userReducer = userStore.reducer

const fetchLogin = (loginFrom) => {
  return async (dispatch) => {
    const res = await request.post('/authorizations', loginFrom)
    dispatch(setToken(res.data.token))
  }
}

export { fetchLogin, setToken }

export default userReducer