[Live Site](https://paper-scanner-niggd6jq0-shearertzach.vercel.app/)

# Paper Scanner

With the use of the beta version of Paper Scanner, you can copy your paper into the website and scan it for repetitive use of words. Once scanned, you will be presented with the list of words and can click on them to view information about the word. After, you will be shown the definition of the word along with synonyms you can use to replace said word to cut down on uses.  While this is the primary function of the app, you can also search for specifics like antonyms or prefixes, suffixes, etc. (this feature will become available in later stages)  This is all made possible by the use of the Merriam Webster Collegiate Thesaurus API.

## Tech Stack
- NextJS (Framework)
- TailwindCSS (Front-End)
- Vercel (Deployment)

## Local Deployment Instructions
1. Clone the repo locally
2. Navigate to directory using terminal
3. Install dependencies using `npm install`
4. Grab your own API key on the Merriam Webster API Site
5. Create an ENV file and use `API_KEY` and the key and your API key as the value
6. Run the project using `npm run dev`
