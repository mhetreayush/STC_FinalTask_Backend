const {Client} = require('pg')
const client = new Client({
    user: "postgres",
    password: "12345678",
    host:"",
    port: 5432,
    database: "hotel"
})

execute()
async function execute(){
    try{
    await client.connect()
    console.log("Connected Successfully")
    /* await client.query("INSERT INTO person VALUES ($1, $2, $3, $4)", ["Shruti", 1719, "SVCASM", 1719]) */
    const resultsPerson = await client.query("SELECT * FROM person")
    const resultsRoom = await client.query("SELECT * FROM room")
    /* await client.query("INSERT INTO room VALUES (TRUE, FALSE, FALSE, FALSE)") */
    console.table(resultsPerson.rows)
    console.table(resultsRoom.rows)
    }
    catch(ex)
    {
    console.log(`Something went wrong ${ex}`)
    }
    finally{
        await client.end()
        console.log("Client Disconnected Successfully.")
    }
}
