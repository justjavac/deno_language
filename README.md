# deno_language

[![tag](https://img.shields.io/github/release/justjavac/deno_language)](https://github.com/justjavac/deno_language/releases)
[![Build Status](https://github.com/justjavac/deno_language/workflows/ci/badge.svg?branch=master)](https://github.com/justjavac/deno_language/actions)
[![license](https://img.shields.io/github/license/justjavac/deno_language)](https://github.com/justjavac/deno_language/blob/master/LICENSE)

[ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language.

JSON data from [joker-x/languages.js](https://github.com/joker-x/languages.js/blob/master/languages.json).

## Usage

All ISO 639-1 language code:

```ts
import languages from "https://deno.land/x/language/languages.ts";

console.log(languages)
```

output:

```ts
{
  "attribute": { "name": 0, "nativeName": 1 },
  "rtl": {
    "ar": 1,
    "dv": 1,
    "fa": 1,
    "ha": 1,
    "he": 1,
    "ks": 1,
    "ku": 1,
    "ps": 1,
    "ur": 1,
    "yi": 1,
  },
  "lang": {
    "aa": ["Afar", "Afar"],
    "ab": ["Abkhazian", "Аҧсуа"],
    "af": ["Afrikaans", "Afrikaans"],
    "ak": ["Akan", "Akana"],
    ...
    ...
```

Get the writing direction of the language. `"rtl"` or `"ltr"`:

```ts
import { getLangDirection } from "https://deno.land/x/language/mod.ts";

getLangDirection("ar"); // rtl
getLangDirection("zh"); // "ltr"
```

Check if the language code is valid:

```ts
import { isValid } from "https://deno.land/x/language/mod.ts";

isValid("ab"); // true
isValid("zh"); // true
isValid("zz"); // false
```

Get an array with all the language codes supported:

```ts
import { getAllLanguageCode } from "https://deno.land/x/language/mod.ts";

getAllLanguageCode(); // ["aa", "ab", "af", "ak", ..., ...]
```

Get LanguageInfo:

```ts
import { getLanguageInfo } from "https://deno.land/x/language/mod.ts";

getLanguageInfo("en");
// { name: "English", nativeName: "English", direction: "ltr" }

getLanguageInfo("zh");
// { name: "Chinese", nativeName: "中文", direction: "ltr" }

getLanguageInfo("zz");
// null
```

### License

[deno_language](https://github.com/justjavac/deno_language) is released under the MIT License. See the bundled [LICENSE](./LICENSE) file for details.
