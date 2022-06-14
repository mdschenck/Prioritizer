const newPostHandler = async (evt) => {
    evt.preventDefault();
    const proposal = document.querySelector('#proposal-text').value;


    await fetch('/api/proposals', {
      method: 'POST',
      body: JSON.stringify({
        proposal,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    document.location.replace('/proposals');
  };

  
  //   await fetch('/api/proposals', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       proposal,
  //     }),
  
  //     headers: { 'Content-Type': 'application/json' },
 
  //   });
  
  //   document.location.replace('/proposal');
  // };
  
  document
    .querySelector('#create-proposal-form')
    .addEventListener('submit', newPostHandler);