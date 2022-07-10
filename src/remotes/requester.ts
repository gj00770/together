// const accessToken = localStorage.getItem("accessToken");
//     setUserImage(URL.createObjectURL(e.target.files[0]));
//     console.log("123123", URL.createObjectURL(e.target.files[0]));
//     axios.put(
//       "http://localhost:5000/user/updateUserProfile",
//       {
//         profile_image: URL.createObjectURL(e.target.files[0]),
//       },
//       {
//         headers: { Authorization: `Bearer ${accessToken}` },
//       }
//     );

import axios from "axios";

export const requester = axios.create();
requester.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${accessToken}`,
    };
  }
  return config;
});
