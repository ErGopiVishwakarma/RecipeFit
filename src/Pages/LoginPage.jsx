import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Image,
    Text,
    Box,
    
    
  } from '@chakra-ui/react';
  import axios from 'axios';
  
  import { useReducer } from 'react';
// 
  import { Navigate, useNavigate } from 'react-router-dom';
  
  
  
  
  const iniitalstate={
    email:"",
    password:""
  }
  const reducer=(state,action)=>{
   switch(action.type){
    case "email":{
      return {...state,
        email:action.payload
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
  export default function LoginPage() {
    const [state,dispach]=useReducer(reducer,iniitalstate)
    const navigate = useNavigate();
  
  const handleclick=()=>{
     
    axios.post("https://recipefit-backend.onrender.com/users/login",state)
    .then((res)=>{
      console.log(res)
      alert("Login Succesfully😎")
      localStorage.setItem("token",res.data.token)
      navigate("/singleuserPage")
    }).catch((err)=>{
      console.log(err.message)
      alert("Wrong Crendential 😒")
    })
    }
    const {email,password}=state
  
    return (<>
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bgColor="#f7e9f"
    //   bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Login Here!😎</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            <Link color={'blue.400'}>StudentHelp</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
        //   bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={email} onChange={(e)=>dispach({type:"email",payload:e.target.value})} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" value={password} onChange={(e)=>dispach({type:"password",payload:e.target.value})} />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                onClick={handleclick}
                _hover={{
                  bg: 'blue.500',
                 
                }}>
                Log in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    
      </>);
  }