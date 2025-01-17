import React, { useEffect } from "react";
import { Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout";
import StrategyFeedPage from "./pages/StrategyFeedPage";
import StrategyFeedPageDetail from "./pages/StrategyFeedPageDetail";
import AIAgentsPage from "./pages/AIAgentsPage";
import AiAgentsPageChat from "./pages/AiAgentsPageChat";
import MyStrategiesPage from "./pages/MyStrategiesPage";
import LandingPage from "./pages/LandingPage";
import LPLayout from "./layouts/LPLayout";
import Aos from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <Routes>
      <Route path="/" element={<LPLayout />}>
        <Route index element={<LandingPage />} />
      </Route>

      <Route path="/" element={<MainLayout />}>
        <Route path="strategy-feed">
          <Route index element={<StrategyFeedPage />} />
          <Route path=":id" element={<StrategyFeedPageDetail />} />
        </Route>
        <Route path="ai-agents">
          <Route index element={<AIAgentsPage />} />
          <Route path=":id" element={<AiAgentsPageChat />} />
        </Route>
        <Route path="my-strategies" element={<MyStrategiesPage />} />
      </Route>
    </Routes>
  );
}
