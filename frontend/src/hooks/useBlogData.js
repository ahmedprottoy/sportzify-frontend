import { useQuery } from "react-query";
import {getBlogReq} from '../services/blogService'

export const useBlogData = (id) => {
    return useQuery(["blog", id], () => getBlogReq(id));
}