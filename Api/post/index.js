

const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const cors = require('@koa/cors');
const pool = require('../../db/db')

const app = new Koa()
app.use(bodyParser())
app.use(cors())

app.use(async ctx => {
  const data = await ctx.request.body
  const item = await createPost(data.todoItem, data.todoStatus, data.todoDateAdded, data.todoDueBy)
  ctx.body = `new post created, todoList`
})

async function createPost(todoItem, todoStatus, todoDateAdded, todoDueBy) {
  try {
    const itemData = await pool.query(`
      INSERT INTO todoList (todoItem, todoStatus, todoDateAdded, todoDueBy) 
      VALUES ("${todoItem}", "${todoStatus}", "${todoDateAdded}", "${todoDueBy}");
    `)
    return itemData
  } catch (error) {
    console.log(error)
  }
}

module.exports = app.callback()