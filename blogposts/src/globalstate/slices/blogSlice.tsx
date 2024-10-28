import { createSlice, createAsyncThunk, ReducerType } from "@reduxjs/toolkit";
import blogOperations from "../../dataFetch/dataFetch";

const { getAllBlogs, addBlog, updateBlog,deleteBlog } = blogOperations;

interface Blog {
  id: string;
  title: string;
  description: string;
  category: string;
  author: string;
  date: string;
}

interface BlogAdd{
  title: string;
  description: string;
  category: string;
  author: string;
  date: string;
}

interface BlogState {
  blogs: Blog[];
  currentBlog: any,
}


const initialState: BlogState = {
  blogs: [],
  currentBlog: null

};

export const fetchBlogs = createAsyncThunk('blog/fetchAll', async () => {
  return await getAllBlogs();
});


export const postBlog = createAsyncThunk('blog/add', async (newBlog : BlogAdd) => {
  return await addBlog(newBlog);
});

export const putBlog = createAsyncThunk('blog/update', async (updatedBlog: { id: string; blog: Blog}) => {
  return await updateBlog(updatedBlog.id,updatedBlog.blog);
});

export const removeBlog = createAsyncThunk('blog/delete', async (id: string) => {
  await deleteBlog(id);
  return id; 
});


const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.blogs = action.payload;
      })
      .addCase(postBlog.fulfilled, (state, action) => {
        const newBlogPost={...action.payload, id : ""}
        state.blogs.push(newBlogPost);
      })
      .addCase(putBlog.fulfilled, (state, action) => {
        const index = state.blogs.findIndex(blog => blog.id === action.payload.id);
        if (index !== -1) {
          state.blogs[index] = action.payload; 
        }
      })
      .addCase(removeBlog.fulfilled, (state, action) => {
        state.blogs = state.blogs.filter(blog => blog.id !== action.payload);
      });
  },
});


export const blogActions = {
  fetchBlogs,
  postBlog,
  putBlog,
  removeBlog,
} ;


export default blogSlice.reducer;
