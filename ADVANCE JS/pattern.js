 let c=/^\d+$/;
 console.log(c.test("123456"));
 let reges= /(cat|dog)/;
 console.log(reges.test("i have a dog"));
 let regex = /hello /i;
 console.log(regex.exec("hello world"));
let text1="abc,bcd,cde";
console.log(text1.split(/,/));