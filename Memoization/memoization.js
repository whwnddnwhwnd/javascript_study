function memoization(func){
    const cache = {};
    return function(...args){
        // 입력받은 args를 key로 설정
        const key = JSON.stringify(args);

        // 저장된 결과 값이 있는 경우
        if(cache[key]){
            console.log('실행된 적이 있는 Args')
            return cache[key]
        }

        console.log("최초 실행 Args")
        const result = func(...args)
        cache[key] = result;
        return result;
    }
}

function sum(a, b){
    console.log("함수 시작!");
    return a + b;
}

const memoizedSum = memoization(sum);

console.log(memoizedSum(2, 3));  // 최초 실행
console.log(memoizedSum(2, 3));  // memoization
console.log(memoizedSum(4, 5));  // 최초 실행
console.log(memoizedSum(4, 5));  // memoization