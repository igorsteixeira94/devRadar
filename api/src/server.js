import app from './app';

app.listen(process.env.PORT || 3333, process.env.HOST, () => {
  console.log(`Running on http://${process.env.HOST}:${process.env.PORT}`);
});
