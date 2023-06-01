/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import mode = require( './index' );


// TESTS //

// The function returns a number...
{
	mode( 1, 1, 1 ); // $ExpectType number
}

// The compiler throws an error if the function is provided values other than three numbers...
{
	mode( true, 2, 2 ); // $ExpectError
	mode( false, 2, 1.5 ); // $ExpectError
	mode( '5', 0.5, 0.5 ); // $ExpectError
	mode( [], 0.5, 0.5 ); // $ExpectError
	mode( {}, 2, 1 ); // $ExpectError
	mode( ( x: number ): number => x, 2, 1 ); // $ExpectError

	mode( 9, true, 12 ); // $ExpectError
	mode( 9, false, 12 ); // $ExpectError
	mode( 5, '5', 8 ); // $ExpectError
	mode( 8, [], 10 ); // $ExpectError
	mode( 9, {}, 12 ); // $ExpectError
	mode( 8, ( x: number ): number => x, 12 ); // $ExpectError

	mode( 9, 4, true ); // $ExpectError
	mode( 9, 4, false ); // $ExpectError
	mode( 5, 10, '5' ); // $ExpectError
	mode( 8, 8, [] ); // $ExpectError
	mode( 9, 18, {} ); // $ExpectError
	mode( 8, 4, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	mode(); // $ExpectError
	mode( 3 ); // $ExpectError
	mode( 3, 6 ); // $ExpectError
}
