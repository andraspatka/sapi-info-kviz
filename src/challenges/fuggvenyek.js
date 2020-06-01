/* HTML markup for beginning and end of code snippets */
const start = `<pre><code class='language-javascript'>`;
const end = `</code></pre>`;

/***********************************
 * Create Code Snippets
 *********************************** */

const PSZEUDOKOD = {
    snippet: `
    ${start}
        void f(int t[2]) {
            t[0] = 2;
            t[1] = 2;
        }

        int main() {
            int t[2];
            t[0] = 1;
            t[1] = 1;

            f(t);

            cout << t[0] << " " << t[1] << endl;
            return 0;
        }
    ${end}`
};

const PSZEUDOKOD_2 = {
    snippet: `
    ${start}
        void s(int &a, int &b) {
            int temp = a;
            a = b;
            b = temp;
        }

        int main() {
            int a = 2, b = 5;
            s(a, b);

            cout << a << " " << b << endl;
            return 0;
        }
    ${end}`
};

const PSZEUDOKOD_3 = {
    snippet: `
    ${start}
        void g(int a, int b) {
            int c = a + b;
        }

        int main() {
            int a = 2, b = 5, c =2 ;
            g(a, b);

            cout << c << endl;
            return 0;
        }
    ${end}`
};

const PSZEUDOKOD_4 = {
    snippet: `
    ${start}
        void m(int a, int b) {
            if (a > b) {
                return a;
            } else {
                return b;
            }
        }

        int main() {
            int a = 2, b = 5, c = 0;
            c = m(a, b);

            cout << c << endl;
            return 0;
        }
    ${end}`
};

const PSZEUDOKOD_5 = {
    snippet: `
    ${start}
        int b = 10;

        int z(int a, int b) {
            return a * b;
        }

        int main() {
            int a = 4, b = 5, c = 0;

            c = z(a, b);
            cout << c << endl;
            return 0;
        }
    ${end}`
};

/***********************************
 * Export Challenge Array
 *********************************** */

export default {
    title: "C++ függvények",
    category: "C",
    challenges: [
        {
            title: `Mi lesz egy olyan függvény fejléce, amely a bemeneti egész számokat tartalmazó tömb elemei közül visszaadja a legnagyobb elem értékét és indexét?`,
            subtitle: `Függvények 1`,
            choices: [
                `void tomb_max(int t[], unsigned int n, int& max, unsigned int& index)`,
                `int tomb_max(int t[], int n)`,
                `void tomb_max(int t[], int n, int &max)`,
                `unsigned int tomb_max(int t[], int n, int& index)`,
            ],
            solution: `0`,
            explanation: `
                <p>Két visszatérítési érték szükséges, ezért cím szerinti paraméterátadást célszerű használni</p>
                <p>A tömb egész számokat tartalmaz, ezért int típusú kell legyen. A tömb mérete egy természetes szám, ezért unsigned int, ha a tömb egész
                számokat tartalmaz, akkor a maximum érték is egész szám lesz viszont a maximum érték indexe egy természetes szám, ezért unsigned int</p>
				`
        },
        {
            title: `Mit fog az alábbi program kiírni? ${PSZEUDOKOD.snippet}`,
            subtitle: `C++ függvények 1`,
            choices: [
                "2 2",
                "1 1",
                "1 2",
                "2 1",
            ],
            solution: `0`,
            explanation: `
                A tömbök átadása implicit cím szerint történik, ezért egy függvény képes direktben megváltoztatni egy tömb elemeinek az értékét.
                Mivel az f függvény 2-re állította a t tömb első és második elemét, ezért a függvény meghívása után a t értéke megváltozík, így
                2 2 lesz kiírva a kimenetre.
				`
        },
        {
            title: `Mit fog az alábbi program kiírni? ${PSZEUDOKOD_2.snippet}`,
            subtitle: `C++ függvények 2`,
            choices: [
                "5 2",
                "2 5",
                "2 2",
                "5 5",
            ],
            solution: `0`,
            explanation: `
                Az s függvény meg fogja cserélni a két bemeneti paraméter értékét. Az változók cím szerint vannak átadva, ezért a függvény meghívása után
                a két változónak, amely bemeneti paraméterként volt használva, az értéke meg fog változni. 
				`
        },
        {
            title: `Mit fog az alábbi program kiírni? ${PSZEUDOKOD_3.snippet}`,
            subtitle: `C++ függvények 3`,
            choices: [
                "2",
                "7",
                "5",
                "9",
            ],
            solution: `0`,
            explanation: `
                A g függvény nem térít vissza értéket. Ugyanakkor cím szerinti paraméterátadás sincs. A függvényben levő c változó neve ugyanaz, mint
                a main függvényben levő c változónak, viszont két teljesen más változó.
				`
        },
        {
            title: `Mit fog az alábbi program kiírni? ${PSZEUDOKOD_4.snippet}`,
            subtitle: `C++ függvények 4`,
            choices: [
                "5",
                "2",
                "0",
                "7",
            ],
            solution: `0`,
            explanation: `
                Az m függvény a két bemeneti paraméter közül visszatéríti a nagyobbat, tehát ha a bemeneti paraméter 2 és 5, akkor a visszatérítési érték 5.
				`
        },
        {
            title: `Mit fog az alábbi program kiírni? ${PSZEUDOKOD_5.snippet}`,
            subtitle: `C++ függvények 5`,
            choices: [
                "20",
                "40",
                "10",
                "9",
            ],
            solution: `0`,
            explanation: `
                A z függvény b paramétere árnyékolja a b globális változóját. Ezért a b paraméter értéke lesz használva (5), nem a globális változó értéke (10).
				`
        }
    ]
};
