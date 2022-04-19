const Villager = require('../models').Villager;

module.exports ={
    list(req,res){
        return Villager
            .findAll({
                order: [
                    ['createdAt','DESC']
                ]
            })
            .then(villagers =>res.status(200).send(villagers))
            .catch(error => res.status(400).send(error))

    },
    getById(req,res){
        return Villager
        .findByPk(req.params.id)
        .then(villager =>{
            if(!villager){
                return res.status(404).send({
                    message: 'INVALID SELECTION'
                })
            }
            return res.status(200).send(villager)
        })
        .catch(error=>res.status(400).send(error))
    },
    add(req,res){
        return Villager.create({
            apiId: req.body.apiId,
            name: req.body.name,
            species: req.body.species,
            imageUrl: req.body.imageUrl,
            personality: req.body.personality
        })
    },
    update(req,res){
        return Villager
        .findByPk(req.params.id)
        .then(villager =>{
            if(!villager){
                return res.status(404).send({
                    message: 'INVALID SELECTION'
                })
            }
            return villager.update({
                apiId: req.body.apiId || villager.apiId,
                name: req.body.name || villager.name,
                species: req.body.species || villager.species,
                imageUrl: req.body.imageUrl || villager.imageUrl,
                personality: req.body.personality || villager.personality
            })
            .then(villagers =>res.status(200).send(villagers))
            .catch(error => res.status(400).send(error))
        })
        .catch(error => res.status(400).send(error))

    },
    delete(req,res){
        return Villager.findByPk(req.params.id)
        .then(villager => {
            if(!villager) {
                return res.status(400).send({
                    message:'Villager not found',
                })
            }
            return villager
            .destroy()
            .then(() => res.status(204).send())
            .catch((error) =>res.status(400).send(error))
        })
            .catch((error) =>res.status(400).send(error))
    }
}