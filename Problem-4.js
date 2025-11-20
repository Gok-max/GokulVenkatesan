// Problem-4
// Get the total count of number listed in the dictionary which is multiple of [1,2,3,4,5,6,7,8,9]

function countMul( nums ){

    let res = {}

    for(let i =1 ; i <= 9 ; i++ ){

        let c = 0

        for(let n =0 ; n < nums . length ; n++ ){

            if( nums[n] % i == 0 ){
                c = c + 1
            }
        }

        res[i] = c
    }

    return res
}


let arr = [1,2,8,9,12,46,76,82,15,20,30]

let out = countMul( arr )

console . log( out )
