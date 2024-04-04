import BlogPostContent from "../components/BlogPostContent";
import BlogPostHead from "../components/BlogPostHead";
import Recipes3 from "../components/Recipes3";
import Suscribe from "../components/Suscribe";

const BlogPost = () => {
    return ( 
        <div>
            <BlogPostHead />
            <BlogPostContent />
            <Suscribe />
            <Recipes3 />
        </div>
     );
}
 
export default BlogPost;