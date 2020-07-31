export const listFormat = ({ year, title, role }) =>
  `<li>${year} ${title}</li>`;

export const infoFormat = ({ name, birthDay, description }) => {
  const sep = "------------------------------------";
  return `${sep}
Имя Фамилия
${sep}
${name}




${sep}
дата рождения
${sep}
${birthDay}




${sep}
образование
${sep}
${description}

${sep}
навыки
${sep}




${sep}
работы в театре
${sep}




${sep}
работы в кино
${sep}
`;
};
