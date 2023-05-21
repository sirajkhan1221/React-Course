What is NPM?
Npm – node package manager repository where different packages are hosted.

What is Parcel/Webpack? Why do we need it?
parcel/webapacks are bundlers that we require to bundle our application, it has various different features and functionalities to bundle the code.

feautures
dev build

- creates a local server
- HMR – hot module replacement – reloads app with any changes
- minification
- compress –
- caching
- tree shaking – remove unused code

What is .parcel-cache
parcel-cahe is a folder created when using package bundler. it caches these files that are stored in the folder so that when we rebuild our app it does not have re-parse and re-analyze everthing from scratch .
What is npx ?
npx is used to exeucte npm packages without the need of installing the package
What is difference between dependencies vs devDependencies
dependencies and devdepndenices are packages that are installed on a project. npm keeps track of them by listing them as twoe seprate objects in package.json file. dev dependencies are packages that are only used for devlopment purpose such as testing libraries jest, mocha, parcel etc on the other hand in depenedecies all the packages are listed which are used in production.

to install packages in dev dependency we use command
-- npm i -d packageName
install the package and list it in the devdependency object
commonly installing a package
-- npm i packageName
install the package and list it in the dependency object

What is Tree Shaking?
tree shaking is a feature or process of removing unused code like for functions variales and other unrealted code from the codebase during the process of building an application. these are done by bundlers such as webpack/parcel.

What is Hot Module Replacement?
hot module replacement is a concept or feature used by bundlers to reload the app whenever we make a change in the code and save it. without the need of restarting the server.

List down your favorite 5 superpowers of Parcel and describe any 3 of them in your own words.

- HMR – hot module replacement – reloads app with any changes
- minification
- compress –
- caching
- tree shaking – remove unused code

What is .gitignore? What should we add and not add into it?
.gitignore is a file that is used to configure things that are not needed or tell git to igonore ceratin files or folders, it is best practice to avoid pushing the code that can be regenerated on the server eg node modules / .parcel-cache etc

What is the difference between package.json and package-lock.json
Package.lock.json ensures that when you do npm I again on the same machine or on a different machine ,npm will install the exact same version of the packages specified in the package lock.json file ensuring consistency across different environments.

It is best practice to commit the package.lock json file in git to ensure consistency while installing npm packages in other environements .

While npm can use just package.json file to install dependencies but by commiting package.lock.json file will ensure that all the developers are using the same version of packages thus by avoiding inconsistency

Why should I not modify package-lock.json?

as it might be make the codebase inconsistent in other environments

What is node_modules ? Is it a good idea to push that on git?
node_module is a folder created by npm when you install a package , it stores all the installed packages along with their own dependency packages locally, we usually import the packages from the node_modules folder and use it in our project. it is best practice to avoid pushing node_modules folder to version control as it can be regenerated.

What is the dist folder?
when the app is build the bundler creates a folder called dist which includes necesarry files that are needed to be served on the server.

What is browserlists

browserlist is the configaration option to allow the app to run on specific browsers that are listed in the browserlist in package.json file.

Read about dif bundlers: vite, webpack, parcel

Read about: ^ - caret and ~ - tilde

Major.minor.patch
2.8.3

^ - means npm to install minor and patch versions, keeping the major number same , install the minor and patch version as much as you can

~ - npm install patch version , keep the major and minor version the same, install the patch version as much as you can

Npm by default uses ^ symbol
By removing the symbol npm will install the exact version of that package
It is always best to use ^ as it only updates to the patch version as the ~ option updates to minor version it can sometimes break the existing code

Read about Script types in html (MDN Docs)
