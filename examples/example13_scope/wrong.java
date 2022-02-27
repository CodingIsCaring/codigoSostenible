public class Greeting {
    private String greeting = "Hello!";

    public String sayHello() {
        return greeting;
    }

    public String sayByeWithExclamationMarks(String bye) {
        greeting = "See you!";
        return bye.concat(!);
    }
}

String hello = sayHello(); // hello = "Hello!"
String goodbye = sayByeWithExclamationMarks("Goodbye"); // goodbye = "Goodbye!"
hello = sayHello(); // hello = "See you!"