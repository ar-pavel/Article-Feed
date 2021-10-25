
export async function getArticle (id) {
    const res = await fetch(`http://localhost:8084/articles/${id}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(data => data.json())
    console.log("response:", res);
    return res;
}


export async function getArticles (){
    const res = await fetch('http://localhost:8084/articles', {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(data => data.json())
    console.log("response:", res);
    return res;
}


