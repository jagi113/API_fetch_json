import axios from 'axios';

const url = "https://jsonplaceholder.typicode.com/todos/1"

axios.get("https://jsonplaceholder.typicode.com/todos/1").then(response => {
    console.log(response.data);
});