let j;
function setup() {
  // put setup code here
  createCanvas(400,200);
  j = 0;
}

function draw() {
  // put drawing code here
  background(200);

  strokeWeight(2)
  line(200,200,200,0)

  fill(0,0,0)
  triangle(89,140,111,140,100,163)
  line(90,60,80,40)
  line(110,60,120,40)

  fill(176,224,230)
  ellipse(135,105,60,50)
  ellipse(65,105,60,50)

  fill(255,255,0)
  ellipse(100,120,60,70)
  ellipse(100,75,50,50)

  strokeWeight(8)
  point(80,40)
  point(120,40)

  strokeWeight(1)
  fill(0,0,0)
  ellipse(90,70,5,12)
  ellipse(110,70,5,12)
  arc(100,85,10,5,25,110)

  arc(100,105,55,13,25,110)
  arc(100,120,61,13,25,110)
  arc(100,135,55,13,25,110)
  arc(100,149,34,9,25,110)



  var y = 140 + 5*Math.sin(PI*j/20)
  var r = 163 + 5*Math.sin(PI*j/20)
  j += 0.8
  strokeWeight(2)
  fill(0,0,0)
  triangle(289,y,311,y,300,r)

  var x = 60 + 5*Math.sin(PI*j/20)
  var t = 40 + 5*Math.sin(PI*j/20)
  line(290,x,280,t)
  line(310,x,320,t)

  var m = 103 + 5*Math.sin(PI*j/20)
  var n = 50 + 5*Math.sin(PI*j/20)
  fill(176,224,230)
  ellipse(335,m,60,n)
  ellipse(265,m,60,n)

  var c = 120 + 5*Math.sin(PI*j/20)
  fill(255,255,0)
  ellipse(300,c,60,70)

  var p = 75 + 5*Math.sin(PI*j/20)
  ellipse(300,p,50,50)

  var a = 40 + 5*Math.sin(PI*j/20)
  strokeWeight(8)
  point(280,a)
  point(320,a)

  var e = 70 + 5*Math.sin(PI*j/20)
  strokeWeight(1)
  fill(0,0,0)
  ellipse(290,e,5,12)
  ellipse(310,e,5,12)

  var g = 85 + 5*Math.sin(PI*j/20)
  var h = 10 + 5*Math.sin(PI*j/20)
  arc(300,g,h,5,25,110)

  var o = 105 + 5*Math.sin(PI*j/20)
  arc(300,o,55,13,25,110)

  var v = 120 + 5*Math.sin(PI*j/20)
  arc(300,v,61,13,25,110)

  var u = 135 + 5*Math.sin(PI*j/20)
  arc(300,u,55,13,25,110)

  var w = 149 + 5*Math.sin(PI*j/20)
  arc(300,w,34,9,25,110)

} 