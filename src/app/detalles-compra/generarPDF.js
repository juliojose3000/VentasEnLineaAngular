var doc = new jsPDF();

$('#cmd').click(function () {   
    alert('entra a pdf1');
    doc.fromHTML($('#content').html(), 15, 15, {
        'width': 170,
            'elementHandlers': specialElementHandlers
    });
    doc.save('sample-file.pdf');
    alert('entra a pdf2');
});