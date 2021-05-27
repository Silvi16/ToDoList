const express = require('express')
const ejs = require('ejs')
const date = require('./date.js')

const app = express()

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

const newItems = ['Buy food','Cook food', 'Eat food']
const workItems = []

app.get('/home', (req, res) => {
    let day = date.getDate()
    res.render('list', {
        listTitle: day,
        newListItems: newItems,
        title: 'home'
    })
})

app.get('/work', (req, res) => {
    let day = date.getDay()
    res.render('work', {
    listTitle: day,
    newWorkItems: workItems,
    title: 'work'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        listTitle: 'About',
        title: 'about'})
})

app.post('/', (req, res) => {
    let newItem = req.body.newItem
    newItems.push(newItem)
    res.redirect('/')
})

app.post('/work', (req, res) => {
    let workItem = req.body.newItem
    workItems.push(workItem)
    res.redirect('/work')
})


app.listen(8000, () => {
    console.log('Listening on port 8000')
})