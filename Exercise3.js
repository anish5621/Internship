"use strict";
class UserRepository {
    users = [];
    getAll() {
        return this.users;
    }
    getById(id) {
        return this.users.find(user => user.id === id);
    }
    create(user) {
        this.users.push(user);
    }
    delete(id) {
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
