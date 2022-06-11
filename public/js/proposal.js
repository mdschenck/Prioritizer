const newPostHandler = async (evt) => {
    evt.preventDefault();
    const content = document.querySelector('#proposal-text').value;
  
    await fetch('/api/proposals', {
      method: 'POST',
      body: JSON.stringify({
        content,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    document.location.replace('/proposal');
  };
  
  document
    .querySelector('#create-proposal-button')
    .addEventListener('submit', newPostHandler);