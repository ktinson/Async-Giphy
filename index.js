require('dotenv').config();
async function getImage(query) {
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`

    const response = await fetch(endpoint)
    const data = await response.json()
    const image = data.data[0].images.original.url
    console.log(data)
    console.log(image)
    return image
}
getImage("clam");

// Print out value of API key stored in .env file
console.log(process.env.API_KEY)