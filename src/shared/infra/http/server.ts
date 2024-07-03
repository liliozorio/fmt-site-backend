import { app } from './app'

app.listen(3001, () => console.log('Server is running!'))

app.on('error', (err) => console.log(err))