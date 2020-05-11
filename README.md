List of commands and todos:

To run test server:
#npm run start

REMINDERS:
#registering modules
 - to register a module - in ./components/modules.js indicate path relative to components directory, but with no "./", "/", "../" etc. This will be used as a request url for serving the files.
 - when importing a module in files, use full relative paths to the files, and file extensions as well - in ex.: "./moduleFolderPath/ModuleName.js"




- overall approach:
basic/core - contains basic classes, providing fundamental logic/functinality.
basic/elements - contains basic building blocks - elements used to form pages
basic/custom - custom elements, tbd?
modules/ - consist modules project is built with, // per page - per url, todo. - as per SPA paradigm

// todo pool
// ++ add server to avoid CORS restrictions for local testing
// ++ add git
// -- fix readme.md to suit github format
// -- add html support to modules
// -- aliasing for modules loading
// -- define structure for main modules - element, and elementContainer(need html and styling)
 // ++ add basic element 
 // -- add basic container/holder
 // -- add basic model
    // -- add caching to requests in model 
    // -- move basic elements to core
    // -- add style support for all the elements
// -- distinguish element from container
// -- define main modules functionality
// -- practise MVC patterns in JS