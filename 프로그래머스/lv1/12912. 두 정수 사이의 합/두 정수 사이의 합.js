function solution(a, b) {
    let sum = 0;
    a === b ? a | b: null;
    if(a>b) for(let i=b; i<=a; i++) sum+= i;
    if(a<b) for(let i=a; i<=b; i++) sum+= i;
    if(a===b) sum+= a|b;
    return sum;
}