/* HTML markup for beginning and end of code snippets */
const start = `<pre><code class='language-javascript'>`;
const end = `</code></pre>`;

/***********************************
 * Create Code Snippets
 *********************************** */

const PSZEUDOKOD = {
    snippet: `
    ${start}
        n = 8
        i = 2
        j = 7
        p = 0
        ha i - 2 < 1 vagy j - 1 < 1 akkor
            p = p + 1
        ha i - 2 < 1 vagy j + 1 > n akkor
            p = p + 1
        ha i + 2 > n vagy j - 1 < 1 akkor
            p = p + 1
        ha i + 2 > n vagy j + 1 > n akkor
            p = p + 1
        ha i - 1 < 1 vagy j - 2 < 1 akkor
            p = p + 1
        ha i - 1 < 1 vagy j + 2 > n akkor
            p = p + 1
        ha i + 1 < 1 vagy j - 2 > n akkor
            p = p + 1
        ha i + 1 < 1 vagy j + 2 > n akkor
            p = p + 1        
        Kiír 8 - p
    ${end}`
};

/***********************************
 * Export Challenge Array
 *********************************** */

export default {
    title: "Feltételek",
    category: "Pszeudokód",
    challenges: [
        {
            title: `Mit ír ki az alábbi pszeudokód algoritmus? ${PSZEUDOKOD.snippet}`,
            subtitle: `Feltetel`,
            choices: [
                "3",
                "4",
                "0",
                "8",
            ],
            solution: `1`,
            explanation: `
                <em>vagy</em> igazságtáblázata:
                <table class="logic-fun">
                    <tr>
                        <th>A</th><th>B</th><th>A vagy B</th>
                    </tr>
                    <tr>
                        <td>0</td><td>0</td><td>0</td>
                    </tr>
                    <tr>
                        <td>0</td><td>1</td><td>1</td>
                    </tr>
                    <tr>
                        <td>1</td><td>0</td><td>1</td>
                    </tr>
                    <tr>
                        <td>1</td><td>1</td><td>1</td>
                    </tr>
                </table>
				<p><code class='language-javascript'>i - 2 < 1 vagy j - 1 < 1</code>  <strong>igaz</strong></p>
				<p><code class='language-javascript'>i - 2 < 1 vagy j + 1 > n</code> <strong>igaz</strong></p>
				<p><code class='language-javascript'>i - 1 < 1 vagy j + 2 > n</code> <strong>igaz</strong></p>
				<p><code class='language-javascript'>i + 1 < 1 vagy j + 2 > n</code> <strong>igaz</strong></p>
				<p>A többi feltétel hamis</p>
				`
        },
        {
            title: `Ezek közül melyik n, i, és j értékre fog az algoritmus 8-at kiírni? ${PSZEUDOKOD.snippet}`,
            subtitle: `Feltetel2`,
            choices: [
                "8, 4, 4",
                "4, 8, 0",
                "8, 8, 8",
                "10, 5, 4",
            ],
            solution: `0`,
            explanation: `
                <em>vagy</em> igazságtáblázata:
                <table class="logic-fun">
                    <tr>
                        <th>A</th><th>B</th><th>A vagy B</th>
                    </tr>
                    <tr>
                        <td>0</td><td>0</td><td>0</td>
                    </tr>
                    <tr>
                        <td>0</td><td>1</td><td>1</td>
                    </tr>
                    <tr>
                        <td>1</td><td>0</td><td>1</td>
                    </tr>
                    <tr>
                        <td>1</td><td>1</td><td>1</td>
                    </tr>
                </table>
				<p>A <strong>p</strong> értéke csak akkor lesz 8, ha egyik feltétel sem igaz.</p>
				`
        }
    ]
};
