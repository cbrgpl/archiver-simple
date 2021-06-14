const getRecords = require( './helpers/getRecords' )

module.exports = {
  '/': ( res ) => {
    res.statusCode = 200
    res.setHeader( 'Content-Type', 'text/html' )
    res.end( 'ok' )
  },
  '/get-records': ( res, urlOptions = {} ) => {
    const recordsNumber = urlOptions.queryParams.recordsNumber || 10
    const data = getRecords( recordsNumber )

    res.statusCode = 200
    res.setHeader( 'Content-Type', 'application/json' )
    res.write( JSON.stringify( data ) )
    res.end()
  }
}
