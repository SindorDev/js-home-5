function sumPairs(arr, n)
{
    let sum = 0;
    for(var i=0;i<n;i++)
    {
        for(var j=i+1;j<n;j++)
        {
            sum+= Math.abs(arr[i]-arr[j]);
        }
    }
    return sum;
}
 
let  arr = [1, 8, 9, 15, 16];
let n = arr.length;
 console.log(sumPairs(arr, n));