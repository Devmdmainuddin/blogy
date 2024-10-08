import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const usePosts = () => {
    const { data: posts = [], isPending: loading, refetch } = useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
          const { data } = await axios.get(`fakeData.json`)
          return data.posts
        //   const { data } = await axios.get(`https://dummyjson.com/products`)
        //   return data.posts
          
        },
      })
    
        return [posts,loading,refetch]
};

export default usePosts;