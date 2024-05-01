const myNewsCard = document.getElementById('news')
const myNewsPara = document.getElementById('card-text')

async function newsArticles() {
    try{ const response = await fetch(`https://gnews.io/api/v4/search?q=example&lang=en&country=in&max=10&apikey=63635babfcffd0b0261f8cb2b1078180`)
    const data = await response.json()
    console.log(data)

    myNewsCard.innerHTML = '';

    data.articles.forEach(article => {
        console.log(article.title)

        const articleElement =document.createElement('article')
        articleElement.classList.add('article-card')

        const imageElement = document.createElement('img')
        imageElement.classList.add('card-image')
        imageElement.src = article.image
        imageElement.alt = 'No Image available'

        const textElement = document.createElement('p')
        textElement.classList.add('card-text')
        textElement.textContent = article.title

        const buttonElement = document.createElement('button')
        buttonElement.classList.add('card-btn')
        buttonElement.textContent = 'Read More'


        articleElement.appendChild(imageElement)
        articleElement.appendChild(textElement)
        articleElement.appendChild(buttonElement)
        myNewsCard.appendChild(articleElement)
    
    });
}

    catch(error){
    console.log(error)
    }
}
    
newsArticles()