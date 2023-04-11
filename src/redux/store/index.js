import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favouritesReducer from "../reducers/favouritesReducer";
import companyReducer from "../reducers/companyReducer";

const rootRedecer = combineReducers({
  favourites: favouritesReducer,
  jobs: companyReducer,
  company: companyReducer,
});

const store = configureStore({
  reducer: rootRedecer,
});

export default store;
