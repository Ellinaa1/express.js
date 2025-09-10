const path = require("path")
const {readFile, writeFile} = require("fs/promises")

const pathname = path.join(__dirname, "db.json")

const readAllData = async () => {
    const data = await readFile(pathname, "utf-8")
    if(!data) return []
    return JSON.parse(data)
}
const saveUser = async (user) => {
    const data = await readAllData()
    data.push(user)
    await writeFile(pathname, JSON.stringify(data))
}
module.exports = {saveUser, readAllData}