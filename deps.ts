
/*
 * keep all imports / dependencies here for centralized management
 * all other imports in this module should only point to here
 */

////////////////////////////////////////////////////////////////////////////////
// for testing
export {

  assert,
  assertEquals,
  assertThrows

} from "https://deno.land/std/assert/mod.ts";
////////////////////////////////////////////////////////////////////////////////
// the published deno module deps
// for test cases only
export * as dallmo_util_array from "https://deno.land/x/dallmo_util_array/mod.ts";

