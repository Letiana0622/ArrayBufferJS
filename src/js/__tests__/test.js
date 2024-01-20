import ArrayBufferConverter, {getBuffer} from '../app';

test('test function getBuffer', () => {
  const result = getBuffer();
  expect(result instanceof ArrayBuffer).toEqual(true);
})

test('method load of class ArrayBufferConverter', () => {
  const converter1 = new ArrayBufferConverter();
  const value = getBuffer();
  converter1.load(value);
  expect(converter1.converter).toEqual(value);
})

test('method toString of class ArrayBufferConverter', () => {
  const converter1 = new ArrayBufferConverter();
  const value = getBuffer();
  converter1.load(value);
  const targetString = 'undefined{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  console.log(typeof targetString);
  const actualString = converter1.toString();
  console.log(typeof actualString)
  const pattern = new RegExp(targetString, "gi");
  const result = pattern.test(actualString);
  console.log(result);
  expect(result).toBe(true);
})