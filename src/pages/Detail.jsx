import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PrimaryButton from "../components/PrimaryButton";
import baseUrl from "../apis/baseUrl";
import { Box, Center, Heading, Stack, Text } from "@chakra-ui/react";


const Detail = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const event_id = useParams();
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
  }, [event_id])

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
          <Text color="teal.900" fontSize="lg" fontWeight="bold">成果物発表</Text>
          <Text color="teal.900" fontSize="lg">team22</Text>
          <Text color="teal.900" fontSize="lg" fontWeight="bold">2022年06月05日16時00分開始</Text>
          <Text color="teal.900" fontSize="sm">texttexttexttexttexttexttexttexttexttextexttexttexttexttexttext</Text>
          <Text color="teal.900" fontSize="sm">url</Text>
        </Stack>
        <Box textAlign="right">
          <PrimaryButton onClick={handleDelete}>削除</PrimaryButton>
        </Box>
      </Box>
      {/* <PrimaryButton onClick={() => { navigate('/') }}>ホームへ戻る</PrimaryButton> */}
    </>
  )
}

export default Detail