function chiSquared (o, p, v=1) {
    p = rtf(p);
    v = p.length - 1;
    const fn = v > 1 
        ? (fn_o, fn_e) => Math.pow(fn_o - fn_e, 2)/fn_e 
        : (fn_o, fn_e) => Math.pow(Math.abs(fn_o - fn_e) - .5, 2)/fn_e;
    
    let sum = 0;
    let sum_o = o.reduce((prev, curr) => prev + curr, 0);
    for (let i = 0; i < o.length; i++)
        sum += fn(o[i], sum_o * p[i]);

    return sum;
}

function rtf (ratio) {
    ratio = ratio.split(':').map(i => Number(i));
    let sum = ratio.reduce((prev, curr) => prev + curr, 0);
    return ratio.map(i => i/sum);
}

document.getElementById('calc').addEventListener('click', () => {
    value = document.getElementById('values').value.split(',').map(i => Number(i));
    ratio = document.getElementById('ratio').value;

    document.getElementById('x2').innerText = chiSquared(value, ratio);
})