const axios = require('axios')
const cheerio = require('cheerio')

const newsCnn = async(genre) => {
const res = await axios.get(`https://www.cnnindonesia.com/${genre}`) 
const $ = cheerio.load(res.data)
const hasil = []
$('article').each(function(a, b) {
const link = $(b).find('a').attr('href')
const thumb = $(b).find('img').attr('src') 
const info = $(b).find('img').attr('alt')
hasil.push({ , link, thumb })
}) 
return hasil
}

module.exports = { newsCnn }
