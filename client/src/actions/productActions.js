import axios from "axios";
import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_REQUEST,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_REQUEST,
} from "../constants/productConstant";
import { API_BASE_URL } from "../API_BASE_URL";

export const listProducts = async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    const productsHadFetched = await axios.get(`${API_BASE_URL}/products`);

    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: productsHadFetched.data });
  } catch (err) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};


export const descripeProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });

    const productsHadFetched = await axios.get(`${API_BASE_URL}/products/${id}`);

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: productsHadFetched.data,
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
