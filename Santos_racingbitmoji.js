var bodyX = 10;
var bodyY = 50;
var bunnyX = -95;
var bunnyY = 172;
var frogX = -30;
var frogY = 369;
draw = function() {
     background(255, 255, 255);
     noStroke();
     fill(255, 205, 148); //skin tone fill
     ellipse(bodyX,bodyY,85,100); //head
     noStroke(); //stroke for jaw line 
     line(bodyX+45,bodyY+22,bodyX-37,bodyY+67); //jaw line base
     line(bodyX-27,bodyY+174,bodyX+61,bodyY-54); //jaw line base
     fill(255, 255, 255); //jaw line fill 
     arc(bodyX+44,bodyY+22,155,-95,222,366); //right jaw line
     arc(bodyX+30,bodyY+24,62,72,-65,119); //right jaw line
     stroke(0,0,0); //stoke for ear
     fill(255,205,148); // skin tone fill
     arc(bodyX+34,bodyY,14,29,-129,155); //arc for ear
     noStroke(); //stroke for eyes
     fill(255, 255, 255); //fill for eye
     ellipse(bodyX-30,bodyY-11,17,12); //left eye
     ellipse(bodyX,bodyY-11,17,12); //right eye
     fill(122, 78, 2); //eye color fill
     ellipse(bodyX-30,bodyY-11,10,10); //left eye
     fill(122, 78, 2); //eye color fill
     ellipse(bodyX,bodyY-11,10,10); //right eye
     fill(0, 0, 0); //fill for pupil
     ellipse(bodyX-31,bodyY-10,3,4); //left pupil
     fill(0, 0, 0); //fill for pupil
     ellipse(bodyX-1,bodyY-10,3,4); //right pupil
     ellipse(bodyX+1,bodyY-1,12,4); //part one eyeblack
     arc(bodyX+5,bodyY+8,6,19,-126,68); //part two eye-black
     ellipse(bodyX-30,bodyY-1,12,4); //eyeblack left of face
     stroke(0, 0, 0); //stroke for nose
     line(bodyX-9,bodyY+3,bodyX-9,bodyY-9); //side of nose
     fill(255, 205, 148); //skin tone fill
     ellipse(bodyX-21,bodyY+11,5,7); //nose part 1
     fill(255, 205, 148); //skin tone fill
     ellipse(bodyX-14,bodyY+15,6,5); //nose part 2
     fill(255, 205, 148); //skin tone fill
     ellipse(bodyX-8,bodyY+11,7,7); //nose part 3
     noStroke(); //stroke for cover nose
     fill(255, 205, 148); //skin tone fill
     ellipse(bodyX-21,bodyY+9,25,8); //over nose ellipse 1
     fill(255, 205, 148); //skin tone fill
     ellipse(bodyX-4,bodyY+9,10,7); //over nose ellipse 2
     fill(255, 205, 148); //skin tone fill
     ellipse(bodyX-12,bodyY+11,-15,9); //over nose ellipse 3
     stroke(0, 0, 0); //stroke for mouth
     fill(250, 160, 160); //lip color fill
     arc(bodyX-13,bodyY+29,20,13,1,180); //mouth
     line(bodyX-24,bodyY+29,bodyX-3,bodyY+29); //top of mouth
     noStroke(); //stroke for hair
     fill(143, 110, 10); //hair color 
     bezier(bodyX+27, bodyY-27, bodyX+60, bodyY+34, bodyX+76, bodyY-97, bodyX-49, bodyY      -32); //hair
     strokeWeight(15); //stroke weight for headband
     stroke(138, 33, 33); //stroke for headband
     line(bodyX-27,bodyY-32,bodyX+37,bodyY-23); //headband part 1
     strokeWeight(8); //stroke weight for headband part 2
     line(bodyX+50,bodyY-3,bodyX+37,bodyY-23); //headband part 2
     strokeWeight(4); //stroke weight for nike logo
     stroke(255, 255, 255); //stroke for nike logo
     line(bodyX-4,bodyY-27,bodyX+8,bodyY-25); //nike logo
     line(bodyX-3,bodyY-26,bodyX-8,bodyY-32); //nike logo
     noStroke(); //stroke for shirt
     fill(0, 0, 0); //fill shirt
     quad(bodyX-29, bodyY+132, bodyX+45, bodyY+127, bodyX+41, bodyY+51, bodyX-51, bodyY      +61); //shirt
     fill(138, 7, 7); //fill collar
     arc(bodyX-2, bodyY+57, 57, 34, -15, 174); //collar
     noStroke(); //stroke shirt
     fill(255, 205, 148); //skin tone fill
     ellipse(bodyX-4,bodyY+59,40,18); //neck
     fill(0, 0, 0); //fill shirt
     ellipse(bodyX-44,bodyY+69,18,25); //shoulder
     ellipse(bodyX+42,bodyY+62,18,25); //shoulder
     fill(255, 255, 255); //text fill
     textSize(30); //text size 
     text("RS",bodyX-19,bodyY+109); //text
     
     bodyX += random(1,5);
     
     stroke(0, 0, 0);
     ellipse(bunnyX+50, bunnyY, 45, 85);  // left ear
     ellipse(bunnyX+140,bunnyY, 45, 85);  // right ear

     ellipse(bunnyX+100, bunnyY+70, 120, 115);    // face

     fill(0, 0, 0);
     ellipse(bunnyX+70, bunnyY+50, 15, 15);  // left eye
     ellipse(bunnyX+130, bunnyY+50, 15, 15);  // right eye

     line(bunnyX+68, bunnyY+100, bunnyX+133, bunnyY+100);   // mouth

     noFill();
     rect(bunnyX+85, bunnyY+100, 15, 11); // left tooth
     rect(bunnyX+100, bunnyY+100, 15, 11); // right tooth
     
     bunnyX += random(1,5);
     
     noStroke();
     fill(30, 204, 91); // a nice froggy green!

     ellipse(frogX, frogY, 200, 100); // face
     ellipse(frogX-50, frogY-50, 40, 40); // left eye socket
     ellipse(frogX+40, frogY-50, 40, 40); // right eye socket

     fill(255, 255, 255); // for the whites of the eyes!
     ellipse(frogX-50, frogY-50, 30, 30); // left eyeball
     ellipse(frogX+40, frogY-50, 30, 30); // right eyeball
     fill(13, 12, 12); //for pupil
     rect(frogX-55,frogY-50,10,10); //left pupil
     rect(frogX+35,frogY-50,10,10); //pupil
     fill(10, 9, 9); // black mouth

     ellipse(frogX,frogY,100,50); // mouth
     
     frogX += random(1,5);
};





