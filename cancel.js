function cancel(){
    let recordX;
    recordX = document.getElementsByClassName('cancel');

    for(let i=0; i<recordX.length ; i++){

        recordX[i].addEventListener('click', function(){

            // Creating dynamically an invisible <form> which sends the data to PHP
            var theForm, newInput1;
            theForm = document.createElement('form');
            theForm.action = 'cancelData.php';
            theForm.method = 'post';

            newInput1 = document.createElement('input');
            newInput1.type = 'hidden';
            newInput1.name = 'input_1';

            let dbID = recordX[i].id.substr(3);

            newInput1.value = Number(dbID); //recordX[i].id[3]

            theForm.appendChild(newInput1);

            document.getElementById('hidden_form_container').appendChild(theForm);
            theForm.submit();

        }, false);
    }
}