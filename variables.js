// you solution should be here
const yearOfBirth = new Date('1995'),
	futureYear = new Date('2045');

const calculateAge = () => {
	const age = futureYear.getUTCFullYear() - yearOfBirth.getUTCFullYear();
	const age2 = age + 1;

	return {
		age,
		age2
	};
};

const calculateCurrentAge = () => {
	const diff = Date.now() - yearOfBirth.getTime();
	const ageDate = new Date(diff);
	return Math.abs(ageDate.getUTCFullYear() - 1970);
};

const currentAge = calculateCurrentAge();
const maxAge = calculateAge().age2;
const applesPerDay = 2;

const numberOfDaysToMaxAge = () => {
	return (maxAge - currentAge) * 365;
};

document.querySelector(
	'.container p'
).textContent = `You will need ${numberOfDaysToMaxAge() *
	applesPerDay} apples a day to last you until the ripe old age of ${maxAge}.`;

console.log(
	`You will need ${numberOfDaysToMaxAge() *
		applesPerDay} apples a day to last you until the ripe old age of ${maxAge}.`
);
