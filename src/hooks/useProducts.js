

import { useEffect, useReducer } from "react";
import axios from "axios";
import Cookie from "universal-cookie";

const cookie = new Cookie();

const urllocal = "https://ajayvastraliyamart.online";
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

  

  const fetchProductList = async (cat,subcat) => {
    dispatch({ type: ActionType.LOADING });
    try {
      const response = await axios.get(`https://ajayvastraliyamart.online/category/${cat}/${subcat}`);
      const EventData = response.data;
      console.log(EventData)
      dispatch({ type: ActionType.SUCCESS, payload: EventData });
      return EventData
    } catch (error) {
      // dispatch({
      //   type: ActionType.FAILED,
      //   payload: error?.response.error,
      // });
    }
  };

 
const categoryProduct = async (data) => {
    console.log('in category product', data)
    try {
      const response = await axios.get(`${urllocal}/category/${data}`);
      const categoryProductData = response.data;
      return categoryProductData
    } catch (error) {
      console.log(error);
    }
  };




  // get single product details 
  const singleProduct = async (data) => {
    console.log('in single product')
    try {
      const response = await axios.get(`${urllocal}/product/${data}`);
      const ProductData = response.data;
      console.log(ProductData)
      return ProductData
    } catch (error) {
      console.log(error);
    }
  };

   // get All product details 
   const allProduct = async (data) => {
    console.log('in All product')
    try {
      const response = await axios.get(`${urllocal}/product`);
      const ProductData = response.data;
      console.log(ProductData)
      return ProductData
    } catch (error) {
      console.log(error);
    }
  };

  return { allProduct,fetchProductList, singleProduct,categoryProduct  };
};

export default useProducts;