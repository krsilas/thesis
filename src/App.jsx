import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import DataLoading from "./routes/DataLoading";
import LineChart from "./routes/LineChart";
import RealtimeChart from "./routes/RealtimeChart";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-gray-100 min-h-screen flex w-full ">
        <NavigationBar />
        <main className="m-6 ml-0 flex-grow max-w-5xl">
          <Routes>
            <Route path="/" />
            <Route path="/data-loading" element={<DataLoading />} />
            <Route path="/line-chart" element={<LineChart />} />
            <Route path="/full" element={<RealtimeChart />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
