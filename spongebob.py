class SpongeBob:
    def __init__(self):
        self.name = "SpongeBob"
        self.energy = 100
        self.happiness = 100

    def work(self):
        print("Making Krabby Patties!")
        self.energy -= 10

    def jellyfishing(self):
        print("Catching jellyfish!")
        self.happiness += 5

    def status(self):
        print(f"Energy: {self.energy}")
        print(f"Happiness: {self.happiness}")

if __name__ == "__main__":
    bob = SpongeBob()
    bob.work()
    bob.jellyfishing()
    bob.status()
