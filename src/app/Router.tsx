import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ConfigProvider } from "antd";
import theme from "./common/theme";

import Dashboard from "./dashboard";
import NotFound from "./404";

ConfigProvider.config({
  theme,
});

const Router: React.FC = () => (
  <BrowserRouter>
    <ConfigProvider>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ConfigProvider>
  </BrowserRouter>
);

export default Router;
