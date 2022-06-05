import axios from "axios";

export default axios.create({
  baseURL: 'http://ec2-3-236-196-105.compute-1.amazonaws.com'
})