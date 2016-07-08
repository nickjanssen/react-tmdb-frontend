
import test from 'ava'
import expect from 'expect'

export default {
  foo: 'bar'
}

test('es6-fn', t => {
  expect(() => {}).toExist()
})
