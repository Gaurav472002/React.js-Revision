import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes, useParams, NavLink } from "react-router-dom";
import { useEffect, useState } from 'react';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(data => data.json())
      .then(data => setPosts(data))
  }, [])
  return (
    <div>
      <div>
        {
          posts.map(post => (
            <div key={post.id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
              <NavLink to={`/post/${post.id}`}>{post.title}</NavLink>
            </div>
          ))
        }
      </div>
    </div>
  )
}

const About = () => {

  return (
    <div>
      <h1>About Page</h1>
    </div>
  )
}

const User = () => {

  const params = useParams();
  return (
    <div>
      <h1>User Page</h1>
      <h2>User name is : {params.useName} </h2>
      <h2>User id is : {params.userId} </h2>
    </div>
  )
}

const Post = () => {

  const params = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      .then(data => data.json())
      .then(data => setData(data));
  }, []);

  if (data === null) return < p > Loading......</p >
  return (
    <div>
      <h1>Post Page</h1>
      <h1>Post Id : {params.postId}</h1>

      <h2>{data.title}</h2>
      <h3>{data.body}</h3>

    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* <App /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Nested paths  */}
        {/* <Route path = "account/setting">  */}

        <Route path="account">
          <Route path="profile" element={<div><h1>Profile Page</h1></div>} />
          <Route path="settings" element={<div><h1>Settings Page</h1></div>} />
        </Route>


        {/* Dynamic routes using react router  */}

        <Route path="/user/:userId/:useName" element={<User />} />
        <Route path="/post/:postId" element={<Post/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
