const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
    res.send('welcom express of jun would!')
})

// app.get('/user/:id', (req, res) => {
//     // const p =req.params
//     // console.log(p.id)

//     const q = req.query
//     console.log(q.q)
//     console.log(q.name)
//     console.log(q.age)
//     res.json({'userid':q.name})
// })

app.get('/sound/:name',(req,res) => {
    const {name} = req.params
    console.log(name)

    if(name=="cat") {
        res.json({'sound':'야~옹','img':'https://purr.objects-us-east-1.dream.io/i/yudBm.jpg'})
    } else if(name=="dog") {
        res.json({'sound':'멍~멍'})
    } else {
        res.json({'sound':'알수없음'})
    }

})


app.get('/mdust', (req, res) => {
    res.send("<a href='http://192.168.219.101:3000'> s6 server로 들어가기</a>")
})

app.get('/cat', (req, res) => {
    res.send({'sound':'야~옹'})
})

app.get('/dog', (req, res) => {
    res.json({'sound':'멍!멍!'})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

