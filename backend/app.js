import express from 'express';

const app = express()
const port = 8000;

// basic console on the console.
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

// server health check
app.get('/', (req, res) => {
    res.send('Hello World!');
  });