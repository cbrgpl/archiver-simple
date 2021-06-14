module.exports = function parseGETurl( url ) {
  const baseURL = url.match( /.+?(?=\?)/ )[ 0 ]
  const queryParamsStringsArray = url.slice( baseURL.length + 1 ).split( '&' )
  const queryParams = {}

  for ( let i = 0; i < queryParamsStringsArray.length; i += 1 ) {
    const keyValue = queryParamsStringsArray[ i ].split( '=' )
    queryParams[ keyValue[ 0 ] ] = keyValue[ 1 ]
  }

  return {
    url: baseURL,
    queryParams
  }
}
