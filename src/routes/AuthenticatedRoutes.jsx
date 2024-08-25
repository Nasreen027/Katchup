import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthenticatedRoutesNames } from '../utilities/util.const'
import Header from '../components/authenticated/Header'
import Home from '../components/authenticated/Home'
import NewPost from '../components/authenticated/NewPost'
import MainLayout from '../Layout/MainLayout'

const AuthenticatedRoutes=()=> {
  return (
    <Routes>
      <Route element={<MainLayout/>}>
      <Route path={AuthenticatedRoutesNames.Home} element={<Home/>}/>
      <Route path={AuthenticatedRoutesNames.NewPost} element={<NewPost/>} />
      </Route>
    </Routes>
  )
}

export default AuthenticatedRoutes
