import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import './index.css'
const BasicPopup = React.lazy(() => import('./popups/basicPopup'))
const SpinnerPopup = React.lazy(() => import('./popups/spinnerPopup'))

const popup = 1

if (popup === 1) {
  ReactDOM.createRoot(
    document.getElementById('dypops-root') as HTMLElement,
  ).render(
    <React.StrictMode>
      <Suspense fallback={<div>crazy</div>}>
        <BasicPopup />
      </Suspense>
    </React.StrictMode>,
  )
} else if (popup === 2) {
  ReactDOM.createRoot(
    document.getElementById('dypops-root') as HTMLElement,
  ).render(
    <React.StrictMode>
      <Suspense fallback={<div>crazy</div>}>
        <SpinnerPopup />
      </Suspense>
    </React.StrictMode>,
  )
}
