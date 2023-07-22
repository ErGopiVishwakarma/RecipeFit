import React, { useReducer } from 'react'

import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    Center,
   
  } from '@chakra-ui/react';
  import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { SiLinkedin, SiMessenger } from 'react-icons/si';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import axios from "axios"



const iniitalstate={
  email:"",
  password:"",
  name:"",
  lastname:""
}
const reducer=(state,action)=>{
 switch(action.type){
  case "email":{
    return {...state,
      email:action.payload
    }
  }
  case "firstname":{
    return {...state,
      name:action.payload
    }
  }
  case "lastname":{
    return {...state,
        lastname:action.payload
    }
  }
  case "password":{
    return {...state,
      password:action.payload
    }
  }
  case "reset":{
    return    iniitalstate
  }
  default:{
  return    iniitalstate
  }
 }
}

  export default function SingupPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [state,dispach]=useReducer(reducer,iniitalstate)

    const handleclick= ()=>{
    axios.post("https://recipefit-backend.onrender.com/users/register",state)
    .then((res)=>{
    alert("user Register Succesfully 😎")
  console.log(res)
  
    }).catch((err)=>{
      console.log(err.message)
    })
    
     }
    const {email,password,name,lastname}=state
    return (
        <>
        <Box    bgColor="#f7e9f">
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}
        bgColor="#f7e9f"
        >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
             ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>FirstName</FormLabel>
                    <Input type="text" value={name} onChange={(e)=>dispach({type:"firstname",payload:e.target.value})} />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="LastName">
                    <FormLabel>Last name</FormLabel>
                    <Input type="text" value={lastname} onChange={(e)=>dispach({type:"lastname",payload:e.target.value})} />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" value={email} onChange={(e)=>dispach({type:"email",payload:e.target.value})} />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'}  value={password} onChange={(e)=>dispach({type:"password",payload:e.target.value})} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  onClick={handleclick}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link  href={"/login"} color={'blue.400'}>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      {/* socal media part Here */}
      <Center p={8} mt={"-8%"}>
      <Stack spacing={2} align={'center'} maxW={'md'} w={'full'}>
        {/* Facebook */}
        <Button w={'full'} colorScheme={'facebook'} leftIcon={<FaFacebook />}>
          <Center>
            <Text>Continue with Facebook</Text>
          </Center>
        </Button>

        {/* Google */}
        <Button w={'full'} variant={'outline'} leftIcon={<FcGoogle />}>
          <Center>
            <Text>Sign in with Google</Text>
          </Center>
        </Button>

        {/* LinkedIn */}
        <Button w={'full'} colorScheme={'messenger'} leftIcon={<SiLinkedin />}>
          <Center>
            <Text>Send to Linkedin</Text>
          </Center>
        </Button>

        {/* Messenger */}
        <Button w={'full'} colorScheme={'messenger'} leftIcon={<SiMessenger />}>
          <Center>
            <Text>Send to Messenger</Text>
          </Center>
        </Button>
      </Stack>
    </Center>
    </Box>
      </>
    );
  }