import { useNavigate, useParams } from "react-router-dom";
import useFetch from './useFetch';
import { Link } from "react-router-dom";
const BlogDetails = () => {
    
    const { id } = useParams()
    const { data: blog, isPending, error } = useFetch(`http://localhost:8000/blog/${id}` )
    const navigate = useNavigate();
    const deleteClick = () =>{
        fetch('http://localhost:8000/blog/'+ blog.id,{
            method:'DELETE'
        }).then(()=>{
            navigate('/')
            console.log("blog deleted")
        })
    }
    return (
        
        <div className="blog-list">
             <Link to="/" className="">Home</Link>
            <div className="blogBody">
                {isPending && <div className="loading">Loading...</div>}
                {error && <div className="loading">{error}</div>}
                {blog && (
                    <article>
                        <div className="blogTitle">{blog.title}</div>
                        <div className="blogAuthor">Writtern by {blog.author}</div>
                        <br />
                         <div className="blogbody">{blog.body}</div>
                        
                    </article>
                )}


            </div>
            <button className="btn" onClick={deleteClick}>Delete</button>
        </div>
    );
}

export default BlogDetails;