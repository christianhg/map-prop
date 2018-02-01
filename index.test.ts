import { mapProp } from './index'

interface Person {
  age: number
  name: string
}

const createPerson = (age: number, name: string) => ({ age, name } as Person)

test('mapProp', () => {
  expect(mapProp(age => age + 1, 'age', createPerson(20, 'Carl'))).toEqual({
    age: 21,
    name: 'Carl'
  })
})
