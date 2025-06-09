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


    const name=akanNames[gender][dayOfWeek];
    const day= days[dayOfWeek];


     result.textContent='you were born on ${day}.your akan name is $ {name}'
}