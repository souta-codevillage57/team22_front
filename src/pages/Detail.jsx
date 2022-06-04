import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PrimaryButton from "../components/PrimaryButton";
import baseUrl from "../apis/baseUrl";


const Detail = () => {

  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const event_id = useParams();

  useEffect(() => {
    const getPosts = async () => {
      await baseUrl.get(`/api/events/${event_id}`)
        .then(res => {
          setPosts(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
    getPosts();
  }, [event_id])

  const handleDelete = () => {


  }

  return (
    <>
      <h1>イベント詳細</h1>
      <h1>{posts.title}</h1>
      <h2>{posts.owner}</h2>
      <h2>{posts.date}</h2>
      <p>{posts.nate}</p>
      <a href={posts.url}>{posts.url}</a>
      <PrimaryButton onClick={handleDelete}>削除</PrimaryButton>
      <PrimaryButton onClick={() => { navigate('/') }}>ホームへ戻る</PrimaryButton>
    </>
  )
}

export default Detail