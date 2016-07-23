var first=0;   //first element
var second=1;   //second
var next=0;     //next
var sum=0;

while (next<4000000) {
  next=first+second;
  first=second;
  second=next;


  if (next%2===0) {   //condition for even
    sum+=next;
  }
}

console.log(sum);  //print sum
