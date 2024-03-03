
/*
 * @module dallmo-util-math
 */

//////////////////////////////////////////////////////////////
/**
 * given a number, return a string with leading zero 
 * in specified output_length by char count 
 * --------------------------
 * @function add_leading_zero
 * @param {number} num - the input number
 * @param {number} output_length - the total length in char
 * @returns {string} 
 */
function add_leading_zero( input_num: number, output_length: number ): string{

  return String( input_num ).padStart( output_length, '0' );

}; // function add_leading_zero
//////////////////////////////////////////////////////////////
/**
 * given 2 integers, 
 * return an random integer in between, inclusive.
 * ------------------------
 * @function random_integer
 * @param {number} min - the minimum number 
 * @param {number} max - the maximum number
 * @returns {number}
 */
function random_integer( min: number, max: number ): number {
  
  if( min == max ){ return min; }

  // if the order is wrong, swap them
  if( min > max ){ [min, max] = [max, min] }

  // the main action finally
  return Math.floor( min + ( Math.random() * ( max - min + 1) ) );

}; // function random_integer
//////////////////////////////////////////////////////////////
interface rs_option_obj {
  min: number;
  max: number;
}; // interface
/**
 * given an input number ( input_num ),
 * and the min and max value of each section,
 * this function divide the input number into random sections,
 * with the requirement that the sum of all sections
 * equal to the input number,
 * and return the result as an array
 * -------------------------
 * @function random_sections
 * @param {number} input_num - the input number
 * @param {Object} option_obj - the optional obj to adjust min and max
 * @returns {number[]} 
 */
function random_sections( input_num: number, option_obj?: rs_option_obj ): number[] {

  const num_min_default: number = 1;
  const num_max_default: number = 5;

  // the default values
  let num_min: number = num_min_default;
  let num_max: number = num_max_default;

  //------------------------------------------------------
  if( typeof( option_obj ) === "undefined" ){
    // ignore this case, 'cause default values were given above
  }else{
    num_min = option_obj.min || num_min_default;
    num_max = option_obj.max || num_max_default;
  }//if typeof

  let rand_num_array: number[] = [];
  let counter: number = input_num;

  while( counter > 0 ){

    let num_sec_rand: number;

    //------------------------------------------------------
    if( counter < num_min * 2 ){
      num_sec_rand = counter ;
      counter = 0; // break the loop
    }// if
    else{

      if( counter < num_max ){
        num_sec_rand = random_integer( num_min, counter );
      }else{
        num_sec_rand = random_integer( num_min, num_max );
      };

      /**
       * --------------------------------------------------
       * in case, by subtracting num_sec_rand,
       * the resulting counter is smaller than num_min
       * that just take the current counter as num_sec_rand
       * this is to make sure the counter
       * will never smaller than num_min
       * --------------------------------------------------
       */

      if( ( counter - num_sec_rand ) < num_min ){
        num_sec_rand = counter;
        counter = 0; // break the loop
      }else{
        counter -= num_sec_rand;
      }// if else

    }//else, counter >= num_min * 2

    rand_num_array.push( num_sec_rand );

    //------------------------------------------------------

  }//while loop

  return rand_num_array;

}; // random_sections
//////////////////////////////////////////////////////////////
/**
 * test connecting to this child module from parent
 * --------------
 * @function test
 * @param {undefined} - no inputs required
 * @returns {string}
 */
function test(): string{

  return "ok";

}// function test
//////////////////////////////////////////////////////////////
export {

  test,

  add_leading_zero,
  random_integer,
  random_sections,

}; // export
