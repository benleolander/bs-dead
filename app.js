console.log('JS linked')
require('babel-polyfill')
import axios from 'axios'

function yesHeIs() {
  const answer = document.querySelector('.answer')
  answer.innerText = 'Yes!'
}
function noHeIsNot() {
  const answer = document.querySelector('.answer')
  answer.innerText = 'No.'
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
