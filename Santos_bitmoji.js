noStroke();
fill(255, 205, 148); //skin tone fill
ellipse(100,100,85,100); //head
noStroke(); //stroke for jaw line 
line(145,122,63,167); //jaw line base
line(73,274,161,46); //jaw line base
fill(255, 255, 255); //jaw line fill 
arc(144,122,153,-95,222,366); //right jaw line
arc(130,124,62,72,-65,119); //right jaw line
stroke(0,0,0); //stoke for ear
fill(255,205,148); // skin tone fill
arc(134,100,14,29,-129,155); //arc for ear
noStroke(); //stroke for eyes
fill(122, 78, 2); //eye color fill
ellipse(70,89,10,10); //left eye
fill(122, 78, 2); //eye color fill
ellipse(100,89,10,10); //right eye
fill(0, 0, 0); //fill for pupil
ellipse(69,90,3,4); //left pupil
fill(0, 0, 0); //fill for pupil
ellipse(99,90,3,4); //right pupil
ellipse(101,99,12,4); //part one eyeblack
arc(105,108,6,19,-126,68); //part two eye-black
ellipse(70,99,12,4); //eyeblack left of face
stroke(0, 0, 0); //stroke for nose
line(91,103,91,91); //side of nose
fill(255, 205, 148); //skin tone fill
ellipse(79,111,5,7); //nose part 1
fill(255, 205, 148); //skin tone fill
ellipse(86,115,6,5); //nose part 2
fill(255, 205, 148); //skin tone fill
ellipse(92,111,7,7); //nose part 3
noStroke(); //stroke for cover nose
fill(255, 205, 148); //skin tone fill
ellipse(79,109,25,8); //over nose ellipse 1
fill(255, 205, 148); //skin tone fill
ellipse(96,109,10,7); //over nose ellipse 2
fill(255, 205, 148); //skin tone fill
ellipse(88,111,-15,9); //over nose ellipse 3
stroke(0, 0, 0); //stroke for mouth
fill(250, 160, 160); //lip color fill
arc(87,129,20,13,1,180); //mouth
line(76,129,97,129); //top of mouth
noStroke(); //stroke for hair
fill(143, 110, 10); //hair color 
bezier(127, 73, 160, 134, 176, 3, 51, 68); //hair
strokeWeight(15); //stroke weight for headband
stroke(138, 33, 33); //stroke for headband
line(73,68,137,77); //headband part 1
strokeWeight(8); //stroke weight for headband part 2
line(150,97,137,77); //headband part 2
strokeWeight(4); //stroke weight for nike logo
stroke(255, 255, 255); //stroke for nike logo
line(96,73,108,75); //nike logo
line(97,74,92,68); //nike logo
noStroke(); //stroke for shirt
fill(0, 0, 0); //fill shirt
quad(71, 232, 145, 227, 142, 151, 49, 161); //shirt
fill(138, 7, 7); //fill collar
arc(98, 157, 57, 34, -15, 174); //collar
noStroke(); //stroke shirt
fill(255, 205, 148); //skin tone fill
ellipse(96,159,40,18); //neck
fill(0, 0, 0); //fill shirt
ellipse(56,169,18,25); //shoulder
ellipse(142,162,18,25); //shoulder
fill(255, 255, 255); //text fill
textSize(30); //text size 
text("RS",81,209); //text



