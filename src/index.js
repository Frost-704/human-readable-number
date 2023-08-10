module.exports = function toReadable (number) {
    const oneToTwelve = ['one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve'];
    const teen = ['thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    const ty = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    let hundreds = '';
    let tens = '';
    let underTwelves = '';
    let upToTwelves = '';
    let result = '';
    if (number === 0) {
        return 'zero';
    }
    if (number <= 999) {
      let hundred = Math.floor(number/100);
      hundreds = `${oneToTwelve[hundred - 1] || ''}`;
      if (hundreds !== '') {
        hundreds = `${hundreds} hundred `
        }
      number = number - hundred * 100;
    }
    if (number <= 99 && number > 19) {
      let ten = Math.floor(number/10);
      tens = `${ty[ten - 2]} `;
      number = number - ten * 10;
    }
    if (number <= 19 && number > 12) {
      underTwelves = teen[number - 13];
    }
    if (number <= 12) {
      upToTwelves = oneToTwelve[number - 1];
    }
    result = `${hundreds || ''}${tens || ''}${underTwelves || ''}${upToTwelves || ''}`;
    return result.trim();
    };
