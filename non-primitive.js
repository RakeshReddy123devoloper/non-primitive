
// non primitive data types

console.log(10+"5")


x=10;
x+=5;
console.log(x)
console.log(10-null)


x=10;
x*=2;
console.log(x)
console.log(10/'2')
console.log(10%'3')



x=10;
x=x**2
console.log()




x=10;
x=x**2;
console.log(x)
console.log(10>5&&5<10)
console.log(10==='10')
console.log(null??'default')
console.log(10||'default')
console.log(!true)
console.log(10&5)
console.log(10|5)
console.log(10^5)


x=10;
y=++x;
console.log( y)
console.log( x)



x=10;
y=x++;
console.log(x)
console.log(y)


x=10;
console.log( x++)



x=10;
y=x--;
console.log(x)
console.log(y)



x=10;
y=x>5?'yes':'no';
console.log(y)

 const obj = {a:{b:'c'}};
 console.log(obj.a.b);

 const ob = {a:{b:'c'}};
 console.log(ob?.a?.b);



 x=3;
 y=x??'default'
 console.log(y)


 x=null;
 y=x??"default";
 console.log(y)


x=0;
y=x ??'default';
console.log(y)