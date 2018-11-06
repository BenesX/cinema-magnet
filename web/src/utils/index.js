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


/**
 * put local img to base64
 * @param {string} img img local path 
 */
export const getBase64 = (img) => {
    function getBase64Image(img, width, height) {//width、height调用时传入具体像素值，控制大小 ,不传则默认图像大小
        var canvas = document.createElement("canvas");
        canvas.width = width ? width : img.width;
        canvas.height = height ? height : img.height;

        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        var dataURL = canvas.toDataURL();
        return dataURL;
    }
    var image = new Image();
    image.crossOrigin = '';
    image.src = img;
    return new Promise((resolve, reject) => {
        image.onload = function () {
            resolve(getBase64Image(image));//将base64传给done上传处理
        }
    });
}

/**
 * 节流
 * @param {function} fn 回调
 * @param {number} time 频率(ms)
 * @param {Object} e 回调函数参数
 */
export const throttle = (fn, time, e) => {
    clearTimeout(fn.tId)
    fn.tId = setTimeout(() => {
        fn(e)
    }, time)
}
