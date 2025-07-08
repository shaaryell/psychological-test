document.getElementById("testForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let results = { FU: 0, AS: 0, MA: 0, AG: 0 };

    const questions = document.querySelectorAll(".question");

    questions.forEach((q, index) => {
        const resultType = q.getAttribute("data-result");
        const selected = q.querySelector("input[type='radio']:checked");

        if (selected && selected.value === "true") {
            results[resultType]++;
        }
    });

    // Display results
    document.getElementById("results").innerHTML = `
    <hr>
    <!-- Blog entry -->
    <div class="w3-card-4 w3-margin w3-white">
        <div class="w3-container w3-center">
            <h4><b>Fuga / Passività: ${results.FU}</b></h4>
            <h4><b>Assertività: ${results.AS}</b></h4>
            <h4><b>Manipolazione: ${results.MA}</b></h4>
            <h4><b>Aggressività: ${results.AG}</b></h4>
        </div>
    </div>
    `;
});