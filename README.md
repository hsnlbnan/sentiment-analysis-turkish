# @hsnlbnan/sentiment-analysis-turkish

Bu kütüphane Türkçe cümlelerinizde cümlenin olumlu/olumsuz olduğunu algılamak için yapılmıştır.

## Kurulum

Install with [npm](https://www.npmjs.com/):

    npm install @hsnlbnan/sentiment-analysis-turkish

## Kullanım

```js
const { findSentiment } = require("@hsnlbnan/sentiment-analysis-turkish"); // veya
import { findSentiment } = require("@hsnlbnan/sentiment-analysis-turkish")
console.log(findSentiment("O, bugün üzgün."));
// =>  {
//   score: -2,
//   words: [ 'üzgün' ],
//   positive: [],
//   negative: [ 'üzgün' ]
// }
```

## Katkıda bulunma

Pull request'e ve yıldızlara daima açığız.

For bugs and feature requests, [please create an issue](https://github.com/azu/npm-github-package-example/issues).

1. Fork'la!
2. Branchini oluştur.
3. Commitle.
4. PR aç

## Yazar

- [github/hsnlbnan](https://github.com/hsnlbnan)
- [twitter/hsnlbnan](https://twitter.com/hsnlbnan)

## Lisans

MIT © azu
