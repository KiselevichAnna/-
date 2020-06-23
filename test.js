const { statement } = require("./script");
//Первый тест 
const testInvoises = {
  customer: "MDT",
  performance: [
    {
      playId: "Гамлет",
      audience: 55,
      type: "tragedy"
    },
    {
      playId: "Ромео и Джульетта",
      audience: 35,
      type: "tragedy"
    },
    {
      playId: "Отелло",
      audience: 40,
      type: "comedy"
    }
  ]
};

const testAnswer = `Счет для MDT
 Гамлет: RUB 65,000.00 (55 мест)
 Ромео и Джульетта: RUB 45,000.00 (35 мест)
 Отелло: RUB 62,000.00 (40 мест)
Итого с вас RUB 172,000.00
Вы заработали 40 бонусов\n`;

test("should return the formatted and valuable data for a default test case", () => {
  expect(statement(testInvoises)).toBe(testAnswer);
});

const testEmptyInvoises = {
  customer: "MDT",
  performance: []
};

const testEmptyAnswer = `Счет для MDT
Итого с вас RUB 0.00
Вы заработали 0 бонусов\n`;

test("should return the formatted and valuable data when plays hasn't been choosed", () => {
  expect(statement(testEmptyInvoises)).toBe(testEmptyAnswer);
});

const testInvoisesWithWrongPlay = {
  customer: "MDT",
  performance: [
    {
      playId: "Гамлет",
      audience: 55,
      type: "tragedy"
    },
    {
      playId: "Ромео и Джульетта",
      audience: 35,
      type: "tragedy"
    },
    {
      playId: "Отелло",
      audience: 40,
      type: "comedy"
    },
    {
      playId: "Дядя Ваня",
      audience: 60,
      type: "drama"
    }
  ]
};

const testAnswerWithWrongPlay = new Error("неизвестный тип: drama");

test("should return the Error when one of the plays has a wrong type", () => {
  expect(() => {
    statement(testInvoisesWithWrongPlay);
  }).toThrow(testAnswerWithWrongPlay);
});

//Второй тест

