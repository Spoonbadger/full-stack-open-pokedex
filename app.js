import express from 'express'
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5001

app.use(express.static('dist'))

app.listen(PORT + 1, () => {
  console.log(`server started on port ${PORT}`)
})


// Dummy endpoint
app.get('/version', (req, res) => {
  res.send('1') // change this string to ensure a new version deployed
})

// Healthcheck
app.get('/health', (req, res) => {
  // eslint-disable-next-line no-constant-condition
  if (true) throw('error...')
  res.send('ok')
})