export default async function findSynonyms(req, res) {
  let synonym = req.query.synonym
  let url = `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${synonym}?key=${process.env.API_KEY}`
  let responce = await fetch(url)
  let json = await responce.json()

  return res.status(200).json(json)
}
