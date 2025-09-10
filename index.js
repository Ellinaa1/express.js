const express = require("express")
const app = express()

const {saveUser, readAllData} = require("./saveUser/readAndSave")

app.set("view engine", "pug")
app.set("views", "Views")

app.use(express.urlencoded())
app.use(express.json())

app.get("/", (req,res) => {
    res.render("home")
})
app.get("/add", (req,res) => {
    res.render("add")
})
app.post("/add", async (req,res) => {
    await saveUser(req.body)
    res.redirect("/list")
})
app.get("/list", async (req,res) => {
    const users = await readAllData()
    res.render("list", {users})
})
app.listen(100, () => console.log("Server started on http://localhost:100"))