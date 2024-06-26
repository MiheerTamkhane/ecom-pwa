import React from "react";
import { MyRoutes } from "./routes/MyRoutes";
import { Navbar } from "./components/Navbar";
function App() {
  return (
    <div className="h-screen w-full bg-slate-100">
      <Navbar />
      <MyRoutes />
      <footer>Footer</footer>
    </div>
  );
}

export default App;
