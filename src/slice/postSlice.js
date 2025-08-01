import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

const fetchPost = createAsyncThunk('fetchPost', async () => {
  console.log('hello');

  const querySnapshot = await getDocs(collection(db, 'posts'));
  const posts = querySnapshot.docs.map(doc => {
    const data = doc.data();
    return {
      id: doc.id,
      ...data,
      createdAt: data.createdAt?.toDate() || null,
    };
  });

  console.log('Fetched posts:', posts);
  return posts;
});

const initialState = {
  data: null,
  is_loading: false,
  is_error: false,
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPost.pending, (state) => {
      state.is_loading = true;
    });
    builder.addCase(fetchPost.fulfilled, (state, action) => {
      state.is_error = false;
      state.is_loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchPost.rejected, (state) => {
      state.is_error = true;
      state.is_loading = false;
    });
  },
});

export { fetchPost };
export default postSlice.reducer;
