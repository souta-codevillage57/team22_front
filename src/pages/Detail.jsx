import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PrimaryButton from "../components/PrimaryButton";
import baseUrl from "../apis/baseUrl";
import { Box, Center, Heading, Stack, Text } from "@chakra-ui/react";
import moment from "moment";


const Detail = () => {

  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const params = useParams();
  const event_id = params.id;
  console.log(event_id)
  useEffect(() => {
    const getPosts = async () => {
      await baseUrl.get(`/api/events/${event_id}`)//アクセスできない
        .then(res => {
          setPosts(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
    getPosts();
  }, [])
  console.log(posts)
  let leftDate = '';
  const count = (time) => {
    let timer = setInterval(function () {
      const nowTime = moment();
      console.log(nowTime)
      const setTime = moment(new Date(time));
      console.log(setTime)
      const left_days = setTime.diff(nowTime, 'days');
      const left_hours = setTime.diff(nowTime, 'hours') % 24;
      const left_minutes = setTime.diff(nowTime, 'minutes') % 60;
      const left_seconds = setTime.diff(nowTime, 'seconds') % 60;
      leftDate = `${left_days}日${left_hours}時間${left_minutes}分${left_seconds} 秒`;
      console.log(leftDate)
    }, 1000)
    return timer
  }

  const time = moment(posts.date).format('YYYY年MM月DD日 HH時mm分ss秒')
  // count(posts.date)//引数にposts.date


  const handleDelete = () => {

  }

  return (
    <>
      <Center>
        <Heading>イベント詳細</Heading>
      </Center>
      <Box
        p={4}

        borderRadius="10px"
        shadow="md"
        backgroundColor="teal.50"
        _hover={{ cursor: "pointer", opacity: "0.8" }}
      >
        <Stack textAlign="center">
          <Text color="teal.900" fontSize="lg" fontWeight="bold">{posts.title}</Text>
          <Text color="teal.900" fontSize="lg">{posts.owner}</Text>
          <Text color="teal.900" fontSize="lg" fontWeight="bold">{time}</Text>
          <Text color="teal.900" fontSize="sm">{posts.note}</Text>
          <Text color="teal.900" fontSize="sm">{posts.url}</Text>
        </Stack>
        <Box textAlign="right">
          <PrimaryButton onClick={handleDelete}>削除</PrimaryButton>
        </Box>
      </Box>
      <PrimaryButton onClick={() => { navigate('/') }}>ホームへ戻る</PrimaryButton>
    </>
  )
}

export default Detail