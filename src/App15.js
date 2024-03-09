import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Feeds from "./Feeds";
import Posts from "./Posts";
import Comments from './Comments';
import Album from './Album';

export default function App15() {
  return (
    <div>
    <Router>
      <Link to="/">Feeds</Link> | <Link to="/post">Post</Link> | <Link to="/Album">Album</Link>| <Link to="/Comments">Comments</Link>
      <Routes>
          <Route path="/" index element={<Feeds/>}></Route>
          <Route path="/post" element={<Posts/>}></Route>
          <Route path="/Album" element={<Album/>}></Route>
          <Route path="/Comments" element={<Comments/>}></Route>
      </Routes>
    </Router>
  </div>
  )
}
