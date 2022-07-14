
export const getPosts =()=> fetch('http://localhost:4000/posts').then(res=>res.json())


export const createPost =(post)=> fetch('http://localhost:4000/create', {
    method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
})