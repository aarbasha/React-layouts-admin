// import React from "react";
// import { useRoutes } from "react-router-dom";
// // import Error from "../components/admin/Error";
// // import MasterAdmin from "../layouts/admin/MasterAdmin";
// // import Dashborde from "../components/admin/Dashborde";
// // import Profile from "../components/admin/Profile";
// // import Blank from "../components/admin/Blank";
// // //all routes for frontend
// // import MasterUser from "../layouts/frontend/MasterUser";
// // import Home from "../components/frontend/Home";
// // import About from "../components/frontend/About";
// // import Prodacts from "../components/frontend/Prodacts";
// // import Categoures from "../components/frontend/Categoures";
// // //import MasterAuth
// // import Login from "../layouts/auth/Login";
// // import Singup from "../layouts/auth/Singup";
// // import ResetPassword from "../layouts/auth/ResetPassword";

// const Router = () => {
//   const allRouteAdmin = () => {
//     if (localStorage.getItem("auth-roles") == 0) {
//       return [
//         {
//           path: "/admin",
//           name: "Admin",
//           element: <Dashborde />,
//         },
//         {
//           path: "/admin/Profile",
//           name: "Profile",
//           element: <Profile />,
//         },
//         {
//           path: "/admin/Blank",
//           name: "Profile",
//           element: <Blank />,
//         },
//       ];
//     }
//   };
//   const allRouteUsers = () => {
//     return [
//       {
//         path: "/",
//         element: <Home />,
//         name: "Home",
//       },
//       {
//         path: "/about",
//         element: <About />,
//         name: "About",
//       },

//       {
//         path: "/Prodacts",
//         element: <Prodacts />,
//         name: "Prodacts",
//       },
//       {
//         path: "/Categoures",
//         element: <Categoures />,
//         name: "Categoures",
//       },
//     ];
//   };
//   const element = useRoutes([
//     {
//       path: "/",
//       // element: localStorage.getItem('auth-name', "auth-token") ? <MasterUser /> : <Login />,
//       element: <MasterUser />,
//       children: allRouteUsers(),
//     },
//     {
//       path: "/admin",
//       element:
//         localStorage.getItem("auth-roles") == 0 ? (
//           <MasterAdmin />
//         ) : (
//           <MasterUser />
//         ),
//       children: allRouteAdmin(),
//     },
//     {
//       path: "/login",
//       name: "Login",
//       // element: localStorage.getItem('auth-name', "auth-token") ? <MasterUser /> : <Login />,
//       element: <Login />,
//     },
//     {
//       path: "/singup",
//       name: "singup",
//       // element: localStorage.getItem('auth-name', "auth-token") ? <MasterUser /> : <Singup />
//       element: <Singup />,
//     },
//     {
//       path: "/ResetPassword",
//       name: "ResetPassword",
//       element: <ResetPassword />,
//     },
//     {
//       path: "*",
//       name: "Error",
//       element: <Error />,
//     },
//   ]);
//   return element;
// };

// export default Router;
