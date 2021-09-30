import axios from 'axios';

const request = async (url) => {
    try {
        const res = await axios.get(url)
        return {status: "success", result: res.data};
    } catch (error) {
        return {status: "error", result: "Not responding"};
    }
}

export default request;