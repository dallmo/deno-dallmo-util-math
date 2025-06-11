# @dallmo/util-math

# overview

- a collection of math util under dallmo-util, published as deno module.
- re-written in typescript, migrated from nodejs to base only on deno standard libraries ; 
- published on both [deno land][link-1] and [jsr][link-2] ; 


# list of methods

- add_leading_zero
- random_integer
- random_integer_array
- random_sections




# usage

## 1. running on deno, import via deno module

1. nothing to add via CLI.
2. create `test-via-deno-modules.ts` ; 

```
// this assumes the latest version
import * as dallmo_util_math from "https://deno.land/x/dallmo_util_math/mod.ts";

const min: number = 2;
const max: number = 100;

console.log( "random integer : ", dallmo_util_math.random_integer( min, max ) );
```

3. run the test file
```
deno run test-via-deno-modules.ts
```

## 2. running on deno, import via jsr

1. in CLI, add the module with :
```
deno add @dallmo/util-math
```

2. create `test-via-jsr.ts` ; 

```
import * as dallmo_util_math from "@dallmo/util-math";

const min: number = 2;
const max: number = 100;

console.log( "random integer : ", dallmo_util_math.random_integer( min, max ) );
```

3. run the test file
```
deno run test-via-jsr.ts
```





# test
to run test codes : 

1. switch to the project root folder, i.e. `[root]/` ;
2. run deno task scripts :
- to test with dependencies via deno modules : 
  - run `deno task test-deno` ;
- to test with dependencies via jsr : 
  - run `deno task test-jsr` ; 

[comments]: ----------------------------------
[link-1]: https://deno.land/x/dallmo_util_math
[link-2]: https://jsr.io/@dallmo/util-math
