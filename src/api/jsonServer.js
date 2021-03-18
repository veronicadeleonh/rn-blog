import axios from "axios"

//npm run tunnel for a new ngrok link
export default axios.create({
    baseURL: "http://1cd2b98e9533.ngrok.io"
})