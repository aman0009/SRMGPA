var rows=0;

$(document).ready(function() {
	while(rows<10)
	{
		rows++;
		
		$('table').append('<tr> <td>' + rows + '</td> <td> <input type="text" id="cr' + rows + '" /> </td> <td> <input type="text" id="gr' + rows + '" /> </td> </tr>');
	}
});

$('#add').click(function() {
	rows++;
	
	$('table').append('<tr> <td>' + rows + '</td> <td> <input type="text" id="cr' + rows + '" /> </td> <td> <input type="text" id="gr' + rows + '" /> </td> </tr>');
});

$('#buttons input').hover(function() {
	$(this).css('color','#b94629');
}, function() {
	$(this).css('color','#2b2b2b');
});

var grades = new Array(28), grade_values = new Array(28);

grades[0]="S";grades[1]="s";

grades[2]="A";grades[3]="a";

grades[4]="B";grades[5]="b";

grades[6]="C";grades[7]="c";

grades[8]="D";grades[9]="d";

grades[10]="E";grades[11]="e";



/****************************/

grade_values[0]=10;grade_values[1]=10;

grade_values[2]=9;grade_values[3]=9;

grade_values[4]=8;grade_values[5]=8;

grade_values[6]=7;grade_values[7]=7;

grade_values[8]=6;grade_values[9]=6;

grade_values[10]=5;grade_values[11]=5;


function calculate()
{
	var sum=0, cr_sum=0, i=1, j, credits, gr_ob;
	
	while(i<=rows)
	{
		if(($('#cr'+i).val()=='' && $('#gr'+i).val()!='') || ($('#cr'+i).val()!='' && $('#gr'+i).val()==''))
		{
			$('#message').text("Subject " + i + "'s row is incomplete. Please correct that and try again.");
			
			$('#message').slideDown(250);
			
			break;
		}
		
		else if($('#cr'+i).val()!='' && $('#gr'+i).val()!='')
		{
			credits = $('#cr'+i).val(); 
			
			if(isNaN(credits))
			{
				$('#message').text("Subject " + i + "'s data is invalid. Please correct that and try again.");
			
				$('#message').slideDown(250);
			
				break;
			}
			
			credits=parseInt(credits);
			
			gr_ob = $('#gr'+i).val();
		
			for(j=0;j<30;j++)
			{
				if(gr_ob==grades[j])
				{
					sum+=credits*grade_values[j];
					
					cr_sum+=credits;
					
					break;
				}
			}
			
			if(j==30||credits<1||credits>4)
			{
				$('#message').text("Subject " + i + "'s data is invalid. Please correct that and try again.");
			
				$('#message').slideDown(250);
			
				break;
			}
		}
		
		i++;
	}
	
	if(i==rows+1)
	{
		if(cr_sum==0)
		{
			gpa=0;
		}
		else
		{
			gpa=sum/cr_sum;
		}
	
		$('#message').text("Your GPA is "+gpa);
			
		$('#message').slideDown(250);
	}
}

function hide()
{
	$('#message').html('');
	
	$('#message').slideUp(250);
}