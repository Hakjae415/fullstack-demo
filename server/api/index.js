const router = require("express").Router();
const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient()

router.get("/", (req, res) => {
    res.send("You have reached the API router")
})

router.get("/trains", async(req, res) => {
    const trains = await prisma.train.findMany()
    res.send(trains)
})

router.get("/trains/:id", async(req, res) => {
    try {
    const train = await prisma.train.findUnique({
        where: {
            id: Number(req.params.id)
        }
    })
    !train ? 
      res.send({error: true, message: "Train not found"}) : 
      res.send(train)
} catch (err) {
    res.send({error: "Something went wrong"})
}

})
module.exports = router