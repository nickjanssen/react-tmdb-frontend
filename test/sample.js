import test from 'ava'
import expect from 'expect'

import fooBar from './es6.library'

test('foo', t => {
  expect(2).toBeLessThan(3)
})


test('es6-import', t => {
  expect(fooBar)
    .toExist()
    .toIncludeKey('foo')
  expect(fooBar.foo)
    .toEqual('bar')
})
