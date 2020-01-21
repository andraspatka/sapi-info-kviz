/* HTML markup for beginning and end of code snippets */
const start = `<pre><code class='language-javascript'>`;
const end = `</code></pre>`;

/***********************************
 * Create Code Snippets
 *********************************** */

const PSZEUDOKOD_1 = {
    snippet: `
    ${start}
        n = 18245
        p = 1
        amíg n != 0 végezd
            m = n % 10
            n = n / 10
            p = p * m
        kiír p
    ${end}`
};

/***********************************
 * Export Challenge Array
 *********************************** */

export default {
    title: "Pszeudokódos feladatok",
    category: "Pszeudokód",
    challenges: [
        {
            title: `Mit ír ki az alábbi pszeudokód algoritmus? ${PSZEUDOKOD_1.snippet}`,
            subtitle: `Ciklusok1`,
            choices: [
                "320",
                "3200",
                "10000",
                "8",
            ],
            solution: `0`,
            explanation: `
				Ciklusok lebontása
				<p>Első ciklus: <code> n = 18245 m = 5 p = 5 </code><p>
				<p>Második ciklus: <code> n = 1824 m = 4 p = 20 </code></p>
				<p>Harmadik ciklus: <code> n = 182 m = 2 p = 40 </code></p>
				<p>Negyedik ciklus: <code> n = 18 m = 8 p = 320 </code></p>
				<p>Ötödik ciklus: <code> n = 1 m = 1 p = 320 </code></p>
				<p>Hatodik ciklus: <code> n = 0 -> (n != 0) kritériumnak nem felel meg, ciklus vége </code></p>
				
				`
        },
        {
            title: `Az alábbi <em>n</em> értékek közül melyikre ír ki az algoritmus <em>280</em>-at? ${PSZEUDOKOD_1.snippet}`,
            subtitle: `Ciklusok2`,
            choices: [
                "857",
                "3200",
                "10000",
                "8",
            ],
            solution: `0`,
            explanation: `
				Ciklusok lebontása
				<p>Első ciklus: <code> n = 857 m = 7 p = 7 </code><p>
				<p>Második ciklus: <code> n = 85 m = 5 p = 35 </code></p>
				<p>Harmadik ciklus: <code> n = 8 m = 8 p = 280 </code></p>
				<p>Negyedik ciklus: <code> n = 0 m = 8 p = 280 </code></p>
				<p>Ötödik ciklus: <code> n = 0 -> (n != 0) kritériumnak nem felel meg, ciklus vége </code></p>
				
				`
        }
    ]
};
