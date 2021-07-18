// https://app.codility.com/programmers/lessons/1-iterations/binary_gap/
function solution(N) {
    const binaryN = N.toString(2);
    let maxBinaryGap = 0;
    let currentBinaryGap = 0;
    binaryN.split("").forEach(element => {
        if (element === "0") {
            currentBinaryGap++;
        } else {
            if (maxBinaryGap < currentBinaryGap) {
                maxBinaryGap = currentBinaryGap;
            }
            currentBinaryGap = 0;
        }
    });

    return maxBinaryGap;
}

console.log(solution(1041));