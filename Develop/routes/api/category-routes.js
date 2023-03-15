const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({ 
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const singleCategoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product}],
    });

    if(!singleCategoryData){
      res.status(404).json({ message: `Cannot find category with that id!`});
    }

    res.status(200).json(singleCategoryData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const newCategoryData = await Category.create(req.body);
    res.status(200).json(newCategoryData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const updateCategoryData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if(!updateCategoryData){
      res.status(404).json({ message: `Cannot find category with the id!`});
    }

    res.status(200).json({ message: `Category has been successfully updated!`});
  } catch (error) {
    res.status(500).json(error);
  }

});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const deleteData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    
    if(!deleteData){
      res.status(404).json({ message: `Cannot find Category with the id!`});
    }

    res.status(200).json({ message: `Category has been successfully deleted!`});
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
