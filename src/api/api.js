import { get } from "@/api/http";

export const getCompanyDetail = () => {
    console.log(process.env.NODE_ENV,"===process.env.NODE_ENV")
    return get("sdfds")
};