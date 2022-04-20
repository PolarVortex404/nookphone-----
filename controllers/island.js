const Island = require('../models').Island;
const Villager = require('../models').Villager;

module.exports ={
    list(req,res){
        return Island
            .findAll({
                include: [{
                    model: Villager,
                    as: 'villagers'
                }],
                order: [
                    ['createdAt','DESC']
                ]
            })
            .then(islands =>islands)
            .catch(error => error)

    },
    getById(req,res){
        return Island
        .findByPk(req.params.id)
        .then(island =>{
            if(!island){
                return res.status(404).send({
                    message: 'INVALID SELECTION'
                })
            }
            return res.status(200).send(island)
        })
        .catch(error=>res.status(400).send(error))
    },
    // add(req,res){
    //     console.log('adding island')
    //     console.log(req.body)
    //     return Island.create({
    //         islandName: req.body.islandName,
    //         islandOwner: req.body.islandOwner,
    //     })
    //     .then(island =>res.status(200).send(island)) //promise syntax
    //     .catch(error => res.status(400).send(error))
    // },
    add(req,res){ //post 
        return Island.create({
            islandName: req.body.islandName,
            islandOwner: req.body.islandOwner,
            villagers: req.body.villagers
        }, {
            include: [{
                model: Villager,
                as: 'villagers'
            }]
        })
     
    },
    update(req,res){
        return Island
        .findByPk(req.params.id)
        .then(island =>{
            if(!island){
                return res.status(404).send({
                    message: 'INVALID SELECTION'
                })
            }
            return island.update({
                islandName: req.body.islandName || island.islandName,
                islandOwner: req.body.islandOwner || island.islandOwner
            })
            .then(islands =>res.status(200).send(islands))
            .catch(error => res.status(400).send(error))
        })
        .catch(error => res.status(400).send(error))

    },
    delete(req,res){
        return Island.findByPk(req.params.id)
        .then(island => {
            if(!island) {
                return res.status(400).send({
                    message:'Island not found',
                })
            }
            return island
            .destroy()
            .then(() => res.status(204).send())
            .catch((error) =>res.status(400).send(error))
        })
            .catch((error) =>res.status(400).send(error))
    }
}