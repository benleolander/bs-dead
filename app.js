console.log('JS linked')

import axios from 'axios'

let bruce

axios
  .get('http://dbpedia.org/data/Bruce_Springsteen.jsod')
  .then(res => {
    bruce = res.data.d.results[0]
    console.log('BRUCE DIED ', bruce['http://dbpedia.org/ontology/deathDate'])
  })
