
/**
 * --------------------------
 * for jsr modules
 * --------------------------
 * keep all imports / dependencies here for centralized management
 * all other imports in this module should only point to here
 * 
 * version contraints are required when publishing to jsr
 */

////////////////////////////////////////////////////////////////////////////////
// for testing
export {

  assert,
  assertEquals,
  
} from "jsr:@std/assert@^1.0.13";
////////////////////////////////////////////////////////////////////////////////
// the published deno module deps
// for test cases only
export * as dallmo_util_array from "jsr:@dallmo/util-array@^1.3.0";
