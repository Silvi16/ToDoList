const express = require('express')
const ejs = require('ejs')

const app = express()

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

let newItems = ['Buy food','Cook food', 'Eat food']
let workItems = []

app.get('/', (req, res) => {
    let today = new Date()

    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    }
    let day = today.toLocaleDateString('en-US', options)

    res.render('list', {
        listTitle: day,
        newListItems: newItems
    })
})

app.get('/work', (req, res) => {

    res.render('list', {
        listTitle: 'Work List',
        newListItems: workItems
    })
})

app.post('/work', (req, res) => {
    
})

app.post('/', (req, res) => {

    if (req.body.list === 'Work') {
        let workItem = req.body.newItem
        workItems.push(workItem)
        res.redirect('/work')
    } else {
        let newItem = req.body.newItem
        newItems.push(newItem)
        res.redirect('/')
    }

})


app.listen(8000, () => {
    console.log('Listening on port 8000')
})