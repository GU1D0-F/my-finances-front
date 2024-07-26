import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/home";
import Spendings from "../pages/Spendings/spendings";
import Calendar from "../pages/Calendar/calendar";
import AddSpendings from "../pages/AddSpendings/addSpendings";

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/spendings" element={<Spendings />} />
      <Route path="/spendings/:idUrl" element={<AddSpendings />} />
      {/*<Route path="/metricsandcharts" element={<MetricsAndCharts />} />*/}
      <Route path="/calendar" element={<Calendar />} />
    </Routes>
  );
};

export default RoutesApp;
