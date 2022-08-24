   const frases = [
    'No se puede hacer nada para cambiar lo que ya pasó, pero sí se puede hacer mucho para cambiar lo que viene.',
    'Es sencillo hacer que las cosas sean complicadas, pero difícil hacer que sean sencillas', 
    'No pierdas nunca el sentido del humor y aprende a reírte de tus propios defectos.',
    'El pasado es para aprender, el presente para vivirlo y el futuro para soñarlo.', 
    'Muchos de nuestros sueños parecen al principio imposibles, luego pueden parecer improbables, y luego, cuando nos omprometemos firmemente, se vuelven inevitables.', 
    'Quien no ha caído nunca, no tiene una idea justa del esfuerzo que hay que hacer para tenerse en pie.', 
    'Tú eres más fuerte que tus miedos. Tus fuerzas son mayores que tus dudas.', 
    'Con el tiempo, lo que hoy es difícil mañana será una conquista. Esfuérzate por lo que realmente te llena el alma. Y en la virtud de saber esperar. Porque… todo lo que tiene que ser, será.',
    'No anticipes los problemas ni te preocupes por lo que pueda suceder: mantente bajo la luz del sol.',
    'Nadie nos avisó que el dolor nos transformaría tanto que nos volvería otros'];

   document.getElementById('body').style.backgroundColor= 'grey';

   btn = document.getElementById('btn').addEventListener('click', show_phrase);

   function show_phrase(){
   let frases_index = Math.floor(Math.random() * frases.length);
   const div_frases = document.getElementById('frases_container').innerHTML = frases[frases_index];

}














