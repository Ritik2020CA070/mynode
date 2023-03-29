const express = require('express')
const cors=require('cors')
const app = express()
app.use(cors({
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));
const port = 8080

app.get('/:num', (req, res) => {
  let val=req.params.num;
  val=val*val;
  res.json({name:val})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
