function sell_socks(ar) {
    var socks = [];
    var pairs = 0;
  for (var element of ar) {
    socks[element] = socks[element] + 1 || 1;
      if (socks[element] % 2 === 0) {
        pairs += 1;
      }
   }
  return pairs;
  }
  
  var arr = [10,10,10,10,20,30,30,30,30,30,30,30,40,40,40,40];
  console.log(sell_socks(arr));