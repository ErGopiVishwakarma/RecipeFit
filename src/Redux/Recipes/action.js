import { GETRECIPES, ISLOADING, ISERROR } from "./actiontypes";
import axios from "axios";
const dburl = process.env.REACT_APP_RECIPE_DB;

const LoadingObj = () => {
  return { type: ISLOADING };
};
const ErrorObj = () => {
  return { type: ISERROR };
};
const GetObj = (payload, totalPages) => {
  return { type: GETRECIPES, payload: payload, totalPages: totalPages };
};

// Get Recipe Function

export const getData = (params) => async (dispatch) => {
  dispatch(LoadingObj());
  axios({
    method: "get",
    url: `${dburl}recipes`,
    params: {
      ...params,
      limit: 6,
    },
  })
    .then((res) => {
      dispatch(GetObj(res.data.recipes, res.data.totalPages));
    })
    .catch((err) => {
      console.log("Get Error - ", err);
      dispatch(ErrorObj());
    });
};
