function solution(phone_number) {
    var answer = '';
    return phone_number.replace(/\d(?=\d{4})/g, "*");
}