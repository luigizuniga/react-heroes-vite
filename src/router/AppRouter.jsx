import { HeroesRoutes } from '../heroes'
import { LoginPage } from '../auth'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'
import { Route, Routes } from 'react-router-dom'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="login" element={
        <PublicRoute>
          <Routes>
            <Route path="*" element={
              <LoginPage />
            } />
          </Routes>
        </PublicRoute>
      }/>

      <Route path="/*" element={
        <PrivateRoute>
          <HeroesRoutes />
        </PrivateRoute>
      }/>
    </Routes>
  )
}
