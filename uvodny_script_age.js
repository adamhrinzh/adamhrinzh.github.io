

// vek vertifik
document.addEventListener("DOMContentLoaded", function() {
  var ageVerificationModal = document.getElementById("overenie-modal");
  var confirmAgeBtn = document.getElementById("ano-tlacidlo");
  var underageBtn = document.getElementById("nie-tlacidlo");

  confirmAgeBtn.addEventListener("click", function() {
    ageVerificationModal.style.display = "none";
  });

  underageBtn.addEventListener("click", function() {
    history.back(); 
  });

  ageVerificationModal.style.display = "block";
});


//// OKIENKA /////////////////////// V MENU


  // PLATBA
  var platbaOdkaz = document.querySelector('a[href="#moznosti_platby"]');
  var platbaModal = document.getElementById('platby-okno');
  var platbaZavriTlacidlo = document.querySelector('#platby-okno .zatvorit-tlacidlo');

  // Po kliknutí na odkaz zobrazit modální okno pro platbu
  platbaOdkaz.addEventListener('click', function(event) {
    event.preventDefault(); // Zamezení výchozího chování odkazu
    platbaModal.style.display = 'block';
  });

  // Po kliknutí na tlačítko "Zavřít" skrýt modální okno pro platbu
  platbaZavriTlacidlo.addEventListener('click', function() {
    platbaModal.style.display = 'none';
  });

  // DOPRAVA
  var dopravaOdkaz = document.querySelector('a[href="#moznosti_dopravy"]');
  var dopravaModal = document.getElementById('doprava-okno');
  var dopravaZavriTlacidlo = document.querySelector('#doprava-okno .zatvorit-tlacidlo');

  // Po kliknutí na odkaz zobrazit modální okno pro dopravu
  dopravaOdkaz.addEventListener('click', function(event) {
    event.preventDefault(); // Zamezení výchozího chování odkazu
    dopravaModal.style.display = 'block';
  });

  // Po kliknutí na tlačítko "Zavřít" skrýt modální okno pro dopravu
  dopravaZavriTlacidlo.addEventListener('click', function() {
    dopravaModal.style.display = 'none';
  });

  // Skrýt modální okno při kliknutí mimo něj
  window.addEventListener('click', function(event) {
    if (event.target === platbaModal) {
      platbaModal.style.display = 'none';
    } else if (event.target === dopravaModal) {
      dopravaModal.style.display = 'none';
    }
  });

  // KONTAKT
  var kontaktOdkaz = document.querySelector('a[href="#kontakt"]');
  var kontaktModal = document.getElementById('kontakt-okno');
  var kontaktZavriTlacidlo = document.querySelector('#kontakt-okno .kontakt-zatvorit-tlacidlo');

  // Po kliknutí na odkaz zobrazit modální okno pro kontakt
  kontaktOdkaz.addEventListener('click', function(event) {
    event.preventDefault(); // Zamezení výchozího chování odkazu
    kontaktModal.style.display = 'block';
  });

  // Po kliknutí na tlačítko "Zavřít" skrýt modální okno pro kontakt
  kontaktZavriTlacidlo.addEventListener('click', function() {
    kontaktModal.style.display = 'none';
  });

  // Skrýt modální okno pro kontakt při kliknutí mimo něj
  window.addEventListener('click', function(event) {
    if (event.target === kontaktModal) {
      kontaktModal.style.display = 'none';
    }
  });



/////////////////////////////// POPUPY OKINEKA   ///////////////////////////



function showPopup(popupId) {
      var popup = document.getElementById(popupId);
      popup.style.display = "block";
    }

    function hidePopup(popupId) {
      var popup = document.getElementById(popupId);
      popup.style.display = "none";
    }