import data from '../data.json'

function PostList() {
  return (
    <>
        <h1>PostList Component</h1><br/>
        {
            data.map((item)=>{
                return(
                    <>
                    <h2>{item.title}</h2>
                    <p>{item.content}</p>
                    </>
                )
            }
            )
        }
    </>
  )
}

export default PostList