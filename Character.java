public class Character {
    private String name;
    private String role;

    public Character(String name, String role) {
        this.name = name;
        this.role = role;
    }

    public void introduce() {
        System.out.println("Hi! I'm " + name + ", and I work as a " + role + "!");
    }

    public static void main(String[] args) {
        Character spongebob = new Character("SpongeBob", "Fry Cook");
        spongebob.introduce();
    }
}
