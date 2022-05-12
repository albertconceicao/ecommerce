import { api } from "../services/axios";

api.get('/index')
.then(response => console.log(response))
.catch(error => console.log(error))