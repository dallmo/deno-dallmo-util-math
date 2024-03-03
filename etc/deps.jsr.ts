
/**
 * --------------------------
 * for jsr modules
 * --------------------------
 * this file will be symlinked / copied as deps.ts when publishing to 
 * jsr, which does not allow importing modules from deno.land/x via http.
 * 
 * keep all imports / dependencies here for centralized management
 * all other imports in this module should only point to here
 * 
 */

////////////////////////////////////////////////////////////////////////////////
// for testing
export {

  assert,
  assertEquals,
  
} from "jsr:@std/assert@^0.218.2";
////////////////////////////////////////////////////////////////////////////////
// the published deno module deps
// for test cases only
export * as dallmo_util_array from "jsr:@dallmo/util-array@^1.2.0";
