import {createSlice} from '@reduxjs/toolkit';

interface user {
  UserDetails: object | null;
}

const initialState: user = {
  UserDetails: null,
};

const User = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    addUser: (state, {payload}) => {
      state.UserDetails = payload;
    },
    removeUser: state => {
      state.UserDetails = {};
    },
  },
});
export const {addUser, removeUser} = User.actions;

export default User.reducer;
