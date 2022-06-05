import React from "react";
import { useForm } from "react-hook-form";
import { Input, Textarea, Heading, Center, Box, FormControl, FormLabel } from '@chakra-ui/react'
import baseUrl from "../apis/baseUrl";
import PrimaryButton from "../components/PrimaryButton";
import { useNavigate } from "react-router-dom";

const NewPost = () => {

  const { register, handleSubmit, formState: { errors } } = useForm()
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const postData = async () => {
      await baseUrl.post("/api/events/", {
        "title": data.title,
        "owner": data.pwner,
        "date": data.date,
        "note": data.note,
        "url": data.url,
        "delete_key": data.delete_key
      })
        .then(res => {
          console.log(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
    postData();
  }

  return (
    <>
      <Box>
        <Center>
          <Heading>イベント登録</Heading>
        </Center>
        <FormControl as="form" onSubmit={handleSubmit(onSubmit)}>
          <Box>
            <FormLabel htmlFor="title" fontWeight="bold">タイトル</FormLabel>
            <Input id="title" {...register("title", { required: true })} />
            {
              errors.title &&
              <Box as="span" color="red">※タイトルを入力してください</Box >
            }
          </Box>
          <Box>
            <FormLabel htmlFor="owner" fontWeight="bold">主催者</FormLabel>
            <Input id="owner" {...register("owner", { required: true })} />
            {
              errors.owner &&
              <Box as="span" color="red" >※主催者を入力してください</Box>
            }
          </Box>
          <Box>
            <FormLabel htmlFor="date" fontWeight="bold">日時</FormLabel>
            <Input type="datetime-local" id="date" {...register("date", { required: true })} />
            {
              errors.date &&
              <Box as="span" color="red" >※日時を指定してください</Box >
            }
          </Box>
          <Box>
            <FormLabel htmlFor="note" fontWeight="bold">note</FormLabel>
            <Textarea id="note" {...register("note", { required: true })} />
            {
              errors.note &&
              <Box as="span" color="red" >※noteを入力してください</Box >
            }
          </Box>
          <Box>
            <FormLabel htmlFor="url" fontWeight="bold">url</FormLabel>
            <Input id="url" {...register("url", { required: true })} />
            {
              errors.url &&
              <Box as="span" color="red" >※urlを貼ってください</Box >
            }
          </Box>
          <Box>
            <FormLabel htmlFor="delete_key" fontWeight="bold">パスワード</FormLabel>
            <Input id="delete_key" {...register("delete_key", { required: true })} />
            {
              errors.delete_key &&
              <Box as="span" color="red" >※パスワードを入力してください</Box >
            }
          </Box>
          <Center marginTop={5}>
            <PrimaryButton type="submit">登録する</PrimaryButton>
          </Center>
        </FormControl>
        <PrimaryButton onClick={() => { navigate('/') }}>ホームへ戻る</PrimaryButton>
      </Box>
    </>
  )
}

export default NewPost