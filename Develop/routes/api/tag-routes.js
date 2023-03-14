// const router = require('express').Router();
// const { Tag, Product, ProductTag } = require('../../models');

// // The `/api/tags` endpoint

// router.get('/', async (req, res) => {
//   // find all tags
//   // be sure to include its associated Product data
//   try {
//     const tagData = await Tag.findAll({
//       include: [{ model: Product}],
//     });
//     res.status(200).json(tagData);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

// router.get('/:id', async (req, res) => {
//   // find a single tag by its `id`
//   // be sure to include its associated Product data
//   try {
//     const singleTagData = await Tag.findByPk(req.body.id, {
//       include: [{ model: Product }],
//     });

//     if(!singleTagData){
//       res.status(404).json({ message: `Cannot find tag with the id!`});
//     }

//     res.status(200).json(singleTagData);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

// router.post('/', (req, res) => {
//   // create a new tag
// });

// router.put('/:id', (req, res) => {
//   // update a tag's name by its `id` value
// });

// router.delete('/:id', async (req, res) => {
//   // delete on tag by its `id` value
//   try {
//     const deleteTagData = await Tag.destroy({
//       where: {
//         category_id: req.params.id,
//       },
//     });

//     if(!deleteTagData){
//       res.status(404).json({ message: `Cannot find tag with the id!`});
//     }

//     res.status(200).json(deleteTagData);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

// module.exports = router;
