import express from 'express'
import bodyParser from "body-parser";
import cors from 'cors'
import "reflect-metadata"
import {AppDataSource} from "./data-source";
import 'dotenv/config'
import {User} from "./models/User";
import {UserInfo} from "./models/UserInfo";
import {Log} from "./models/Log";
import {Todo} from "./models/Todo";
import TodoStatusEnum from "./enums/TodoStatusEnum";
import {ObjectId} from "mongodb";

const port = 3001
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.post('/login', async (req, res) => {
    const {email, password} = req.body;

    const user = await User.findOneBy({
        email
    });

    if (!user || user.password !== password) {
        return res.status(401).send("Неверный логин или пароль");
    }

    return res.status(200).send(user);
})

app.get('/logs', async (req, res) => {
    const logs = await Log.find({order: {date: 'DESC'}, take: 50})
    return res.status(200).send(logs)
})

app.post('/logs', async (req, res) => {
    const {user, type, text} = req.body;

    const log = new Log();
    log.date = new Date();
    log.text = text;
    log.type = type;
    await log.save()
    return res.status(200).send(log)
})

app.get('/user/:id/info', async (req, res) => {
    const {id} = req.params;
    const userInfo = await UserInfo.findOneByOrFail({user: new ObjectId(id)})
    return res.status(200).send(userInfo)
})

app.get('/todos', async (req, res) => {
    const {user} = req.query
    const todos = await Todo.find({where: {user: user as string}})
    return res.status(200).send(todos)
})

app.post('/todos', async (req, res) => {
    const {title, user} = req.body

    const todo = new Todo();
    todo.status = TodoStatusEnum.IN_PROGRESS;
    todo.title = title;
    todo.user = user;
    await todo.save();

    return res.status(200).send(todo)
})

app.put('/todos/:id', async (req, res) => {
    const {status} = req.body
    const {id} = req.params

    const todo = await Todo.findOneByOrFail({_id: new ObjectId(id)});
    todo.status = status;
    await todo.save();

    return res.status(200).send(todo)
})

app.listen(port, () => {
    AppDataSource
        .initialize()
        .then(async () => {
            if (!await User.findOne({})) {

                const user = new User();
                user.email = "test@test.ru"
                user.password = "test"
                await user.save()

                const info = new UserInfo();
                info.firstName = "Danil"
                info.lastName = "Zaicev"
                info.user = user._id
                await info.save()
            }
        })
        .catch((err) => {
            console.error("Error during Data Source initialization:", err)
        })
    console.log(`Listening on port ${port}`)
})
