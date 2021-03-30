function d2_down()
{
	var y=21.7;
	var wwo=33.5;
	var wu=61;
	var loop=setInterval(frame,1);
	function frame()
	{
		if(y>=99.7)
		{
			document.getElementById("id_y").style.top = 99.7 + "%";
			document.getElementById("id_wwo").style.top = 96.5 + "%";
			document.getElementById("id_wu").style.left = 100 + "%";
			clearInterval(loop);
		}
		else
		{
			y+=0.3;
			wwo+=0.25;
			wu+=0.15;
			document.getElementById("id_y").style.top = y + "%";
			document.getElementById("id_wwo").style.top = wwo + "%";
			document.getElementById("id_wu").style.left = wu + "%";
		}
	}
}

function d2_up()
{
	var y=99.7;
	var wwo=96.5;
	var wu=100;
	var loop=setInterval(frame,1);
	function frame()
	{
		if(y<=21.7)
		{
			document.getElementById("id_y").style.top = 21.7 + "%";
			document.getElementById("id_wwo").style.top = 33.5 + "%";
			document.getElementById("id_wu").style.left = 61 + "%";
			clearInterval(loop);
		}
		else
		{
			y-=0.3;
			wwo-=0.25;
			wu-=0.15;
			document.getElementById("id_y").style.top = y + "%";
			document.getElementById("id_wwo").style.top = wwo + "%";
			document.getElementById("id_wu").style.left = wu + "%";
		}
	}
}

function start()
{
	swap();
	start_design1();
}

function start_design1()
{
	var flag=0;
	var id=setInterval(time,2000);
	function time()
	{
		if(flag==0)
		{
			around_down();
			flag=1;
		}
		else
		{
			around_up();
			flag=0;
		}
	}
}

function around_down()
{
	var around=42.5;
	var my=21.5;
	var brush=50.4;
	var loop=setInterval(frame,1);
	function frame()
	{
		if(around>=95.5)
		{
			document.getElementById("id_around").style.top = 95.5 + "%";
			document.getElementById("id_my").style.top = 99.5 + "%";
			document.getElementById("id_brush").style.left = 100 + "%";
			clearInterval(loop);
		}
		else
		{
			around+=0.3;
			my+=0.43;
			brush+=0.3;
			document.getElementById("id_around").style.top = around + "%";
			document.getElementById("id_my").style.top = my + "%";
			document.getElementById("id_brush").style.left = brush + "%";
		}
	}
}

function around_up()
{
	var around=95.5;
	var my=99.5;
	var brush=100;
	var loop=setInterval(frame,1);
	function frame()
	{
		if(around<=42.5)
		{
			document.getElementById("id_around").style.top = 42.5 + "%";
			document.getElementById("id_my").style.top = 21.5 + "%";
			document.getElementById("id_brush").style.left = 50.4 + "%";
			clearInterval(loop);
		}
		else
		{
			around-=0.3;
			my-=0.44;
			brush-=0.28;
			document.getElementById("id_around").style.top = around + "%";
			document.getElementById("id_my").style.top = my + "%";
			document.getElementById("id_brush").style.left = brush + "%";
		}
	}
}

function swap()
{
	var flag=0;
	var id=setInterval(time,5000);
	function time()
	{
		if(flag==0)
		{
			blue_down();
			flag=1;
		}
		else if(flag==1)
		{
			red_down();
			flag=2;
		}
		else
		{
			green_down();
			flag=0;
		}
	}
}

function blue_up()
{
	document.body.style.backgroundColor="#121a21";
	var tech=101.5;
	var cop=104.5;
	var phone=105;
	var degree=105;
	var remote=105;
	var watch=105;
	var camera=105;
	var loop=setInterval(frame,1);
	function frame()
	{
		if(tech<=44.5)
		{
			document.getElementById("id_tech").style.top = 44.5 + "%";
			document.getElementById("id_cop").style.top = 22 + "%";
			document.getElementById("id_phone").style.top = 78 + "%";
			document.getElementById("id_degree").style.top = 89 + "%";
			document.getElementById("id_remote").style.top = 31 + "%";
			document.getElementById("id_watch").style.top = 50 + "%";
			document.getElementById("id_camera").style.top = 83 + "%";
			clearInterval(loop);
		}
		else
		{
			tech-=0.1;
			cop-=0.144;
			phone-=0.047;
			degree-=0.028;
			remote-=0.13;
			watch-=0.096;
			camera-=0.039;
			document.getElementById("id_tech").style.top = tech + "%";
			document.getElementById("id_cop").style.top = cop + "%";
			document.getElementById("id_phone").style.top = phone + "%";
			document.getElementById("id_degree").style.top = degree + "%";
			document.getElementById("id_remote").style.top = remote + "%";
			document.getElementById("id_watch").style.top = watch + "%";
			document.getElementById("id_camera").style.top = camera + "%";
		}
	}
}

function blue_down()
{
	var tech=44.5;
	var cop=22;
	var phone=78;
	var degree=89;
	var remote=31;
	var watch=50;
	var camera=83;
	var loop=setInterval(frame,1);
	function frame()
	{
		if(tech>=101.5)
		{
			document.getElementById("id_tech").style.top = 101.5 + "%";
			document.getElementById("id_cop").style.top = 105 + "%";
			document.getElementById("id_phone").style.top = 105 + "%";
			document.getElementById("id_degree").style.top = 105 + "%";
			document.getElementById("id_remote").style.top = 105 + "%";
			document.getElementById("id_watch").style.top = 105 + "%";
			document.getElementById("id_camera").style.top = 105 + "%";
			clearInterval(loop);
		}
		else
		{
			tech+=0.1;
			cop+=0.144;
			phone+=0.047;
			degree+=0.028;
			remote+=0.13;
			watch+=0.096;
			camera+=0.039;
			document.getElementById("id_tech").style.top = tech + "%";
			document.getElementById("id_cop").style.top = cop + "%";
			document.getElementById("id_phone").style.top = phone + "%";
			document.getElementById("id_degree").style.top = degree + "%";
			document.getElementById("id_remote").style.top = remote + "%";
			document.getElementById("id_watch").style.top = watch + "%";
			document.getElementById("id_camera").style.top = camera + "%";
		}
	}
	setTimeout(red_up,2200);
}

function red_up()
{
	document.body.style.backgroundColor="#5e1c17";
	var cook=101.5;
	var spoon=105;
	var cherry=105;
	var mixer=105;
	var omlet=105;
	var roller=105;
	var cup=105;
	var pie=105;
	var loop=setInterval(frame,1);
	function frame()
	{
		if(cook<=44.5)
		{
			document.getElementById("id_cook").style.top = 44.5 + "%";
			document.getElementById("id_spoon").style.top = 20 + "%";
			document.getElementById("id_cherry").style.top = 48 + "%";
			document.getElementById("id_mixer").style.top = 46 + "%";
			document.getElementById("id_omlet").style.top = 67 + "%";
			document.getElementById("id_roller").style.top = 28 + "%";
			document.getElementById("id_cup").style.top = 44 + "%";
			document.getElementById("id_pie").style.top = 67 + "%";
			clearInterval(loop);
		}
		else
		{
			cook-=0.1;
			spoon-=0.148;
			cherry-=0.1;
			mixer-=0.103;
			omlet-=0.067;
			roller-=0.135;
			cup-=0.107;
			pie-=0.067;
			document.getElementById("id_cook").style.top = cook + "%";
			document.getElementById("id_spoon").style.top = spoon + "%";
			document.getElementById("id_cherry").style.top = cherry + "%";
			document.getElementById("id_mixer").style.top = mixer + "%";
			document.getElementById("id_omlet").style.top = omlet + "%";
			document.getElementById("id_roller").style.top = roller + "%";
			document.getElementById("id_cup").style.top = cup + "%";
			document.getElementById("id_pie").style.top = pie + "%";
		}
	}
}

function red_down()
{
	var cook=44.5;
	var spoon=20;
	var cherry=48;
	var mixer=46;
	var omlet=67;
	var roller=28;
	var cup=44;
	var pie=67;
	var loop=setInterval(frame,1);
	function frame()
	{
		if(cook>=101.5)
		{
			document.getElementById("id_cook").style.top = 101.5 + "%";
			document.getElementById("id_spoon").style.top = 105 + "%";
			document.getElementById("id_cherry").style.top = 105 + "%";
			document.getElementById("id_mixer").style.top = 105 + "%";
			document.getElementById("id_omlet").style.top = 105 + "%";
			document.getElementById("id_roller").style.top = 105 + "%";
			document.getElementById("id_cup").style.top = 105 + "%";
			document.getElementById("id_pie").style.top = 105 + "%";
			clearInterval(loop);
		}
		else
		{
			cook+=0.1;
			spoon+=0.148;
			cherry+=0.1;
			mixer+=0.103;
			omlet+=0.067;
			roller+=0.135;
			cup+=0.107;
			pie+=0.067;
			document.getElementById("id_cook").style.top = cook + "%";
			document.getElementById("id_spoon").style.top = spoon + "%";
			document.getElementById("id_cherry").style.top = cherry + "%";
			document.getElementById("id_mixer").style.top = mixer + "%";
			document.getElementById("id_omlet").style.top = omlet + "%";
			document.getElementById("id_roller").style.top = roller + "%";
			document.getElementById("id_cup").style.top = cup + "%";
			document.getElementById("id_pie").style.top = pie + "%";
		}
	}
	setTimeout(green_up,2200);
}

function green_up()
{
	document.body.style.backgroundColor="#163833";
	var family=101.5;
	var flower=105;
	var sup=105;
	var soccer=105;
	var alpha_c=105;
	var footwear=105;
	var alpha_a=105;
	var alpha_b=105;
	var portrait=105;
	var loop=setInterval(frame,1);
	function frame()
	{
		if(family<=44.5)
		{
			document.getElementById("id_family").style.top = 44.5 + "%";
			document.getElementById("id_flower").style.top = 30 + "%";
			document.getElementById("id_sup").style.top = 32 + "%";
			document.getElementById("id_soccer").style.top = 88.5 + "%";
			document.getElementById("id_alpha_c").style.top = 74 + "%";
			document.getElementById("id_footwear").style.top = 30 + "%";
			document.getElementById("id_alpha_a").style.top = 38 + "%";
			document.getElementById("id_alpha_b").style.top = 58 + "%";
			document.getElementById("id_portrait").style.top = 74 + "%";
			clearInterval(loop);
		}
		else
		{
			family-=0.1;
			flower-=0.13;
			sup-=0.127;
			soccer-=0.029;
			alpha_c-=0.055;
			footwear-=0.132;
			alpha_a-=0.118;
			alpha_b-=0.082;
			portrait-=0.055;
			document.getElementById("id_family").style.top = family + "%";
			document.getElementById("id_flower").style.top = flower + "%";
			document.getElementById("id_sup").style.top = sup + "%";
			document.getElementById("id_soccer").style.top = soccer + "%";
			document.getElementById("id_alpha_c").style.top = alpha_c + "%";
			document.getElementById("id_footwear").style.top = footwear + "%";
			document.getElementById("id_alpha_a").style.top = alpha_a + "%";
			document.getElementById("id_alpha_b").style.top = alpha_b + "%";
			document.getElementById("id_portrait").style.top = portrait + "%";
		}
	}
}

function green_down()
{
	var family=44.5;
	var flower=30;
	var sup=32;
	var soccer=88.5;
	var alpha_c=74;
	var footwear=30;
	var alpha_a=38;
	var alpha_b=58;
	var portrait=74;
	var loop=setInterval(frame,1);
	function frame()
	{
		if(family>=101.5)
		{
			document.getElementById("id_family").style.top = 101.5 + "%";
			document.getElementById("id_flower").style.top = 105 + "%";
			document.getElementById("id_sup").style.top = 105 + "%";
			document.getElementById("id_soccer").style.top = 105 + "%";
			document.getElementById("id_alpha_c").style.top = 105 + "%";
			document.getElementById("id_footwear").style.top = 105 + "%";
			document.getElementById("id_alpha_a").style.top = 105 + "%";
			document.getElementById("id_alpha_b").style.top = 105 + "%";
			document.getElementById("id_portrait").style.top = 105 + "%";
			clearInterval(loop);
		}
		else
		{
			family+=0.1;
			flower+=0.13;
			sup+=0.127;
			soccer+=0.029;
			alpha_c+=0.055;
			footwear+=0.132;
			alpha_a+=0.118;
			alpha_b+=0.082;
			portrait+=0.055;
			document.getElementById("id_family").style.top = family + "%";
			document.getElementById("id_flower").style.top = flower + "%";
			document.getElementById("id_sup").style.top = sup + "%";
			document.getElementById("id_soccer").style.top = soccer + "%";
			document.getElementById("id_alpha_c").style.top = alpha_c + "%";
			document.getElementById("id_footwear").style.top = footwear + "%";
			document.getElementById("id_alpha_a").style.top = alpha_a + "%";
			document.getElementById("id_alpha_b").style.top = alpha_b + "%";
			document.getElementById("id_portrait").style.top = portrait + "%";
		}
	}
	setTimeout(blue_up,2200);
}

function design1_ani()
{
	var my_top=99.5;
	var around_top=99.5;
	var loop=setInterval(frame,1);
	function frame()
	{
		if(my_top<=21.5)
		{
			document.getElementById("id_my").style.top = 21.5 + "%";
			document.getElementById("id_around").style.top = 42 + "%";
			clearInterval(loop);
		}
		else
		{
			my_top-=0.3;
			around_top-=0.225;
			document.getElementById("id_my").style.top = my_top + "%";
			document.getElementById("id_around").style.top = around_top + "%";
		}
	}
}