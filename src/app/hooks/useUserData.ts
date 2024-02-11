// "use client";
// import React, { useEffect, useState } from "react";
// import connectDB from "../db/connectDB";
// import User from "../models/User";

// const useUserData = (email: string) => {
//   const [userData, setUserData] = useState(null);
//   let getUserData = async () => {
//     await connectDB().then(() => {
//       return User.findOne({ email: email });
//     });
//   };
//   useEffect(()=>{
//     setUserData(getUserData)
//   },[])
// };

// export default useUserData;
