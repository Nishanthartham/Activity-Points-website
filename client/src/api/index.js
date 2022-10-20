import axios from 'axios'

const url = 'http://localhost:5000/posts'
export const  fetchPosts = async ()=>{
    await axios.get(url);
    
}
console.log("fetch"+fetchPosts());
// export const createPost =(newPost)=>{
//     axios.post(url,newPost);
// }
export const createPost = (newPost) => axios.post(url, newPost);

   
