import React, { useContext } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  // const { user } = useContext(UserContext);

  return (
    <Router>
      <Routes>
        {/* <Route path="/login" element={user ? <MainPage /> : <Login />} /> */}
        <Route path="/" element={<div>Hello</div>} />
      </Routes>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
      <Routes>
        <Route path="/forgotPassword" element={<ForgotPassword />} />
      </Routes>
      {/* <Routes>
        <Route path="/" element={<MainPage /> } />
      </Routes>
      <Routes>
        <Route path="/login" element={user ? <MainPage /> : <Login />} />
      </Routes>
      
      <Routes>
        <Route path="/please-login" element={<ErrorPage /> } />
      </Routes>
      <Routes>
        <Route path="/register" element={user ? <MainPage /> : <Register />} />
      </Routes>  
      <Routes>
        <Route path="/movies" element={user ? <MainPage /> : <Login/>} />
      </Routes>
      <Routes>
        <Route path="/writeReviews" element={user ? <AddReviewPage /> : <Login/>} />
      </Routes>  
      <Routes>
        <Route path="/updateReview" element={user ? <UpdateReviewPage /> : <Login/>} />
      </Routes>  
      <Routes>
        <Route path="/allReviews" element={user ? <AllReviews /> : <Login/>} />
      </Routes>  
      <Routes>
        <Route path="/changePassword" element={<ChangePassword/>} />
      </Routes>  
      <Routes>
        <Route path="/forgotPassword" element={<ForgotPassword/>} />
      </Routes>  
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>   */}
    </Router>
  );
}

export default App;
