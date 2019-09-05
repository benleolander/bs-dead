console.log('JS linked')
require('babel-polyfill')
import axios from 'axios'

function yesHeIs() {
  console.log('Yes, he is dead')
}
function noHeIsNot() {
  console.log('Nope, he is not dead')
}

const isBruceDead = async () => {
  try {
    const res = await axios.get('http://dbpedia.org/data/Bruce_Springsteen.jsod')

    const bruce = res.data.d.results[0]

    if (bruce['http://dbpedia.org/ontology/deathDate']) return yesHeIs()
    else return noHeIsNot()

  } catch (e) {
    console.error(e)
  }
}

isBruceDead()
