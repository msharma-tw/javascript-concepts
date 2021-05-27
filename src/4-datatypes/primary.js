{
  var foo = 'Foo';
  var three = 3;
  var result = false;
  console.log(foo, three, result); //Foo 3 false

  var five;
  result = null;
  console.log(foo, five, result); //Foo undefined null

  {
    six = 6;
  }
  console.log(six);
}
