const express = require('express')

const app = express()

app.get('/', (request, response) => {
    response.json({
        name: 'rollo tomasi'
    })

})

app.get('/about', (request, response) => {
    response.send({
        name: 'dulani wallace'
    })
})

app.listen(3000, () => {
    console.log('App is listening on port 3000')

})











// const http = require('http')
// const fs = require('fs')

// const aboutPage = fs.readFileSync('about.html')
// const contactPage = fs.readFileSync('contact.html')
// const homePage = fs.readFileSync('index.html')

// const server = http.createServer((request, response) => {

//    console.log(request.url)

//    if (request.url === '/about') {
        
//        return response.end(aboutPage)
   
//    }   else if (request.url === '/contact') {

//        return response.end(contactPage)
    
//    }   else if (request.url === '/') {

//        return response.end(homePage)

//    }   else {

 

//        response.writeHead(404)

    
//        response.end('THE PAGE WAS NOT FOUND.')
    
//    }
//})

//server.listen(3000)