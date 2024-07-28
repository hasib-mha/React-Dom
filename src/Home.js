import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');


    return ( 
        <div className="home">
            {error && <div>{ error }</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs = {blogs} title = "All Blogs!"/> }
        </div>
     );
}

//<BlogList blogs = {blogs.filter((blog) => blog.author === 'mario')} title = "Mario's Blogs!" handleDelete = {handleDelete}/>
export default Home;