

import { useEffect, useReducer } from "react";
import axios from "axios";
import Cookie from "universal-cookie";

const cookie = new Cookie();

const urllocal = "http://localhost:8080";
const urllive = "https://ajayvastraliyamart.online";

const initialState = {
  data: null,
  error: null,
  loading: false,
};

const ActionType = {
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ActionType.LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ActionType.FAILED:
      return {
        loading: false,
        error: action.payload,
        data: null,
      };
    case ActionType.SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.payload,
      };
    default:
      return initialState;
  }
};

const useProducts = () => {
  const sessionToken = cookie.get("session_token");
  const [{ data, loading, error }, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchProductList();
  }, []);

  const fetchProductList = async () => {
    dispatch({ type: ActionType.LOADING });
    try {
      const response = await axios.get(`https://ajayvastraliyamart.online/product`);
      const EventData = response.data;
      console.log(EventData)
      dispatch({ type: ActionType.SUCCESS, payload: EventData });
    } catch (error) {
      // dispatch({
      //   type: ActionType.FAILED,
      //   payload: error?.response.error,
      // });
    }
  };





  // get single product details 
  const singleProduct = async (data) => {
    console.log('in single product')
    try {
      const response = await axios.get(`${urllocal}/products/oneproduct/${data}`);
      const ProductData = response.data;
      return ProductData
    } catch (error) {
      console.log(error);
    }
  };

  return { data, loading, error, singleProduct };
};

export default useProducts;