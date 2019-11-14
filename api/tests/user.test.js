import test from 'ava'
import request from 'supertest'
import sinon from 'sinon'
import proxyquire from 'proxyquire'

const sandbox = sinon.createSandbox()

let app = null

let dbStub = null

const UserStub = {
  createOrUpdate () {},
  findByID () {},
  findAll () {},
  deleteByID () {}
}

test.before(() => {
  sandbox.stub(UserStub, 'createOrUpdate')
  sandbox.stub(UserStub, 'findByID')
  sandbox.stub(UserStub, 'findAll')
  sandbox.stub(UserStub, 'deleteByID')

  dbStub = sandbox.stub()
  dbStub.returns(Promise.resolve({
    User: UserStub
  }))

  const api = proxyquire('../api', {
    'db': dbStub
  })

  app = proxyquire('../server', {
    './api': api
  })
})

test.after(() => {
  sandbox && sandbox.restore()
})

test.cb('get users', t => {
  request(app)
  .get('/api/users')
  .expect('Content-Type', /json/)
  .expect(200)
  .end((err, res) => {
    t.falsy(err, 'should not error')
    t.end()

    sandbox.assert.calledOnce(UserStub.findAll)
  })
})

test('get user by id', t => {
  t.pass()
})

test('create user', t => {
  t.pass()
})

test('modify user', t => {
  t.pass()
})

test('delete user', t => {
  t.pass()
})
