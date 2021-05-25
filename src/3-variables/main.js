{
  let bar = 'Bar';
  const yo = 'Yo!';
  console.log(foo, bar, yo); // Foo Bar Yo!

  {
    var foos = 'Foos';
    let ball = 'Ball';
    const pk = 'Peekaboo!';
    console.log(foos, ball, pk); // Foos Ball Peekaboo!
  }

  console.log(foos); // Foos
  //   console.log(ball); // ReferenceError
  //   console.log(pk); // ReferenceError

  var foo = 'Again Foo'; // Re-defined foo variable
  //   let bar = 'Again Bar'; // Error: Variable already declared
  bar = 'Again Bar'; // Re-assigned
  //   const yo = 'Again Yo!'; // Error: Variable already declared
}
