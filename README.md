List of commands and todos:

To run test server:
#npm run start

REMINDERS:
#registering modules
 - to register a module - in ./components/modules.js indicate path relative to components directory, but with no "./", "/", "../" etc. This will be used as a request url for serving the files.
 - when importing a module in files, use full relative paths to the files, and file extensions as well - in ex.: "./moduleFolderPath/ModuleName.js"


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