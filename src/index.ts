export function log(str: string) {
  console.log(str);
}

class A {
  greeting = "hello world";
}
log(new A().greeting);
