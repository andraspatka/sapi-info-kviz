/* HTML markup for beginning and end of code snippets */
const start = `<pre><code class='language-javascript'>`;
const end = `</code></pre>`;

/***********************************
 * Create Code Snippets
 *********************************** */

const PSZEUDOKOD = {
    snippet: `
    ${start}
        a = [3, 2, 1, 5, 4]
        b = [0, 0, 0, 0, 0]
        minden i = 1,5,1 végezd
            b[a[i]] = b[a[i]] + 1
    ${end}`
};

const PSZEUDOKOD2 = {
    snippet: `
    ${start}
        a = [3, 2, 1, 5, 4]
        b = [0, 0, 0, 0, 0]
        minden i = 1,5,1 végezd
            b[a[i]] = b[a[i]] + 1
        minden i = 1,5,-1 végezd
            a[b[i]] = a[b[i]] - 1
    ${end}`
};

/***********************************
 * Export Challenge Array
 *********************************** */

export default {
    title: "Egydimenziós tömbök",
    category: "Pszeudokód",
    challenges: [
        {
            title: `Mi lesz az <strong>a[1..5]</strong> és <strong>b[1..5]</strong> öt elemű tömbök tartalma? ${PSZEUDOKOD.snippet}`,
            subtitle: `Tomb1`,
            choices: [
                `<p>b: [1, 1, 1, 1, 1]</p>
                 <p>a: [3, 2, 1, 5, 4]</p>`,
                `<p>b: [1, 1, 1, 1, 1]</p>
                 <p>a: [4, 2, 1, 5, 3]</p>`,
                `<p>b: [2, 3, 4, 5, 6]</p>
                 <p>a: [3, 2, 1, 5, 4]</p>`,
                `<p>b: [0, 0, 0, 0, 0]</p>
                 <p>a: [3, 2, 1, 5, 4]</p>`,
            ],
            solution: `0`,
            explanation: `
				Iterációk lebontása:<br/>
				Első ciklus:
				<ol>
				    <li><code class='language-javascript'>b[3] = b[3] + 1; i = 1</code></li>
				    <li><code class='language-javascript'>b[2] = b[2] + 1; i = 2</code></li>
				    <li><code class='language-javascript'>b[1] = b[1] + 1; i = 3</code></li>
				    <li><code class='language-javascript'>b[5] = b[5] + 1; i = 4</code></li>
				    <li><code class='language-javascript'>b[4] = b[4] + 1; i = 5</code></li>
                </ol>
				`
        },
        {
            title: `Mi lesz az <strong>a[1..5]</strong> és <strong>b[1..5]</strong> öt elemű tömbök tartalma? ${PSZEUDOKOD2.snippet}`,
            subtitle: `Tomb2`,
            choices: [
                `<p>b: [1, 1, 1, 1, 1]</p>
                 <p>a: [-1, 2, 1, 5, 4]</p>`,
                `<p>b: [1, 1, 1, 1, 1]</p>
                 <p>a: [2, 1, 0, 4, 3]</p>`,
                `<p>b: [2, 3, 4, 5, 6]</p>
                 <p>a: [3, 2, 1, 5, 4]</p>`,
                `<p>b: [0, 0, 0, 0, 0]</p>
                 <p>a: [3, 2, 1, 5, 4]</p>`,
            ],
            solution: `0`,
            explanation: `
				Iterációk lebontása:
				<ol>
				    <li><code class='language-javascript'>b[3] = b[3] + 1; i = 1</code></li>
				    <li><code class='language-javascript'>b[2] = b[2] + 1; i = 2</code></li>
				    <li><code class='language-javascript'>b[1] = b[1] + 1; i = 3</code></li>
				    <li><code class='language-javascript'>b[5] = b[5] + 1; i = 4</code></li>
				    <li><code class='language-javascript'>b[4] = b[4] + 1; i = 5</code></li>
                </ol>
                Második ciklus:
				<ol>
				    <li><code class='language-javascript'>a[1] = b[1] - 1; i = 5</code></li>
				    <li><code class='language-javascript'>a[1] = a[1] - 1; i = 4</code></li>
				    <li><code class='language-javascript'>a[1] = a[1] - 1; i = 3</code></li>
				    <li><code class='language-javascript'>a[1] = a[1] - 1; i = 2</code></li>
				    <li><code class='language-javascript'>a[1] = a[1] - 1; i = 1</code></li>
                </ol>
				`
        },
    ]
};
