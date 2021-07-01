const data = {
  birthday: new Date('25 Mar 2002'),
  age: undefined,
};

data.age = new Date(Date.now()).getFullYear() - data.birthday.getFullYear();

export default data;
