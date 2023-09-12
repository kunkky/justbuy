import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './Pages/Home'
import SignUp from './Pages/Signup'
import Signin from './Pages/Signin'
import Profile from './Pages/Profile'
import ErrorPage from './Pages/ErrorPage'
import Dashboard from './Pages/Dashboard'
import AllProducts from './Pages/AllProducts'


//protected route for authentication
const ProtectedRoutes = ({ children }) => {
  if (sessionStorage.getItem("user")) {
    return children
  } else {
    return <Navigate to={"/"} replace={true} />
  }
}


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/allProducts' element={<AllProducts/>}></Route>
      <Route path='/signUp' element={<SignUp />}></Route>
      <Route path='/signin' element={<Signin />}></Route>
      {/* Protected routes */}
      <Route path='/dashboard' element={
        <ProtectedRoutes>
          <Dashboard />
        </ProtectedRoutes>
      }></Route>


      <Route path='/profile' element={
        <ProtectedRoutes>
          <Profile />
        </ProtectedRoutes>
      }></Route>


      {/* Error Page */}
      <Route path='*' element={<ErrorPage />}></Route>
    </Routes>
  )
}

export default App