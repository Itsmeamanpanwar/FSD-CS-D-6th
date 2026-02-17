function doSomething(){
  throw new Error
  ('a error is thrown from something');
}

function init(){
  try{
    doSomething(); 
  }
  catch(e){
    console.log(e);
  }
  console.log
    ("After successful error handling");
  }

  init();