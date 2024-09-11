const {Router} =require("express")
const {getToDo, saveToDo, updateToDo, deleteToDo} = require("../controllers/ToDoController");

const router = Router()

// router.get('/', (req, res)=>{
//     res.json({message: "Hi there..."})
// })  this is change to below after being addition inteh file ToDocontroller.js

router.get('/',getToDo) 
router.post('/save', saveToDo)
router.post('/update', updateToDo)
router.post('/delete', deleteToDo)

module.exports = router;