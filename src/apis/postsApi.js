export const fetchPosts = async (setPosts) => {
  try{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const parsedResponse = await response.json()
    setPosts(parsedResponse)  
  } catch(err){
    console.log(err)
  }
}
