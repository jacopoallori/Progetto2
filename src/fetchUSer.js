const URL = "https://randomuser.me/api/";

const getUser = async () => {
  const response = await fetch(URL);
  const data = await response.json();

  //Destructure
  const person = data.results[0];
  const { phone, email } = person;
  //Sintatti : --> ALIAS(RINOMINO COSTANTE)
  const { large: image } = person.picture;
  const { password } = person.login;
  const { first, last } = person.name;
  const { age } = person.dob;
  //SINTASSI : POICHE' person.location è un ogetto al quale vogliamo prelevare due valori
  const {
    street: { number, name },
  } = person.location;

  return {
    image,
    phone,
    email,
    password,
    age,
    street: `${number} ${name}`,
    name: `${first} ${last}`,
  };
};

export default getUser;
