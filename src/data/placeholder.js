const axios = require("axios");


async function getData() {
  try {
    const url = "https://jsonplaceholder.typicode.com/posts/1";
    const response = await axios.get(url);
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

async function getDataWithParameter(test) {
    const url = `https://jsonplaceholder.typicode.com/posts/${test}`;
    const response = await axios.get(url);
    const data = response.data;
    console.log(data);
    return data;  
};


export {  getData, getDataWithParameter}