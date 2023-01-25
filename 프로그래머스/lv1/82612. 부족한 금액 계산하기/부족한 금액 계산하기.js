function solution(price, money, count) {
    let answer = 0, sum = 0;
    for(let i=1; i<=count; i++) answer = money - (sum += (price * i));
    return answer > 0 ? 0 : Math.abs(answer);
}