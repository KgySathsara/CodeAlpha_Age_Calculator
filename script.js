document.getElementById('ageForm').addEventListener('submit', function(e) 
{
    e.preventDefault();
    const dob = new Date(document.getElementById('dob').value);
    const age = calculateAge(dob);
    document.getElementById('result').innerHTML = `Your age is ${age} years !!.`;
});

function calculateAge(dateOfBirth) 
{
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
    return age;
}
