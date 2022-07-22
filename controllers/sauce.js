const Sauce = require ('../models/Sauce');

exports.getAllThings = (req, res, next) => {
    Sauce.find()
        .then( sauce => res.status(200).json(sauce))
        .catch(error => res.status(400).json({ error }));
        console.log("=======ppp==========");
};
exports.createThing = (req, res, next) => {
    delete req.body._id;
    const sauce = new Sauce({
        ...req.body
    });
    sauce.save()
        .then(() => res.status(201).json({message: 'Sauce enregistrée !'}))
        .catch(error => res.status(400).json({ error}));
};

exports.modifyThing = (req, res, next) => {
    Sauce.updateOne({ _id: req.params.id }, { ...req.body, _id:req.params.id})
        .then(() => res.status(200).json({ message: 'Sauce modifiée !'}))
        .catch(error => res.status(400).json({ error}));
};

exports.deleteThing = ( req, res, next) => {
    Sauce.deleteOne({ _id: req.params.id})
    .then(() => res.status(200).json({message: 'Sauce supprimée !'}))
    .catch(error => res.status(404).json({ error }));
};

exports.getOneThing = ( req, res, next) => {
    Sauce.findOne({ _id: req.params.id})
        .then(sauce => res.status(200).json(sauce))
        .catch (error => res.status(404).json({ error }));
};

