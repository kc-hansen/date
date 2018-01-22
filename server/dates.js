

let date = [];
let id = 6;

module.exports = {
    create: (req,res ) => {  
        // info req.body
        id++
        let newDate = {
            id: id,
            location: req.body.location,
            price: req.body.price,
            result: req.body.result,
        }
        date.push(newDate);
        console.log(date);
        res.status(200).send('Date idea added!')
      },
      read: (req,res ) => {  
        res.status(200).send(date);
      },
      update: (req,res ) => {  
        const updateId = req.params.id*1;
        let index = date.findIndex( (date)=> (date.id === updateId))
        date[index] ={
            price: req.body.price,
            location: req.body.location,
        }
        

        res.status(200).send("Date updated");
      },
      delete: (req,res ) => {  
        date = date.filter( function (date) {
            return date.id !== parseInt( req.params.id);
        })
        res.status(200).send("Date Deleted");
      },
}

