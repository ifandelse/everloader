# everloader - v0.1.0
This is a proof-of-concept - it will probably change a lot. Use at your own risk. :-)

## What is it?
Telerik has a slick backend-as-a-service called Everlive – and it can store files in base64 format. This is a utility library that attempts to ease the upload process. It can take the input[type=file] elements on your form, iterate over the file(s) associated with each and upload them. Once the upload(s) are complete, you get an object containing the keys of the created File records in Everlive, along with the additional response data that gives you filename, size, etc. of the uploaded files.

## Why would I use it?

## How do I use it?

## Pulling everloader into your environment

## Build, Tests & Examples
everloader uses [anvil.js](http://github.com/anviljs/anvil.js/) to build.

* Install node.js (and consider using [nvm](https://github.com/creationix/nvm) to manage your node versions)
* Run `npm install -g anvil.js` to install anvil.js
* Navigate to the root of this repository and run `anvil`.  Optionally run `anvil --ci --host --browser`.  This will open your browser to the root index.html of the repository, and run anvil in continuous integration mode (changes to source and tests will causes tests to be refreshed automatically, etc).
* Build output will be placed in the lib folder.

To run tests or examples, navigate to `http://localhost:3080/test`
