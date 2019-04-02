

// const Koa = require('koa')
// const bodyParser = require('koa-bodyparser')
// const cors = require('@koa/cors');
// const pool = require('../../db/db')

// const app = new Koa()
// app.use(bodyParser())
// app.use(cors())

// app.use(async ctx => {
//   const data = await ctx.request.body
//   const item = await createPost(data.todoItem, data.todoStatus, data.todoDateAdded, data.todoDueBy)
//   ctx.body = `new post created, todoList`
// })

// async function createPost(todoItem, todoStatus, todoDateAdded, todoDueBy) {
//   try {
//     const itemData = await pool.query(`
//       INSERT INTO todoList (todoItem, todoStatus, todoDateAdded, todoDueBy) 
//       VALUES ("${todoItem}", "${todoStatus}", "${todoDateAdded}", "${todoDueBy}");
//     `)
//     return itemData
//   } catch (error) {
//     console.log(error)
//   }
// }

// module.exports = app.callback()

const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const cors = require('@koa/cors');
 const pool = require('../../db/db')
const { twiml: { MessagingResponse } } = require('twilio')
const app = new Koa()
app.use(bodyParser())
app.use(cors())

app.use(async ctx => {
  const data = await ctx.request.body
  const item = await createPost(data.todoItem)
  const twiml = new MessagingResponse();
  twiml.message(`${req.body}`)
  ctx.body = `new todoList created, todoItem ${item.inserttodoItem}`
  ctx.type='text/xml';
})

async function createPost(todoItem) {
  try {
    const itemData = await pool.query(`
      INSERT INTO list(todoItem) 
      VALUES ("${todoItem}");
    `)
    return itemData
  } catch (error) {
    console.log(error)
  }
}
module.exports = app.callback()
