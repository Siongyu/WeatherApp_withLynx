import { root } from '@lynx-js/react'
import { MemoryRouter, Routes, Route } from 'react-router';

import { App } from './App.tsx'
import Weather from './screens/Weather.tsx';

root.render(
  <MemoryRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/weather' element={<Weather />} />
      {/* Add more routes as needed */}
    </Routes>
  </MemoryRouter>
);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}