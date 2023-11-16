const react = require('react');
const reactDom = require('react-dom');
const App = require('./app.js');

reactDom.render(
  <react.StrictMode>
    <App />
  </react.StrictMode>,
  document.getElementById('root')
)

