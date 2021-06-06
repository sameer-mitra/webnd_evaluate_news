function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let sUrl = document.getElementById('name').value;

    console.log('Url: ' + sUrl);
    document.getElementById('errorid').innerHTML = '';

    if (Client.checkForName(sUrl)) {
        document.getElementById('msgid').innerHTML = 'Loading...';
        fetch('http://localhost:8081/process', {
            method: 'POST',
            credentials: 'same-origin',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({url: sUrl})
        })
            .then(res => res.json())
            .then(function (res) {
                document.getElementById('msgid').innerHTML = 'Done.';
                document.getElementById('model').innerHTML = 'Model: ' + res.model;
                document.getElementById('score_tag').innerHTML = 'Score: ' + res.score_tag;
                document.getElementById('agreement').innerHTML = 'Agreement: ' + res.agreement;
                document.getElementById('subjectivity').innerHTML = 'Subjectivity: ' + res.subjectivity;
                document.getElementById('confidence').innerHTML = 'Confidence: ' + res.confidence;
                document.getElementById('irony').innerHTML = 'Irony: ' + res.irony;
            })
    } else {
        document.getElementById('errorid').innerHTML = 'Please enter a valid URL';
    };
}

export { handleSubmit }
