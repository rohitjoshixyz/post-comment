export const fetchComments = async (setComments, id) => {
  try{
    const response = await fetch(`https://jsonplaceholder.typicode.com/post/${id}/comments`)
    const parsedResponse = await response.json()
    setComments(parsedResponse)  
  } catch(err){
    console.log(err)
  }
}
