import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useGeolocated } from "react-geolocated";
import axios from "axios";

const userSlice = createSlice({
  name: "user",
  initialState: {
    query: "",
    activeLawyer: {},
    lawyers: {
      data: [],
      loading: false,
    },
    coords: {
      longitude: 0,
      latitude: 0,
    },
  },
  reducers: {
    setQuery: (state, action) => {
      return { ...state, query: action.payload };
    },
    setActiveLawyer: (state, action) => {
      return { ...state, activeLawyer: action.payload };
    },
    setCoords: (state, action) => {
      let { lon, lat } = action.payload;
      return { ...state, coords: { longitude: lon, latitude: lat } };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getLawyers.pending, (state, action) => {
        state.lawyers.loading = true;
      })
      .addCase(getLawyers.fulfilled, (state, action) => {
        return {
          ...state,
          lawyers: {
            data: action.payload,
            loading: false,
          },
        };
      });
    // builder.addCase(checkLocalUser.fulfilled, (state, action) => {
    //   state.userData = action.payload;
    // });
  },
});
// export const checkLocalUser = createAsyncThunk(
//   "user/checkLocalUser",
//   async () => {
//     let obj = localStorage.getItem("userInfo");
//     if (obj !== null) {
//       return JSON.parse(obj);
//     } else {
//       return null;
//     }
//     return userInfo;
//   }
// );
// export const setUserInfo = (res) => {
//     localStorage.setItem(
//       "userInfo",
//       JSON.stringify({ _id: res._id, class: res.class })
//     );
//   };
//   export const userInfo = async () => {
//     let obj = localStorage.getItem("userInfo");
//     let userInfo = JSON.parse(obj);
//     return userInfo;
//   };

export const getLawyers = createAsyncThunk("lawyers/get", async (con) => {
  navigator.geolocation.getCurrentPosition(function (position) {
    console.log(position);
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
  });
  let obj = {
    query: con,
    latitude: "19.1158004",
    longitude: "72.8397202",
  };
  console.log(obj);
  let res = await axios.post(`https://legal-up.vercel.app/api/query`, obj);
  return res.data;
});
export const addLawyers = createAsyncThunk("lawyers/add", async (dataObj) => {
  let bodyContent = JSON.stringify(dataObj);
  await axios
    .post(`https://legal-up.vercel.app/api/form`, dataObj)
    .then((res) => {
      if (res.data == "ok") {
        window.location.href = "/";
      }
    });
});
export const { setQuery, setCoords, setActiveLawyer } = userSlice.actions;
export default userSlice.reducer;
