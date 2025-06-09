function getAkanName(){
	const dob=
	document.getElementById('dob').value
	const gender=
	document.getElementById('gender').value
	const result=document.getElementById('result');

	const date =new Date(dob);
	const dayOfWeek=date.getDay();

	const akanNames={
		male:['kwasi','kwado','kwabena','kwako','yaw','kofi','kwame'],
		female:['akosua','adwoa','abenna','okua','yaa','afua','ama']
	};

	const days=['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
	

	alert("you were born om"+day+"your name is"+name+"thanks");
}