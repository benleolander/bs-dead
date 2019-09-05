console.log('JS linked')
require('babel-polyfill')
import axios from 'axios'

const isBruceDead = async () => {
  try {
    const res = await axios.get('http://dbpedia.org/data/Bruce_Springsteen.jsod')

    const bruce = res.data.d.results[0]

    if (bruce['http://dbpedia.org/ontology/deathDate']) return console.log('Dead')
    else return console.log('Not Dead')

  } catch (e) {
    console.error(e)
  }
}

isBruceDead()
