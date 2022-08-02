const listaNoveno = ['DANIELA SOFÍA', 'JOSÉ RAFAEL', 'VINCENT DELANY', 'MARCO ANTONIO', 'ZAIDA MARÍA',
    'ORIANA ISABEL', 'SANTIAGO', 'ISABELLA MARÍA', 'MAYURI LUZIEL', 'THAYS MAYLEK', 'NATALIA',
    'JESÚS ANDRÉS', 'SUSANA ALEXANDRA', 'SOFÍA', 'SANTIAGO JOSÉ', 'DANNA ISABEL', 'ISSHA JAEL',
    'JESUS FERNANDO', 'LUIS ARTURO', 'JUAN FELIPE', 'CAMILO ANDRÉS'];

const placeStudent = document.getElementById('elegido');

const boton = document.getElementById('boton1');
boton.addEventListener('click', function() {
    let studentIndex = Math.floor(Math.random() * listaNoveno.length);
    let student = listaNoveno.pop();
    placeStudent.innerHTML = student;
});
