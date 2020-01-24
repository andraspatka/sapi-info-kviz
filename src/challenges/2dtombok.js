/* HTML markup for beginning and end of code snippets */
const start = `<pre><code class='language-javascript'>`;
const end = `</code></pre>`;

/***********************************
 * Create Code Snippets
 *********************************** */

const PSZEUDOKOD = {
    snippet: `
    ${start}
        k = 1
        minden j = 1,2,1 végezd
            a[1][j] = k
            k = k + 1
        minden i = 1,2,1 végezd
            a[i][3] = k
            k = k + 1
        minden j = 3,2,-1 végezd
            a[3][j] = k
            k = k + 1
        minden i = 3,2,-1 végezd
            a[i][1] = k
            k = k + 1
    ${end}`
};

const PSZEUDOKOD2 = {
    snippet: `
    ${start}
        k = 1
        minden i = n,2,-1 végezd
            minden j = 1,i-1,1 végezd
                a[i][j] = k
                a[n+1-i][n+1-j] = a[i][j]
                k = k + 1
    ${end}`
};

/***********************************
 * Export Challenge Array
 *********************************** */

export default {
    title: "Két dimenziós tömbök",
    category: "Pszeudokód",
    challenges: [
        {
            title: `Mi lesz az <strong>a[1..3][1..3]</strong> kétdimenziós tömb tartalma az alábbi pszeudokód algoritmusrészlet nyomán,
                    ha előzőleg minden eleme 0-t tárolt? ${PSZEUDOKOD.snippet}`,
            subtitle: `2dTombok1`,
            choices: [
                `<p>1 2 3</p>
                 <p>8 0 4</p>
                 <p>7 6 5</p>`,
                `<p>1 3 3</p>
                 <p>4 0 4</p>
                 <p>7 6 5</p>`,
                `<p>1 2 3</p>
                 <p>4 1 4</p>
                 <p>7 6 5</p>`,
            ],
            solution: `0`,
            explanation: `
				Ciklusok lebontása
				<p>Első ciklus: <code class='language-javascript'>a[1][1] = 1, a[1][2] = 2</code><p>
				<p>Második ciklus: <code class='language-javascript'>a[1][3] = 3, a[2][3] = 4</code></p>
				<p>Harmadik ciklus: <code class='language-javascript'>a[3][3] = 5, a[3][2] = 6</code></p>
				<p>Negyedik ciklus: <code class='language-javascript'>a[3][1] = 7, a[2][1] = 8</code></p>				
				`
        },
        {
            title: `Mi lesz az <strong>a[1..n][1..n]</strong> kétdimenziós tömb tartalma az alábbi pszeudokód algoritmusrészlet nyomán,
                    ha <strong>n = 5</strong>, és előzőleg minden eleme 0-t tárolt? ${PSZEUDOKOD2.snippet}`,
            subtitle: `2dTombok2`,
            choices: [
                `<p>0 &nbsp&nbsp 4 &nbsp 3 2  &nbsp1</p>
                 <p>10 11 7 6  &nbsp5</p>
                 <p>8  &nbsp&nbsp9  &nbsp&nbsp0 &nbsp9  &nbsp8</p>
                 <p>5  &nbsp&nbsp6  &nbsp&nbsp7 11 10</p>
                 <p>1  &nbsp&nbsp2  &nbsp&nbsp3 4  &nbsp&nbsp0</p>`,
                `<p>0 4 3 2 1</p>
                 <p>0 0 7 6 5</p>
                 <p>8 9 0 9 8</p>
                 <p>5 6 7 0 0</p>
                 <p>1 2 3 4 0</p>`,
                `<p>0 4 3 2 1</p>
                 <p>0 0 7 6 5</p>
                 <p>0 0 0 0 0</p>
                 <p>5 6 7 0 0</p>
                 <p>1 2 3 4 0</p>`,
                `<p>0 &nbsp 4  3 2  &nbsp1</p>
                 <p>10 0 7 6  &nbsp5</p>
                 <p>8  &nbsp 9 0 9  &nbsp8</p>
                 <p>5  &nbsp 6 7 0 10</p>
                 <p>1  &nbsp 2 3 4  0</p>`,
            ],
            solution: `3`,
            explanation: `
                <p>Külső ciklus ciklusváltozó: i: 5..2</p>
                <p>
                    Belső ciklus ciklusváltozó: 
                    <ol>
                        <li>j: 1..4</li>
                        <li>j: 1..3</li>
                        <li>j: 1..2</li>
                        <li>j: 1..1</li>
                    </ol>
                </p>				
				`
        },
    ]
};
