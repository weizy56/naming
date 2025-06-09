function getAkanName(){
	const dob = document.getElementById('dob').value;
	const gender = document.getElementById('gender').value;
	const result = document.getElementById('result');

	const date =new Date(dob);
	const dayOfWeek=date.getDay();//0 (sunday) to 6 (saturday)

	const akanNames={
		male:['kwasi','kwado','kwabena','kwako','yaw','kofi','kwame'],
		female:['akosua','adwoa','abenna','okua','yaa','afua','ama']
	};

	const days=['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];


    const name=akanNames[gender][dayOfWeek];
    const day= days[dayOfWeek];


    alert("your name is " +name+ " your day of birth " +day+ " thanks ");
}