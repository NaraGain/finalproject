const express = require('express')


const app = express()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
    });

app.get('/', (req, res) => {
  res.json([
    {
      "id":"1",
      "title":"Book Review: The Name of the Wind",
      "img" : "https://www.cats.org.uk/media/3236/choosing-a-cat.jpg?width=400",
    },
    {
      "id":"2",
      "title":"Game Review: Pokemon Brillian Diamond",
      "img" : "https://www.princeton.edu/sites/default/files/styles/scale_1440/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=lA8UuoHt",
    },
    {
      "id":"3",
      "title":"Show Review: Alice in Borderland",
      "img" : "https://i.natgeofe.com/n/d472dd3c-8d38-4eed-ae62-7472a12a17de/secretary-bird-thumbnail-nationalgeographic_2331336_3x2.jpg",
    }
  ])
})

app.listen(4000, () => {
  console.log('listening for requests on port 4000')
})