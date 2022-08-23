function calcSum(n) {
    let sum = 0;

    for(let i=1; i< n+1; i++){
        sum+=i;
    }
    sum; // 변수 재선언, let sum으로 할 경우 오류 발생
    console.log(sum);
}

calcSum(10)