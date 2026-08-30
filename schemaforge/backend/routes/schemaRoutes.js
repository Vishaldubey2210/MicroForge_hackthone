const express = require('express');
const router = express.Router();
const {
  getSchemas,
  getSchema,
  createSchema,
  updateSchema,
  deleteSchema
} = require('../controllers/schemaController');
const { protect } = require('../middleware/auth');

router.use(protect);
router.route('/').post(createSchema);
router.route('/:projectId').get(getSchemas);
router.route('/detail/:id').get(getSchema);
router.route('/:id')
  .put(updateSchema)
  .delete(deleteSchema);

module.exports = router;
