<template>
  <div id="app">
    <p>
      {{ items[1].name }}
    </p>
  </div>
</template>

<script>
// ロードされ、Vueがグローバル変数として定義されているか確認
// console.assert(typeof Vue !== "undefined");
var items = [
  {
    name: '鉛筆',
    price: 300,
    quantity: 0,
  },
  {
    name: 'ノート',
    price: 400,
    quantity: 0,
  },
  {
    name: '消しゴム',
    price: 500,
    quantity: 0,
  },
];

var vm = new Vue({
  el: '#app',
  data: {
    // dataプロパティ
    items: items,
  },
});
</script>
