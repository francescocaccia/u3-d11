import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favouritesReducer from "../reducers/favouritesReducer";
import companyReducer from "../reducers/companyReducer";
import jobsReducer from "../reducers/jobsReducers";

const rootRedecer = combineReducers({
  favourites: favouritesReducer,
  jobs: jobsReducer,
  company: companyReducer,
});

const store = configureStore({
  reducer: rootRedecer,
});

export default store;
