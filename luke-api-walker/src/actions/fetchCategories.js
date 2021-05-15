const fetchCategories = async ()=>{
    try{
        const response = await fetch("https://swapi.dev/api/");
        const obj = await response.json();
        const array = Object.entries(obj);
        console.log({array})
        return array
    }
    catch(err){
        throw err;
    }
} 

export default fetchCategories;