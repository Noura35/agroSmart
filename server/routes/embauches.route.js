const express = require ('express')
const {AddEmbauche ,FindAllEmbauches,FindSinglEmbauche,UpdateEmbauche,DeleteEmbauche}=require('../controllers/embauches.controllers')
const router = express.Router()

/*add user */
router.post('/embauches' , AddEmbauche)

/* find all users */
router.get('/embauches' , FindAllEmbauches)

/* find singal users */
router.get('/embauches/cardembauche/:id' ,FindSinglEmbauche)

/*update user */
router.put('/embauches/cardembauche/:id' ,UpdateEmbauche )

/*delete user */
router.delete('/embauches/:id' , DeleteEmbauche)

module.exports = router ;