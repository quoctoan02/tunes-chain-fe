import { ErrorBoundary } from "react-error-boundary"
import { BrowserRouter } from "react-router-dom"
import "react-toastify/dist/ReactToastify.css"
import "sweetalert2/src/sweetalert2.scss"

import Provider from "./components/app/provider"
import AppRoutes from "./routes/app-routes"

import FallbackErrorBoundary from "./components/app/fallback-error-boundary"
import "./styles/styles.scss"

export default function App() {
  return (
    <ErrorBoundary FallbackComponent={FallbackErrorBoundary}>
      <BrowserRouter>
        <Provider>
          <AppRoutes />
        </Provider>
      </BrowserRouter>
    </ErrorBoundary>
  )
}
