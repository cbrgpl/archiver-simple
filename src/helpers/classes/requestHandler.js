const fs = require( 'fs' )

function updateJSONBD( path, extraData ) {
  fs.readFile( path, 'utf8', ( err, data ) => {
    if ( err ) {
      console.error( err )
      return
    }

    const jsonData = JSON.parse( data )
    jsonData.push( extraData )

    fs.writeFile( path, new Uint8Array( Buffer.from( JSON.stringify( jsonData ) ) ), ( error ) => {
      if ( error ) {
        console.error( error )
      }
    } )
  } )
}

module.exports = class {
  constructor( path ) {
    this.path = path
  }

  async handleRequest( req ) {
    const requestData = {
      timeArival: Date.now(),
      host: req.headers.host,
      referer: req.headers.referer,
      'user-agent': req.headers[ 'user-agent' ],
      method: req.method,
      reqRoute: req.url
    }

    updateJSONBD( this.path, requestData )
  }
}
