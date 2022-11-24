## Example of Vue Router with Components that fetch async data ( + Suspense)

### Build Setup

``` bash
# install dependencies
npm install

# copy .env.template into local .env file
cp .env.template .env

# serve with hot reload
npm run dev

````

### Dealing with API keys

Never commit an API key into your GH repo, even if it is private!
Follow the build instructions above 
and update value for your key in the `.env file` (NOT `.env.template`)

once the `.env` file has a `VITE_API_KEY=xxxxx` value, you can access it via:
`import.meta.env.VITE_API_KEY`

You can follow the same pattern for additional secret values you might need


