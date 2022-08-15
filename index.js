const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
})

// app.get('/dog', function (req, res) {
//     res.send('<h1>강아지</h1>')
// })

// app.get('/onnrru', function (req, res) {
//     res.send("<a href='https://onnrru.com'>'온류'</a>")
// })

// app.get('/cat', function (req, res) {
//     res.send({'sound':'야옹'})
// })

// app.get('/user/:id', function (req, res) {
//     // const p = req.params;
//     // console.log(p)
//     const q = req.query;
//     console.log(q.q)
//     console.log(q.name)
//     console.log(q.age)

//     res.send({'userid':q.name})

// })

app.get('/sound/:name',(req,res)=>{
    const {name} = req.params
    
    if(name=="dog") {
        res.json({'sound':"멍멍"})
    } else if(name == "cat"){
        res.json({'sound':'야옹'})
    } else {
        res.json({'sound':"알수없음"})
    }
})

app.listen(3000)
