const express = require('express')
const ejs = require('ejs')

const app = express()

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))

let newItems = ['Buy food','Cook food', 'Eat food']

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
        newListItems: newItems
    })
})

app.post('/', (req, res) => {
    newItem = req.body.newItem
    newItems.push(newItem)
    res.redirect('/')
})


app.listen(8000, () => {
    console.log('Listening on port 8000')
})