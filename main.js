

/* <main class="blog_container obj_width">
<div class="blog_card">
    <img src="http://via.placeholder.com/600x400" alt="">
    <h2>This is a title</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi illo ab eligendi aperiam animi optio enim magni, dolorum aliquid doloribus.</p>
</div>
</main> */

const apikey = '3a3c75d36c3642e2a37e8338babd43e7';
const blog_container = document.getElementsByClassName("blog_container")[0];

async function fetchRandomNews() {
    try {
        const apiurl = `https://newsapi.org/v2/everything?q=tesla&from=2024-01-10&sortBy=publishedAt&apiKey=${apikey}`
        const response = await fetch(apiurl);
        const data = await response.json();
        console.log(data);
        return data.articles;

    } catch (error) {
        console.error("Error fetching random news", error)
        return []
    }
}
function displayblogs(articles) {
    blog_container.innerHTML = ""
    articles.forEach((articles) => {
        const blogcard = document.createElement("div")
        blogcard.classList.add("blog_card")
        const img = document.createElement("img")
        img.src = articles.url
       
        const title = document.createElement("h2")
        title.titleContent = articles.title
        const description = document.createElement("p")
        description.textContent = articles.description
        blogcard.appendChild(img)
        blogcard.appendChild(title)
        blogcard.appendChild(description)
        blog_container.appendChild(blogcard)
    })
}
(async () => {
    try{
        const article= await fetchRandomNews();
        displayblogs(article);
    }catch(error){
        console.error("Error fetching",error);
    }
})();
//async
//await
//fetch
//json
//error
//