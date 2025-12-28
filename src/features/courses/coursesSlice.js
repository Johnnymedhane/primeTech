// src/features/courses/coursesSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCourses as fetchCoursesApi } from "../../service/coursesApi";
import { fetchCourseById as fetchCourseByIdApi } from "../../service/coursesApi";

export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async () => {
    const courses = await fetchCoursesApi();
    return courses;
  }
);

export const fetchCourseById = createAsyncThunk(
  "courses/fetchCourseById",
  async (courseId) => {
    const course = await fetchCourseByIdApi(courseId);
    return course;
  }
);

const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    items: [],
    selectedCourse: null,
    status: "idle",
    error: null,
  },
  reducers: {
    clearSelectedCourse(state) {
      state.selectedCourse = null;
    }
  },
  extraReducers(builder) {
    builder
      // fetchCourses cases
      .addCase(fetchCourses.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      // fetchCourseById cases
      .addCase(fetchCourseById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCourseById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.selectedCourse = action.payload;
      })
      .addCase(fetchCourseById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  }
});
export const { clearSelectedCourse } = coursesSlice.actions;
export default coursesSlice.reducer;

export const selectAllCourses = (state) => state.courses.items;
export const getCoursesStatus = (state) => state.courses.status;
export const getCoursesError = (state) => state.courses.error;
export const getSelectedCourse = (state) => state.courses.selectedCourse;