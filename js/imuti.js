const user = {
    name: 'Debora',
    lastName: 'Ramos'
};

function getUserWithFullName(user) {
    return {
        ...user,
        fullName: `${user.name} ${user.lastName}` //isso é como se fosse concatenado, mas facilita
    }
}

const getUserWithFullName = getUserWithFullName(user);

console.log(getUserWithFullName); //crie um novo objwto com esses mesmos atributos + o full name


