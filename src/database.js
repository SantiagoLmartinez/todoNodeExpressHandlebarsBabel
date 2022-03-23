import { connect } from "mongoose";

(async () =>{
    try {
        const db = await connect("mongodb+srv://slm17:L8nC7k0LOUA4VI6P@cluster0.nt2xb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

    console.log('DB conected to', db.connection.name)
    
    } catch (error) {
        console.error(error)
    }

})();
