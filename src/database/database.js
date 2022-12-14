// Invocamos a MongoCoonnect y realizamos la conexion
import { connectMongo } from "./connections.js"

const connectMongoDB = async () => {
  try {
    await connectMongo()
    console.log("┬íConectado a la Base de Datos MongoDB!")
  } catch (error) {
    console.log("catch==>", error)
  }
}

export { connectMongoDB }
