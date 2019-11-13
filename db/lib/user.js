module.exports = function setupUser (UserModel) {
  async function createOrUpdate (user, cond) {
    if (cond) {
      const [ userId ] = await UserModel.update(user, cond)

      return findByID(userId)
    } else {
      const result = await UserModel.create(user)

      return result.toJSON()
    }    
  }

  async function findByID (id) {
    const user = await UserModel.findOne({
      where: {
        id,
        deleted: false
      }
    })

    delete user.deleted

    return user
  }

  function findAll () {
    return UserModel.findAll({
      where: {
        deleted: false
      }
    })
  }

  function deleteByID (id) {
    return UserModel.update({ deleted: true }, {
      where: {
        id
      }
    })
  }

  return {
    createOrUpdate,
    findByID,
    findAll,
    deleteByID
  }
}
