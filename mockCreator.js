import { faker } from "@faker-js/faker";
import fs from "final-fs";

const { date, name, random } = faker;

function createAccount(n) {
    let insertion = `INSTER INTO account
    (first_name, last_name, nickname, birthday, gender, email, profile_pic)
    VALUES `;

    for (let a = 1; a <= n; a++) {
        let birthday = date.birthdate(15, 20, 'age');
        let first_name = name.firstName().replaceAll("'", "\'");
        let last_name = name.lastName().replaceAll("'", "\'");
        let nickname = name.findName().replaceAll("'", "\'");
        let gender = Math.random() > .5 ? "h" : "f";
        let birthdate = `${formatNumber(birthday.getFullYear())}-${formatNumber(birthday.getMonth())}-${formatNumber(birthday.getDay())}`;
        let profile_pic = internet.url();
        insertion += `('${first_name}','${last_name}','${nickname}','${birthdate}','${gender}','${first_name}.${last_name + random.numeric(6)}@gmail.com','${first_name}.png'),\n`;
    }

    return insertion.slice(0, insertion.length - 1) + ';';
}

function formatNumber(n) { return n < 10 ? "0" + n : n }

fs.writeFile("initializeMock.sql", createAccount(250_000));
