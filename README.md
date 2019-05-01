# kawix-modules
A collection of modules distributables (kwa format) for use with KawixCore [https://www.npmjs.com/package/@kawix/core](https://www.npmjs.com/package/@kawix/core)


# Why this instead of npm? 
```npm``` is good, but I believe *descentralized*  better than *centralized*. KawixCore offer a new way for require modules for nodejs never imagined, making possible hot require any ```url``` in a descentralized way, instead of installing npm dependencies. Sometimes requiring URL is not enough, and can be a better option download a complete module, and uploading *compressed modules* to *github* is a good way for stop centralizing. Each person can have his own repo with his own copies of each module/files, and organize with files for each version if prefers

# Base library for kawix/core?

[https://github.com/voxsoftware/kawix/sites/x](https://github.com/voxsoftware/kawix/sites/x) contains a project that have a little registry for base modules that can be used on all projects using kawix/core. 

Example, start using coffeescript directly in your project: 

```javascript 
import 'https://kwx.kodhe.com/x/v/0.3.20/std/coffeescript/register'
import Mod from './any.coffee'
```

# This repo contains base modules or source for kawix/core? 

No. Base modules and source code) are posted on [https://github.com/voxsoftware/kawix](https://github.com/voxsoftware/kawix)
The purpose of this repo is only provide distributable compressed files that can be dowloaded/uncompressed on final users, that are not interested in source code.


