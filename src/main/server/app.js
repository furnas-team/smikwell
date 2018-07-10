const express = require('express');
const React = require('react');
const path = require('path');
const {App} = require('../app/app');
const {StaticRouter} = require('react-router-dom');
const {renderToString, renderToStaticMarkup} = require('react-dom/server');
const {Helmet} = require('react-helmet');

const app = express();
app.use(express.static('public'));
app.get("*", (req, res) => {
  let context = {};

  const appString = renderToString((
    <StaticRouter location={req.url} context={context}>
      <App/>
    </StaticRouter>));

  const helmet = Helmet.renderStatic();

  res.write("<!DOCTYPE html>");
  res.write(renderToStaticMarkup(
    <html>
    <head>
      <meta charSet="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      {helmet.title.toComponent()}
      {helmet.meta.toComponent()}
      {helmet.link.toComponent()}
      {/*<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css"/>*/}
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
            integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
            crossorigin="anonymous"/>
      <link rel="stylesheet" type="text/css" href="/styles.css"/>
      <script src="//mc.yandex.ru/metrika/watch.js" type="text/javascript"></script>
      <script async defer src="//www.instagram.com/embed.js"></script>
    </head>
    <body>
    <div id="root" dangerouslySetInnerHTML={ {__html: appString} }>
    </div>
    <script src="/smikwell.client.js"></script>
    </body>
    </html>));
  res.end();
});

export default app;