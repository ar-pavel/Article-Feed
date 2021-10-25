
export async function getArticle (id) {
    let res = await fetch(`http://localhost:8084/articles/${id}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    });     
    res = res.json();
    // console.log("response:", res);
    return res;
}


export async function getArticles (){
    let res = await fetch('http://localhost:8084/articles', {
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


