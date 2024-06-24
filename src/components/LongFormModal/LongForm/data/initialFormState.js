import animalTypes from "./animalTypes.js";

const initialFormState = {
    species: animalTypes[0].value,
    gender: "MAL",
    sterilized: true,
    weigth: 1,
    immunized: true,
    vet_ppt: true,
    diseases: "Нет",
    outside_lb: "NO",
    pulls: "NO",
    picks: "NO",
    take: "YES",
    aggression: "string",
    no_leash: "YES",
    dogs_contact: "YES",
    wash_paws: "BATH",
    pee_home: "YES",
    gnaw_home: "NO",
    walk: "NO"
}

export default initialFormState;
