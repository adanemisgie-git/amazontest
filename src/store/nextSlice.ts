// import { createSlice } from "@reduxjs/toolkit";
// import { storeProduct } from "../../type";

// interface NextState {
//   productData: storeProduct[],
//   favouriteData: storeProduct[],
//   allProducts: storeProduct[],
//   userInfo: null | string,
// }

// const initialState:NextState={
//     productData:[],
//     favouriteData:[],
//     allProducts:[],
//     userInfo:null,
// }

// export const nextSlice = createSlice({
//   name: "next",
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       // state.productData = action.payload;
//       const existingProduct = state.productData.find(
//         (item: storeProduct) => item._id === action.payload._id
//       );
//       if (existingProduct) {
//         existingProduct.quantity += action.payload.quantity;
//       } else {
//         state.productData.push(action.payload);
//       }
//     },
//     addToFavourite: (state, action) => {
//       const existingProduct = state.favouriteData.find(
//         (item: storeProduct) => item._id === action.payload._id
//       );
//       if (existingProduct) {
//         existingProduct.quantity += action.payload.quantity;
//       } else {
//         state.favouriteData.push(action.payload);
//       }
//     },
//     increaseQuantity: (state, action) => {
//       const existingProduct = state.productData.find(
//         (item: storeProduct) => item._id === action.payload._id
//       );
//       existingProduct && existingProduct.quantity++;
//     },
//     decreaseQuantity: (state, action) => {
//       const existingProduct = state.productData.find(
//         (item: storeProduct) => item._id === action.payload._id
//       );
//       if (existingProduct?.quantity === 1) {
//         existingProduct.quantity = 1;
//       } else {
//         existingProduct!.quantity--;
//       }
//     },
//     deleteProduct: (state, action) => {
//       state.productData = state.productData.filter(
//         (item) => item._id !== action.payload
//       );
//     },
//     deleteFavourite: (state, action) => {
//       state.favouriteData = state.favouriteData.filter(
//         (item) => item._id !== action.payload
//       );
//     },
//     resetCart: (state) => {
//       state.productData = [];
//     },
//     resetFavouriteData: (state) => {
//       state.favouriteData = [];
//     },
//     addUser: (state, action) => {
//       state.userInfo = action.payload;
//     },
//     removeUser: (state) => {
//       state.userInfo = null;
//     },
//     setAllProducts: (state, action) => {
//       state.allProducts = action.payload;
//     },
//   },
// });

// export const {
//   addToCart,
//   addToFavourite,
//   increaseQuantity,
//   decreaseQuantity,
//   deleteProduct,
//   resetCart,
//   addUser,
//   removeUser,
//   setAllProducts,
//   deleteFavourite,
//   resetFavouriteData,
// } = nextSlice.actions;
// export default nextSlice.reducer;

///////////////////////////new

import { createSlice } from "@reduxjs/toolkit";
import { storeProduct } from "../../type";

interface NextState {
  productData: storeProduct[];
  favouriteData: storeProduct[];
  allProducts: storeProduct[];
  userInfo: null | string;
}

const initialState: NextState = {
  productData: [],
  favouriteData: [],
  allProducts: [],
  userInfo: null,
};

export const nextSlice = createSlice({
  name: "next",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.productData.find(
        (item: storeProduct) => item._id === action.payload._id
      );
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },
    addToFavourite: (state, action) => {
      const existingProduct = state.favouriteData.find(
        (item: storeProduct) => item._id === action.payload._id
      );
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.favouriteData.push(action.payload);
      }
    },
    increaseQuantity: (state, action) => {
      const existingProduct = state.productData.find(
        (item: storeProduct) => item._id === action.payload._id
      );
      existingProduct && existingProduct.quantity++;
    },
    decreaseQuantity: (state, action) => {
      const existingProduct = state.productData.find(
        (item: storeProduct) => item._id === action.payload._id
      );
      if (existingProduct?.quantity === 1) {
        existingProduct.quantity = 1;
      } else {
        existingProduct!.quantity--;
      }
    },
    deleteProduct: (state, action) => {
      state.productData = state.productData.filter(
        (item) => item._id !== action.payload
      );
    },
    deleteFavourite: (state, action) => {
      state.favouriteData = state.favouriteData.filter(
        (item) => item._id !== action.payload
      );
    },

    resetCart: (state) => {
      state.productData = [];
    },
    resetFavouriteData: (state) => {
      state.favouriteData = [];
    },

    addUser: (state, action) => {
      state.userInfo = action.payload;
    },
    removeUser: (state) => {
      state.userInfo = null;
    },
    setAllProducts: (state, action) => {
      state.allProducts = action.payload;
    },
  },
});

export const {
  addToCart,
  addToFavourite,
  increaseQuantity,
  decreaseQuantity,
  deleteProduct,
  resetCart,
  addUser,
  removeUser,
  setAllProducts,
  deleteFavourite,
  resetFavouriteData,
} = nextSlice.actions;
export default nextSlice.reducer;