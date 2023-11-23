import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Alwin');
    const [IsPending,setIsPending] = useState(false);
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();//stop from refreshing(Default) the page when clicked submit
        const blog = { title, body, author }
        setIsPending(true);
        fetch('http://localhost:8000/blog', {
            method: 'POST',
            headers: { "Content-Type": "application/JSON" },
            body: JSON.stringify(blog)
        })
        .then(()=>{
            setIsPending(false)
            console.log("new blog added");
            navigate('/')
        })
    }
    return (

        <div className="create">
            <h2 className="Head">Create new blog</h2>
            <Link to="/" className="">Home</Link>
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="blogTitle">Blog Title:</label>
                <div className="gap10"></div>
                <input
                    type="text"
                    name="blogTitle"
                    id="blogTitle"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <div className="gap20"></div>
                <label htmlFor="blogBody">Blog Body:</label>
                <div className="gap10"></div>
                <textarea
                    name="blogBody"
                    id="blogBody"
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <div className="gap20"></div>
                <label htmlFor="blogAuthor">Blog Author:</label>
                <div className="gap10"></div>
                <select
                    name="blogAuthor"
                    id="blogAuthor"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Johnathan" >Johnathan</option>
                    <option value="Alwin">Alwin</option>
                    <option value="Ebin">Ebin</option>
                    <option value="Alan">Alan</option>
                </select>
                <div className="gap20"></div>
                <div className="gap10"></div>
                {!IsPending && <button className="btn"> Create</button>}
                {IsPending && <button className="btn"> Creating...</button>}
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>

        </div>
    );
}

export default Create;