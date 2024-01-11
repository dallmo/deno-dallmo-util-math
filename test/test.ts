
//////////////////////////////////////////////////////////////
// deno test and util methods
import {

  assert,
  assertEquals,
  assertThrows,

} from "../deps.ts";
//////////////////////////////////////////////////////////////
// the module to be tested
import {

  test,
  add_leading_zero,
  random_integer,
  random_sections,

} from "../mod.ts";
//////////////////////////////////////////////////////////////
Deno.test( "test reaching dallmo-util-math", () => {

  assertEquals( test(), "ok");

}); // Deno.test
//////////////////////////////////////////////////////////////
Deno.test( "test add_leading_zero", () => {

  const input_num: number = 123;
  let output_length: number = 5;
  
  // case 1 when length greater than the number of char of input_num
  assertEquals( add_leading_zero( input_num, output_length ), "00123" );

  output_length = 2;
  assertEquals( add_leading_zero( input_num, output_length ), "123" );

}); // Deno test
//////////////////////////////////////////////////////////////
Deno.test( "test random_integer", async (t) => {

  const min: number = 1;
  const max: number = 10;
  let result: number;
  let expression: boolean;


  //---------------------------------------------------------------
  // case 1 : min and max are different numbers in correct order
  await t.step("step : min and max are different numbers in correct order", async () => {

    result = random_integer( min, max );
    expression = ( ( result >= min ) && ( result <= max ) );
    assert( expression );

  }); // step
  //.................................................
  await t.step("step : min and max are different numbers, in wrong order", async () => {

    // when min and max has wrong order
    result = random_integer( max, min );
    expression = ( ( result >= min ) && ( result <= max ) );
    assert( expression );

  }); // step
  //.................................................
  await t.step("step : min and max are the same", async () => {

    // when min and max are equal
    result = random_integer( min, min );
    assertEquals( result, min );

  }); // step
  //---------------------------------------------------------------

}); // Deno test
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////


