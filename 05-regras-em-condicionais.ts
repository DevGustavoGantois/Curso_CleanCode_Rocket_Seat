//regras-condicionais:
//Sempre que possível escreva condicionais sem negação
//A negação muitas vezes atrapalha a gente de colocar o operador temos que colocar parenteses as vezes para ficar mais claro. 
//Sempre evitar (sempre que possível) colocar negação em condicionais.

const isUserYoungerThan18Years = true;
const doesUserLiveOutsideBrazil = true;

if(isUserYoungerThan18Years && doesUserLiveOutsideBrazil) {

}

//Early return vs else.

function isUserOlderThan18Years(user) {
    if (!user) {
        return { error: true}
    } else {
        return user.age >= 18
    }
}

//Poderiamos não ter o else e fazer return da forma mostrada abaixo:

function isUserOlderThan18Years(user) {
    if(!user) {
        return { error: true}
    }

    return user.age >= 18
}

//Na maioria das vezes a gente substituir um else por "Early Return" é valido, faz sentido (igual no caso acima).

//Podemos utilizar o else quando "Early Return" não for visto facilmente no código.

//Quando a estrutura Condicional é muito grande tendo muitos ifs e o "Early Return" não é visto facilmente no código, aí será valido a utilização de else. 

//Evite sempre que possível condicionais Aninhadas. Caso você tenha um if, procure não fazer um if dentro do if a menos que não tenha como você fugir.

/*Isso é pessimo para legibilidade do código:*/  user.age >= 18 ? user.age === 18 ? : :


//Faça desta forma caso for utilizar ifs.
if (user.age > 18) {
    return;
}

if (user.age < 12) {
    return;
}

//DESAFIO:

const necessaryGradeToBeApproved = 7;
const studentGrade = 10;

const numberOfAbsensesToFailSchool = 100;
const studentNumberOfAbsenses = 109;

function checkIfStudentPassedTheSchoolYear() {
    if (studentGrade < necessaryGradeToBeApproved) {
        return { error: true, message: 'Student was not approved because his grade was below the necessary.'}
    } else {
        if (studentNumberOfAbsenses > numberOfAbsensesToFailSchool) {
            return { error: true, message: 'Student was not approved because of his absenses.'}
        } else {
            return {error: false, message: 'Student was approved! :)'}
        }
    }
}

console.log(checkIfStudentPassedTheSchoolYear())

//Corrigindo a estrutura do código de acordo com a aula ministrada pelo professor Diego Fernandes:

const necessaryGradeToBeApproved = 7;
const studentGrade = 10;

const numberOfAbsensesToFailSchool = 100;
const studentNumberOfAbsenses = 109;

function checkIfStudentPassedTheSchoolYear() {
    if(studentGrade < necessaryGradeToBeApproved) {
        return {error: true, message: 'Student was not approved because his grade was below the necessary.'}
    } 
    if (studentNumberOfAbsenses > numberOfAbsensesToFailSchool) {
        return { error: true, message: 'Student was not approved because of his absenses.'}
    }

    return {error: false, message: 'Student was approved! :)'}
}

console.log(checkIfStudentPassedTheSchoolYear())