require('babel-polyfill')
import axios from 'axios'

const isBruceDead = async () => {
  try {
    const res = await axios.get('http://dbpedia.org/data/Bruce_Springsteen.jsod')

    const bruce = res.data.d.results[0]

    if (bruce['http://dbpedia.org/ontology/deathDate'])
      return document.querySelector('.answer').innerText = 'Yes!'
    else
      return document.querySelector('.answer').innerText = 'No.'

  } catch (e) {
    console.error(e)
  }
}

isBruceDead()
