export {};

// Exercise 3 code

interface Repository<T> {
    getAll(): T[];
    getById(id: number): T | undefined;
    create(item: T): void;
    delete(id: number): void;
}

interface User {
    id: number;
    name: string;
}

class UserRepository implements Repository<User> {
    private users: User[] = [];

    getAll(): User[] {
        return this.users;
    }

    getById(id: number): User | undefined {
        return this.users.find(user => user.id === id);
    }

    create(user: User): void {
        this.users.push(user);
    }

    delete(id: number): void {
        this.users = this.users.filter(user => user.id !== id);
    }
}

const userRepo = new UserRepository();

userRepo.create({
    id: 1,
    name: "Anish"
});

userRepo.create({
    id: 2,
    name: "Ram"
});

console.log(userRepo.getAll());

console.log(userRepo.getById(1));

userRepo.delete(2);

console.log(userRepo.getAll());