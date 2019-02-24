// const Koa = require('koa')
// const bodyParser = require('koa-bodyparser')
// const cors = require('@koa/cors');
// const pool = require('../../db/db')

// const app = new Koa()
// app.use(bodyParser())
// app.use(cors())
// console.log('hellloooooo'); 
// app.use(async ctx => {
//   const data = await ctx.request.body
//   const item = await createPost(data.todoItem, data.todoStatus, data.todoDateAdded, data.todoDueBy)
//   ctx.body = `new post created`
// })

// async function createPost(todoItem, todoStatus, todoDateAdded, todoDueBy) {
//   try {
//     const itemData = await pool.query(`
//       INSERT INTO todoList (todoItem, todoDateAdded,  todoStatus, todoDueBy) 
//       VALUES ("${todoItem}", "${todoDateAdded}", "${todoStatus}", "${todoDueBy}");
//     `)
//     return itemData
//   } catch (error) {
//     console.log("error", error)
//   }
// }

// module.exports = app.callback()

const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const cors = require('@koa/cors');
const pool = require('../../db/db')
console.log('asd;11111'); 

const app = new Koa()
app.use(bodyParser())
app.use(cors())
console.log('asd;22222'); 

app.use(async ctx => {
  const data = await ctx.request.body
  const item = await createPost(data.todoItem, data.todoStatus, data.todoDateAdded, data.todoDueBy)
  ctx.body = `new post created, todoList ${item.todoID}`
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