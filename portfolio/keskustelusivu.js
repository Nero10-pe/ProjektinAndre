console.log("keskustelusivu-sivu avattu");

function send(event) {
    event.preventDefault();

    const birthdayField = document.getElementById('birthdayField');
    const emailField = document.getElementById('emailField');
    const typeField = document.getElementById('typeField');
    const usageField = document.getElementById('usageField');
    const bodyField = document.getElementById('bodyField');

    const birthday = birthdayField.value;
    const email = emailField.value;
    const type = typeField.value;
    const usage = usageField.checked;
    const body = bodyField.value;

    console.log('Birthday:', birthday);
    console.log('Email:', email);
    console.log('Type:', type);
    console.log('Usage:', usage);
    console.log('Body:', body);

    closeModal();
}