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
            //TODO: fill choices
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
            title: `Mi lesz az <strong>a[1..3][1..3]</strong> kétdimenziós tömb tartalma az alábbi pszeudokód algoritmusrészlet nyomán,
                    ha <strong>n = 5</strong>, és előzőleg minden eleme 0-t tárolt? ${PSZEUDOKOD2.snippet}`,
            subtitle: `2dTombok2`,
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
    ]
};
