import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (url) =>{
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const {data:responseData} = await axios.get(url);
            setData(responseData);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    },[url])

    return {data, error, loading};
}

export default useFetch;