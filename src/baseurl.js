/*
import axios from 'axios'

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3"
})
export default instance
*/
/*
const requestClient = () => {
    const axios = require('axios');
    // @todo: is it ok to turn redirects off here?
    // if we don't we get an error every time http tries to redirect to https
    return axios.create({
        baseURL:"https://api.themoviedb.org/3"});
   }

export default requestClient
*/

//if you have a default import then when ure importing
//it in some other filer you can name
//it whatever you want
//you can have only one default export but if u do
//the following

/*
export const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3"
})

export const instance1 = axios.create({
    baseURL:"https://api.thedbz.org/3"
})


*/

// then u can do multiple exports so
//create multiple components in the same
// file insta=ead of creating multiple files

const url = {
  baseURL: "https://api.themoviedb.org/3",
};
export default url;



