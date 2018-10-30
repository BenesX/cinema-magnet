/**
 * 生成不重复随机数
 * @param  {Number} num    随机数个数
 * @param  {Number} maxNum 最大范围
 * @return {Array}
 */
export const createRandomNumber = (num, maxNum) => {
    if (!maxNum || !num) {
        alert("please input two Number");
        return false;
    }

    var flag = 0,
    i = 0,
    arr = [];

    if (maxNum - num < 0) {
        flag = maxNum;
        maxNum = num;
        num = flag;
    }

    for (; i < maxNum; i++) {
        arr[i] = i - 0 + 1;
    }

    arr.sort(function(p1, p2) {
        return 0.5 - Math.random();
    });
    arr.length = num;
    return arr;
}
