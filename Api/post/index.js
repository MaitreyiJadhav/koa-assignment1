// const Koa = require('koa')
// const bodyParser = require('koa-bodyparser')
// const pool = require('../../db/db')

// const app = new Koa()
// app.use(bodyParser())

// app.use(async ctx => {
//   const dbtitle = await ctx.request.body.title
//   const item = await show(dbtitle)
//   ctx.body = item
// })

// async function show(title, status, todoDateAdded, todoDueBy) {
//   try {
   
//   const itemData = await pool.query(` INSERT INTO todoList (todoItem, todoDateAdded, todoStatus, todoDueBy)  
//           VALUES("Blog", "2019-02-22", true, "2019-02-27")`)

    
//     return itemData

//   } catch (error) {
//     console.log(error)
//   }
// }

// module.exports = app.callback()



const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const pool = require('../../db/db')

const app = new Koa()

app.use(bodyParser())

app.use(async ctx => {
  const updateBody = await ctx.request.body
  await postTodo(updateBody.status, updateBody.title, updateBody.todoDateAdded, updateBody.todoDueBy)
  ctx.body = { "todoItem": `${updateBody.title}`, "todoStatus": `${updateBody.status}`, "todoDateAdded": `${updateBody.todoDateAdded}`, "todoDueBy" :`${updateBody.todoDueBy}` }
})

async function postTodo(status, title, todoDateAdded, todoDueBy) {
  try {


    const postedTodo = await pool.query(` INSERT INTO todoList (todoItem ='%${updateBody.title}}%', todoDateAdded='%${updateBody.todoDateAdded}%', todoStatus='%${updateBody.todoStatus}%', todoDueBy='%${updateBody.todoDueBy}%')  
              VALUES("%${title}%", "%${todoDateAdded}%", "%${status}%", "%${todoDueBy}%")`)   
              
              
    return postedTodo
  }
  catch(e){
    console.error(e)
  }
}

module.exports = app.callback()
