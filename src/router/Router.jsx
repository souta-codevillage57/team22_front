import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "../pages/Detail";
import NewPost from "../pages/NewPost";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route />
        <Route path="/detail" element={<Detail />} />
        <Route path="newPost" element={<NewPost />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router