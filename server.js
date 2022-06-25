const path = require("path");
const express = require("express");
// Import express-session
const session = require("express-session");
const exphbs = require("express-handlebars");

const routes = require("./controllers");
const sequelize = require("./config/connection");
const helpers = require("./utils/helpers");
// // import packages http, https, fs for https. To create self cert do this from the command line $ openssl req -nodes -new -x509 -keyout server.key -out server.cert
// const https = require('https');
const http = require("http");
// const fs = require('fs');
// //Using a custom signature algorithm for the session.keys; the keygrip library most be installed with npm: $ npm install keygrip
// var Keygrip = require('keygrip')
// bringin-on the 'connect-session-sequelize' library, and setting it up with (session.Store). That is going to store session information in the database
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const app = express();
// 8080 is the http port
const PORT = process.env.PORT || 3001;
// // 8088 is the httpS port
// const sPORT = process.env.PORT || 8088;
// Set up sessions with cookies
const sess = {
  name: "h4K3",
  secret: "Super secret secret",
  // keys: new Keygrip(['key1', 'key2'], 'SHA512', 'SHA384'),
  cookie: {
    // Stored in milliseconds (86400 === 1 day)
    maxAge: 86400,
    sameSite: "strict",
    // secure: true,
    httpOnly: true,
    /*
- session.name: Using the default session cookie name can open your app to attacks.
- session.keys: The list of keys to use to sign & verify cookie values, or a configured Keygrip instance. Set cookies are always signed with keys[0], while the other keys are valid for verification, allowing for key rotation. If a Keygrip instance is provided, it can be used to change signature parameters like the algorithm of the signature.
- session.saveUninitialized: Forces a session that is "uninitialized" to be saved to the store. A session is uninitialized when it is new but not modified. Choosing false is useful for implementing login sessions, reducing server storage usage, or complying with laws that require permission before setting a cookie. Choosing false will also help with race conditions where a client makes multiple parallel requests without a session.
- HTTPonly: ensures that a cookie is not accessible using the JavaScript code. This is the most crucial form of protection against cross-scripting attacks.
- secure:  ensures that the browser will reject cookies unless the connection happens over HTTPS.
- sameSite:  improves cookie security and avoids privacy leaks:
By default, sameSite was initially set to none (sameSite = None). This allowed third parties to track users across sites. Currently, it is set to Lax (sameSite = Lax) meaning a cookie is only set when the domain in the URL of the browser matches the domain of the cookie, thus eliminating third party’s domains. sameSite can also be set to Strict (sameSite = Strict). This will restrict cross-site sharing even between different domains that the same publisher owns.
*/
  },
  resave: false,
  // here saveUninitialized was set to true
  saveUninitialized: false,
  //'express-session'  monitors the expiration of the sessions living on the DB every 15mins, and if they expire then it removes them automatizally from the DB
  store: new SequelizeStore({
    db: sequelize,
  }),
};

const httpServer = http.createServer(app);
// To create self certs do this from the command line (on windows): $ openssl req -nodes -new -x509 -keyout server.key -out server.cert. I had to add the certs on my activity folder. below the cert names do not have any directory because the certs are on the root directory of this activity: 14-MVC\01-Activities\17-Ins_Cookies\server.cert
// const httpsServer = https.createServer({
//     key: fs.readFileSync("server.key"),
//     cert: fs.readFileSync("server.cert"),
// }, app);
// Set up sessions
app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  httpServer.listen(PORT, () => {
    console.log(
      `\nhttp Server running on port ${PORT}. Visit http://localhost:${PORT} and create an account!`
    );
  });
  // httpsServer.listen(sPORT, () => {
  //     console.log(`\nhttpS Server running on port ${sPORT}. Visit httpS://localhost:${sPORT} and create an account!`);
  // });
});
