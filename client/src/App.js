// ************** THIS IS YOUR APP'S ENTRY POINT. CHANGE THIS FILE AS NEEDED. **************
// ************** DEFINE YOUR REACT COMPONENTS in ./components directory **************
import './stylesheets/App.css';
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";

import SignIn from './components/SignIn';
import Layout from './components/Layout';
import Home from './components/Home';
import Projects from './components/Projects';
import ResonVisual from './components/ResonVisual';

const router = createBrowserRouter(
  createRoutesFromElements
  (
    <>
      <Route path='/' exact element={<SignIn />} />
      <Route path='main' element={<Layout />}>
        <Route path='home' element={<Home />} />
        <Route path='projects' element={<Projects />} />
        <Route path='resonance-visualizer' element={<ResonVisual />} />
      </Route>
    </>
  )
  
)

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
