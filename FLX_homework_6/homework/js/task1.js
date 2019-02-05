const a = prompt('Input value of a');
const b = prompt('Input value of b');
const c = prompt('Input value of c');

if (a === 0)  {
    alert('Invalid input data');
} 
else if (!isFinite(a) || !isFinite(b) || !isFinite(c)) {
    alert('Invalid input data');
}
const d = b*b - 4*a*c;
if (d > 0) {
    const x1 = (-b + (Math.sqrt(d)))/(2*a);
    const x2 = (-b - (Math.sqrt(d)))/(2*a);
    alert('x1= ' + x1 + ' and ' + 'x2= '+ x2);
    } 
else if (d === 0) {
    const x = -b/2*a;
    alert('x = ' + x);
    }
else {
    alert('no solution');
}
