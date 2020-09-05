import {
  assertEquals,
  assert,
} from "https://deno.land/std@0.68.0/testing/asserts.ts";

import {
  getLangDirection,
  isValid,
  getAllLanguageCode,
  getLanguageInfo,
} from "./mod.ts";

Deno.test("ar is rtl", (): void => {
  assertEquals(getLangDirection("ar"), "rtl");
});

Deno.test("zh is ltr", (): void => {
  assertEquals(getLangDirection("zh"), "ltr");
});

Deno.test("invalid code is ltr", (): void => {
  assertEquals(getLangDirection("zz"), "ltr");
});

Deno.test("isValid", (): void => {
  assert(isValid("ab"));
});

Deno.test("getAllLanguageCode should return an array", (): void => {
  assert(Array.isArray(getAllLanguageCode()));
});

Deno.test("getLanguageInfo", (): void => {
  assertEquals(getLanguageInfo("zz"), null);
  assertEquals(getLanguageInfo("en"), {
    name: "English",
    nativeName: "English",
    direction: "ltr",
  });
});
