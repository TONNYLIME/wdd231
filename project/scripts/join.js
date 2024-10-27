openButton1.addEventListener('click', () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = 'This Membership is free!'
    
  });
  openButton2.addEventListener('click', () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = 'Entry fee is ksh 1000 per month'
                      ''
    
  });
  openButton3.addEventListener('click', () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = 'Entry fee is ksh2000'
    
  });
  
  openButton4.addEventListener('click', () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = 'Entry fee is ksh5000'
    
  });
  
  
  // Close button closes the dialog
  closeButton.addEventListener('click', () => {
    dialogBox.close();
  });
  document.getElementById("timestamp").innerHTML = Date.now(); 