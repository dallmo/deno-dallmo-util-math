
//////////////////////////////////////////////////////////////
// deno test and util methods
import {

  assert,
  assertEquals,
  assertThrows,
  dallmo_util_array,

} from "../deps.ts";

// the methods of this module to be tested
import * as dallmo_util_math from "../mod.ts";


//////////////////////////////////////////////////////////////
Deno.test( "test reaching dallmo-util-math", () => {

  assertEquals( dallmo_util_math.test(), "ok");

}); // Deno.test
//////////////////////////////////////////////////////////////
Deno.test( "test add_leading_zero", () => {

  const input_num: number = 123;
  let output_length: number = 5;
  
  // case 1 when length greater than the number of char of input_num
  assertEquals( dallmo_util_math.add_leading_zero( input_num, output_length ), "00123" );

  output_length = 2;
  assertEquals( dallmo_util_math.add_leading_zero( input_num, output_length ), "123" );

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

    result = dallmo_util_math.random_integer( min, max );
    expression = ( ( result >= min ) && ( result <= max ) );
    assert( expression );

  }); // step
  //.................................................
  await t.step("step : min and max are different numbers, in wrong order", async () => {

    // when min and max has wrong order
    result = dallmo_util_math.random_integer( max, min );
    expression = ( ( result >= min ) && ( result <= max ) );
    assert( expression );

  }); // step
  //.................................................
  await t.step("step : min and max are the same", async () => {

    // when min and max are equal
    result = dallmo_util_math.random_integer( min, min );
    assertEquals( result, min );

  }); // step
  //---------------------------------------------------------------

}); // Deno test
//////////////////////////////////////////////////////////////
Deno.test("test random_sections", async (t) => {

  const input_number: number = 50;
  let result_1: number[];
  let result_2: number;

  //---------------------------------------------------------------
  // case 1 : 
  await t.step("step : without config_obj", async () => {

    result_1 = dallmo_util_math.random_sections( input_number );
    result_2 = dallmo_util_array.add_all( result_1 );
   
    console.log("result array from random_sections : ", result_1 );
    assertEquals( input_number, result_2 );
 
  }); // step
  //.................................................
  // case 1 : min and max are different numbers in correct order
  await t.step("step : with config_obj as parameter", async () => {

    const min: number = 3;
    const max: number = 8;

    interface Conf_obj {
      min: number;
      max: number;
    }; // interface Conf_obj

    const config_obj: Conf_obj = {
      min: min,
      max: max,
    }; // config_obj

    result_1 = dallmo_util_math.random_sections( input_number, config_obj );
    result_2 = dallmo_util_array.add_all( result_1 );
   
    console.log("config_obj : ", config_obj );
    console.log("result array from random_sections : ", result_1 );
    assertEquals( input_number, result_2 );

  }); // step
  //---------------------------------------------------------------

}); // Deno test
//////////////////////////////////////////////////////////////


