const express = require('express')
const ejs = require('ejs')

const app = express()

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))

let newItem = ''

app.get('/', (req, res) => {
    let today = new Date()

    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    }
    let day = today.toLocaleDateString('en-US', options)

    res.render('list', {
        day: day,
        newListItem: newItem
    })
})

app.post('/', (req, res) => {
    newItem = req.body.newItem
    res.redirect('/')
})


app.listen(8000, () => {
    console.log('Listening on port 8000')
})