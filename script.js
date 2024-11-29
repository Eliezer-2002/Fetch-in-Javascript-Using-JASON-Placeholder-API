const btn = document.getElementById("btn");
const output = document.getElementById("output");

function loadPost() {
    //const url = "json.json";
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {         
            output.innerHTML = "";
            data.forEach((post) => {
                output.innerHTML += `
                    <div class="post">
                        <h4>${post.title}</h4>
                        <p>${post.body}<p>
                    </div>
                    <hr>
                `;
            });
            console.log(data);
        })
        .catch((error) => {
            console.error("Error : ",error);
        });
}
async function fetchData () {
    try{
        const url = "json.json";
        const response = await fetch(url);
        if (!response.ok){
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        output.innerHTML = "";
            data.forEach((post) => {
                output.innerHTML += `
                    <div class="post">
                        <h4>${post.title}</h4>
                        <p>${post.body}<p>
                    </div>
                    <hr>
                `;
            });
    }catch(error){
        console.error("Error : ",error);
    }
}
btn.addEventListener("click", fetchData);










