#!/usr/bin/env julia
#
# @license Apache-2.0
#
# Copyright (c) 2018 The Stdlib Authors.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

import Distributions: mode, Frechet
import JSON

"""
	gen( alpha, s, name )

Generate fixture data and write to file.

# Arguments

* `alpha`: shape parameter
* `s`: scale parameter
* `name::AbstractString`: output filename

# Examples

``` julia
julia> alpha = rand( 1000 ) .* -10.0;
julia> s = rand( 1000 ) .* 5.0;
julia> gen( alpha, s, "data.json" );
```
"""
function gen( alpha, s, name )
	z = Array{Float64}( undef, length(alpha) );
	for i in eachindex(alpha)
		z[ i ] = mode( Frechet( alpha[i], s[i] ) );
	end

	# Store data to be written to file as a collection:
	data = Dict([
		("alpha", alpha),
		("s", s),
		("expected", z)
	]);

	# Based on the script directory, create an output filepath:
	filepath = joinpath( dir, name );

	# Write the data to the output filepath as JSON:
	outfile = open( filepath, "w" );
	write( outfile, JSON.json(data) );
	write( outfile, "\n" );
	close( outfile );
end

# Get the filename:
file = @__FILE__;

# Extract the directory in which this file resides:
dir = dirname( file );

# Generate fixtures:
alpha = rand( 100 ) .* 5.0;
s = rand( 100 ) .* 5.0;
gen( alpha, s, "data.json" );
