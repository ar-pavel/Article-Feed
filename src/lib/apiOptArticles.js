export async function getArticles (id=null){

    let res = await fetch(id?`http://localhost:8084/articles/${id}`:'http://localhost:8084/articles', {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    res = res.json();
    console.log("response:", res);
    return res;
}



