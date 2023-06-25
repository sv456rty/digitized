export type Person = {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
};

// ESM
import { faker } from "@faker-js/faker";

export function createRandomUser(): Person {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    address: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state(),
  };
}

export const data: Person[] = faker.helpers.multiple(createRandomUser, {
  count: 7700,
});
