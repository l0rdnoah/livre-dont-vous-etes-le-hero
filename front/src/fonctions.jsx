function levenshteinDistance(str1, str2) {
    const m = str1.length;
    const n = str2.length;

    // Créer une matrice de distances
    const dp = Array(m + 1)
        .fill(null)
        .map(() => Array(n + 1).fill(null));

    // Initialiser la première ligne et la première colonne de la matrice
    for (let i = 0; i <= m; i++) {
        dp[i][0] = i;
    }
    for (let j = 0; j <= n; j++) {
        dp[0][j] = j;
    }

    // Calculer les distances pour les sous-chaînes restantes
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
            dp[i][j] = Math.min(
                dp[i - 1][j] + 1, // Suppression
                dp[i][j - 1] + 1, // Insertion
                dp[i - 1][j - 1] + cost // Substitution
            );
        }
    }

    // La distance de Levenshtein est le dernier élément de la matrice
    return dp[m][n];
}