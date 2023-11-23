import BlogList from './BlogList';
import { Link } from "react-router-dom";
import useFetch from "./useFetch";

const Home = () => {
    const {data:blogs,isPending,error} = useFetch('http://localhost:8000/blog');  

    return (
        <div className="home">
            <Link to='/create' className="btn">Create</Link>
            {error && <h1 className="loading">{error}</h1>}
            {isPending && <h1 className="loading">Loading....</h1>}
            {blogs && <BlogList blogs={blogs} />}
        </div>
    );
}

export default Home;
