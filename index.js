const express = require('express')

const app = express()

app.use(express.json())

const cursos = ['Java', 'Pyton', 'Nodejs']

//retorna um indice
app.get('/api/cursos/:id', (req, res)=>{

    const { id } = req.params

    return res.json(cursos[id])

})

//retornar todos os cursos
app.get('/api/cursos', (req, res)=>{

    return res.json(cursos)
})

app.listen(5000)

//criar novo curso
app.post('/api/cursos', (req, res)=>{

    const { name } = req.body

    cursos.push(name)

    return res.json(cursos)

})

//atualizar um curso
app.put('/api/cursos/:id', (req, res)=>{

    const { id } = req.params
    const { name } = req.body

    cursos[id] = name

    return res.json(cursos)

})

//deletar um cursos
app.detete('/api/cursos/:id', (req, res)=>{

    const { id } = req.params

    cursos.splice(id, 1)

    return res.json({message: 'curso deletado'})
})