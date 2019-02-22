

const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const pool = require('../../db/db')

const app = new Koa()

app.use(bodyParser())

app.use(async ctx => {
  const updateBody = await ctx.request.body
  await updateTodo(updateBody.status, updateBody.title)
  ctx.body = { "todoItem": `${updateBody.title}`, "todoStatus": `${updateBody.status}` }
})

async function updateTodo(status, title) {
  try {


    const updatedTodo = await pool.query(`UPDATE todoList SET todoStatus = '%${status}%' WHERE todoItem LIKE '%${title}%';`)
    return updatedTodo
  }catch(e){
    console.error(e)
  }
}

module.exports = app.callback()
