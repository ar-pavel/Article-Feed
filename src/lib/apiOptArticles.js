export async function getArticles (id=null){

    const res = await fetch(id?`http://localhost:8084/articles/${id}`:'http://localhost:8084/articles', {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const json = res.json();
    // console.log("response:", json);
    return json;
}



