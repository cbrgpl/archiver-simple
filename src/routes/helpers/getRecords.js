const fs = require( 'fs' )

module.exports = function getRecords( recordsNumber ) {
  const jsonData = JSON.parse( fs.readFileSync( 'micro-bd.json', 'utf8' ) )

  return jsonData.slice( -1 * recordsNumber )
}
