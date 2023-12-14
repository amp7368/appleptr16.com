/**
 * Even if you don't know Java, you can probably still get the general idea behind most of this
 */
public class Aaron extends Appleptr16 implements Programmer, Student, Thinker, ChangeGenerator, Colorful {
        private final UUID id = UUID.randomUUID(); // unique

        protected List<Outlet> creativeOutlets = List.of(PROGRAMMING, PROJECT_PLANNING, COMPUTER_BUILDING);
        protected List<String> interests = List.of("Computer Science", "Quantum Mechanics", "Astronomy", "Economics");
        protected List<String> projects = List.of("Voltskiya", "Cloverbot", "Ambrosia Casino" /*...etc*/);

        @NotNull
        public Object attention = new Object(); // public access modifier :/
        // mutable and size can grow
        private final List<Object> longTermMemory = new ArrayList<>();
        // limited working memory @see ADHD
        private final MemorySlot[] workingMemory = new MemorySlot[4];

        // projects to do in the future sorted by coolness
        protected PriorityQueue<Project> todo = new PriorityQueue<>(Comparator.comparingInt(p -> p.coolness).reversed());

        public void addProjectToQueue(Project project) {
                if (project.coolness < 5)
                        throw new IllegalArgumentException("Project must sound cool");

                int difficulty = project.difficulty;
                if (difficulty < 5) todo.add(project); // if project is easy, add to todo
                else todo.add(project); // add to todo anyways
                // PriorityQueue handles sorting
        }

        public String writeEnglish() {
                return this.writeCode(); // fallthrough
        }

        public Color hairColor() {
                // switches up hair color often
                return new Color(new Random().nextInt());
        }

        public boolean isListeningToMusic() {
                return true; // always listening to music
        }

        public int remember(Object thing) {
                // silently overwrite any previously remembered thing
                int index = new Random().nextInt(workingMemory.length);
                workingMemory[index].overwrite(thing);
                return index;
        }
}