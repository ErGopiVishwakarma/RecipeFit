import axios from "axios"

export const getArticles = ()=>(dispatch)=>{
    axios.get('https://recipefit-backend.onrender.com/articles').then(res=>{
        dispatch({type:'Articles',payload:res.data.article})
    }).catch(err=>console.log(err))
}

export const getRecipes = ()=>(dispatch)=>{
    axios.get('https://recipefit-backend.onrender.com/recipes').then(res=>{
        dispatch({type:'Recipes',payload:res.data.recipe})
    }).catch(err=>console.log(err))
}