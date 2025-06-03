
  // Let dropdown nav-links open their page normally
  document.querySelectorAll('.nav-link.dropdown-toggle').forEach(link => {
    link.addEventListener('click', function (e) {
      window.location.href = this.getAttribute('href');
    });
  });

  // Show the selected card and update active button style
  function show(id, btn = null) {
    // Hide all cards
    document.querySelectorAll('#card-container .card').forEach(card => {
      card.style.display = "none";
    });

    // Show the selected card
    const selectedCard = document.getElementById(id);
    if (selectedCard) {
      selectedCard.style.display = "block";
    }

    // Handle active class toggle for buttons
    document.querySelectorAll('.custom-tab').forEach(button => {
      button.classList.remove('active');
    });

    if (btn) {
      btn.classList.add('active');
    }
  }

  // On page load: show "New-In" and activate corresponding button
  window.onload = function () {
    const defaultButton = document.querySelector('.btn-border-reveal[onclick*="New-In"]');
    if (defaultButton) {
      show('New-In', defaultButton);
    }
  };


     function show(id, btn) {
    const sections = ['New-In', 'mobile-card', 'TV-card', 'ac-card'];

    // Show selected section and hide others
    sections.forEach(sec => {
      document.getElementById(sec).style.display = (sec === id) ? 'block' : 'none';
    });

    // Reset all buttons to default style
    document.querySelectorAll('.btn-border-reveal').forEach(button => {
      button.classList.remove('active-tab');
    });

    // Highlight the clicked button
    btn.classList.add('active-tab');
  }

 function shows(id, btn) {
            // Hide all sections
            const sections = ['Realme', 'Nothing', 'Redmi', 'Motrola'];
            sections.forEach(sectionId => {
                const el = document.getElementById(sectionId);
                if (el) el.style.display = 'none';
            });

            // Remove active state from all buttons
            const allButtons = document.querySelectorAll('.btn-border-reveal');
            allButtons.forEach(button => button.classList.remove('active-btn'));

            // Show the selected section
            const target = document.getElementById(id);
            if (target) target.style.display = 'block';

            // Add active style to the clicked button
            btn.classList.add('active-btn');
        }