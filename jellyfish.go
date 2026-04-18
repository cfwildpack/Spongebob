package main

import "fmt"

func catchJellyfish(current int) int {
	return current + 1
}

func main() {
	jellyfish := 5
	jellyfish = catchJellyfish(jellyfish)
	fmt.Printf("Total jellyfish caught: %d\n", jellyfish)
}
