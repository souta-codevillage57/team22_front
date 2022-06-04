import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "../pages/Detail";
import NewPost from "../pages/NewPost";
import Page404 from "../pages/Page404";
import Home from "../pages/Home";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="/newPost" element={<NewPost />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router