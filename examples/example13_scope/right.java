public class Greeting {

    public String sayHello() {
        String greeting = "Hello!";
        return greeting;
    }

    public String sayByeWithExclamationMarks(String bye) {
        return bye.concat(!);
    }
}

String hello = sayHello(); // hello = "Hello!"
String goodbye = sayByeWithExclamationMarks("Goodbye"); // goodbye = "Goodbye!"
hello = sayHello(); // hello = "Hello!"