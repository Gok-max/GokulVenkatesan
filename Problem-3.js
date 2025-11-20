// Problem-3
// With a single integer as the input, generate the following until a = x [series of numbers as shown in below examples]

function oddPattern(a ){

    let arr = []

    let limit =  a %2 == 0  ?  a-1  : a

    for(let i =0 ; i < limit ;  i++ ){

        arr . push( 2*i  + 1 )
    }

    return arr
}


let v = oddPattern( 6 )

console . log( v )
