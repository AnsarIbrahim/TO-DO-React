import { Routes, Route } from "react-router-dom";

import Home from "../routes/Home";
import About from "../routes/Todo";
import Profile from "../routes/Profile";
import NotMatch from "../routes/NotMatch";
import Layout from "../navbar/Layout";

const TodoApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Todo" element={<About />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<NotMatch />} />
      </Route>
    </Routes>
  );
};

export default TodoApp;
