import { useQuery } from "react-query";
import {getBlogReq} from '../services/blogService'
import { useNavigate } from "react-router-dom";

export const useBlogData = (id) => {
    
    return useQuery(["blog", id], () => getBlogReq(id));
}