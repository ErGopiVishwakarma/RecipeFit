import { EmailIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import * as css from "../Styles/AllRecipesBoxCss";
import {
  BsFacebook,
  BsFlower2,
  BsMailbox,
  BsPinterest,
  BsTwitter,
  BsVoicemail,
} from "react-icons/bs";
import ContentPage from "../Components/Articles/ContentPage";
import TopPage from "../Components/Articles/TopPage";
import SideImage from "../Components/Articles/SideImage";
import Comment from "../Components/Articles/Comment";
import CommentMessage from "../Components/Articles/CommentMessage";
import SocialMedia from "../Components/Articles/SocialMedia";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ArticlesPage = () => {
  const [articles, setArticles] = useState({})
  const article = useSelector(store=>store.articleReducer.articles)
  const {id} = useParams()
  console.log(typeof id)
  const get = () =>{
     const value = article.find(el=>el._id === id)
     setArticles(value)
  }

  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  },[])

  useEffect(()=>{
    get()
  },[])
  console.log(articles?.subimage)

  return (
    <Box paddingTop={["65px", "75px", "85px"]}>
      <Box>
        <Image
          src={articles?.image}
          w="100%"
        />
      </Box>
      <Flex px={['4%','4%','10%','4%']}>
        {/* social media  */}
        <Box display={['none', 'none', 'none', 'block']}>
          <SocialMedia />
        </Box>

        <Flex w='100%' bg='white' mt='-50px' pt='50px' pl={['0px', '0px', '0px', '50px']} borderRadius={'10px'} direction={'column'} >
          {/* top part  */}
          <TopPage el={articles} />

          {/* bottom part will come here  */}
          <Flex pl={['0px', '0px', '0px', '230px']} gap='100px' pt='70px'>
            {/* content will come here  */}
            <Flex w={['100%', '100%', '100%', '75%']} >
              <ContentPage el={articles?.subimage} />
            </Flex>

            {/* side image part will come here  */}
            <Flex w='25%' display={['none', 'none', 'none', 'flex']}>
              
                 <SideImage el={articles?.sideimage} />
            </Flex>
            {/* bottom part will come here  */}
            <Flex h="400px" border={"1px solid red"} w="100%"></Flex>
          </Flex>

          {/* comment option here  */}
          <Box w='100%' pr={['0px', '0px', '0px', '50px']}>
            <Comment />
          </Box>

          {/* comment message */}
          <Flex direction={'column'} pt='50px' pr={['0px', '0px', '0px', '50px']}>
            <CommentMessage el={articles?.comments} />
          </Flex>
        </Flex>
      </Flex>

    </Box>
  );
};

export default ArticlesPage;
