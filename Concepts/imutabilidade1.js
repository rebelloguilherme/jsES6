const user = {
    name: 'Guilherme',
    lastName: 'Rebello'
};

function getUserWithFullName(user) {
    return {
        ...user, // ... spread operator
        fullName: `${user.name} - ${user.lastName}` //String literal same as user.name + " " + user.lastName
    }
}

const userWithFullName = getUserWithFullName(user);

console.log(userWithFullName,user);