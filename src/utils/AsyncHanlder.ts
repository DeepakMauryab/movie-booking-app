const AsyncHanlder = (handler: (params: object) => boolean | object) => {
  return (params: object) =>
    Promise.resolve(handler(params)).catch(err => {
      console.log(err.response, 'exception');
      return false;
    });
};

export default AsyncHanlder;
