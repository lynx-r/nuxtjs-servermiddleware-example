export default (req, res, next) => {
  try {
    res.end(JSON.stringify({name: 'John Doe'}));
  } catch (e) {
    res.end(e.message);
  }
};
