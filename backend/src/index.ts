import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { ENV } from '../env'
import { authRoute } from './routes/auth.routes'

const app = new Hono<ENV>()


// corse origin setup
app.use('*',cors({
  origin: ["http://localhost:5173"],
  credentials:true
}))

app.get('/', (c) => {
  return c.text('Hello MadharChodo')
})

app.route('/api/auth',authRoute)
export default app
