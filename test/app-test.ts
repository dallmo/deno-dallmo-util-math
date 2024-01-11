
import * as math_util from "../mod.ts";
import * as array_util from "../../deno-dallmo-util-array.clone/mod.ts";

console.log("random integer : ", math_util.random_integer( 1, 100 ));

const num_1: number = 123;
const length: number = 5;
const result: string = math_util.add_leading_zero( num_1, length );
  console.log( "result : ", result );

const input_number: number = 50;
const result_2: number[] = math_util.random_sections( input_number );
  console.log( "result_2 : ", result_2 );
  console.log( "sum of result_2 : ", array_util.add_all( result_2 ));
