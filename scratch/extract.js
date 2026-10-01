const https = require('https');

https.get('https://texasspinepain.com/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const fonts = data.match(/fonts\.googleapis\.com[^\"]+/g);
    console.log("Fonts:", fonts);
    const css = data.match(/font-family:([^;\"}]+)/g);
    if(css) {
      const counts = {};
      css.forEach(f => { counts[f] = (counts[f] || 0) + 1 });
      console.log(Object.entries(counts).sort((a,b)=>b[1]-a[1]).slice(0, 10));
    }
  });
}).on('error', err => console.log(err));
