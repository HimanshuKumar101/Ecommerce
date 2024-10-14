import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);    

  async function fetchProductData() {
    setLoading(true);

    try {
      const res = await fetch(API_URL);   {/* api called */}
      const data = await res.json();        {/* api converted to json format */}
      setPosts(data);                       {/* api data save in setPost variable  */}
    } catch (error) {
      console.log("Error aagya ji");
      setPosts([]);                         {/* if error come in api then setpost is null*/}
    }

    setLoading(false);
  }

  useEffect(() => {              {/* api fetch is called */}
    fetchProductData();
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : posts.length > 0 ? (
        <div className="grid  xm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">                                            {/* home page product is created through using map function because of similiar view */}
          {posts.map((post) => (                    
            <Product key={post.id} post={post} />  
          ))}  
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <p> No data Found</p>
        </div>
      )}
    </div>
  );
};

export default Home;
