// native modules
const http = require( 'http' )
// classes
const RequestSavesHandler = require( './src/helpers/classes/requestHandler' )
// functions
const parseGETurl = require( './src/helpers/functions/GETurlParseFunction' )
const routes = require( './src/routes/routes' )

const port = process.env.PORT || 3000
const path = 'micro-bd.json'
const requestSavesHandlerInstance = new RequestSavesHandler( path )

function processRequest( res, req ) {
  const urlOptions = parseGETurl( req.url )

  const routesList = Object.keys( routes )
  for ( let i = 0; i < routesList.length; i += 1 ) {
    if ( routesList[ i ] === urlOptions.url ) {
      routes[ urlOptions.url ]( res, urlOptions )
    }
  }
}

const server = http.createServer( async ( req, res ) => {
  console.log( `${req.url} ${req.method} ` )
  requestSavesHandlerInstance.handleRequest( req )

  processRequest( res, req )
} )

server.listen( port, () => {
} )
