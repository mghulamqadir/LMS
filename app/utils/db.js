import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const DBName = process.env.DB_NAME;
const DBHost = process.env.DBHost;

const monodbConnect = async () => {
    try
    {
        await mongoose.connect( `${ DBHost }?directConnection=true` );
        console.log( `Database is connected` );
    } catch ( error )
    {
        console.error( `Database did not connect because ${ error }` );
    }
};
export default monodbConnect;
