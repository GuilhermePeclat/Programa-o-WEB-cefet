import express from 'express'
const app = express()
app.use(express.json())

//models 
//arrays
let alunos = []
let cursos = []
let idaluno = 1
let idcurso = 1

//controllers


//routes
//cadastro
app.post("/alunos", (req, res) => {
    const {nome, idade} = req.body;
    const novo = {id: idaluno++, nome, idade};
    alunos.push(novo);
    res.json(novo)})

app.post("/cursos", (req, res) => {
    const {curso, duracao} = req.body;
    const novo = {id: idcurso++, curso, duracao};
    cursos.push(novo);
    res.json(novo)})
    
//visualizar
app.get("/alunos", (req, res) => {
    res.json(alunos)
})

app.get("/cursos", (req, res) => {
    res.json(cursos)
})

app.get("/alunos/:id", (req, res) => {
    const { id } = req.params;
    const aluno = alunos.find(busca => busca.id === Number(id))
    res.json(aluno)
})

app.get("/cursos/:id", (req, res) => {
    const { id } = req.params;
    const curso = cursos.find(busca => busca.id === Number(id))
    res.json(curso)
})

//editar

app.put("/alunos/:id", (req, res) => {
    const { id } = req.params;
    const {nome, idade} = req.body;
    const alunoencontrado = alunos.find(busca => busca.id === Number(id))
    alunoencontrado.nome = nome
    alunoencontrado.idade = idade
    res.json(alunoencontrado)
})

app.put("/cursos/:id", (req, res) => {
    const { id } = req.params;
    const {curso, duracao} = req.body;
    const cursoencontrado = cursos.find(busca => busca.id === Number(id))
    cursoencontrado.curso = curso
    cursoencontrado.duracao = duracao
    res.json(cursoencontrado)
})

app.patch("/alunos/:id", (req, res) => {
    const { id } = req.params;
    const {idade} = req.body;
    const alunoencontrado = alunos.find(busca => busca.id === Number(id))
    alunoencontrado.idade = idade
    res.json(alunoencontrado)
})

app.patch("/cursos/:id", (req, res) => {
    const { id } = req.params;
    const {duracao} = req.body;
    const cursoencontrado = cursos.find(busca => busca.id === Number(id))
    cursoencontrado.duracao = duracao
    res.json(cursoencontrado)
})

//deletar
app.delete("/alunos/:id", (req, res) => {
    const { id } = req.params;
    const alunoencontrado = alunos.find(busca => busca.id === Number(id))
    alunos = alunos.filter(busca => busca.id !== Number(id));
    res.json(alunos)
})

app.delete("/cursos/:id", (req, res) => {
    const { id } = req.params;
    const cursoencontrado = cursos.find(busca => busca.id === Number(id))
    cursos = cursos.filter(busca => busca.id !== Number(id))
    res.json(cursos)
})

app.listen(3000)
