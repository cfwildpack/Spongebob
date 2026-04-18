#include <iostream>
using namespace std;

class Ocean {
public:
    void wave() {
        cout << "The ocean waves are moving in Bikini Bottom." << endl;
    }

    void bubble() {
        cout << "Bubbles rising to the surface!" << endl;
    }
};

int main() {
    Ocean ocean;
    ocean.wave();
    ocean.bubble();
    return 0;
}
