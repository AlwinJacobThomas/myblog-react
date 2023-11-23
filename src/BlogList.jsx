import { Link } from "react-router-dom";
const BlogList = ({ blogs }) => {


    return (

        <div className="blog-list">

            {blogs.map((blog) => (
                <a href='#d' className="blogBody" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`} >
                        <h1 className="blogTitle">{blog.title}</h1>
                        {/* <p className="blogbody">{blog.body}</p> */}
                        <p className="blogAuthor">--{blog.author}</p>
                    </Link>
                </a>
            ))}

        </div>

    );
}

export default BlogList;