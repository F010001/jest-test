const mapArrToStrings = require("./mapToString");

describe("mapArrToStrings", () => {
  test("Корректно", () => {
    expect(mapArrToStrings([1, 2, 3])).toEqual(["1", "2", "3"]);
  });
  test("Мешанина", () => {
    expect(mapArrToStrings([1, 2, 3, null, "asasdsa"])).toEqual([
      "1",
      "2",
      "3",
    ]);
  });
  test("Empty arr", () => {
    expect(mapArrToStrings([])).toEqual([]);
  });

  test("Корректно", () => {
    expect(mapArrToStrings([1, 2, 3])).not.toEqual([1, 2, 3]);
  });
});
