export {};
// Exercise 4: Utility Types

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

// Partial
type UpdateUser = Partial<User>;

const updateUser: UpdateUser = {
  email: "anish@gmail.com"
};

console.log("Updated User:", updateUser);


//Pick
type UserPreview = Pick<User, "id" | "name">;

const userPreview: UserPreview = {
  id: 1,
  name: "Anish"
};

console.log("User Preview:", userPreview);


//Omit
type PublicUser = Omit<User, "password">;

const publicUser: PublicUser = {
  id: 1,
  name: "Anish",
  email: "anish@gmail.com"
};

console.log("Public User:", publicUser);


//Readonly
type ReadonlyUser = Readonly<User>;

const readonlyUser: ReadonlyUser = {
  id: 1,
  name: "Anish",
  email: "anish@gmail.com",
  password: "12345"
};

console.log("Readonly User:", readonlyUser);

// This would give an error:
// readonlyUser.name = "Ram";


//Record
type UserDatabase = Record<number, User>;

const userDatabase: UserDatabase = {
  1: {
    id: 1,
    name: "Anish",
    email: "anish@gmail.com",
    password: "12345"
  },

  2: {
    id: 2,
    name: "Ram",
    email: "ram@gmail.com",
    password: "67890"
  }
};

console.log("User Database:", userDatabase);