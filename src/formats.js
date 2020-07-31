export function listFormat({ year, title, role }) {
  return `<li>${year} ${title}</li>`;
}

export function infoFormat({ name, birthDay, description }) {
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
}
