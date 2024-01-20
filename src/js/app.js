export function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  return (input => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i++) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(data);
}

export default class ArrayBufferConverter {
  constructor(converter) {
    this.converter = converter;
  }
  load(value) {
    this.converter = value;
  }
  toString() {
    const buffer = Buffer.from(this.converter);
    const bufferView = new Uint16Array(buffer);
    let resultString
    for (let i = 0; i < bufferView.length; i++) {
      resultString += String.fromCharCode(bufferView[i])
    }
    return resultString;
  }
}
