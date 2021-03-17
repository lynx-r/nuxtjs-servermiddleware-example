export default (req, res, next) => {
  try {
    res.end(JSON.stringify({data: 'Hello!'}));
  } catch (e) {
    res.end(e.message);
  }
};
