const fetchItems = async (url) => {
    try{
        const response = await fetch (url);
        //siempre colocar el error con el useState(true)
        if(!response.ok){
            throw new Error("No encontrado");
        }
        const obj =  await response.json();
        const arr = Object.entries(obj);
        return arr.slice(0,6); 
    }
    catch(err){
        throw err;
    }
}

export default fetchItems;