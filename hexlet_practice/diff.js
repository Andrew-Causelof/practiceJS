function diff(FirstAngle,SecondAngle){
    let difference = 0;
FirstAngle > SecondAngle ? difference = FirstAngle - SecondAngle : difference = SecondAngle - FirstAngle;
difference > 180 ? difference = 360 - difference : difference;
 return difference;
  //if (difference > 180 ) {
  //return 360 - difference;
  //} else return difference;
}

console.log(diff(0,180),180);   //180
console.log(diff(0,190),170);   //170
console.log(diff(225,0),135);   //135
console.log(diff(0,225),135);   //135
console.log(diff(300,45),105);  //105
console.log(diff(45,300),105);  //105
