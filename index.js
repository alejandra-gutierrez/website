$.getJSON('./cases.json', function (data) {
    let contents = '';
    data.forEach((item) => {

        const [one, two, three] = item.subjects;
        const [phe1, phe2, phe3] = [one.phenotypes,two.phenotypes,three.phenotypes] ;
        contents +=
        `
            <tr>
                <td>${item.displayId}</td>
                <td>${phe1}, ${phe2}, ${phe3}</td>
                <td>${item.displayId}</td>
            </tr>
        `;
    });
    $('#data tbody').html(contents);
});
//
$.getJSON('./cases.json', function (data) {
    let contents = '';
    data.forEach((item) => {
        // console.log(item)

        // console.log(item.subjects[1].phenotypes);
        const [one, two, three] = item.subjects;
        item.subjects.forEach((subj) => {
          console.log(subj.phenotypes)
          subj.phenotypes.forEach((phenotype) => {
          // phe2.forEach((phenotype) => {
            contents +=
            `
                <tr>
                    <td>${item.displayId}</td>
                    <td>${phenotype.term} ${phenotype.source} ${phenotype.code}</td>
                    <td>${item.displayId}</td>
                </tr>
            `;
          });
        });
      });

    $('#data1 tbody').html(contents);
});
