import Navbar from "./components/Navbar/Navbar";
import './App.css';

import { VideoProvider } from "./components/context/video-context";
import Router from "./components/Router/Router";
import { AuthProvider } from "./components/Form/Authentication/Auth-Context";


function App() {
  return <>
  <AuthProvider>
  <Navbar />
  <VideoProvider>
  <Router />
 
  </VideoProvider>

  </AuthProvider>

  </>
}

export default App;
