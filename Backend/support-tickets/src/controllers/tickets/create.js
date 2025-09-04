import {randomUUID} from 'node:crypto'

export function create ({req, res, database}){
    const {equipment, description, user_name} = req.body

    const ticket = {
        id: randomUUID(),
        equipment,
        description,
        user_name,
        status:"open",
        create_at: new Date(),
        update_at: new Date()
    }

    database.insert("tickets", ticket)

    return res.writeHead(201).end(JSON.stringify(ticket))
}