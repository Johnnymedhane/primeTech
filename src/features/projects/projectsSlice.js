
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProjects as fetchProjectsApi } from "../../service/projectsApi";
import { fetchProjectById as fetchProjectByIdApi } from "../../service/projectsApi";

const initialState = {
  items: [],
  selectedProject: null,
  status: "idle",
  error: null,
};

export const fetchProjects = createAsyncThunk(
  "projects/fetchProjects",
  async () => {
    const projects = await fetchProjectsApi();
    return projects;
  }
);

export const fetchProjectById = createAsyncThunk(
  "projects/fetchProjectById",
  async (projectId) => {
    const project = await fetchProjectByIdApi(projectId);
    return project;
  }
);

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    clearSelectedProject(state) {
      state.selectedProject = null;
    }
  },
  extraReducers(builder) {
    builder
      // fetchProjects cases
      .addCase(fetchProjects.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      // fetchProjectById cases
      .addCase(fetchProjectById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProjectById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.selectedProject = action.payload;
      })
      .addCase(fetchProjectById.rejected, (state, action) => {
        state.status = "failed to fetch project by id";
        state.error = action.error.message;
      });
  }
});

export const { clearSelectedProject } = projectsSlice.actions;
export default projectsSlice.reducer;

export const selectAllProjects = (state) => state.projects.items;
export const getProjectsStatus = (state) => state.projects.status;
export const getProjectsError = (state) => state.projects.error;
export const getSelectedProject = (state) => state.projects.selectedProject;
  