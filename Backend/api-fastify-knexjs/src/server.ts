import fastify from 'fastify'
import { setupKnex } from './database.js'

const app = fastify()

app.get('/hello', async () => {
    const tables = await setupKnex('sqlite_schema').select('*')
    return tables
})

app.listen({port:3333}).then(()=>{
    console.log('HTTP Server running!')
})