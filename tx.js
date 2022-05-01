const {Client} = require ("pg")

const client = new Client( {
    user: "postgres",
    password: "12345678",
    host: "",
    port: 5432, 
    database: "booking"
})

execute()

async function execute() {
    try{
    await client.connect()
    await client.query("BEGIN")
   /*  await client.query("INSERT INTO person values ($1, $2, $3, $4)",  ["Ayush3", 12345678, "Vellore", 12345678901])*/
    console.log("Inserted A New Row.")

    await client.query("COMMIT")
}
    catch (ex){
        console.log(`Failed ${ex}`)
        await client.query("ROLLBACK")  
    }
    finally{
        await client.end()
        console.log("Cleaned.")
    }
}